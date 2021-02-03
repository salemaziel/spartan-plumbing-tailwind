import React from 'react'

import S1Banner from "./s1Banner"
import S2Split from './s2Split'

import BG from "../../../images/blue-red-pipewrench.jpg"


const AboutPage = (props) => {
    return(
        <>
            <S1Banner
            bgImage={BG}
            />

            <S2Split />



        </>
    )
} 

export default AboutPage