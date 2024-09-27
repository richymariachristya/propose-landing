import React from "react";
interface ContentResponse {
  courseName: string;
  universityName: string;
}
interface ContentProps {
  contentResponse: ContentResponse;
}
 const Content: React.FC<ContentProps> = ({ contentResponse }) =>{
  return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
          <p className="text-xl font-bold">We are thrilled to inform you that {contentResponse.universityName} is offering you an exclusive scholarship to join our esteemed {contentResponse.courseName} program!</p>
      </div>
  );
}
export default Content
