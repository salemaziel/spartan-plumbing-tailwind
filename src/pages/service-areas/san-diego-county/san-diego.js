import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const SanDiego = () => (
        <Layout>
            <ServiceAreas
            cityName='San Diego'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429157.54675741366!2d-117.389166995983!3d32.824240427869604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1676425367124!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default SanDiego

export const Head = () => (
        <Seo 
        title="Plumbing Services in San Diego "
         />
        )