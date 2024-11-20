import { Link } from 'react-router-dom'
import numer from "../../assets/numer.png";
import goit from "../../assets/goit.jpg";

function Work() {
  return (
    <div className="w-[95%] 2xl:w-[60%] p-5 m-auto my-[10rem] border-dashed border-2 border-[#3d7fa1] rounded-lg">
      <div className="w-full mt-[-2.5rem] ml-5 relative">
        <span className="absolute text-4xl 2xl:text-5xl top-[-5px]">📌</span>
        <span className="px-5 bg-sky-700 text-lg 2xl:text-2xl rounded-2xl pl-[3rem] 2xl:pl-[4rem]">
          Here's the work I'd like to present.
        </span>
      </div>
      <div className="w-[90%] 2xl:h-[400px] m-auto mt-10 flex flex-col 2xl:flex-row justify-center items-center 2xl:gap-20">
        <a href="https://numer.unknowkubbrother.net" className="w-[95%] 2xl:w-[40%] p-6 rounded-2xl border border-transparent transition duration-1000 hover:scale-[1.015] hover:border-gray-200 hover:shadow-xl cursor-pointer m-auto" target="_blank">
          <div className="relative mb-8">
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gray-200"></div>
            <img
              src={numer}
              alt="numer-img"
              className="relative w-full aspect-[5/3] rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-sky-500">Numerical Methods</span>
            <span className="text-lg text-white">
            Calculation system about Numerical Methods.
            </span>
          </div>
        </a>

        <a href="https://github.com/Unknowkubbrother/goit-project" className="w-[95%] 2xl:w-[40%] p-6 rounded-2xl border border-transparent transition duration-1000 hover:scale-[1.015] hover:border-gray-200 hover:shadow-xl cursor-pointer m-auto" target="_blank">
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
        <Link to="/works" className="w-fit px-8 md:px-10 py-2 md:py-2.5 bg-gray-100 text-gray-500 rounded-full border-2 border-transparent transition duration-500 hover:border-gray-200 hover:scale-[0.975]">
          ดูผลงานทั้งหมด
        </Link>
      </div>
    </div>
  );
}

export default Work;
