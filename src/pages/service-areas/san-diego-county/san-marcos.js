import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const  SanMarcos = () => (
        <Layout>
            <ServiceAreas
            cityName='San Marcos'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53456.562989135666!2d-117.20532742207938!3d33.1344401514397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8aa88854fc77%3A0xb0e74ec3e5b47b47!2sSan%20Marcos%2C%20CA!5e0!3m2!1sen!2sus!4v1611901900594!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default  SanMarcos

export const Head = () => (
        <Seo 
        title="Plumbing Services in San Marcos "
         />
        )