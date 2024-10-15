import Image from "next/image"
import TrendingUpIcon from "../../../public/icons/trendingUp-black-arrow.svg"
import GraduationCapIcon from "../../../public/icons/academic-black-cap.svg"
import LocationPinIcon from "../../../public/icons/location-marker-black.svg"
import CalendarIcon from "../../../public/icons/calendar-black-icon.svg"
import EntryTickIcon from "../../../public/icons/check-circle-black.svg"
import CreditCard from "../../../public/icons/creditCard-black.svg"
import blueRightArrow from "../../../public/icons/blue-right-arrow.svg"

interface AboutComponentProp {
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
                            className="hover:underline no-underline text-primary-400 small font-inter font-semibold inline-flex"
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
                                {worldRanking}st
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
                                IELTS{entryScore}
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
                    <button className="btn text-primary-400 border border-primary-400 w-[242px] h-[40px]">
                        Not interested
                    </button>
                    <button className="btn bg-primary-400 text-white w-[242px] h-[40px]">
                        Get offer in principle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
