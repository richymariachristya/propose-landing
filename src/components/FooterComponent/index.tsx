import React from "react";
interface FooterResponse {
  additionalResources: string;
  contactInformation: string;
}
interface FooterProps {
  footerResponse: FooterResponse;
}
 const FooterComponent = ({ footerResponse }:FooterProps) =>{
  return (
    <footer className="bg-neutral-50 container rounded-lg mx-auto"
    >
      <div className="flex flex-col items-center justify-between p-4">
        <p className="text-grey-300 small font-inter font-normal">
           Don’t want to receive any offers in future? 
           <a className="underline text-primary-400 hover:no-underline cursor-pointer"> Stop sending Proposals</a>
        </p>
      </div>
    </footer>
  );
};
export default FooterComponent