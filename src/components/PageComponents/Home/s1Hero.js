import * as React from 'react';
//import Button from "../../Button"
//import HeroImage from "../../../svg/HeroImage"

import Logo from "../../../images/logo-1-words.png"

import EstimateForm from '../../EstimateForm';

const S1Hero = (props) => {
  return (
    <>
      <section className="pt-20 pb-10 md:pt-24 bg lg:mb-10" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${props.bgImage})`, backgroundPosition: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="container px-6 pt-16 mx-auto lg:px-8 lg:flex">
        <div className="items-center justify-center block w-full mx-auto lg:hidden">
          <img src={Logo} alt="logo" className="mx-auto mb-8 w-80 lg:mb-0" />
        </div>
          <div className="pb-8 mb-4 text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl font-bold leading-relaxed text-gray-300 text-shadow-xl lg:text-5xl xl:text-6xl">
              {props.Title}
            </h1>
            <p className="mt-6 text-xl font-light text-gray-300 text-shadow-xl lg:text-2xl">{props.Description}</p>
            {/*<p className="mt-8 md:mt-12">
              <Button size="lg" className=''>{props.ButtonText}</Button>
            </p>
            <p className="mt-4 text-gray-600">{props.BelowButtonText}</p>*/}
          </div>
          <div className="my-8 lg:w-1/2 md:my-2 lg:-mt-24 lg:mb-8 md:block">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero;
