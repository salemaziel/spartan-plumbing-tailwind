import React from 'react';
import Button from '../../Button';
import HeroImage from '../../../svg/HeroImage';

import EstimateModal from "../../EstimateModal"
import Logo from "../../../images/logo-1-words.png"

import {
  FaPhoneAlt
} from "react-icons/fa"

import "./s1Hero.css"

const S1Hero2 = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font homeHero" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
        <div className="container flex flex-col items-center px-5 pt-32 pb-20 mx-auto md:py-24 md:flex-row">
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
                Full Name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
                Phone*
              </label>
              <input
                type="tel"
                id="tel"
                name="phone"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">
              What Can We Help You With?
              </label>
            <textarea 
            id="message" 
            name="message" 
            className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />
          </div>

            <button className="px-8 py-2 text-lg text-white bg-blue-900 border-0 rounded focus:outline-none hover:bg-blue-600">
              Button
            </button>
          </form>








          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:hidden md:items-start md:text-left">
            <h1 className="mb-4 text-3xl font-medium text-gray-100 title-font sm:text-4xl">
              Quality, Reliable Plumbing <br className="hidden lg:inline-block" /> Service You Can Trust
            </h1>
            <p className="mb-8 leading-relaxed text-gray-100">
              On Time, Every Time
            </p>
            <div className="flex justify-center my-10">
              <a href="" className="inline-flex px-6 py-4 text-lg font-bold text-gray-100 bg-blue-800 border-0 rounded shadow-lg focus:outline-none hover:bg-blue-600">
              <FaPhoneAlt className="mt-1 mr-1" />  Call Now
              </a>
              {/*<button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
                Button
              </button>*/}
              <EstimateModal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero2;
