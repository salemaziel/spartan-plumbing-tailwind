import React from 'react'

import S1Hero from "./s1Hero"
import S2Features from "./s2Features"


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



        </>
    )
} 

export default HomePage