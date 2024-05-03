// import React from 'react'
import Logo_Codekub from "../../assets/logo_codekub.png";
import Logo_Cis_Kmutnb from "../../assets/logo_cis_kmutnb.png";

function position() {
  return (
    <div className="w-[70%] m-auto flex py-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex p-5">
          <div className="w-[50%] h-full bg-[#262626] rounded-md m-5" data-aos="fade-right">
            <div className="w-[70%] h-[30%] flex justify-start items-center m-auto mt-5">
              <img
                src={Logo_Codekub}
                alt=""
                className="w-[70px] h-[70px] bg-[#3d7fa1] rounded-full"
              />
              <div className="flex flex-col ml-5">
                <span className="text-3xl text-[#3d7fa1] font-bold">
                  Codekub
                </span>
                <span className="text-xl text-white">
                  Co-Founder, COO • April 2024
                </span>
              </div>
            </div>
            <div className="w-[80%] h-[70%] m-auto text-white p-5">
              <ul className="list-disc text-lg">
                <li className="text-sky-600">
                  <span className="text-white">
                    Co-founder of{" "}
                    <a
                      href="https://shop.unknowkubbrother.net/"
                      className="text-sky-500"
                      target="_blank"
                    >
                      CodeKub
                    </a>
                    , a{" "}
                    <a
                      href="https://www.facebook.com/profile.php?id=61558842330068"
                      className="text-sky-500"
                      target="_blank"
                    >
                      Facebook
                    </a>{" "}
                    page and website for selling programs and accepting all
                    types of programming.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[50%] h-full bg-[#262626] rounded-md m-5" data-aos="fade-left">
            <div className="w-[70%] h-[30%] flex justify-start items-center m-auto mt-5">
              <img
                src={Logo_Cis_Kmutnb}
                alt=""
                className="w-[70px] h-[70px] bg-white rounded-full p-2"
              />
              <div className="flex flex-col ml-5">
                <span className="text-3xl text-[#3d7fa1] font-bold">
                  CIS-KMUTNB
                </span>
                <span className="text-xl text-white">
                  Student (CS37) • July 2023
                </span>
              </div>
            </div>
            <div className="w-[80%] h-[70%] m-auto text-white p-5">
              <ul className="list-disc text-lg">
                <li className="text-sky-600">
                  <span className="text-white">
                    Studying{" "}
                    <a href="https://cs.kmutnb.ac.th/" className="text-sky-500">
                      Computer and Information Science
                    </a>{" "}
                    (CIS) King Mongkut's University of Technology North Bangkok
                    (KMUTNB)
                  </span>
                </li>
                <li className="text-sky-600">
                  <span className="text-white">
                    The{" "}
                    <a
                      href="https://www.facebook.com/photo/?fbid=693230112806601"
                      className="text-sky-500"
                    >
                      most popular
                    </a>{" "}
                    Faculty of Information Technology in Thailand.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default position;