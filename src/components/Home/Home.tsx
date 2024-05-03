// import {useEffect} from 'react'
import "./Home.css";

function Home() {
  const profile = {
    name: "Unknowkubbrother",
    social: {
      instagram: "https://www.instagram.com/n_nnat_48/",
      github: "https://github.com/Unknowkubbrother",
    },
  };
  return (
    <div className="w-full h-full">
      <section className="w-full h-screen welcome">
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className="w-[45%] h-[450px] flex shadow-2xl shadow-black rounded-lg overflow-hidden mt-[-7rem]"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="w-[40%] h-full">
              <div className="img-profile"></div>
            </div>
            <div className="w-[60%] h-full bg-[#262626] flex justify-center items-center">
              <div className="flex justify-center items-start flex-col text-start ml-[-3rem]">
                <span
                  className="text-5xl p-2 bg-[#ffffff] font-semibold text-black px-5 font-mono"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Hello
                </span>
                <div className="mt-2 border-b-2 pb-2">
                  <span className="text-4xl font-semibold mr-3">I'm</span>
                  <span className="text-sky-500 text-2xl font-semibold">
                    {profile.name}
                  </span>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={profile.social.instagram} target="_blank" className="text-lg">
                    <i className="fa-brands fa-instagram text-rose-400 mr-1"></i>{" "}
                    INSTAGRAM
                  </a>
                  <a href={profile.social.github} target="_blank" className="text-lg">
                    <i className="fa-solid fa-code mr-2 text-green-400"></i>
                    Coding
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[100vh]"></section>
    </div>
  );
}

export default Home;
