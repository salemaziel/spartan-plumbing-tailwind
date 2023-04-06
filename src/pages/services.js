import * as React from 'react'
import Layout from '../components/layout/Layout'

import ServicesPage from "../components/PageComponents/Services/ServicesPage"

const Services = () => (
        <Layout>
            <ServicesPage />



        </Layout>
)


export default Services

export const Head = () => (
    <Seo 
    title="Plumbing Services "
     />
    )