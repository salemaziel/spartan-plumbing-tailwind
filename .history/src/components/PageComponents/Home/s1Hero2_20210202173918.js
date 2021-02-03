import React from 'react';
import Button from '../../Button';
import HeroImage from '../../../svg/HeroImage';

import Logo from "../../../images/logo-1-words.png"

import "./s1Hero.css"

const S1Hero2 = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font homeHero" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
        <div className="container flex flex-col items-center px-5 py-20 mx-auto md:py-32 md:flex-row">
          <div className="w-3/4 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center w-full rounded"
              alt="Spartan Plumbing &amp; Drain"
              src={Logo}
            />
          </div>
          <form className="flex-col hidden w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:flex md:ml-auto lg:mr-0 ">
            <h2 className="mb-5 text-lg font-medium text-center text-gray-900 title-font">Get A Free Estimate</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                className="w-1/2 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                required
                className="w-1/2 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                id="tel"
                name="phone"
                required
                className="w-1/2 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">
              Message
              </label>
            <textarea 
            id="message" 
            name="message" 
            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />
          </div>
            {/*<div className="mx-auto lg:w-1/2 md:w-2/3">*/}
            <div className="mx-auto md:w-full">
      <div className="flex flex-wrap -m-2">
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200" />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200" />
          </div>
        </div>
        <div className="w-full p-2">
          <div className="relative">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200" defaultValue={""} />
          </div>
        </div>
        <div className="w-full p-2">
          <button className="flex px-8 py-2 mx-auto text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">Button</button>
        </div>
        <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
          <a className="text-blue-500">example@email.com</a>
          <p className="my-5 leading-normal">49 Smith St.
            <br />Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
            <button className="px-8 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </form>








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
