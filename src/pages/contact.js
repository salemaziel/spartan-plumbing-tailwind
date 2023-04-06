import * as React from 'react';
import Layout from "../components/layout/Layout"
import ContactPage from '../components/PageComponents/Contact/ContactPage';

import Seo from '../components/seo'

const Contact = () => (
    <Layout>
        <ContactPage />

    </Layout>
  );

export default Contact;


export const Head = () => (
  <Seo 
  title="Contact Us "
   />
  )