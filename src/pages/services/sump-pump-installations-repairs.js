import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"
import Seo from '../../components/seo';

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const SumpPump = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Sump Pump Installations and Repairs"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Sump pumps are an important part of many homes, helping to prevent flooding and water damage. If you have a basement or live in an area prone to flooding, it is important to have a working sump pump.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    A professional plumber can provide expert sump pump installation and repair services to ensure that your home is protected from flooding and water damage. They can help you choose the right sump pump for your needs, and provide ongoing maintenance and repairs to keep it functioning properly.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    It's important to have your sump pump inspected and maintained regularly to ensure that it is ready to perform when you need it most. Contact a qualified plumber if you need sump pump installation or repair services.
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

export default SumpPump

export const Head = () => (
    <Seo 
    title="Sump Pump Installation & Repair Services "
     />
    )