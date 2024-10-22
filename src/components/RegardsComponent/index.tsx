import React from 'react'

interface RegardsComponentProp {
    institutionName: string
}

const RegardsComponent = ({institutionName}:RegardsComponentProp) => {
  return (
    <div className='container text-left mx-auto flex flex-col gap-[16px] px-[16px] mb-[24px] md:px-[0px]'>
        <p className='font-inter font-normal text-grey-300'>We look forward to helping you acheive your academic goals.</p>
        <p className='font-inter font-semibold text-grey-300'>Best regards.</p>
        <p className='font-inter font-normal text-grey-300'>University Admissions team,<span className='block'>{institutionName}</span>
        </p>
    </div>
  )
}

export default RegardsComponent