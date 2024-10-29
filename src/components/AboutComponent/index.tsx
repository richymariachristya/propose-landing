import Image from "next/image"
import TrendingUpIcon from "../../../public/icons/trendingUp-black-arrow.svg"
import GraduationCapIcon from "../../../public/icons/academic-black-cap.svg"
import LocationPinIcon from "../../../public/icons/location-marker-black.svg"
import CalendarIcon from "../../../public/icons/calendar-black-icon.svg"
import EntryTickIcon from "../../../public/icons/check-circle-black.svg"
import CreditCard from "../../../public/icons/creditCard-black.svg"
import blueRightArrow from "../../../public/icons/blue-right-arrow.svg"
import closeButton from '../../../public/icons/close-icon.svg'

interface AboutComponentProp {
    openDialog: any
    closeDialog: any
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
    closeDialog,
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
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
            className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px] p-[5px] cursor-pointer"
            onClick={() => closeDialog()}>
                <Image 
                src={closeButton}
                alt="close" 
                className="w-[10px] h-[10px]" 
                width={10} 
                height={10}
                />
            </button>
            <div className="text-center flex flex-col">
                <h6 className="font-farro font-bold text-heading6 text-grey-300 mb-[12px]">
                    We're Sorry to Hear That
                </h6>
                <p className="font-inter text-small text-grey-300 mb-[24px] font-normal px-[20px]">
                    Thank you for letting us know. We'd appreciate it if you could share a bit more about why you're not interested in this proposal. Your feedback helps us improve our offerings.
                </p>
            </div>
            <div className="flex content-start flex-col">
                <p className="text-left font-inter font-semibold text-small mb-[12px]">
                    Reasons for Rejection
                </p>
                <p className="text-left font-inter font-normal text-x-small">
                    Select the applicable reasons:
                </p>
                <div className='flex  flex-col gap-[6px] mt-[24px]'>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Course not aligned with my interests
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            I have chosen another university
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Financial reasons / Can't afford it
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Location isn't suitable
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Prefer to study in a different country
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Scholarship offer insufficient
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            The course start date doesn't work for me
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            I'm no longer interested in studying
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                        />
                        <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                            Other personal reasons
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end mt-[16px]">
                <button
                    className="btn border bg-primary-400 text-white-50 w-auto h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400 cursor-pointer"
                    onClick={() => closeDialog()}>
                    Submit
                </button>
            </div>
        </div>
    )
    const oipContent = (
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
            className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px] p-[5px] cursor-pointer"
            onClick={() => closeDialog()}>
                <Image 
                src={closeButton}
                alt="close" 
                className="w-[10px] h-[10px]" 
                width={10} 
                height={10}
                />
            </button>
            <div className="text-center flex flex-col">
                <h6 className="font-farro font-bold text-heading6 text-grey-300 mb-[12px]">
                    We're Sorry to Hear That
                </h6>
                <form>
                    <div className="flex flex-col gap-[8px]">
                        {/* username */}
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-small font-semibold font-inter text-left text-neutral-400">
                            First name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset bg-neutral-50 border border-neutral-400">
                                    <input
                                        id="First name"
                                        name="First name"
                                        type="text"
                                        placeholder="Neil"
                                        autoComplete="First name"
                                        className="block flex-1 bg-neutral-50 py-[10px] pl-[12px] text-grey-300 placeholder:text-grey-300 text-small font-inter font-normal rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* last name  */}
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-small font-semibold font-inter text-left text-neutral-400">
                            Last name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset bg-neutral-50 border border-neutral-400">
                                    <input
                                        id="Last name"
                                        name="Last name"
                                        type="text"
                                        placeholder="Burges"
                                        autoComplete="Last name"
                                        className="block flex-1 bg-neutral-50 py-[10px] pl-[12px] text-grey-300 placeholder:text-grey-300 text-small font-inter font-normal rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Educational qualification */}
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-small font-semibold font-inter text-left text-neutral-600">
                            Educational Qualification
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset bg-neutral-50 border border-neutral-400">
                                    <input
                                        id="Type here"
                                        name="Type here"
                                        type="text"
                                        placeholder="Type here"
                                        autoComplete="Type here"
                                        className="block flex-1 bg-white-50 py-[10px] pl-[12px] text-grey-300 placeholder:text-grey-300 text-small font-inter font-normal rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Phone number */}
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-small font-semibold font-inter text-left text-neutral-600">
                            Phone number
                            </label>
                            <div className="mt-2 flex gap-[8px] w-full">
                                <div className="inline-flex bg-neutral-50 border border-neutral-400 rounded-md w-[80px]">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-code"
                                    className="py-[10px] pl-[12px] text-small font-inter font-normal rounded-md flex"
                                    >
                                        <option>+91</option>
                                        <option>+1</option>
                                        <option>+61</option>
                                    </select>
                                </div>
                                <div className="inline-flex bg-neutral-50 border border-neutral-400 rounded-md w-full">
                                    <input
                                        id="Type here"
                                        name="Type here"
                                        type="number"
                                        placeholder="Type here"
                                        autoComplete="Type here"
                                        className="block flex-1 bg-white-50 py-[10px] pl-[12px] text-grey-300 placeholder:text-grey-300 text-small font-inter font-normal rounded-md"
                                    />
                                </div>
                                
                            </div>
                        </div>
                        {/* Form title  */}
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-small font-semibold font-inter text-left text-neutral-600">
                            Form title
                            </label>
                            <div className="mt-2 flex flex-col gap-[6px]">
                                <div className="flex justify-start">
                                    <input
                                        id="Checkbox type 1"
                                        type="checkbox"
                                        className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                                    />
                                    <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                                        Lorem ipsum
                                    </label>
                                </div>
                                <div className="flex justify-start">
                                    <input
                                        id="Checkbox type 1"
                                        type="checkbox"
                                        className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                                    />
                                    <label htmlFor="disabled" className="font-inter font-normal text-grey-300 text-small">
                                        Lorem ipsum
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
                <div className="my-4 w-full flex justify-end mt-[16px]">
                    <button
                        className="btn border bg-primary-400 text-white-50 h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400"
                        onClick={() => closeDialog()}>
                        Get OIP
                    </button>
                </div>
            </div>
        </div>
    )
    return (
        <div className="container mx-auto py-[24px] md:px-[39px] px-[16px]">
            <h5 className="text-grey-300 font-farro font-bold mb-5">
                About the course
            </h5>
            <div className="p-[16px] bg-neutral-50 border border-neutral-200 rounded-lg gap-[16px] flex flex-col">
                <div className="flex justify-between md:content-center items-start">
                    <div className="flex gap-[16px] md:items-center flex-col md:flex-row items-start">
                        <Image
                            className="rounded-md h-[56px] w-[56px] bg-white-50 shadow-md"
                            src={instituteSmallLogo}
                            alt={institutionName}
                            width={56}
                            height={56}
                        />
                        <p className="block text-para-lg text-grey-300 font-inter font-semibold">
                            {courseName}
                            <span className="block text-small text-grey-300 font-inter font-normal">
                                {institutionName}
                            </span>
                        </p>
                    </div>
                    <div className="flex">
                        <a
                            className="hover:underline no-underline text-primary-400 text-small font-inter font-semibold inline-flex items-center"
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
                <div className="flex gap-[16px]">
                    <button
                        className="btn text-primary-400 bg-white-50 border border-primary-400 md:w-[242px] h-[40px] hover:text-white-50 hover:bg-primary-400 "
                        onClick={() => openDialog(notInterestedContent)}>
                        Not interested
                    </button>
                    <button
                        className="btn border bg-primary-400 text-white-50 md:w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400"
                        onClick={() => openDialog(oipContent)}>
                        Get offer in principle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
