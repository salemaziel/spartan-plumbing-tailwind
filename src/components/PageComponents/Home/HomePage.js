import * as React from 'react'

import S1Hero from "./s1Hero"
import S2Intro from "./s2Intro"
import S3InfoGrid from "./s3InfoGrid"
import S5Testimonials from './s5Testimonials'
//import S6FAQ from "./s6FAQ"
import S7CTA from './s7CTA'

import BG from "../../../images/blue-red-pipewrench.jpg"




const HomePage = (props) => {
    return (
        <>
            <S1Hero
                bgImage={BG}
                Title="Quality Plumbing Services You Can Trust"
                Description="Serving the greater San Diego area and Temecula, offering a wide range of plumbing services for both residential and commercial properties. "
            />

            <S2Intro />



            <S3InfoGrid />

            {/*<S5Testimonials />*/}


            {/*<S6FAQ />*/}




        </>
    )
}

export default HomePage