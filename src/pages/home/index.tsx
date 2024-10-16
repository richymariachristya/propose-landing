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
import IdpLogo from '../../../public/images/idp-logo-full.svg'
import FooterComponent from "@/components/FooterComponent"

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

const carouselImage = [
    "https://images.ctfassets.net/8bbwomjfix8m/6zjBSfh46MZ3Zbyrdak9ux/598514dcd1ac9ebccfab66d3c59af238/Study-in-Canada.jpg",
    "https://images.ctfassets.net/8bbwomjfix8m/5Cvk9MhZe3JF9l6giwWmVH/fa3f5b44effbf2c403204bfffcbf81e1/Ireland_2.jpg",
    "https://images.ctfassets.net/8bbwomjfix8m/2CYqmyVmRIAh3o6rmQt8dK/fa6df88d95385ffb8ad0b1acdae99e68/Australia.jpg",
    "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/01082927/partha-narasimhan-x0NvSdPk404-unsplash-1600x900.jpg",
]

const StudentDetails = {
    studentName: "Neil",
    studentProposeCourse: "Bachelor of Medical Laboratory Science",
}

const OfferCountdownProp = {
    offercountHour: 24,
    offercountMin: 0,
    offercountSec: 20,
}

const DialogComponentProp = {
    isOpen: true,
    onClose: () => {},
    title: "",
    children: "",
}

export default function ProposeLandingPage() {
    const [data, setData] = useState<any>()
    const router = useRouter()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)
    const updatedDialogProp = {
        ...DialogComponentProp,
        isOpen: openDialog,
        onClose: closeDialog,
    }

    const footerData = {
        additionalResources:
            "Links to the university's social media, blog, and other relevant pages",
        contactInformation: "Phone number, and office hours",
    }

    const getUserProfileDetails = async () => {
        try {
            let payload = {
                token: "xq8BRGJTnSpjpAO3Ka84zpyrtWFFr94W5Nvkz98Dbs9SwJS6FxrZWG1dZuyGa8NvjJybRLBoQlmZNh/DObQdNA==",
                campaign_id: "campg-1",
            }
            await getStudentInfo(payload).then((res: any) => {
                setData(res.message)
                console.log(data)
            })
        } catch (error) {
            console.error("Error fetching user profile results", error)
        }
    }
    useEffect(() => {
        // if (router.isReady) {
        //     const { token, campaign_id } = router.query;
        //     console.log(token, campaign_id)
        //   }
        getUserProfileDetails()
    }, [])
    return (
        <div>
            <div className="hidden">
                {/* <DialogComponent 
              isOpen = {updatedDialogProp.isOpen}
              onClose = {updatedDialogProp.onClose}
              title = {DialogComponentProp.title}
              children = {DialogComponentProp.children}
              /> */}
                <OfferTimelineComponent
                    institutionLogo={data?.institution_logo_url}
                    institutionName={institutionProp.institutionName}
                    institutionSite={institutionProp.institutionSite}
                    offercountHour={OfferCountdownProp.offercountHour}
                    offercountMin={OfferCountdownProp.offercountMin}
                    offercountSec={OfferCountdownProp.offercountSec}
                />
                <HeroBannerComponent
                    studentName={data?.student_welcome_text}
                    studentProposeCourse={data?.course_name}
                    instituteDestination={institutionProp.instituteDestination}
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
                                    institutionProp.instituteVideoImage
                                }
                                instituteVideoUrl={
                                    institutionProp.instituteVideoUrl
                                }
                            />
                        </div>
                        <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
                            <AboutComponent
                                institutionName={
                                    institutionProp.institutionName
                                }
                                courseName={institutionProp.instituteCourseName}
                                instituteSmallLogo={
                                    institutionProp.institutionSmallLogo
                                }
                                worldRanking={
                                    institutionProp.instituteWorldRanking
                                }
                                startDate={institutionProp.instituteStartDate}
                                entryScore={institutionProp.instituteEntryScore}
                                studyLevel={institutionProp.instituteStudyLevel}
                                location={institutionProp.instituteLocation}
                                cost={institutionProp.instituteCourseCost}
                            />
                        </div>
                    </div>
                </div>
                <CarouselComponent CarouselImage={carouselImage} />
                <RegardsComponent institutionName={data?.institution_name} />
                <FooterComponent footerResponse={footerData}></FooterComponent>
            </div>
            <div>
                <div className="container w-full bg-white-50 mx-auto">
                    <div className="flex w-[165px] h-[40px] mt-[50px]">
                        <Image src={IdpLogo} alt="Idp Logo" />
                    </div>
                    <div className="w-[600px] h-[auto] mx-auto">
                        <div className="text-center flex flex-col gap-4">
                            <h1 className="font-farro font-bold heading1">Congratulations!!!</h1>
                            <h6 className="font-farro italic para">You are One step Closer to studying your dream cours﻿e</h6>
                            <p className="mt-6 para-lg">Hey <span className="para-lg font-bold">{StudentDetails.studentName}</span></p>
                            <p className="text-center"> Based on the details you gave us, you are eligible for the {institutionProp.instituteCourseName} {institutionProp.institutionName} of {institutionProp.instituteLocation}. They would like to give you an offer in principle (ID No. OIP-20240327-280990) for this course starting Semester 1 (September), 2024 on 16.09.2024 at the City Campus with some additional conditions. What is an "offer in principle"? An offer in principle is an indication from the institution that they're interested in your application, based on the information you've supplied.It is not a formal offer of admission to this university. A formal offer may have conditions attached.</p>
                        </div>
                        <div>
                        {/* checkbox  */}
                        <div className="flex justify-start m-2 mb-6">
                            <input
                                id="Checkbox type 1"
                                type="checkbox"
                                className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-4"
                            />
                            <label htmlFor="disabled" className="para font-inter">
                                Checkbox type 1
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="my-4 w-full flex justify-center mt-[100px]">
                        <button className="btn border bg-primary-400 text-white-50 w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400">
                            Get offer in principle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
