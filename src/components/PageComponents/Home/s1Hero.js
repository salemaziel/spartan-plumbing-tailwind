import * as React from 'react';
//import HeroImage from "../../../svg/HeroImage"
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../../../images/logo-1-words.png"

import EstimateForm from '../../EstimateForm';

import CallButton from '../../callButton';
import FormButton from '../../formButton';


const S1Hero = ({ bgImage, Title, Description }) => {
  return (
    <>
      <section className="static pt-20 pb-10 md:pt-24 bg lg:mb-10" 
              style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${bgImage})`, 
                    backgroundPosition: "cover", 
                    backgroundRepeat: "no-repeat"}}
                    >
        <span className="absolute w-1/2 top-1 left-1 md:hidden" >
            <a className='' href="https://www.bbb.org/us/ca/escondido/profile/plumber/spartan-plumbing-and-drain-inc-1126-1000111493/#sealclick" target="_blank" rel="nofollow">
              {/*<img className='w-3/4' src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-150-110-whitetxt-bbb-1000111493.png" style={{border: 0}} alt="Spartan Plumbing and Drain Inc BBB Business Review" />*/}
              <StaticImage
                    src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-150-110-whitetxt-bbb-1000111493.png"
                    alt="Spartan Plumbing and Drain Inc BBB Business Review"
                    placeholder="blurred"
                    layout="constrained"
                    width={150}
                    height={110}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    imgClassName='w-3/4 border-0'
                    loading='eager'
                    />
            </a>
          </span>
        <div className="container px-6 pt-16 mx-auto lg:px-8 lg:flex">
        <div className="items-center justify-center block w-full mx-auto lg:hidden">
          {/*<img src={Logo} alt="logo" className="mx-auto mb-8 w-80 lg:mb-0" />*/}
          <StaticImage
                    src="../../../images/logo-1-words.png"
                    alt="Spartan Plumbing and Drain Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={320}
                    height={94}
                    aspectRatio={160/47}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    className='mx-auto mb-8 w-80 lg:mb-0'
                    loading='eager'
              />
        </div>
       
          <div className="pb-8 mb-4 text-center animate-fade-in-fwd lg:text-left lg:w-1/2">
            <h1 className="text-3xl font-bold leading-relaxed text-gray-300 text-shadow-xl lg:text-5xl xl:text-6xl">
              {Title}
            </h1>
            <p className="mt-6 text-xl font-light text-gray-300 text-shadow-xl lg:text-2xl">{Description}</p>
            <div className="hidden w-full mx-auto md:justify-start sm:justify-center md:flex md:flex-row md:my-5">
              <a className href="https://www.bbb.org/us/ca/escondido/profile/plumber/spartan-plumbing-and-drain-inc-1126-1000111493/#sealclick" target="_blank" rel="nofollow">
                {/*<img className='' src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000111493.png" style={{border: 0}} alt="Spartan Plumbing and Drain Inc BBB Business Review" />*/}
                <StaticImage
                    src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000111493.png"
                    alt="Spartan Plumbing and Drain Inc BBB Business Review"
                    placeholder="blurred"
                    layout="constrained"
                    width={293}
                    height={61}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    quality={80}
                    imgClassName='border-0'
                    loading='eager'
                    />
              </a>


            </div>
          </div>
       
          <div className="hidden my-8 animate-fade-in-fwd lg:w-1/2 md:my-2 lg:-mt-24 lg:mb-8 lg:block">
            <EstimateForm />
          </div>
          <div className="flex flex-row w-full my-8 justify-evenly md:my-2 lg:-mt-24 lg:mb-8 lg:hidden">
            <CallButton />
            <FormButton
            color="bg-logo-blue-500"
             />
            </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero;
