import OfferTimelineComponent from "@/components/OfferTimelineComponent"
import HeroBannerComponent from "@/components/HeroBannerComponent"
import VideoComponent from "@/components/VideoComponent"
import { useEffect, useState } from "react"
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

const StudentDetails = {
    studentName: "Neil",
    studentProposeCourse: "Bachelor of Medical Laboratory Science",
}

const footerData = {
    additionalResources:
        "Links to the university's social media, blog, and other relevant pages",
    contactInformation: "Phone number, and office hours",
}
export default function ProposeLandingPage() {
    const [data, setData] = useState<any>()
    const router = useRouter()
    const { campaignId, token } = router.query
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [displayProposalLandingPage, setProposalStatus] = useState(false) // State for dialog title
    const [dialogContent, setDialogContent] = useState("")
    const openDialog = (content: string) => {
        setDialogContent(content) // Set the content
        setIsDialogOpen(true) // Open the dialog
    }
    const closeDialog = () => setIsDialogOpen(false)
    const [loading, setLoading] = useState(true)
    const getUserProfileDetails = async () => {
        try {
            setLoading(true)
            await getStudentInfo(token).then((res: any) => {
                setLoading(false)
                setData(res.message)
                setProposalStatus(
                    res.message.proposal_status === "none" ? false : true
                )
            })
        } catch (error) {
            setLoading(false)

            console.error("Error fetching user profile results", error)
        }
    }
    useEffect(() => {
        if (campaignId && token) {
            getUserProfileDetails()
        }
    }, [campaignId, token])
    return (
        <>
            {loading && <Loader></Loader>}
            {data && (
                <>
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
                            <div className="container flex lg:flex-row mx-auto md:flex-col md:gap-10">
                                <div className="flex flex-col items-center lg:w-1/2 md:w-full gap-4 lg:py-10 md:py-4">
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
                                <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
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
                            <div className="text-center flex flex-col gap-4">
                                <h1 className="font-farro font-bold heading1">
                                    Oops! It looks like your proposal pa﻿ge has
                                    expired.
                                </h1>

                                <p className="mt-6 para-lg">
                                    Hey{" "}
                                    <span className="para-lg font-bold">
                                        {StudentDetails.studentName}
                                    </span>
                                </p>
                                <p className="text-center">
                                    {" "}
                                    To maintain the most accurate and relevant
                                    information, proposals are only available
                                    for a limited time.
                                </p>
                            </div>
                        </div>
                        <div className="my-4 w-full flex justify-center mt-[100px]">
                            <button className="btn border bg-primary-400 text-white-50 w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400">
                                Submit
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
