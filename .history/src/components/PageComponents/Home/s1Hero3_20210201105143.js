import React from 'react'

import "./s1Hero3.css"

const S1Hero3 = () => {
  return (
<section className="SectionWaves">
<div className="header">
    <div className="relative flex flex-col px-4 py-16 m-0 mx-auto inner-header lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-visible lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-right w-1/2 h-full lg:w-auto lg:h-full lg:mr-auto"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl ml-auto mr-auto md:mr-0 md:max-w-full xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6 text-center">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
              We will bring your 
              <br className="hidden md:block" />
               business{' '}
              <span className="inline-block text-deep-purple-accent-400">
                online
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <input
                placeholder="Name"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-600 transition duration-200 bg-white rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-blue-100 transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  {/*Waves Container*/}
  <div>
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={0}
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={3}
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={5}
          fill="rgba(255,255,255,0.3)"
        />
        <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
      </g>
    </svg>
  </div>

    </div>
    </section>
  );
};

export default S1Hero3


