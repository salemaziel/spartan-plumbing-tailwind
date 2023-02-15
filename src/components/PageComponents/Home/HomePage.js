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
                Description="We are a family owned and operated business serving the greater San Diego area. We are licensed, bonded and insured and we offer a wide range of plumbing services for both residential and commercial properties."
            />

            <S2Intro />



            <S3InfoGrid />

            <S5Testimonials />


            {/*<S6FAQ />*/}


            <S7CTA
                Title="Ready to grow your business?"
                CTALine1="Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
        in."
                CTALine2="Contact us to schedule your estimate today"
                Button1Text="Get Started"
            />




        </>
    )
}

export default HomePage