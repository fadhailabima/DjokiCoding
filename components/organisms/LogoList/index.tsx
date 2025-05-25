import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/github-logo.svg'}
            width={120}
            height="36"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/nextjs-icon.svg'}
            width={120}
            height="46"
            alt="forbes logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/expressjs-ar21.svg'}
            width={120}
            height="56"
            alt="google logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/postgresql-ar21.svg'}
            width={150}
            height="56"
            alt="microsoft logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/tensorflow-ar21.svg'}
            width={150}
            height="56"
            alt="facebook logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
