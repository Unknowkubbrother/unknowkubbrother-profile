// import React from 'react'
import Ukb_Logo from "../../assets/ukb_logo.png";
import Logo_Cis_Kmutnb from "../../assets/logo_cis_kmutnb.png";

function position() {
  return (
    <div className="w-[95%] 2xl:w-[70%] m-auto flex py-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col 2xl:flex-row p-5 gap-5">
          <div className="w-[95%] m-auto 2xl:w-[50%] h-full bg-[#262626] rounded-md 2xl:m-5" data-aos="fade-right">
            <div className="w-[90%] 2xl:w-[70%] h-[30%] flex justify-start items-center m-auto mt-5">
              <img
                src={Ukb_Logo}
                alt=""
                className="w-fit h-[70px]"
              />
              <div className="flex flex-col ml-5">
                <span className="text-2xl mt-10 2xl:mt-0 2xl:text-3xl text-[#3d7fa1] font-bold">
                  UKB-DEVELOPER
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
                      href="https://unknowkubbrother.net/"
                      className="text-sky-500"
                      target="_blank"
                    >
                      UKB-DEVELOPER
                    </a>
                     {" a "}
                    website for selling programs and accepting all
                    types of programming.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[95%] m-auto 2xl:w-[50%] h-full bg-[#262626] rounded-md 2xl:m-5" data-aos="fade-left">
            <div className="w-[90%] 2xl:w-[70%] h-[30%] flex justify-start items-center m-auto mt-5">
              <img
                src={Logo_Cis_Kmutnb}
                alt=""
                className="w-[70px] h-[70px] bg-white rounded-full p-2"
              />
              <div className="flex flex-col ml-5">
                <span className="text-2xl mt-10 2xl:mt-0 2xl:text-3xl text-[#3d7fa1] font-bold">
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
