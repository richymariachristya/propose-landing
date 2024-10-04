import OfferTimeline from '@/pages/home/OfferTimeline';

const institutionProp = {
  institutionLogo: "/images/unisq-logo.svg", 
  instututionName: "University of Southern Queensland",
  institutionSite: "https://www.unisq.edu.au/"
}

const ProposeLanding = () => {
  return (
    <>
      <OfferTimeline 
      institutionLogo={institutionProp.institutionLogo} 
      institutionName={institutionProp.instututionName}
      institutionSite={institutionProp.institutionSite} />
    </>
  );
}

export default ProposeLanding;