// import React from "react";
import image from "/src/e7a124a5078b73381f7522b0a45212cd.jpg";
import LinkedIn from "/src/fa6-brands--linkedin.svg";
import Email from "/src/ic--outline-email.svg";
export default function App() {
  return (
    <div className="w-[317px] h-[317] bg-gray-950 m-20 rounded-t-3xl flex flex-col gap-5">
      <img src={image} alt="" className="w-[317px] h-[317] rounded-xl" />
      <div className="text-center">
        <h1 className="font-bold text-2xl text-white">Ricky</h1>
        <h3 className="text-sm text-orange-400">Front End Developer</h3>
        <h5 className="text-xs">RickyMorty.website</h5>
      </div>
      <div className="flex justify-between m-4">
        <div className="w-32 bg-white flex p-2  justify-around rounded-xl  gap-2">
          <img src={Email} alt="" className="h-full" />
          <p>Email</p>
        </div>
        <div className="w-32 bg-blue-500 flex p-2  justify-around rounded-xl text-white gap-2">
          <img src={LinkedIn} alt="" className="h-full" />
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="m-4">
        <h1 className="font-bold text-2xl text-white">About</h1>
        <p className=" text-white">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="m-4">
        <h1 className="font-bold text-2xl text-white">Interest</h1>
        <p className=" text-white">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
