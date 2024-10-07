import idpLogo from '../../../public/images/idp-logo.61153ab6.svg';
import Image from 'next/image';

interface InstitutionLogoProp {
  institutionLogo: string; 
  institutionName: string;
  institutionSite:string;
}

const OfferTimeline = ({institutionLogo,institutionName,institutionSite}:InstitutionLogoProp) => {
  return (
    <>
      <div className='h-[40px] bg-secondary400 flex justify-center py-[10px]'>
        <p className='text-white text-small'>This offer ends in 24h 00m 20s</p>
      </div>
      <div className='h-[40px] bg-white flex justify-center'>
        <div className="flex flex-shrink-0 items-center gap-[13px]">
          <a href="https://www.idp.com/">
          <Image src={idpLogo} alt="IDP Education" className="block h-auto w-[74px]" />
          <span className="sr-only">IDP Logo</span>
          </a>
          <span className='border-r border-darkGrey border-solid h-[30px]'></span>
          <a href={institutionSite}>
          <Image src={institutionLogo} alt={institutionName} width={100} height={40} className="block h-auto w-[100px]" />
          <span className="sr-only">{institutionName}</span>
          </a>
          
        </div>
      </div>
    </>
  )
}

export default OfferTimeline