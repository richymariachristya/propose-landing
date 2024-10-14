import Image from "next/image"

interface AboutComponentProp {
    institutionName: string
    courseName: string
    instituteSmallLogo: string
    worldRanking: number
    startDate: string
    entryScore: number
    studyLevel: string
    location: string
    cost: number
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
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg gap-5">
                <div className="flex justify-self-end">
                    <div className="flex">
                        <Image
                            className="rounded-md h-[56] w-[56]"
                            src={instituteSmallLogo}
                            alt={institutionName}
                            width={56}
                            height={56}
                        />
                        <p className="block">
                            {courseName}
                            <span className="block">{institutionName}</span>
                        </p>
                    </div>
                    <div className="flex">b</div>
                </div>
            </div>

            {worldRanking}
            {startDate}
            {entryScore}
            {studyLevel}
            {location}
            {cost}
        </div>
    )
}

export default AboutComponent
