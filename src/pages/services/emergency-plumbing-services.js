import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"

import Seo from '../../components/seo';

import {
    FaPhoneAlt
  } from "react-icons/fa"

const Emergency = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Emergency Plumbing Services"
                subTitle=""
                body={
                                    <>


                    <h3 className="mb-6 text-xl text-gray-700">
                    Experiencing an emergency? Call now for immediate assistance!
                    </h3>
            <a href="tel:6193249396" className="flex visible text-3xl font-bold tracking-widest text-red-700 font-montserrat lg:text-lg ">
              <FaPhoneAlt className="w-8 h-8 mx-2 lg:w-5 lg:h-5" />
              (619) 324-9396
            </a>

                    <p className="mb-6 text-xl text-gray-700">
                    Plumbing emergencies can happen at any time, day or night. From burst pipes to sewer backups, these emergencies can cause serious damage to your property and require immediate attention.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    A professional plumber can provide 24/7 emergency plumbing services to help you when you need it most. They can quickly diagnose and fix any plumbing problem, no matter how big or small.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    It's important to have a reliable plumber on hand in case of emergencies. You never know when you might need one, and it's better to be prepared than sorry!
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    If you are experiencing any of these problems, call us now at <a className="text-blue-500" href="tel:1-800-123-4567">1-800-123-4567</a> for immediate assistance!
                    </p>


 
                    </>
                } >
                <StaticImage
                    src="../../images/2023-2/plumber-van-behind.jpg"
                    alt="Our Friendly plumbers"
                    placeholder="blurred"
                    layout="constrained"
                    width={576}
                    height={384}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={95}
                    imgClassName='object-cover object-center rounded-lg'
                    loading='lazy'
                    />
                    </ServicePages>
        </Layout>
    )
}

export default Emergency

export const Head = () => (
    <Seo 
    title="Emergency Plumbing Services "
     />
    )