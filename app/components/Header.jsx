import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-start w-full p-5">
      <Image src={"/youtube.svg"} height={40} width={44} alt="logo" />
      <p className="text-xl font-bold">Clone</p>
    </div>
  );
};

export default Header;
