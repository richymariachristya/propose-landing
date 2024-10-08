import React from 'react'
import Image from 'next/image'

interface InstitutionVideoInfo {
    institutionName: string,
    instituteVideoImage: string,
    instituteVideoUrl:string
}

const VideoComponent = ({institutionName, instituteVideoImage,instituteVideoUrl}:InstitutionVideoInfo) => {
  return (
    <Image src={instituteVideoImage} alt={institutionName} className="rounded-tl-[105px] rounded-br-[105px]" width="568" height="310"/>
    // <video className="object-cover w-full h-full" width="600" height="407" controls>
    //     <source src={instituteVideoUrl} type="video/mp4" /> 
    //     Your browser does not support the video tag.
    // </video> 
  )
}

export default VideoComponent