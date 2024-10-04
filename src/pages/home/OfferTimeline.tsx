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
      <div className='h-[40px] bg-secondary-lightest flex justify-center py-[10px]'>
        <p className='text-white text-small'>This offer ends in 24h 00m 20s</p>
      </div>
      <div className='h-[40px] bg-white flex justify-center'>
        <div className="flex flex-shrink-0 items-center">
          <a href="https://www.idp.com/">
          <Image src={idpLogo} alt="IDP Education" width={64} height={37} className="block h-auto w-[64px] xl:hidden ml-2" />
          <span className="sr-only">IDP Logo</span>
          </a>
          <a href={institutionSite}>
          <Image src={institutionLogo} alt={institutionName} width={64} height={37} className="block h-auto w-[64px] xl:hidden ml-2" />
          <span className="sr-only">{institutionName}</span>
          </a>
          
        </div>
      </div>
    </>
  )
}

export default OfferTimeline