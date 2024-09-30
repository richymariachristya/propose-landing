import React from "react";
interface HeaderResponse {
  studentName: string;
}
interface HeaderProps {
  headerResponse: HeaderResponse;
}
const Header: React.FC<HeaderProps> = ({ headerResponse }) =>{
  return (
    <header className="bg-grey-darkest text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <p className="text-xl font-bold">Welcome, {headerResponse.studentName}!</p>
      </div>
    </header>
  );
}
export default Header


