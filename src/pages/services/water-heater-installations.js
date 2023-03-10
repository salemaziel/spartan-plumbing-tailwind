import * as React from "react"

import Layout from "../../components/layout/Layout"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"
const WaterHeaterInstallations = () => {
    return (
        <Layout>
            <PageBanner PageName="" />
            <ServicePages
                serviceTitle="Water Heater Installations"
                subTitle=""
                body={
                                    <>
                    <p className="mb-6 text-xl text-gray-700">
                    Your water heater is an essential component of your plumbing system, providing hot water for showers, washing dishes, and other household tasks. A professional plumber can provide expert water heater installation services to help you choose the right unit for your needs and ensure that it is installed properly.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    There are many different types of water heaters available, from traditional tank units to modern tankless models. A plumber can help you choose the right unit for your home or business based on your needs, budget, and other factors.
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                    They can also provide ongoing maintenance and repairs to ensure that your water heater continues to function properly. Whether you need a new water heater installed or an existing unit repaired, a qualified plumber can help.
                    </p>


 
                    </>
                } />
        </Layout>
    )
}

export default WaterHeaterInstallations