import * as React from 'react';

import Layout from '../components/layout/Layout';

import Seo from '../components/seo';


import HomePage from "../components/PageComponents/Home/HomePage"

const Index = () => (
  <Layout>
    <HomePage />




  </Layout>
);

export default Index


export const Head = () => (
    <Seo 
    title="Spartan Plumbing & Drain | Quality Plumbing You Can Trust"
     />
    )