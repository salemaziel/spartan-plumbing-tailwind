import React, { useState, useEffect, useCallback } from 'react'
import {
//  FaFacebookF,
//  FaTwitter,
//  FaInstagram,
  FaEnvelope,
//  FaMapMarkerAlt,
//  FaYoutube,
  FaPhoneAlt
} from "react-icons/fa"
//import Logo from "../../images/logo-1-words.png"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";


const Header = () => {
//  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

/*  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 60);
    });
  }, []);
*/
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 60);
  }, []);


  return (
    <>
      <Link
        to="/"
        aria-label="Company"
        title="Spartan Plumbing and Drain"
        className="absolute z-20 items-center hidden text-gray-100 bg-white rounded lg:block lg:mt-4 lg:ml-4 lg:p-5 lg:ml-[10%]"
      >
        <StaticImage
                    src="../../images/logo/logo-200x186.png"
                    alt="Spartan Plumbing and Drain Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={200}
                    height={186}
                    
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    className=''
                    imgClassName=''
                    loading='eager'
              />
      </Link>
      {/* End Logo */}

      {/* Begin Blue Part of Top Bar Above Nav*/}
      <div className="flex-row justify-center hidden py-6 mx-auto text-gray-100 bg-logo-blue-500 lg:flex ">

        {/* Begin Centering of Top Bar for Content */}
        <div className="flex justify-center w-full px-2 lg:flex md:px-6 md:justify-between">
          {/* Begin Phone number*/}

          <div className="flex flex-row justify-end md:w-1/3">

            <a href="tel:6193249396" className="flex visible py-2 text-3xl font-bold tracking-widest text-gray-100 font-montserrat lg:text-lg ">
              <FaPhoneAlt className="w-8 h-8 mx-2 lg:w-5 lg:h-5" />
              (619) 324-9396
            </a>


          </div>
          {/* End Phone number*/}

          {/* Begin Socials*/}
          <div className="flex-row justify-end hidden w-1/4 align-middle lg:flex">
            {/*<a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
              <FaFacebookF size="1.5rem" className="" />
            </a>
            <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
              <FaYoutube size="1.5rem" className="" />
  </a>
            <a href="#" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
              <FaInstagram size="1.5rem" className="" />
  </a>*/}
            <a href="mailto:contact@spartanplumbingservices.com" className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-10 md:h-10 ">
              <FaEnvelope size="1.5rem" className="text-white fill-white" />
            </a>
  </div>
          {/* End Socials*/}
        </div>
        {/* End Centering of Top Bar for Content */}
      </div>

      {/* End Blue Part of Top Bar Above Nav*/}

      <header className={" transition-all" + " ease-out" + " duration-300" + (scroll ? ` bg-white bg-opacity-90` : " bg-white") + (scroll ? " shadow" : "") + (scroll ? ` block` : " hidden" + " lg:block") + " px-4" + " py-5" + " mx-auto" + "msm:max-w-xl" + " w-full" + " md:max-w-full" + " md:px-16" + " lg:px-8" + " sticky" + " top-0" + " left-0" + " right-0" + (scroll ? ` text-blue-800` : ` text-blue-800`) + " z-10"} >
        <nav className="container relative flex items-center justify-between mx-auto font-semibold uppercase font-montserrat">
          <Link
            to="/"
            aria-label="Spartan Plumbing"
            title="Spartan Plumbing"
            className={" text-gray-100" + " inline-flex" + " items-center" + " md:w-56" + " w-40" + (scroll ? " visible" : " invisible")}
          >
            <StaticImage
                    src="../../images/logo/logo-200x186.png"
                    alt="Spartan Plumbing and Drain Logo"
                    placeholder="blurred"
                    layout="constrained"
                    height={93}
                    width={100}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    className=''
                    imgClassName=''
                    loading='lazy'
              />

          </Link>
          <div className="items-center hidden space-x-8 lg:flex">
            <div className="px-4 py-4 lg:order-1 group">
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className={" tracking-wide" + " text-lg" + (scroll ? " text-blue-800" : " text-blue-800") + " transition-colors" + " duration-200" + " hover:font-bolder hover:underline hover:text-logo-blue-500"}
              >
                Services
              </Link>
                <ul className="absolute z-10 hidden w-1/3 p-0 mt-4 rounded-lg shadow-lg bg-logo-blue-500 group-hover:block hover:block hover">
                <li>
                <Link to="/services/plumbing-installation-and-repairs" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Plumbing Installations and Repairs</Link>
                </li>
                <li>
                <Link to="/services/leak-detection-and-prevention" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Leak Detection and Prevention</Link>
                </li>
                <li>
                <Link to="/services/water-heater-installations" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Water Heater Installation and Repair</Link>
                </li>
                <li>
                <Link to="/services/drain-cleaning-and-pipe-repair" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Drain Cleaning and Pipe Repairs</Link>
                </li>
                <li>
                <Link to="/services/bathroom-kitchen-plumbing" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Bathroom and Kitchen Plumbing Services</Link>
                </li>
                <li>
                <Link to="/services/gas-line-repairs-installations" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Gas Line Repairs and Installations</Link>
                </li>
                <li>
                <Link to="/services/sump-pump-installations-repairs" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Sump Pump Installation and Repair</Link>
                </li>
                <li>
                <Link to="/services/sewer-line-installs-repairs-replacements" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Sewer Line Installation, Cleaning and Replacements</Link>
                </li>
                <li>
                <Link to="/services/water-treatment-filtration-systems" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Water Treatment and Filtration Systems</Link>
                </li>
                <li>
                <Link to="/services/maintenance-and-inspections" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Plumbing Maintenance and Inspections</Link>
                </li>
                <li>
                <Link to="/services/commercial-plumbing" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Commercial Plumbing Services</Link>
                </li>
                <li>
                <Link to="/services/emergency-plumbing-services" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Emergency Plumbing Services</Link>
                </li>
                </ul>

            </div>
            <div className="px-4 py-4 lg:order-2 group">
              <Link
                to="/service-areas"
                aria-label="Service Areas"
                title="Service Areas"
                className={" tracking-wide" + " text-lg" + (scroll ? " text-blue-800" : " text-blue-800") + " transition-colors" + " duration-200" + " hover:font-bolder hover:underline hover:text-logo-blue-500"}
              >
                Service Areas
              </Link>
              <ul className="absolute z-10 hidden w-56 p-0 mt-4 shadow-lg bg-logo-blue-500 group-hover:block hover:block hover">
                <li>
                <Link to="/service-areas/san-diego-county/escondido" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Escondido </Link>
                </li>

                <li>
                <Link to="/service-areas/san-diego-county/carlsbad" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Carlsbad</Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/oceanside" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Oceanside </Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/poway" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Poway </Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/rancho-bernardo" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Rancho Bernardo</Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/san-diego" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">San Diego</Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/san-marcos" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">San Marcos</Link>
                </li>
                <li>
                <Link to="/service-areas/riverside-county/temecula" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Temecula</Link>
                </li>
                <li>
                <Link to="/service-areas/san-diego-county/vista" className="block px-4 py-4 text-base text-gray-100 transition-colors duration-200 transform rounded bg-logo-blue-500 hover:bg-blue-900 hover:text-white">Vista</Link>
                </li>
                </ul>
            </div>
            <div className="px-4 py-4 lg:order-3">
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className={" tracking-wide" + " text-lg" + (scroll ? " text-blue-800" : " text-blue-800") + " transition-colors" + " duration-200" + " hover:font-bolder hover:underline hover:text-logo-blue-500"}
              >
                About Us
              </Link>
            </div>
            <div className="px-4 py-4 lg:order-4">
              <Link
                to="/contact"
                aria-label="contact"
                title="contact"
                className={" tracking-wide" + " text-lg" +  (scroll ? " text-blue-800" : " text-blue-800") + " transition-colors" + " duration-200" + " hover:font-bolder hover:underline  hover:text-logo-blue-500"}
              >
                Contact Us
              </Link>
            </div>


          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            <div className="px-4 py-4">
              <a href="https://book.housecallpro.com/book/Spartan-plumbing-and-drain-services/bf86201b88a94afa957812c2674e8921"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center h-12 px-6 tracking-wide text-white whitespace-no-wrap transition duration-200 rounded shadow-md lg:py-2 lg:px-8 bg-red-accent-700 hover:bg-blue-800 hover:text-gray-100 focus:shadow-outline focus:outline-none"
                aria-label="Book Online"
                title="Book Online"
              >
                Book Online
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={"p-2" + " -mr-1" + (scroll ? " text-red-700" : " text-gray-100") + " transition" + " duration-200" + " rounded" + " focus:outline-none" + " focus:shadow-outline" + " hover:bg-logo-blue-500" + " focus:bg-logo-blue-500"}
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
                        title="Spartan Plumbing and Drain"
                        className="inline-flex items-center w-40 text-gray-100"
                      >
                        <StaticImage
                    src="../../images/logo/logo-200x186.png"
                    alt="Spartan Plumbing and Drain Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={160}
                    height={47}
                    aspectRatio={160/47}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    className='w-full'
                    imgClassName='w-full'
                    loading='lazy'
              />
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
                        <Link
                          href="/about"
                          aria-label="About"
                          title="About Us"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Services"
                          title="Services"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-areas"
                          aria-label="Service Areas"
                          title="Service Areas"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Service Areas
                        </Link>
                      </li>


                      <li>
                        <Link
                          to="/contact"
                          aria-label="Contact"
                          title="Contact"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <a href="https://book.housecallpro.com/book/Spartan-plumbing-and-drain-services/bf86201b88a94afa957812c2674e8921"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-700 hover:bg-red-accent-400 focus:shadow-outline focus:outline-none"
                          aria-label="Book Online"
                          title="Book Online"
                        >
                          Book Online
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

export default Header
