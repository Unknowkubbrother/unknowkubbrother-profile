// import React from 'react'

function aboutme({ profile }: { profile: { description: { th: JSX.Element; en: JSX.Element } } }) {
  return (
    <div className="w-[70%] m-auto flex py-10">
      <div className="w-[30%] flex justify-start items-start">
            <div className="flex flex-col">
            <span className="text-5xl text-sky-700 font-bold">ฉันเป็นใคร ?</span>
            <span className="text-4xl">Who am i?</span>
            </div>
        </div>
        <div className="w-[70%] flex flex-col gap-5 text-lg font-medium" data-aos="zoom-in" data-aos-duration="1000">
          <div >{profile.description.th}</div>
          <div>{profile.description.en}</div>
        </div>
    </div>
  )
}

export default aboutme