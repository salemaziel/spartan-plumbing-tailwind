import * as React from 'react'
import Layout from '../../components/layout/Layout'

import ServiceAreas from '../../components/PageComponents/ServiceAreas/serviceAreas'

import Seo from '../../components/seo';

const Vista = () => (
        <Layout>
            <ServiceAreas
            cityName='Vista'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106851.52781426717!2d-117.31051854905851!3d33.18497838991262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0b03e71173e7%3A0x785c1389e14bf78d!2sVista%2C%20CA!5e0!3m2!1sen!2sus!4v1611901802050!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default Vista

export const Head = () => (
        <Seo 
        title="Plumbing Services in Vista "
         />
        )