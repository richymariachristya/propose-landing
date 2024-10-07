import OfferTimeline from '@/pages/home/OfferTimeline';

const institutionProp = {
  institutionLogo: "/images/unisq-logo.svg", 
  instututionName: "University of Southern Queensland",
  institutionSite: "https://www.unisq.edu.au/"
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
    </>
  );
}

export default ProposeLandingPage;