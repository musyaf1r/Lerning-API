import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image src="/gtw.jpg" alt="Logo" width={40} height={40} className="rounded-full overflow-hidden" />
        <p className="px-5">Home</p>
      </div>
      
      <div className="flex space-x-4">
        <Button variant="ghost" className={"text-1xl"}>LOG IN</Button>
        <Button variant="ghost" className={"text-1xl"}>SIGN IN</Button>
      </div>
    </div>
  );
};

export default Header;
