import OfferTimelineComponent from "@/components/OfferTimelineComponent"
import HeroBannerComponent from "@/components/HeroBannerComponent"
import VideoComponent from "@/components/VideoComponent"
import { useContext, useEffect, useState } from "react"
import { getStudentInfo } from "@/service/api-service"
import DialogComponent from "@/components/DialogComponent"
import CarouselComponent from "@/components/CarouselComponent"
import RegardsComponent from "@/components/RegardsComponent"
import AboutComponent from "@/components/AboutComponent"
import { useRouter } from "next/router"
import Image from "next/image"
import IdpLogo from "../../../../public/images/idp-logo-full.svg"
import FooterComponent from "@/components/FooterComponent"
import Loader from "@/components/loader"
import { useContextData } from "@/service/dataContext"

const institutionProp = {
    institutionLogo: "/images/unisq-logo.svg",
    institutionSmallLogo: "/images/ins-logo-small.png",
    institutionName: "University of Southern Queensland",
    institutionSite: "https://www.unisq.edu.au/",
    instituteVideoImage: "/images/video-image.png",
    instituteVideoUrl:
        "https://videos.ctfassets.net/8bbwomjfix8m/7lraOsI97RgFJk4cqQyXdP/11e4e785023049565bde19c3f062404d/Video_-1_Why_study_abroad.mp4",
    instituteDestination: "Australia",
    instituteCourseName: "Course name",
    instituteWorldRanking: 101,
    instituteStartDate: "Jan 30 2024",
    instituteEntryScore: 6.5,
    instituteStudyLevel: "Masters degree",
    instituteLocation: "Birmingham, UK",
    instituteCourseCost: "£29,000",
}

