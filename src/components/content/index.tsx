import React from "react";
interface ContentResponse {
  courseName: string;
  universityName: string;
  percentage: string;
  experience: string;
  strength: string
}
interface ContentProps {
  contentResponse: ContentResponse;
}
 const Content: React.FC<ContentProps> = ({ contentResponse }) =>{
  return (
      <div>
        <header className="text-xl font-bold">Exciting Scholarship Opportunity Just for You at {contentResponse.universityName}!</header>
          <p className="text-x pb-10">We are thrilled to inform you that {contentResponse.universityName} is offering you an exclusive scholarship to join our esteemed {contentResponse.courseName} program.Based on your impressive academic achievements and potential, we believe you would be a perfect fit for our university. This scholarship will cover {contentResponse.percentage}  of your tuition fees, providing you with the financial support you need to excel in your studies.
          </p>
          <h1 className="text-xl font-bold">Course Details</h1>
          <p className="pb-10">Our {contentResponse.courseName} program is renowned for its {contentResponse.strength}. You will have the opportunity to learn from leading experts in the field, participate in cutting-edge research, and gain hands-on experience through {contentResponse.experience}. The program is designed to equip you with the skills and knowledge necessary to succeed in your chosen career path.
          </p>
          <h1 className="text-xl font-bold">University Details</h1>
          <p className="pb-10">Imagine studying at a university that is renowned for its {contentResponse.strength}, surrounded by a vibrant campus life and dedicated faculty. We are committed to helping you achieve your academic and career goals, and we believe that {contentResponse.universityName} is the perfect place for you to thrive.
          </p>

          <p className="text-xl font-bold pb-5">Don&apos;t miss out on this incredible opportunity! Click the link below to learn more about the scholarship and how you can apply:</p>
          <div className="pb-10">
          <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all duration-300">Get offer in principle
         </button>
         <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-grey-700 transition-all duration-300">Not interested
         </button>
         </div>
         
         <p>We look forward to welcoming you to our community and supporting you on your journey to success.
         <br></br>Best regards,
         </p>
      </div>
  );
}
export default Content
