import React, {useState, useEffect} from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa"
import Logo from "../../images/logo-1-words.png"
import {Link} from "gatsby"


const Header2  = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    }, []);
  
  
    return (
<>
<Link
            to="/"
            aria-label="Company"
            title="Company"
            className="absolute z-20 items-center hidden text-gray-100 bg-white rounded md:block lg:mt-4 lg:ml-4 lg:w-1/4 lg:p-5"
          >
              <img src={Logo} alt="Spartan Plumbing Logo" className="w-full" />
          </Link>

<div className="flex-row justify-center hidden py-6 mx-auto text-gray-100 bg-logo-blue-500 md:flex ">

  <div className="flex w-full px-2 md:px-6 md:justify-between">
    <div className="flex flex-row justify-end md:w-1/3 lg:w-5/12">

                {/*<a href="#" className="flex py-2 text-lg text-gray-100 hover:text-red-accent-700">
        <FaMapMarkerAlt className="w-5 h-5 mx-2" />
        1234 Broadway St <br /> Escondido, CA 92025
        </a>*/}
          <a href="#" className="invisible py-2 text-lg font-bold tracking-widest text-gray-100 md:visible md:flex ">
        <FaPhoneAlt className="w-5 h-5 mx-2" />
        (619) 555-5555
      </a>



    </div>
    <div className="flex flex-row justify-end w-1/4 align-middle">
    <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
      <FaFacebookF  size="1.5rem" className="" />
    </a>
    <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
      <FaTwitter  size="1.5rem" className="" />
    </a>
    <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
      <FaInstagram  size="1.5rem" className="" />
    </a>
    <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
      <FaEnvelope size="1.5rem" className="" />
    </a>
    </div>
  </div>
</div>

      <header className={ " transition-all" + " ease-out" + " duration-300" + (scroll ? ` bg-white` : " bg-white") + (scroll ? " shadow" : "" ) +  (scroll ? ` block` : " hidden" + " lg:block") + " px-4" + " py-5" + " mx-auto" + "msm:max-w-xl" + " w-full" + " md:max-w-full"  + " md:px-16" + " lg:px-8" + " sticky" + " top-0" + " left-0" + " right-0" + (scroll? ` text-blue-800` : ` text-blue-800`) + " z-10" } >
        <nav className="container relative flex items-center justify-between mx-auto font-semibold uppercase font-montserrat">
          <Link
            to="/"
            aria-label="Spartan Plumbing"
            title="Spartan Plumbing"
            className={" text-gray-100" + " inline-flex" + " items-center" + " md:w-56" + " w-40" + (scroll ? " visible" : " invisible")}
          >
              <img src={Logo} alt="Spartan Plumbing Logo" className="w-full" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li className="px-4">
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className={ " tracking-wide" + (scroll? " text-blue-800" :  " text-blue-800") + " transition-colors" + " duration-200" + " hover:text-indigo-300" }
              >
                Services
              </Link>
             
            </li>
            <li className="px-4">
              <a
                href="#"
                aria-label="Service Areas"
                title="Service Areas"
                className={" tracking-wide" + (scroll? " text-blue-800" :  " text-blue-800") + " transition-colors" + " duration-200" + " hover:text-indigo-300" }
              >
                Service Areas
              </a>
            </li>
            <li className="px-4">
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className={" tracking-wide" + (scroll? " text-blue-800" :  " text-blue-800") + " transition-colors" + " duration-200" + " hover:text-indigo-300" }
              >
                About Us
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/contact"
                aria-label="contact"
                title="contact"
                className={" tracking-wide" + (scroll? " text-blue-800" :  " text-blue-800") + " transition-colors" + " duration-200" + " hover:text-indigo-300" }
              >
                Contact Us
              </Link>
            </li>


          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
          <li className="px-4">
              <Link
                to="#"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white whitespace-no-wrap transition duration-200 rounded shadow-md lg:py-2 lg:px-8 bg-red-accent-700 hover:bg-blue-700 hover:text-gray-100 focus:shadow-outline focus:outline-none"
                aria-label="Emergency Services"
                title="Emergency Services"
              >
                Emergency Services
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={"p-2" + " -mr-1" + (scroll? " text-red-700" :  " text-gray-100") + " transition" + " duration-200" + " rounded" + " focus:outline-none" +  " focus:shadow-outline" + " hover:bg-deep-purple-50" + " focus:bg-deep-purple-50"}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-8 text-red-700" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {/*<a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-red-700"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>*/}
                        <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center w-40 text-gray-100"
          >
              <img src={Logo} alt="Spartan Plumbing Logo" className="w-full" />
          </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          aria-label="Services"
                          title="Services"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Service Areas"
                          title="Service Areas"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Service Areas
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          aria-label="About"
                          title="About"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <Link
                          to="/contact"
                          aria-label="Contact us"
                          title="Contact us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact us
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-700 hover:bg-red-accent-400 focus:shadow-outline focus:outline-none"
                          aria-label="contact"
                          title="Contact"
                        >
                      Emergency Services
                        </a>
                      </li>


                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      </>
    );
  };

export default Header2