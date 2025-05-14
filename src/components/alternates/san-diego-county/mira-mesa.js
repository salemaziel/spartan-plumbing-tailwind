import * as React from 'react'
import Layout from '../../components/layout/Layout'

import ServiceAreas from '../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../components/seo';

const MiraMesa = () => (
        <Layout>
            <ServiceAreas
            cityName='Mira Mesa'
            countyName='San Diego County'    
             />



        </Layout>
)


export default MiraMesa

export const Head = () => (
        <Seo 
        title="Plumbing Services in Mira Mesa "
         />
        )