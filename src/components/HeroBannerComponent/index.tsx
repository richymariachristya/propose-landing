interface institutionProp {
    institutionName: string
    instituteDestination: string
}

interface StudentInfoProp extends institutionProp {
    studentName: string
    studentProposeCourse: string
    aiGeneratedContent: string
}

const HeroBanner = ({
    institutionName,
    instituteDestination,
    studentName,
    studentProposeCourse,
    aiGeneratedContent,
}: StudentInfoProp) => {
    return (
        <div className="bg-primary-400">
            <div className="container flex lg:flex-row mx-auto md:flex-col md:gap-10">
                <div className="flex flex-col items-center lg:w-1/2 md:w-full gap-4 lg:py-10 md:py-4">
                    <h3 className="font-farro font-bold text-white text-left w-full">
                        Hi {studentName},
                    </h3>
                    <p className="font-normal font-inter text-white w-full">
                        {aiGeneratedContent}
                    </p>
                </div>
                <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
                    <div className="flex gap-1 flex-col rounded-lg p-3 bg-grey-300 w-full">
                        <p className="font-semibold font-inter text-white x-small uppercase">
                            exclusive offer
                        </p>
                        <h6 className="font-bold font-farro para-lg text-primary-600">
                            Get an offer in principle for...
                        </h6>
                        <p className="font-semibold font-inter text-white x-small block">
                            {studentProposeCourse}
                            <span className="font-normal font-inter text-white x-small block">
                                {institutionName}, {instituteDestination}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
