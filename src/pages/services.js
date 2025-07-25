import * as React from 'react'
import Layout from '../components/layout/Layout'

import PageBanner from '../components/pageBanner';

//import ServicesPage from "../components/PageComponents/Services/ServicesPage"
import S2Services from '../components/PageComponents/Services/s2Services';
import Seo from '../components/seo';

const Services = () => (
        <Layout>
            <PageBanner
                title="Our Services"
                subtitle="Quality Plumbing Services Tailored to Your Needs"
            />
            <S2Services />


        </Layout>
)


export default Services

export const Head = () => (
    <Seo 
    title="Plumbing Services "
     />
    )
