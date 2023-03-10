import * as React from "react"

import Layout from "../../components/layout/Layout"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const MaintenanceInspections = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Plumbing Maintenance and Inspections"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Regular plumbing maintenance and inspections are crucial to preventing plumbing problems and ensuring that your system is functioning properly. A professional plumber can provide comprehensive maintenance and inspection services to help you avoid costly repairs and replacements.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    During a plumbing maintenance service, a plumber will inspect your plumbing system for signs of wear and tear, leaks, and other issues. They can provide routine cleaning and maintenance to ensure that your plumbing system is running smoothly and efficiently.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    Regular inspections can help identify potential problems before they become major issues, and prevent plumbing emergencies from occurring. Contact a qualified plumber to schedule regular maintenance and inspections for your plumbing system.
                    </p>


 
                    </>
                } />
        </Layout>
    )
}

export default MaintenanceInspections