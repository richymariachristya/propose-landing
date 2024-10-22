interface institutionProp {
    institutionName: string
    instituteDestination: string
}

interface StudentInfoProp extends institutionProp {
    studentName: string
    studentProposeCourse: string
    aiGeneratedContent: string
}

const HeroBannerComponent = ({
    institutionName,
    instituteDestination,
    studentName,
    studentProposeCourse,
    aiGeneratedContent,
}: StudentInfoProp) => {
    return (
        <div className="bg-primary-400">
            <div className="container flex md:flex-row mx-auto flex-col gap-[40px] md:py-[40px] px-[16px] py-[32px]">
                <div className="flex flex-col items-center lg:w-1/2 md:w-full gap-4">
                    <h3 className="font-farro font-bold text-white-50 text-left w-full">
                        Hi {studentName},
                    </h3>
                    <p className="font-normal font-inter text-white-50 w-full">
                        {aiGeneratedContent}
                    </p>
                </div>
                <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
                    <div className="flex gap-1 flex-col rounded-lg p-4 bg-grey-300 w-full">
                        <p className="font-semibold font-inter text-white-50 x-small uppercase">
                            exclusive offer
                        </p>
                        <h6 className="font-bold font-farro para-lg text-primary-600">
                            Get an offer in principle for...
                        </h6>
                        <p className="font-semibold font-inter text-white-50 x-small block">
                            {studentProposeCourse}
                            <span className="font-normal font-inter text-white-50 x-small block">
                                {institutionName}, {instituteDestination}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerComponent
