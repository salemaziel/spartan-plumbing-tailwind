import * as React from "react"

import Layout from "../../components/layout/Layout"

import PageBanner from "../../components/pageBanner"

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
                } />
        </Layout>
    )
}

export default Sewer