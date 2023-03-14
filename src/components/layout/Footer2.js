import * as React from 'react';

import Logo from '../../images/spartan-plumbing-logo-full.png'

import { Link } from 'gatsby';

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';


const Footer2 = () => (
  <>
{/*<footer className="py-20 bg-logo-blue-500 2xl:py-40">
  <div className="container px-4 mx-auto mb-12 md:mb-20">
    <div className="max-w-4xl mx-auto text-center">
      {/*<a className="justify-center inline-block mb-20 text-xl font-bold text-center text-white" href="#">
        <img className="w-2/5 h-auto mx-auto center" src={Logo} alt width="auto" />
      </a>* /}
      <ul className="flex flex-wrap items-center justify-center mb-12 space-x-6 text-lg md:mb-20 md:justify-between">
        <Link to="/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Home</Link>
        <Link to="/services" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Services</Link>
        <Link to="/service-areas" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Service Areas</Link>
        <Link to="/about" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">About Us</Link>
        <Link to="/contact" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Contact</Link>
      </ul>
      <div className="flex justify-center">
        <a className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-red-accent-700 hover:bg-red-900" href="#" rel="noreferrer nofollow" target="_blank">
          <FaFacebookF className="w-6 h-6 text-white" />
        </a>
        <a className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-red-accent-700 hover:bg-red-900" href="#" rel="noreferrer nofollow" target="_blank">
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-red-accent-700 hover:bg-red-900" href="#" rel="noreferrer nofollow noopener" target="_blank">
          <FaTwitter className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  </div>
  <p className="px-4 pt-12 text-lg text-center text-white border-t border-gray-500">
    <span>All rights reserved </span>
    <span>© 2023 Spartan Plumbing and Drain</span>
  </p>
</footer>*/}

<footer className="py-20 bg-blue-800">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap mb-12 -mx-3 text-center lg:mb-20 lg:text-left">
      <div className="w-full px-3 mb-6 lg:w-2/5 lg:mb-0">
        <div className="inline-block mx-auto -mt-6 font-semibold leading-none lg:mx-0">
          <img className="h-24 md:h-32" src={Logo} alt width="auto" />
          <p className="max-w-md py-4 mx-auto text-lg leading-relaxed text-center text-white lg:max-w-full">Lic #1071770</p>

        </div>
      </div>
      <div className="w-full px-3 mb-8 lg:w-1/5 lg:mb-0">
      </div>
      <div className="w-full px-3 mb-8 lg:w-1/5 lg:mb-0">
        <p className="mb-2 font-bold text-white lg:mb-4 lg:text-lg font-heading">Office</p>
        <p className="text-white lg:text-lg">P.O. Box Escondido, CA</p>
      </div>
      <div className="w-full px-3 lg:w-1/5">
        <p className="mb-2 font-bold text-white lg:mb-4 lg:text-lg font-heading">Contact</p>
        <p className="text-white lg:text-lg">contact@spartanpad.com</p>
      </div>
    </div>
    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
      <p className="text-xs text-white">© 2023. All rights reserved.</p>
      <div className="order-first mb-4 -mx-2 lg:order-last lg:mb-0">
        <a className="inline-block px-2" href="#">
        <FaFacebookF className="w-6 h-6 text-white" />
        </a>
        <a className="inline-block px-2" href="#">
        <FaEnvelope className="w-6 h-6 text-white" />
        </a>
        <a className="inline-block px-2" href="#">
        <FaInstagram className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  </div>
</footer>

</>
);

export default Footer2;