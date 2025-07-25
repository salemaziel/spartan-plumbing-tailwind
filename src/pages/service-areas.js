import * as React from "react"
import Layout from "../components/layout/Layout"

import PageBanner from "../components/pageBanner"

//import AllServiceAreas from "../components/PageComponents/ServiceAreas/allServiceAreas"

import AllServiceAreas2 from "../components/PageComponents/ServiceAreas/allServiceAreas2"
import Seo from '../components/seo';
//import { Link } from 'gatsby'

const ServiceAreas = () => {
    return (
        <Layout>
            <PageBanner
                PageName="Service Areas" />



            <AllServiceAreas2 />

        </Layout>
    )
}

export default ServiceAreas


export const Head = () => (
    <Seo 
    title="Service Areas "
     />
    )
