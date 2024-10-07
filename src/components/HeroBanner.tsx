import Image  from "next/image";

interface institutionProp {
    instituteVideoImage: string,
    instituteVideoUrl: string,
    institutionName:string,
    instituteDestination:string
}

interface StudentInfoProp extends institutionProp{
    studentName: string,
    studentProposeCourse: string
}

const HeroBanner = ({instituteVideoImage,instituteVideoUrl,institutionName,instituteDestination,studentName,studentProposeCourse }:StudentInfoProp) => {
  return (
    <div className='bg-primary400 mx-auto'>
        <div className='max-w-container flex lg-flex-row flex-col'>
            <div>
                <Image src={instituteVideoImage} alt={institutionName} className="" width="600" height="407"/>
                {/* <video className="object-cover w-full h-full" width="600" height="407" controls>
                    <source src={instituteVideoUrl} type="video/mp4" /> 
                    Your browser does not support the video tag.
                </video> */}
            </div>
            <div>
                <h3>Hi {studentName}</h3>
                <p>{studentProposeCourse}</p>
                <p>{institutionName}, {instituteDestination}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner