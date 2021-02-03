import React, { useState, useEffect  } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

import {Link} from "gatsby"

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);


  return(
  <header 
  /*className="sticky top-0 bg-white shadow" */
  className={
    "sticky" + " top-0" + " shadow" + " transition-all" + " ease-out" + " duration-300" + (scroll ? ` bg-red-600` : " bg-white")
  }
  style={{zIndex: "99"}}>
    <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/" className="flex items-center text-2xl">
        
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
        </Link>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <Link to="/contact" rel="preload" className="px-4">
          Contact
        </Link>
        <Link to="/about" rel="preload" className="px-4">
          About
        </Link>
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
}
export default Header;
