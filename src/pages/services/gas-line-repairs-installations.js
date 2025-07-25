import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"
import Seo from '../../components/seo';

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const GasLines = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Gas Line Installations & Repairs"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Gas lines are an important component of many homes and businesses, providing fuel for appliances like stoves and heaters. If you suspect a gas leak or need repairs or installation of gas lines, it is important to contact a qualified plumber who can provide expert gas line repair and installation services.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    Gas line repairs and installations should always be handled by a professional plumber to ensure that they are done safely and properly. They have the expertise, tools, and equipment to handle any gas line issue, from small leaks to major repairs.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    A plumber can also help with preventative measures to help avoid future gas leaks or damage. Regular maintenance and inspections of gas lines are crucial to ensuring their safety and efficiency.
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

export default GasLines

export const Head = () => (
    <Seo 
    title="Gas Line Installations & Repair Services "
     />
    )