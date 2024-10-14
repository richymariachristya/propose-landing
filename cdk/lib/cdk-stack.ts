import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as s3 from "aws-cdk-lib/aws-s3"
import {
    PolicyStatement,
    ServicePrincipal,
    Policy,
    Effect,
    AnyPrincipal,
    Role,
} from "aws-cdk-lib/aws-iam"
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment"
import { Vpc, Subnet, SecurityGroup } from "aws-cdk-lib/aws-ec2"
import { MyLogGroupArm } from "./logGroupArn"
import {
    Function,
    Runtime,
    Code,
    InvokeMode,
    FunctionUrlAuthType,
    Architecture,
    Tracing,
} from "aws-cdk-lib/aws-lambda"
import * as logs from "aws-cdk-lib/aws-logs"

export class CdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // Create an S3 bucket for static assets
        const myBucket = new s3.Bucket(this, "NewREWebSiteBucket", {
            bucketName: "dev-propose-ap-southeast-1-bucket-v1",

            // Replace with your desired name
            enforceSSL: true,
            versioned: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // Optional: Set removal policy
        })
        //cloudfront readonly policy
        const allowCloudFrontReadOnlyPolicy = new PolicyStatement({
            actions: ["s3:GetObject"],
            principals: [new ServicePrincipal("cloudfront.amazonaws.com")],
            effect: Effect.ALLOW,
            conditions: {
                StringEquals: {
                    "AWS:SourceArn": `arn:aws:cloudfront::${
                        cdk.Stack.of(this).account
                    }:distribution/E2FAH4ILPTZHRV`,
                },
            },
            resources: [`${myBucket.bucketArn}/*`],
        })

        const secureTransportS3PolicyStatement = new PolicyStatement({
            actions: ["s3:*"],
            principals: [new AnyPrincipal()],
            effect: Effect.DENY,
            conditions: {
                Bool: {
                    "aws:SecureTransport": "false",
                },
            },
            resources: [`${myBucket.bucketArn}/*`, `${myBucket.bucketArn}`],
        })

        myBucket.addToResourcePolicy(secureTransportS3PolicyStatement)
        myBucket.addToResourcePolicy(allowCloudFrontReadOnlyPolicy)

        cdk.Tags.of(myBucket).add("ApplicationService", "SS Channel: Propose")
        cdk.Tags.of(myBucket).add("Classification", "sensitive")
        cdk.Tags.of(myBucket).add(
            "Name",
            "dev-propose-ap-southeast-1-bucket-v1"
        )
        cdk.Tags.of(myBucket).add("ProjectName", "Propose")

        // Upload files to the S3 bucket
        new s3deploy.BucketDeployment(this, "DeployNextjsAssets", {
            sources: [s3deploy.Source.asset("../.open-next/assets")], //s3deploy.Source.asset("../.open-next/cache")
            destinationBucket: myBucket,
        })

        const vpc = Vpc.fromLookup(this, "ExistingVpc", {
            // region: "ap-south-1",
            tags: { Name: "StudentPlacement-dev" },
        })
        const subnet1 = Subnet.fromSubnetId(
            this,
            "subnet1",
            "subnet-0bd357901e2c80dad"
        )
        const subnet2 = Subnet.fromSubnetId(
            this,
            "subnet2",
            "subnet-0bf06a7c7cd87653a"
        )
        const subnet3 = Subnet.fromSubnetId(
            this,
            "subnet3",
            "subnet-0796b367bb0e503b5"
        )

        const vpcConfig = Vpc.fromVpcAttributes(this, "VPC", {
            vpcId: vpc.vpcId,
            availabilityZones: cdk.Fn.getAzs(),
            privateSubnetIds: [
                subnet1.subnetId,
                subnet2.subnetId,
                subnet3.subnetId,
            ],
            privateSubnetRouteTableIds: [
                subnet1.routeTable.routeTableId,
                subnet2.routeTable.routeTableId,
                subnet3.routeTable.routeTableId,
            ],
        })

        const securityGroup = SecurityGroup.fromLookupByName(
            this,
            "SG",
            `dev-integration-security-group-applications`,
            vpc
        )

        const serverFunctionName = `dev_propose_student_server_function`

        const myService = new MyLogGroupArm()

        const cloudwatchPolicyStatement: any = myService.setLogGroup(
            this.region,
            this.account,
            serverFunctionName
        )

        const ec2XrayPolicyStatement = new PolicyStatement({
            effect: Effect.ALLOW,
            actions: [
                "ec2:CreateNetworkInterface",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DeleteNetworkInterface",
                "ec2:DescribeInstances",
                "ec2:AttachNetworkInterface",
                "ec2:DescribeVpcs",
                "xray:PutTraceSegments",
                "xray:PutTelemetryRecords",
                "xray:GetSamplingRules",
                "xray:GetSamplingTargets",
                "xray:GetSamplingStatisticSummaries",
            ],
            resources: ["*"],
        })

        const S3BucketStatement = new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ["s3:GetObject", "s3:PutObject", "s3:ListObjects"],
            resources: [`${myBucket.bucketArn}/*`],
        })

        // Create the IAM policy
        const myPolicy = new Policy(this, "MyPolicy", {
            policyName: `${serverFunctionName}-permission`,
            statements: [cloudwatchPolicyStatement, ec2XrayPolicyStatement], //, S3BucketStatement
        })

        cdk.Tags.of(myPolicy).add("ApplicationService", "SS Channel: Propose")
        cdk.Tags.of(myPolicy).add("Classification", "sensitive")
        cdk.Tags.of(myPolicy).add("Name", `${serverFunctionName}-permission`)
        cdk.Tags.of(myPolicy).add("ProjectName", "Propose")

        // Create the IAM role
        const myRole = new Role(this, "MyRole", {
            roleName: `${serverFunctionName}-exec-role`,
            assumedBy: new ServicePrincipal("lambda.amazonaws.com"), // or any other service that should assume this role
        })

        cdk.Tags.of(myRole).add("ApplicationService", "SS Channel: Propose")
        cdk.Tags.of(myRole).add("Classification", "sensitive")
        cdk.Tags.of(myRole).add("Name", `${serverFunctionName}-exec-role`)
        cdk.Tags.of(myRole).add("ProjectName", "Propose")

        // Attach the policy to the role
        myPolicy.attachToRole(myRole)

        //Create Lambda function
        const nextjsLambda = new Function(this, "NextjsLambda", {
            functionName: serverFunctionName,
            runtime: Runtime.NODEJS_20_X,
            code: Code.fromAsset("../.open-next/server-functions/default"), // Directory containing your Next.js application code
            handler: "index.handler",
            timeout: cdk.Duration.seconds(30), // Adjust as needed
            memorySize: 1024, // Adjust as needed
            environment: {
                NEXT_PUBLIC_S3_BUCKET: myBucket.bucketName, // Make S3 bucket name accessible in Lambda
                //CACHE_BUCKET_NAME: myBucket.bucketName, // Make S3 bucket name accessible in Lambda
                // CACHE_BUCKET_KEY_PREFIX:".open-next/cache",
                // CACHE_BUCKET_REGION:`${process.env.AWS_REGION}`,
                // REVALIDATION_QUEUE_URL:"REVALIDATION_QUEUE_URL",
                // REVALIDATION_QUEUE_REGION:`${process.env.AWS_REGION}`
            },
            architecture: Architecture.ARM_64,
            role: myRole,
            vpc: vpcConfig,
            securityGroups: [securityGroup],
            tracing: Tracing.ACTIVE,
        })

        cdk.Tags.of(nextjsLambda).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(nextjsLambda).add("Classification", "sensitive")
        cdk.Tags.of(nextjsLambda).add("Name", serverFunctionName)
        cdk.Tags.of(nextjsLambda).add("ProjectName", "Propose")

        const propose_website_server_lambda_log = new logs.LogGroup(
            this,
            "propose_website_server_lambda_1_log",
            {
                logGroupName: `/aws/lambda/dev_propose_student_server_function`,
                retention: logs.RetentionDays.FIVE_DAYS,
                removalPolicy: cdk.RemovalPolicy.DESTROY,
            }
        )

        cdk.Tags.of(propose_website_server_lambda_log).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(propose_website_server_lambda_log).add(
            "Classification",
            "sensitive"
        )
        cdk.Tags.of(propose_website_server_lambda_log).add(
            "Name",
            "propose_website_server_lambda_1_log"
        )
        cdk.Tags.of(propose_website_server_lambda_log).add(
            "ProjectName",
            "Propose"
        )

        const imageFunctionName = `dev_propose_student_image_function`

        const myImageService = new MyLogGroupArm()

        const cloudwatchImagePolicyStatement: any = myImageService.setLogGroup(
            this.region,
            this.account,
            imageFunctionName
        )
        // Create the IAM policy
        const myImagePolicy = new Policy(this, "MyImagePolicy", {
            policyName: `${imageFunctionName}-permission`,
            statements: [
                cloudwatchImagePolicyStatement,
                ec2XrayPolicyStatement,
            ],
        })

        cdk.Tags.of(myImagePolicy).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(myImagePolicy).add("Classification", "sensitive")
        cdk.Tags.of(myImagePolicy).add(
            "Name",
            `${imageFunctionName}-permission`
        )
        cdk.Tags.of(myImagePolicy).add("ProjectName", "Propose")

        // Create the IAM role
        const myImageRole = new Role(this, "MyImageRole", {
            roleName: `${imageFunctionName}-exec-role`,
            assumedBy: new ServicePrincipal("lambda.amazonaws.com"), // or any other service that should assume this role
        })

        cdk.Tags.of(myImageRole).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(myImageRole).add("Classification", "sensitive")
        cdk.Tags.of(myImageRole).add("Name", `${imageFunctionName}-exec-role`)
        cdk.Tags.of(myImageRole).add("ProjectName", "Propose")

        // Attach the policy to the role
        myImagePolicy.attachToRole(myImageRole)

        //Create Lambda function for image-optimization
        const nextjsimageLambda = new Function(this, "NextjsImageLambda", {
            functionName: imageFunctionName,
            runtime: Runtime.NODEJS_20_X,
            code: Code.fromAsset("../.open-next/image-optimization-function"), // Directory containing your Next.js application code
            handler: "index.handler",
            timeout: cdk.Duration.seconds(30), // Adjust as needed
            memorySize: 1024, // Adjust as needed
            environment: {
                BUCKET_NAME: myBucket.bucketName, // Make S3 bucket name accessible in Lambda
                BUCKET_KEY_PREFIX: "_assets",
            },
            architecture: Architecture.ARM_64,
            role: myImageRole,
            vpc: vpcConfig,
            securityGroups: [securityGroup],
            tracing: Tracing.ACTIVE,
        })

        cdk.Tags.of(nextjsimageLambda).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(nextjsimageLambda).add("Classification", "sensitive")
        cdk.Tags.of(nextjsimageLambda).add(
            "Name",
            `dev_propose_student_image_function`
        )
        cdk.Tags.of(nextjsimageLambda).add("ProjectName", "Propose")

        const propose_website_image_lambda_log = new logs.LogGroup(
            this,
            "propose_website_image_lambda_1_log",
            {
                logGroupName: `/aws/lambda/dev_propose_student_image_function`,
                retention: logs.RetentionDays.FIVE_DAYS,
                removalPolicy: cdk.RemovalPolicy.DESTROY,
            }
        )
        // Add tags to the log group
        cdk.Tags.of(propose_website_image_lambda_log).add(
            "ApplicationService",
            "SS Channel: Propose"
        )
        cdk.Tags.of(propose_website_image_lambda_log).add(
            "Classification",
            "sensitive"
        )
        cdk.Tags.of(propose_website_image_lambda_log).add(
            "Name",
            "propose_website_image_lambda_1_log"
        )
        cdk.Tags.of(propose_website_image_lambda_log).add(
            "ProjectName",
            "Propose"
        )

        const nextjsLambdaUrl = nextjsLambda.addFunctionUrl({
            authType: FunctionUrlAuthType.AWS_IAM,
            invokeMode: InvokeMode.BUFFERED,
        })

        /*Newly added configuration*/
        nextjsLambda.addPermission("AllowCloudFrontPrincipalServerLambda", {
            principal: new ServicePrincipal("cloudfront.amazonaws.com"),
            action: "lambda:InvokeFunctionUrl",
            sourceArn: `arn:aws:cloudfront::${
                cdk.Stack.of(this).account
            }:distribution/E2FAH4ILPTZHRV`,
            sourceAccount: cdk.Aws.ACCOUNT_ID,
            functionUrlAuthType: FunctionUrlAuthType.AWS_IAM,
        })

        nextjsimageLambda.addPermission("AllowCloudFrontPrincipalImageLambda", {
            principal: new ServicePrincipal("cloudfront.amazonaws.com"),
            action: "lambda:InvokeFunctionUrl",
            sourceArn: `arn:aws:cloudfront::${
                cdk.Stack.of(this).account
            }:distribution/E2FAH4ILPTZHRV`,
            sourceAccount: cdk.Aws.ACCOUNT_ID,
            functionUrlAuthType: FunctionUrlAuthType.AWS_IAM,
        })
        /*----------------------------------*/
        const nextjsImageLambdaUrl = nextjsimageLambda.addFunctionUrl({
            authType: FunctionUrlAuthType.AWS_IAM,
            invokeMode: InvokeMode.BUFFERED,
        })

        new cdk.CfnOutput(this, "LambdaFn-url", {
            value: nextjsLambdaUrl.url,
        })

        new cdk.CfnOutput(this, "LambdaFn-image-url", {
            value: nextjsImageLambdaUrl.url,
        })
    }
}
