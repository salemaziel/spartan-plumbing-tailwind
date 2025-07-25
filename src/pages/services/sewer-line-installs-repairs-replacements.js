import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"
import Seo from '../../components/seo';

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const Sewer = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Sewer Line Cleaning and Replacement"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Your sewer line is responsible for carrying wastewater away from your home or business, so it's important to keep it running smoothly. Over time, sewer lines can become clogged or damaged, which can lead to backups and other serious problems.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    A professional plumber can provide sewer line cleaning and replacement services to keep your plumbing system functioning properly. They can use specialized equipment to clear out any clogs in the sewer line, and repair or replace any damaged sections.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    It's important to address sewer line problems as soon as possible to avoid further damage and health hazards. Contact a qualified plumber if you suspect any issues with your sewer line.
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

export default Sewer

export const Head = () => (
    <Seo 
    title="Sewer Line Cleaning & Repair Services "
     />
    )