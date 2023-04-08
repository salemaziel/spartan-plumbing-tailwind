import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const Carlsbad = () => (
        <Layout>
            <ServiceAreas
            cityName='Carlsbad'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106928.70972212669!2d-117.35801391575536!3d33.12164363622606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3bee59%3A0xa4cb5592fcf65d2f!2sCarlsbad%2C%20CA!5e0!3m2!1sen!2sus!4v1680840584149!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default Carlsbad

export const Head = () => (
        <Seo 
        title="Plumbing Services in Carlsbad"
         />
        )