import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

import PageBanner from "../../components/pageBanner"
import Seo from '../../components/seo';

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"

const PlumbingInstallationRepairs = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Plumbing Installation & Repairs"
                subTitle=""
                body={
                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Plumbing installations and repairs are essential to keeping your plumbing system running smoothly. </p>
                    <p className="mb-6 text-xl text-gray-700">
                    Whether you are building a new home or need repairs to your existing system, a qualified plumber can provide expert installation and repair services for all of your plumbing needs. From replacing a leaky faucet to repairing a burst pipe, a skilled plumber can quickly and efficiently diagnose and fix any problem with your plumbing system.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    When it comes to plumbing installations, it is important to choose the right components and materials for your system. A professional plumber can help you choose the right parts and ensure that your new installation meets all local building codes and regulations.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    For repairs, a plumber can quickly identify the root cause of the problem and provide a lasting solution. They can also perform routine maintenance and inspections to prevent future problems and keep your plumbing system in top condition.
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

export default PlumbingInstallationRepairs

export const Head = () => (
    <Seo 
    title="Plumbing Installation & Repair Services "
     />
    )