import OfferTimelineComponent from "@/components/OfferTimelineComponent"
import HeroBannerComponent from "@/components/HeroBannerComponent"
import VideoComponent from "@/components/VideoComponent"
import { useEffect, useState } from "react"
import { getStudentInfo } from "@/service/api-service"
import DialogComponent from "@/components/DialogComponent"
import CarouselComponent from "@/components/CarouselComponent"
import RegardsComponent from "@/components/RegardsComponent"
import AboutComponent from "@/components/AboutComponent"

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
    onClose:  () => {},
    title:"",
    children: ""
}

export default function ProposeLandingPage() {
    const [data, setData] = useState<any>()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)
    const updatedDialogProp = {
        ...DialogComponentProp,
        isOpen:openDialog,
        onClose:closeDialog
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
        getUserProfileDetails()
    }, [])
    return (
        <>
            {/* <div>
                <h1>Welcome to My Next.js App!</h1>
                <button onClick={openDialog}>Open Dialog</button>
                <Dialog
                    isOpen={isDialogOpen}
                    onClose={closeDialog}
                    title="My Dialog">
                    <p>This is a simple dialog box.</p>
                    <button onClick={closeDialog}>Close</button>
                </Dialog>
            </div> */}
            <DialogComponent 
              isOpen = {updatedDialogProp.isOpen}
              onClose = {updatedDialogProp.onClose}
              title = {DialogComponentProp.title}
              children = {DialogComponentProp.children}
              />
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
                            institutionName={institutionProp.institutionName}
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
                            institutionName={institutionProp.institutionName}
                            courseName={institutionProp.instituteCourseName}
                            instituteSmallLogo={
                                institutionProp.institutionSmallLogo
                            }
                            worldRanking={institutionProp.instituteWorldRanking}
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
        </>
    )
}
