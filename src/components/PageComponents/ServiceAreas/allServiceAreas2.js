import React from "react";


import { Link } from "gatsby";

import Escondido from "../../../images/cities/escondido2.png";
//import MiraMesa from "../../../images/cities/mira-mesa1.jpg";
//import Miramar from "../../../images/cities/miramar1.jpg";
import Oceanside from "../../../images/cities/oceanside2.jpg";
import Poway from "../../../images/cities/poway2.jpeg";
import RanchoBernardo from "../../../images/cities/ranchobernardo2.jpg";
import Vista from "../../../images/cities/vista2.png";
import SanMarcos from "../../../images/cities/sanmarcos2.png";
import SanDiego from "../../../images/cities/sandiego2.jpg";
import Carlsbad from "../../../images/cities/carlsbad2.jpg";
import Temecula from "../../../images/cities/temecula2.jpg";


function AllServiceAreas2() {
    return (
        <>
            <div className="pt-10 pb-32">
                <div className="container w-full px-8 mx-auto 2xl:px-0 xl:px-4">
                   {/*} <div className="flex items-center justify-between">
                        <div className="relative z-0 w-1/3 pr-4 md:w-2/5">
                            <hr className />
                        </div>
                        <div className="text-center w-28">
                            <p className="relative z-20 flex flex-shrink-0 text-base font-light text-center text-gray-900 bg-white">Featured Work</p>
                        </div>
                        <div className="w-1/3 pl-4 md:w-2/5">
                            <hr />
                        </div>
                    </div>*/}
                    <div className="mt-40 md:mt-48">
                        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                            <Link to="/service-areas/san-diego-county/escondido" className="px-2 mt-16 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Escondido} alt="Escondido" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Escondido</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/service-areas/san-diego-county/carlsbad" className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Carlsbad} alt="Carlsbad" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Carlsbad</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/service-areas/san-diego-county/oceanside"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Oceanside} alt="Oceanside" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Oceanside</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-48 ">
                            <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                                <Link to="/service-areas/san-diego-county/poway"   className="px-2 mt-16 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Poway} alt="Poway" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">Poway</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/service-areas/san-diego-county/rancho-bernardo"    className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={RanchoBernardo} alt="Rancho Bernardo" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">Rancho Bernardo</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/service-areas/san-diego-county/san-diego"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={SanDiego} alt="San Diego" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">San Diego</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-40 md:mt-48">
                        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                            <Link to="/service-areas/san-diego-county/san-marcos"   className="px-2 mt-16 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={SanMarcos} alt="San Marcos" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">San Marcos</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/service-areas/riverside-county/temecula"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Temecula} alt="Temecula" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Temecula</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/service-areas/san-diego-county/vista"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                    <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src={Vista} alt="Vista" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Vista</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                       {/* <div className="mt-48 ">
                            <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                                <Link to="#"  className="px-2 mt-16 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src="https://cdn.tuk.dev/assets/templates/reels/building-4.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">City</p>
                                        </div> 
                                    </div>
                                </Link>
                                <Link to="#"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src="https://cdn.tuk.dev/assets/templates/reels/building-5.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">City</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#"  className="px-2 mt-48 group sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                        <img className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" src="https://cdn.tuk.dev/assets/templates/reels/building-6.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">City</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}


export default AllServiceAreas2