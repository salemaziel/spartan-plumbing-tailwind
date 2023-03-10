import * as React from "react"

import Layout from "../../components/layout/Layout"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const Emergency = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Emergency Plumbing Services"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Plumbing emergencies can happen at any time, day or night. From burst pipes to sewer backups, these emergencies can cause serious damage to your property and require immediate attention.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    A professional plumber can provide 24/7 emergency plumbing services to help you when you need it most. They can quickly diagnose and fix any plumbing problem, no matter how big or small.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    It's important to have a reliable plumber on hand in case of emergencies. Contact a qualified plumber who offers emergency plumbing services to ensure that you're always prepared.
                    </p>


 
                    </>
                } />
        </Layout>
    )
}

export default Emergency