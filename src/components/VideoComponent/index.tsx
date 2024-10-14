import React from 'react'
import Image from 'next/image'

interface InstitutionVideoInfo {
    institutionName: string,
    instituteVideoImage: string,
    instituteVideoUrl:string
}

const VideoComponent = ({institutionName, instituteVideoImage,instituteVideoUrl}:InstitutionVideoInfo) => {
  return (
    <div className='relative'>
      <Image src={instituteVideoImage} alt={institutionName} className="rounded-tl-[105px] rounded-br-[105px] h-[310px]" width="568" height="310"/>
    {/* // <video className="object-cover w-full h-full" width="600" height="407" controls>
    //     <source src={instituteVideoUrl} type="video/mp4" /> 
    //     Your browser does not support the video tag.
    // </video>  */}

      <button className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white/80 rounded-[100%] z-10">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[20px] md:text-[25px] relative left-[2px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
      </button>
    </div>

    
  )
}

export default VideoComponent