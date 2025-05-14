import * as React from 'react'
import Layout from '../../components/layout/Layout'

import ServiceAreas from '../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../components/seo';

const Miramar = () => (
        <Layout>
            <ServiceAreas
            cityName='Miramar'
            countyName='San Diego County'    
             />



        </Layout>
)


export default Miramar

export const Head = () => (
        <Seo 
        title="Plumbing Services in Miramar "
         />
        )