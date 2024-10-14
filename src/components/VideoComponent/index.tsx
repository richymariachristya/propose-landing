import React from 'react'
import Image from 'next/image'
import PlayIcon from '../../../public/images/play-black-icon.svg'

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
          <Image src={PlayIcon} alt='play icon' className='h-[25px] w-[25px]'/>
      </button>
    </div>

    
  )
}

export default VideoComponent