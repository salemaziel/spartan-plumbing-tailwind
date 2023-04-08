import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const Temecula = () => (
        <Layout>
            <ServiceAreas
            cityName='Temecula'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106473.79968011024!2d-117.20084830681441!3d33.493408713762314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6252f51abe23%3A0x68bc0e88a03806a8!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1680840629764!5m2!1sen!2sus'
            countyName='Riverside County'    
             />



        </Layout>
)


export default Temecula

export const Head = () => (
        <Seo 
        title="Plumbing Services in Temecula "
         />
        )