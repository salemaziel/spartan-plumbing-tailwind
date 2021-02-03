import React from 'react';
import Button from '../../Button';
import HeroImage from '../../../svg/HeroImage';

const S1Hero2 = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
        <div className="container flex flex-col items-center px-5 py-12 mx-auto md:py-24 md:flex-row">
          <div className="w-1/2 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="flex-col hidden w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:flex md:ml-auto lg:mr-0 md:mt-0">
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <button className="px-8 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:hidden md:items-start md:text-left">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
              tacos poke beard tote bag. 
            </p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
                Button
              </button>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero2;
