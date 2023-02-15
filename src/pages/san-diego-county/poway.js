import * as React from 'react'
import Layout from '../../components/layout/Layout'

import ServiceAreas from '../../components/PageComponents/ServiceAreas/serviceAreas'

const Poway = () => (
        <Layout>
            <ServiceAreas
            cityName='Poway'
            cityURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107080.41500636039!2d-117.15600263282442!3d32.99684183143909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbe0b4b1f19627%3A0x324b4a414d8b0467!2sPoway%2C%20CA!5e0!3m2!1sen!2sus!4v1676425421923!5m2!1sen!2sus'
            countyName='San Diego County'    
             />

        </Layout>
)


export default Poway