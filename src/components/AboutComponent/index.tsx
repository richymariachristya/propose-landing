import Image from "next/image"
import TrendingUpIcon from "../../../public/icons/trendingUp-black-arrow.svg"
import GraduationCapIcon from "../../../public/icons/academic-black-cap.svg"
import LocationPinIcon from "../../../public/icons/location-marker-black.svg"
import CalendarIcon from "../../../public/icons/calendar-black-icon.svg"
import EntryTickIcon from "../../../public/icons/check-circle-black.svg"
import CreditCard from "../../../public/icons/creditCard-black.svg"
import blueRightArrow from "../../../public/icons/blue-right-arrow.svg"

interface AboutComponentProp {
    openDialog: any
    institutionName: string
    courseName: string
    instituteSmallLogo: string
    worldRanking: number
    startDate: string
    entryScore: number
    studyLevel: string
    location: string
    cost: string
}

const AboutComponent = ({
    openDialog,
    institutionName,
    courseName,
    instituteSmallLogo,
    worldRanking,
    startDate,
    entryScore,
    studyLevel,
    location,
    cost,
}: AboutComponentProp) => {
    // Title and content to pass to the Dialog
    const notInterestedContent = (
        <div className="w-[600px] h-[auto] mx-auto">
            <div className="text-center flex flex-col gap-4">
                <h1 className="font-farro font-bold heading1">
                    We are sorry to hear that
                </h1>
                <h6 className="font-farro italic para">
                    Thank you for letting us know. We’d appreciate it if you
                    could share a bit more about why you’re not interested in
                    this proposal. Your feedback helps us improve our offerings.{" "}
                </h6>
                <p className="mt-6 para-lg">
                    Hey{" "}
                    <span className="para-lg font-bold">
                        {/* {StudentDetails.studentName} */}
                    </span>
                </p>
                <p className="text-center">
                    Enabling students to choose applicable reason for their
                    rejection of proposal.
                </p>
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
                        Course not aligned with my interests
                    </label>
                </div>
            </div>
        </div>
    )
    const oipContent = (
        <div className="w-[600px] h-[auto] mx-auto">
            <div className="text-center flex flex-col gap-4">
                <h1 className="font-farro font-bold heading1">
                    Congratulations!!!
                </h1>
                <h6 className="font-farro italic para">
                    You are One step Closer to studying your dream cours﻿e
                </h6>
                <p className="mt-6 para-lg">
                    Hey{" "}
                    <span className="para-lg font-bold">
                        {/* {StudentDetails.studentName} */}
                    </span>
                </p>
                <p className="text-center">
                    {" "}
                    Based on the details you gave us, you are eligible
                    {/* for the {institutionProp.instituteCourseName}{" "}
                {institutionProp.institutionName} of{" "}
                {institutionProp.instituteLocation}. They would like */}
                    to give you an offer in principle (ID No.
                    OIP-20240327-280990) for this course starting Semester 1
                    (September), 2024 on 16.09.2024 at the City Campus with some
                    additional conditions. What is an "offer in principle"? An
                    offer in principle is an indication from the institution
                    that they're interested in your application, based on the
                    information you've supplied.It is not a formal offer of
                    admission to this university. A formal offer may have
                    conditions attached.
                </p>
            </div>
        </div>
    )
    return (
        <div className="container mx-auto">
            <h5 className="text-grey-300 font-farro font-bold mb-5">
                About the course
            </h5>
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg gap-5 flex flex-col">
                <div className="flex justify-between content-center">
                    <div className="flex gap-3 items-center">
                        <Image
                            className="rounded-md h-[56] w-[56]"
                            src={instituteSmallLogo}
                            alt={institutionName}
                            width={56}
                            height={56}
                        />
                        <p className="block text-para-lg text-grey-300 font-inter font-semibold">
                            {courseName}
                            <span className="block small text-grey-300 font-inter font-normal">
                                {institutionName}
                            </span>
                        </p>
                    </div>
                    <div className="flex">
                        <a
                            className="hover:underline no-underline text-primary-400 small font-inter font-semibold inline-flex items-center"
                            href="#">
                            View more{" "}
                            <Image
                                alt="right-arrow"
                                src={blueRightArrow}
                                width={20}
                                height={20}
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={TrendingUpIcon}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                THE World ranking
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {worldRanking}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={GraduationCapIcon}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                Study level
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {studyLevel}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={LocationPinIcon}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                Location
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {location}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={CalendarIcon}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                Starts
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {startDate}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={EntryTickIcon}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                Entry score
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {entryScore}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[170px]">
                        <div className="w-[24px] h-[24px]">
                            <Image
                                src={CreditCard}
                                width={24}
                                height={24}
                                alt="The World ranking"
                            />
                        </div>
                        <div>
                            <p className="x-small text-grey-900 font-medium">
                                Cost
                            </p>
                            <p className="x-small text-grey-900 font-normal">
                                {cost}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        className="btn text-primary-400 bg-white-50 border border-primary-400 w-[242px] h-[40px] hover:text-white-50 hover:bg-primary-400 "
                        onClick={() => openDialog(notInterestedContent)}>
                        Not interested
                    </button>
                    <button
                        className="btn border bg-primary-400 text-white-50 w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400"
                        onClick={() => openDialog(oipContent)}>
                        Get offer in principle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
