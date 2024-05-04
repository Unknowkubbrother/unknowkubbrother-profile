import AboutMe from "./aboutme";
import Position from "./position";
import Work from "./Work";

import "./Home.css";

function Home() {
  const profile = {
    name: "Unknowkubbrother",
    social: {
      instagram: "https://www.instagram.com/n_nnat_48/",
      github: "https://github.com/Unknowkubbrother",
    },
    description: {
      th: (
        <h1>
          ผมชื่อ <span className="text-sky-500">ณัฐ </span>อายุ 19
          ตอนนี้ศึกษาอยู่ <a href="https://www.kmutnb.ac.th/" className="text-sky-500">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </a>อยู่ในคณะ
          วิทยาศาสตร์ประยุกตร์ สาขาวิทยาการคอมพิวเตอร์ มีความสนใจในการเขียนโค้ดมากๆ เป้าหมายในอนาคตคือการเป็น Fullstack Developer
        </h1>
      ),
      en: (
        <h1>
          My name is <span className="text-sky-500">Nat</span> I'm 19 years old.
          Currently studying at <a href="https://www.kmutnb.ac.th/" className="text-sky-500">King Mongkut's University of Technology North Bangkok </a>Being in the faculty
          applied science Computer Science major Very interested in coding. My future goal is to become a Fullstack Developer.
        </h1>
      ),
    },
  };
  return (
    <div className="w-full h-full mb-10">
      <section id="welcome" className="w-full h-screen">
        <div className="flex items-center justify-center h-full">
          <div
            className="w-[90%] md:w-[90%] 2xl:w-[45%] h-[550px] md:h-[500px] lg:w-[70%] 2xl:h-[450px] flex flex-col md:flex-row 2xl:flex-row shadow-2xl shadow-black rounded-lg overflow-hidden mt-[-7rem] md:mt-[-5rem] 2xl:mt-[-7rem]"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="w-full md:w-[40%] h-[50%] md:h-full">
              <div className="img-profile"></div>
            </div>
            <div className="w-full md:w-[60%] h-[50%] md:h-full bg-[#262626] flex justify-center items-center">
              <div className="flex justify-center items-start flex-col text-start ml-[-3rem]">
                <span
                  className="text-5xl p-2 bg-[#ffffff] font-semibold text-black px-5 font-mono rounded-md"
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
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    className="text-lg hover:text-sky-700 duration-300"
                  >
                    <i className="fa-brands fa-instagram text-rose-400 mr-1"></i>
                    INSTAGRAM
                  </a>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    className="text-lg hover:text-sky-700 duration-300"
                  >
                    <i className="fa-brands fa-github mr-2"></i>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[-10rem] md:mt-[-9rem] lg:mt-[-8rem] 2xl:mt-[-10rem]">
          <a href="#about-me" className="animate-bounce">
            <i className="fa-solid fa-angle-down text-2xl"></i>
          </a>
        </div>
      </section>
      <section id="about-me" className="w-full bg-[#181818] 2xl:scroll-mt-[7rem]">
        <AboutMe
          profile={
            profile as { description: { th: JSX.Element; en: JSX.Element } }
          }
        />
      </section>
      <div className="w-full flex justify-center items-center mt-[7rem]">
        <h1 className="text-4xl 2xl:text-5xl font-bold">
          <span className="text-sky-700">Positions</span> &{" "}
          <span className="text-sky-500">Works</span>
        </h1>
      </div>
      <section id="position">
        <Position />
      </section>
      <section id='work'>
          <Work/>
      </section>
    </div>
  );
}

export default Home;
