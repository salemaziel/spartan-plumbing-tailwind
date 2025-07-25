import * as React from 'react';

import Layout from '../components/layout/Layout';

import Seo from '../components/seo';

import S1Hero from '../components/PageComponents/Home/s1Hero';
import S2Intro from '../components/PageComponents/Home/s2Intro';
import S3InfoGrid from '../components/PageComponents/Home/s3InfoGrid';

import BG from '../images/blue-red-pipewrench.jpg';
//import HomePage from "../components/PageComponents/Home/HomePage"

const Index = () => (
  <Layout>
            <S1Hero
                bgImage={BG}
                Title="Quality Plumbing Services You Can Trust"
                Description="Serving the greater San Diego area and Temecula, offering a wide range of plumbing services for both residential and commercial properties. "
            />
            <S2Intro />
            <S3InfoGrid />




  </Layout>
);

export default Index


export const Head = () => (
    <Seo 
    title="Quality Plumbing You Can Trust"
     />
    )
