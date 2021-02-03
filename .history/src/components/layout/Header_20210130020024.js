import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

import {Link} from "gatsby"

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{zIndex: "99"}}>
    <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <Link to="/">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
        </Link>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
        <Link to="/contact" rel="preload" className="px-4">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </nav>
  </header>
);

export default Header;
