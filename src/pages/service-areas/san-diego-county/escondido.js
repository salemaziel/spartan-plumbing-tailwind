import * as React from 'react'
import Layout from '../../../components/layout/Layout'

import ServiceAreas from '../../../components/PageComponents/ServiceAreas/serviceAreas'
import Seo from '../../../components/seo';

const Escondido = () => (
        <Layout>
            <ServiceAreas
            cityName='Escondido'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106912.80240572542!2d-117.14001754748739!3d33.134705805055646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf35e81c2437b%3A0x1d1c80f7796c5df!2sEscondido%2C%20CA!5e0!3m2!1sen!2sus!4v1611893579282!5m2!1sen!2sus'
            countyName='San Diego County'    
             />



        </Layout>
)


export default Escondido

export const Head = () => (
        <Seo 
        title="Plumbing Services in Escondido "
         />
        )