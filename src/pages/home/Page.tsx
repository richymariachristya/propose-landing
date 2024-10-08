import OfferTimeline from '@/components/OfferTimelineComponent';
import HeroBanner from '@/components/HeroBannerComponent';
import VideoComponent from '@/components/VideoComponent';

const institutionProp = {
  institutionLogo: "/images/unisq-logo.svg", 
  institutionName: "University of Southern Queensland",
  institutionSite: "https://www.unisq.edu.au/",
  instituteVideoImage: "/images/video-image.png",
  instituteVideoUrl: "https://videos.ctfassets.net/8bbwomjfix8m/7lraOsI97RgFJk4cqQyXdP/11e4e785023049565bde19c3f062404d/Video_-1_Why_study_abroad.mp4",
  instituteDestination:"Australia"
}

const StudentDetails = {
  studentName: "Neil",
  studentProposeCourse: "Bachelor of Medical Laboratory Science"
}

const OfferCountdownProp = {
  offercountHour: 24,
  offercountMin: 0,
  offercountSec: 20,
}

const ProposeLandingPage = () => {
  return (
    <>
      <OfferTimeline 
      institutionLogo={institutionProp.institutionLogo} 
      institutionName={institutionProp.institutionName}
      institutionSite={institutionProp.institutionSite} 
      offercountHour={OfferCountdownProp.offercountHour}
      offercountMin={OfferCountdownProp.offercountMin}
      offercountSec={OfferCountdownProp.offercountSec}
      />
      <HeroBanner 
      studentName={StudentDetails.studentName}
      studentProposeCourse={StudentDetails.studentProposeCourse}
      instituteDestination={institutionProp.instituteDestination}
      institutionName={institutionProp.institutionName}
      />
      <div className=''>
        <div className='container flex lg:flex-row mx-auto md:flex-col md:gap-10'>
            <div className="flex flex-col items-center lg:w-1/2 md:w-full gap-4 lg:py-10 md:py-4">
              <VideoComponent 
              institutionName={institutionProp.institutionName}
              instituteVideoImage={institutionProp.instituteVideoImage}
              instituteVideoUrl={institutionProp.instituteVideoUrl}/>
            </div>
            <div className="flex flex-col items-center lg:w-1/2 md:w-full lg:ml-10 md:mx-0 lg:justify-center">
                
                
            </div>
        </div>
    </div>
    </>
  );
}

export default ProposeLandingPage;