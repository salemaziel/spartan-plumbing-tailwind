import * as React from 'react'
import Layout from '../../components/layout/Layout'

import ServiceAreas from '../../components/PageComponents/ServiceAreas/serviceAreas'

const Oceanside = () => (
        <Layout>
            <ServiceAreas
            cityName='Oceanside'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106801.52160796218!2d-117.3875816479452!3d33.22595592766106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc655e605b7705%3A0x19ecb3f398f9f87!2sOceanside%2C%20CA!5e0!3m2!1sen!2sus!4v1612262413646!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default Oceanside