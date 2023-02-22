import * as React from "react"
import Layout from "../components/layout/Layout"

import PageBanner from "../components/pageBanner"

import { Link } from 'gatsby'

const ServiceAreas = () => {
    return (
        <Layout>
            <PageBanner 
            PageName="Service Areas" />

            <section className="pt-10 pb-32">
                <div className="container w-full px-8 mx-auto 2xl:px-0 xl:px-4">
                    {/*<div className="flex items-center justify-between">
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
                            <Link to="/san-diego-county/escondido" className="px-2 mt-16 sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-1.png" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Escondido</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/san-diego-county/oceanside" className="px-2 mt-48 sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                    <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-2.png" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">Oceanside</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/san-diego-county/poway" className="px-2 mt-48 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                        <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-6.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">Poway</p>
                                        </div>
                                    </div>
                                </Link>

                        <div className="mt-48 ">
                            <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                            <Link to="/san-diego-county/san-diego" className="px-2 mt-48 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2">
                                <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500">
                                    <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-3.png" />
                                    <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                        <hr className="w-16 bg-white border-2 border-white" />
                                        <p className="ml-2 text-2xl font-light leading-normal text-white">San Diego</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/san-diego-county/san-marcos" className="px-2 mt-48 sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-5.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">San Marcos</p>
                                        </div>
                                    </div>
                                </Link>

                        
                                <Link to="/san-diego-county/vista" className="px-2 mt-16 sm:flex sm:items-center sm:justify-center md:mt-0 xl:w-1/3 sm:w-1/2">
                                    <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
                                        <img className="object-cover object-center w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-4.png" />
                                        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
                                            <hr className="w-16 bg-white border-2 border-white" />
                                            <p className="ml-2 text-2xl font-light leading-normal text-white">Vista</p>
                                        </div>
                                    </div>
                                </Link>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
    }

export default ServiceAreas