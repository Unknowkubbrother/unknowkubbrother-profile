// import React from 'react'
import ukb_shop from "../../assets/ukb-shop.png";
import goit from "../../assets/goit.jpg";

function Work() {
  return (
    <div className="w-[60%] h-[600px] m-auto mt-10 border-dashed border-2 border-[#3d7fa1] rounded-lg">
      <div className="w-full mt-[-1rem] ml-5 relative">
        <span className="absolute text-5xl top-[-5px]">📌</span>
        <span className="px-5 bg-sky-700 text-2xl rounded-2xl pl-[4rem]">
          Here's the work I'd like to present.
        </span>
      </div>
      <div className="w-[90%] h-[400px] m-auto mt-10 flex justify-center items-center gap-20">
        <a href="https://shop.unknowkubbrother.net/home" className="w-[40%] md:w-[450px] p-6 rounded-2xl border border-transparent transition duration-1000 hover:scale-[1.015] hover:border-gray-200 hover:shadow-xl cursor-pointer" target="_blank">
          <div className="relative mb-8">
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gray-200"></div>
            <img
              src={ukb_shop}
              alt="ukb-img"
              className="relative w-full aspect-[5/3] rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-sky-500">CodeKub-Shop</span>
            <span className="text-lg text-white">
            CodeKub's online store sells about the program.
            </span>
          </div>
        </a>

        <a href="https://github.com/Unknowkubbrother/goit-project" className="w-[40%] md:w-[450px] p-6 rounded-2xl border border-transparent transition duration-1000 hover:scale-[1.015] hover:border-gray-200 hover:shadow-xl cursor-pointer" target="_blank">
          <div className="relative mb-8">
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gray-200"></div>
            <img
              src={goit}
              alt="go_img"
              className="relative w-full aspect-[5/3] rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-sky-500">GOIT - BC TECH</span>
            <span className="text-lg text-white">
              Mobile app about environmental conservation
            </span>
          </div>
        </a>
        
      </div>
      <div className="w-full h-[100px] flex justify-center items-center">
        <button className="w-fit px-8 md:px-10 py-2 md:py-2.5 bg-gray-100 text-gray-500 rounded-full border-2 border-transparent transition duration-500 hover:border-gray-200 hover:scale-[0.975]">
          ดูผลงานทั้งหมด
        </button>
      </div>
    </div>
  );
}

export default Work;