const footerData = {
    additionalResources:
        "Links to the university's social media, blog, and other relevant pages",
    contactInformation: "Phone number, and office hours",
}
export default function ProposeLandingPage() {
    const [data, setData] = useState<any>()
    const router = useRouter()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [displayProposalLandingPage, setProposalStatus] = useState(false) // State for dialog title
    const [dialogContent, setDialogContent] = useState("")
    const [CampaignId, setCampaignId] = useState("")
    const openDialog = (content: string) => {
        setDialogContent(content) // Set the content
        setIsDialogOpen(true) // Open the dialog
    }
    const closeDialog = () => setIsDialogOpen(false)
    const [loading, setLoading] = useState(true)
    const { setValue } = useContextData()
    const getUserProfileDetails = async (tokens: any) => {
        try {
            setLoading(true)
            // await getStudentInfo(tokens).then((res: any) => {
            setLoading(false)
            let res = {
                message: {
                    proposal_id: "propose-20240930-1",
                    student_uuid: "96cab4c6-2ad8-4076-bc20-174a33c2053c",
                    course_id: "PRG-AU-00063738",
                    campaign_id: "campg-1",
                    institution_logo_url:
                        "https://www.unisq.edu.au/Content/USQ/Charlie/Images/unisq-logo.svg",
                    institution_id: "IID-AU-001",
                    institution_name: "RMIT Univeristy",
                    institution_representative_name: "Propose Team",
                    student_welcome_text: "Hari",
                    course_name: "Msc Bunised analyises",
                    proposal_expiry_date: "2024-10-28",
                    course_details: [
                        {
                            institution_logo_url: "",
                            course_name: "Msc Bunised analyises",
                            institution_name: "RMIT Univeristy",
                            rank: "101st",
                            study_level: "Masters degree",
                            location: "Birmingham, UK",
                            start_date: "jan 30, 2024",
                            entry_score: "IELTS 6.5",
                            cost: "£29,000",
                        },
                    ],
                    carousel_images: [
                        "https://images.ctfassets.net/8bbwomjfix8m/6zjBSfh46MZ3Zbyrdak9ux/598514dcd1ac9ebccfab66d3c59af238/Study-in-Canada.jpg",
                        "https://images.ctfassets.net/8bbwomjfix8m/5Cvk9MhZe3JF9l6giwWmVH/fa3f5b44effbf2c403204bfffcbf81e1/Ireland_2.jpg",
                        "https://images.ctfassets.net/8bbwomjfix8m/2CYqmyVmRIAh3o6rmQt8dK/fa6df88d95385ffb8ad0b1acdae99e68/Australia.jpg",
                        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/01082927/partha-narasimhan-x0NvSdPk404-unsplash-1600x900.jpg",
                    ],
                    why_this_course:
                        "We noticed you've been exploring [Course X] and [University Y]. Based on your interest, we believe [Course Z] could be a perfect match for you. It aligns well with your previous searches and has a strong reputation in [subject field]",
                    ai_course_text:
                        "Since you've previously applied to [University A] for [Course B], we thought you'd be interested in [Course C] at [University D]. This course offers similar benefits but with a stronger focus on [specific area], making it a great alternative.",
                    core_proposal_text: "core_proposal_text",
                    is_active: true,
                    proposal_status: "Awaiting",
                    proposal_link:
                        "https://new.dev.idp.com/propose/campg-1/?token=xq8BRGJTnSpjpAO3Ka84zpyrtWFFr94W5Nvkz98Dbs9SwJS6FxrZWG1dZuyGa8NvjJybRLBoQlmZNh/DObQdNA==",
                    created_date: "2024-10-07T06:38:01.001Z",
                    updated_date: "2024-10-07T06:38:01.001Z",
                },
            }
            setData(res.message)
            setProposalStatus(
                res.message.proposal_status === "Accepted" ||
                    res.message.proposal_status === "Rejected"
                    ? false
                    : true
            )
            // })
        } catch (error) {
            setLoading(false)
            console.error("Error fetching user profile results", error)
        }
    }
    useEffect(() => {
        if (router.isReady && router.query) {
            const pathSegments = window.location.pathname.split("/")
            const extractedCampaignId = pathSegments[2] // Assuming it's the third segment
            setCampaignId(extractedCampaignId)
            getUserProfileDetails(router.query.token)
        }
    }, [router.isReady])

    const navigateToCongrats = () => {
        setValue("camp", CampaignId)
        setValue("token", router.query.token)
        router.push(`/proposal/success`)
    }
    return (
        <>
            {loading && <Loader></Loader>}
            {data && (
                <>
                    <button onClick={navigateToCongrats}>
                        Go to Congrats Page
                    </button>
                    <div className={displayProposalLandingPage ? "" : "hidden"}>
                        {isDialogOpen && (
                            <DialogComponent
                                isOpen={isDialogOpen}
                                onClose={closeDialog}
                                // title="sss"
                                children={dialogContent}
                            />
                        )}
                        {data && (
                            <OfferTimelineComponent
                                institutionLogo={data?.institution_logo_url}
                                institutionName={
                                    institutionProp.institutionName
                                }
                                institutionSite={
                                    institutionProp.institutionSite
                                }
                                expirydate={data?.proposal_expiry_date}
                            />
                        )}
                        <HeroBannerComponent
                            studentName={data?.student_name}
                            studentProposeCourse={data?.course_name}
                            instituteDestination={
                                institutionProp.instituteDestination
                            }
                            institutionName={data?.institution_name}
                            aiGeneratedContent={data?.why_this_course}
                        />
                        <div className="">
                            <div className="container flex md:flex-row mx-auto flex-col gap-[12px] md:gap-[40px]">
                                <div className="flex flex-col items-center md:w-1/2 w-full px-[16px] pt-[16px] h-[230px] md:h-[374px] md:py-[32px] md:px-[0px]">
                                    <VideoComponent
                                        institutionName={
                                            institutionProp.institutionName
                                        }
                                        instituteVideoImage={
                                            data?.institution_video_image
                                        }
                                        instituteVideoUrl={
                                            institutionProp.instituteVideoUrl
                                        }
                                    />
                                </div>
                                <div className="flex flex-col items-center md:w-1/2 w-full md:justify-center">
                                    {data &&
                                        data?.course_details.map(
                                            (res: any, index: any) => (
                                                <AboutComponent
                                                    key={index}
                                                    openDialog={openDialog}
                                                    closeDialog={closeDialog}
                                                    institutionName={
                                                        res.institution_name
                                                    }
                                                    courseName={res.course_name}
                                                    instituteSmallLogo={
                                                        data.institution_logo_url
                                                    }
                                                    worldRanking={res.rank}
                                                    startDate={res.start_date}
                                                    entryScore={res.entry_score}
                                                    studyLevel={res.study_level}
                                                    location={res.location}
                                                    cost={res.cost}
                                                />
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                        {data && (
                            <CarouselComponent
                                CarouselImage={data?.carousel_images}
                            />
                        )}
                        <RegardsComponent
                            institutionName={data?.institution_name}
                        />
                        <FooterComponent
                            closeDialog={closeDialog}
                            openDialog={openDialog}
                            footerResponse={footerData}></FooterComponent>
                    </div>
                    <div
                        className={
                            !displayProposalLandingPage
                                ? "container w-full bg-white-50 mx-auto"
                                : "hidden"
                        }>
                        <div className="flex w-[165px] h-[40px] mt-[50px]">
                            <Image src={IdpLogo} alt="Idp Logo" />
                        </div>
                        <div className="w-[600px] h-[auto] mx-auto">
                            {data?.proposal_status === "Accepted" && (
                                <div className="text-center flex flex-col gap-4">
                                    <h1 className="font-farro font-bold heading1">
                                        You have already accepted the Proposal
                                    </h1>
                                    <p className="mt-6 para-lg">
                                        Hey{" "}
                                        <span className="para-lg font-bold">
                                            {data?.student_name}
                                        </span>
                                    </p>
                                    <p className="text-center">
                                        {" "}
                                        Expect a call from our counsellor soon !
                                    </p>
                                </div>
                            )}
                            {data?.proposal_status !== "Accepted" && (
                                <div className="text-center flex flex-col gap-4">
                                    {data?.proposal_status === "Rejected" && (
                                        <>
                                            <h1 className="font-farro font-bold heading1">
                                                Welcome back! Last time you
                                                declined the proposal
                                            </h1>
                                            <p className="text-center">
                                                {" "}
                                                Welcome back! Last time, you
                                                declined the proposal. If you
                                                have any questions or would like
                                                to discuss options, feel free to
                                                connect with a counselor."
                                            </p>
                                        </>
                                    )}
                                    {data?.proposalStatus ===
                                        "Unsubscribed" && (
                                        <>
                                            <h1 className="font-farro font-bold heading1">
                                                Welcome back! You previously
                                                unsubscribed from communications
                                            </h1>{" "}
                                            <p className="text-center">
                                                {" "}
                                                Welcome back! You previously
                                                unsubscribed from
                                                communications. Would you like
                                                to update your preferences or
                                                connect with a counselor?
                                            </p>
                                        </>
                                    )}
                                    {data?.proposalStatus === "Expired" && (
                                        <>
                                            <h1 className="font-farro font-bold heading1">
                                                Oops! It looks like your
                                                proposal pa﻿ge has expired.
                                            </h1>{" "}
                                            <p className="text-center">
                                                {" "}
                                                To maintain the most accurate
                                                and relevant information,
                                                proposals are only available for
                                                a limited time.
                                            </p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="my-4 w-full flex justify-center mt-[100px]">
                            <button className="btn border bg-primary-400 text-white-50 w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400">
                                Close
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
