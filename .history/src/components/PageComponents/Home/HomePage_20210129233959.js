import React from 'react'

import S1Hero from "./s1Hero"
import S2Features from "./s2Features"
import S3SplitSections from './s3SplitSections'
import S4Stats from './s4Stats'


const HomePage = (props) => {
    return(
        <>
        <S1Hero
        Title="Main title of your landing page "
        Description="Free landing page template to promote your business startup and generate leads for the
        offered services"
        ButtonText="Get Started"
        BelowButtonText="Sed fermentum felis ut cursu"
        />

        <S2Features
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
        />

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
        
        <S4Stats />



        </>
    )
} 

export default HomePage