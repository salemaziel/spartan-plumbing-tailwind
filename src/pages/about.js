import * as React from 'react'
import Layout from '../components/layout/Layout'

import AboutPage from "../components/PageComponents/About/AboutPage"

const About = () => (
        <Layout>
            <AboutPage />



        </Layout>
    )

export default About

export const Head = () => (
    <Seo 
    title="About Us "
     />
    )