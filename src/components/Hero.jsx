import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col justify-center ">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl, sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for {''}
          </p>

          <span className="md:text-5xl pl-2 sm:text-4xl text-xl font-bold md:ml-13  ">
            <Typewriter
              // className="md:text-5xl, sm:text-4xl text-xl font-bold"
              words={['  B2B', 'B2C ', 'SaaS']}
              loop={0}
              cursor
              typeSpeed={120}
              deleteSpeed={140}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className=" mx-4 md::text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for B2B, B2C & SaasS
          platforms
        </p>
        <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
