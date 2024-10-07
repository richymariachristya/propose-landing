import OfferTimeline from '../../components/OfferTimeline';
import HeroBanner from '../../components/HeroBanner';

const institutionProp = {
  institutionLogo: "/images/unisq-logo.svg", 
  instututionName: "University of Southern Queensland",
  institutionSite: "https://www.unisq.edu.au/",
  instituteVideoImage: "/public/images/video-image.png",
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
      institutionName={institutionProp.instututionName}
      institutionSite={institutionProp.institutionSite} 
      offercountHour={OfferCountdownProp.offercountHour}
      offercountMin={OfferCountdownProp.offercountMin}
      offercountSec={OfferCountdownProp.offercountSec}
      />
      <HeroBanner 
      studentName={StudentDetails.studentName}
      studentProposeCourse={StudentDetails.studentProposeCourse}
      instituteDestination={institutionProp.instituteDestination}
      institutionName={institutionProp.instututionName}
      instituteVideoUrl={institutionProp.instituteVideoUrl}
      instituteVideoImage={institutionProp.instituteVideoImage}
      />
    </>
  );
}

export default ProposeLandingPage;