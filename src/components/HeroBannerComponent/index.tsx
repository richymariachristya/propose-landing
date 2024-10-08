

interface institutionProp {
    institutionName:string,
    instituteDestination:string
}

interface StudentInfoProp extends institutionProp{
    studentName: string,
    studentProposeCourse: string
}

const HeroBanner = ({institutionName,instituteDestination,studentName,studentProposeCourse }:StudentInfoProp) => {
  return (
    <div className='bg-primary-400'>
        <div className='container flex lg:flex-row mx-auto md:flex-col md:gap-10'>
            <div className="flex flex-col items-center lg:w-1/2 md:w-full gap-4 lg:py-10 md:py-4">
                <h3 className="font-farro font-bold text-white text-left w-full">Hi {studentName},</h3>
                <p className="font-normal font-inter text-white w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
                <div className="flex gap-1 flex-col rounded-lg p-3 bg-grey-300 w-full p-3">
                    <p className="font-semibold font-inter text-white small uppercase">exclusive offer</p>
                    <h6 className="font-bold font-farro text-para-lg text-primary-600">Get an offer in principle for...</h6>
                    <p className="font-semibold font-inter text-white small block">{studentProposeCourse}
                    <span className="font-normal font-inter text-white small block">{institutionName}, {instituteDestination}</span></p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroBanner