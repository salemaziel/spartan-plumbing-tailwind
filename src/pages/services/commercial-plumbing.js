import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
import Seo from '../../components/seo';


const Commercial = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Commercial Plumbing Services"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Commercial plumbing systems are often more complex and require specialized expertise to install, maintain, and repair. A professional plumber can provide commercial plumbing services for businesses of all types and sizes, including plumbing installations, repairs, and maintenance.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    Commercial plumbing systems can be more prone to wear and tear due to higher usage, so it's important to have regular maintenance and inspections to ensure their efficiency and safety. A qualified plumber can provide routine maintenance and repairs for your commercial plumbing system to avoid costly repairs and replacements.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    From large-scale installations to routine maintenance, a professional plumber can provide the expertise and services necessary to keep your business running smoothly.
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

export default Commercial

export const Head = () => (
    <Seo 
    title="Commercial Plumbing Services "
     />
    )