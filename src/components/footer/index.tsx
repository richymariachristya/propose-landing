import React from "react";
interface FooterResponse {
  additionalResources: string;
  contactInformation: string;
}
interface FooterProps {
  footerResponse: FooterResponse;
}
 const Footer: React.FC<FooterProps> = ({ footerResponse }) =>{
  return (
    <footer
      className="bg-gray-800 text-gray-400 fixed bottom-0 w-full h-16"
    >
      <div className="flex flex-col items-center justify-between">
        <p >{footerResponse.additionalResources}</p>
        <p >{footerResponse.contactInformation}</p>
      </div>
    </footer>
  );
};
export default Footer