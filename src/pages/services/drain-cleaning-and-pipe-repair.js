import * as React from "react"

import Layout from "../../components/layout/Layout"

import PageBanner from "../../components/pageBanner"

import ServicePages from "../../components/PageComponents/ServicePages/servicePages"


{                       /*<h2 className="mb-6 text-4xl font-semibold leading-tight text-blue-800 lg:text-5xl font-heading">What is Drain Cleaning?</h2>
<p className="mb-6 text-xl text-gray-700">Drain cleaning is the process of removing clogs from your drains. Clogs can be caused by a variety of factors, including hair, grease, food, and other debris. If left untreated, clogs can cause serious damage to your plumbing system, including leaks and flooding.</p>


<p className="mb-6 text-xl text-gray-700">Pipe repair is the process of repairing damaged pipes. Pipes can become damaged for a variety of reasons, including corrosion, freezing, and tree root intrusion. If left untreated, damaged pipes can cause serious problems for your plumbing system, including leaks and flooding.</p>
<p className="mb-6 text-xl text-gray-700">A professional plumber can provide a wide range of drain cleaning and pipe repair services to help you avoid these problems. </p>
<p className="mb-6 text-xl text-gray-700">
It's important to address drain and pipe problems as soon as possible, as they can cause serious damage to your property and lead to more costly repairs down the line. Contact a qualified plumber as soon as you notice a problem with your drains or pipes.</p>*/}

const DrainCleaningPipeRepair = () => {
    return (
        <Layout>
            <PageBanner PageName="" />

            <ServicePages
                serviceTitle="Drain Cleaning &amp; Pipe Repair"
                subTitle=""
                body={
                    <>
                    <p className="mb-6 text-xl text-gray-700">Clogged drains and damaged pipes can cause serious problems for your plumbing system. A professional plumber can provide expert drain cleaning and pipe repair services to help you avoid these problems.</p>
                    <p className="mb-6 text-xl text-gray-700">Using specialized tools and techniques, a plumber can quickly and efficiently remove clogs and repair damaged pipes. They can also provide preventative measures to help avoid future clogs and damage, such as regular cleaning and maintenance.</p>
                    <p className="mb-6 text-xl text-gray-700">It's important to address drain and pipe problems as soon as possible, as they can cause serious damage to your property and lead to more costly repairs down the line. Contact a qualified plumber as soon as you notice a problem with your drains or pipes.</p>

 
                    </>
                } />

        </Layout>
    )
}

export default DrainCleaningPipeRepair

