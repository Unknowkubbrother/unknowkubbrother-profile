// import React from 'react'

function aboutme({ profile }: { profile: { description: { th: JSX.Element; en: JSX.Element } } }) {
  return (
    <div className="w-[95%] 2xl:w-[70%] m-auto flex flex-col 2xl:flex-row py-10">
      <div className="2xl:w-[30%] flex justify-center items-center 2xl:justify-start 2xl:items-start">
            <div className="flex flex-col">
            <span className="text-5xl text-sky-700 font-bold">ฉันเป็นใคร ?</span>
            <span className="text-4xl">Who am i?</span>
            </div>
        </div>
        <div className="w-[80%] 2xl:w-[70%] flex flex-col gap-5 text-lg font-medium m-auto text-center 2xl:text-start mt-5 2xl:mt-0" data-aos="zoom-in" data-aos-duration="1000">
          <div >{profile.description.th}</div>
          <div>{profile.description.en}</div>
        </div>
    </div>
  )
}

export default aboutme