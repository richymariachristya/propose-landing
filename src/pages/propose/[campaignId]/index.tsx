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
                    res.message.proposal_status === "Accepted" ||
                        res.message.proposal_status === "Rejected"
                        ? false
                        : true
                )
            })
        } catch (error) {
            setLoading(false)

            console.error("Error fetching user profile results", error)
        }
    }
    useEffect(() => {
        if (campaignId && token) {
            console.log(campaignId)
            getUserProfileDetails()
        }
    }, [campaignId, token])
    return (
        <>
            {loading && <Loader></Loader>}
            {displayProposalLandingPage}
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
