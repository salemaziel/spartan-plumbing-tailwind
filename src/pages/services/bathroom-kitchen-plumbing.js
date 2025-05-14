import * as React from "react"

import Layout from "../../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"

import Seo from '../../components/seo';


const BathroomKitchen = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Bathroom & Kitchen Plumbing"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Your bathroom and kitchen are two of the most important rooms in your home, and having a functioning plumbing system is essential. A professional plumber can provide a wide range of bathroom and kitchen plumbing services to keep your plumbing system running smoothly.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    From sink and toilet installation to shower and tub repair, a plumber can handle all of your bathroom plumbing needs. They can also provide garbage disposal installation and repair services for your kitchen.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    It's important to address bathroom and kitchen plumbing problems as soon as possible, as they can cause serious damage to your home if left unchecked. Contact a qualified plumber if you notice any problems with your bathroom or kitchen plumbing.
                    </p>


 
                    </>
                }>
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

export default BathroomKitchen

export const Head = () => (
    <Seo 
    title="Bathroom & Kitchen Plumbing Services "
     />
    )