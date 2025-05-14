import * as React from 'react';

import Logo from '../../images/logo-1-words.png'

import { Link } from 'gatsby';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => (
<footer className="py-20 bg-logo-blue-500 2xl:py-40">
  <div className="container px-4 mx-auto mb-12 md:mb-20">
    <div className="max-w-4xl mx-auto text-center">
      {/*<a className="justify-center inline-block mb-20 text-xl font-bold text-center text-white" href="#">
        <img className="w-2/5 h-auto mx-auto center" src={Logo} alt width="auto" />
      </a>*/}
      <ul className="flex flex-wrap items-center justify-center mb-12 space-x-6 text-lg md:mb-20 md:justify-between">
        <Link to="/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Home</Link>
        <Link to="/services/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Services</Link>
        <Link to="/service-areas/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Service Areas</Link>
        <Link to="/about/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">About Us</Link>
        <Link to="/contact/" className="mb-4 font-bold text-white md:mb-0 hover:text-gray-100" href="#">Contact</Link>
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
    <span>{new Date().getFullYear()} © Spartan Plumbing and Drain</span>
  </p>
</footer>



);

export default Footer;