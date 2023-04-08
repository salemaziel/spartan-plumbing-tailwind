import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const RanchoBernardo = () => (
        <Layout>
            <ServiceAreas
            cityName='Rancho Bernardo'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53517.702123578674!2d-117.15017802450178!3d33.033913973224244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf12cd83c7fe9%3A0xf6b4d76751a17a60!2sRancho%20Bernardo%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1680840539881!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default RanchoBernardo

export const Head = () => (
        <Seo 
        title="Plumbing Services in Rancho Bernardo "
         />
        )