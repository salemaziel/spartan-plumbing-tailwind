import React from 'react'

import S1Hero from "./s1Hero"

import S1Hero3 from "./s1Hero3"

import S2Intro from "./s2Intro"
import S3InfoGrid from "./s3InfoGrid"
import S4Text3Pics from "./s4Text3Pics"
import S4LongCard from "./s4LongCard"
import S5FAQ from "./s5FAQ"

import S2Features from "./s2Features"


import S3SplitSections from './s3SplitSections'
import S4Stats from './s4Stats'
import S5Testimonials from './s5Testimonials'
import S6CTA from './s6CTA'

import S1Hero2 from "./s1Hero2"
import BG from "../../../images/blue-red-pipewrench.jpg"


const HomePage = (props) => {
    return(
        <>
<S1Hero2
bgImage={BG}
/>
<S2Intro />

<S3InfoGrid />

{/*<S4LongCard />*/}

<S4Text3Pics />

<S5FAQ />


        {/*<S1Hero
        Title="Main ti
        tle of your landing page "
        Description="Free landing page template to promote your business startup and generate leads for the
        offered services"
        ButtonText="Get Started"
        BelowButtonText="Sed fermentum felis ut cursu"
        />*/}
       

        {/*<S2Features
        Title="Main Features"
        Card1Title="Service 1"
        Card1Description="An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
        velna vitae auctor integer."
        Card2Title="Service 2"
        Card2Description="An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
        velna vitae auctor integer."
        Card3Title="Service 3"
        Card3Description="An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
        velna vitae auctor integer."
        />*/}

        <S3SplitSections
        Title1="Market Analysis"
        Description1="Our team of enthusiastic marketers will analyse and evaluate how your company stacks
        against the closest competitors"
        Title2="Design And Plan Your Business Growth Steps"
        Description2=" Once the market analysis process is completed our staff will search for opportunities
        that are in reach"
        Title3="Search For Performance Optimization"
        Description3="With all the information in place you will be presented with an action plan that your
        company needs to follow"
        />


        <S6CTA
        Title="Ready to grow your business?"
        Description="Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
        in."
        ButtonText="Get Started Now"
        />




        </>
    )
} 

export default HomePage