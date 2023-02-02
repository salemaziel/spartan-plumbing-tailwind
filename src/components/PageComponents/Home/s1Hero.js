import React from 'react';
import Button from "../../Button"
import HeroImage from "../../../svg/HeroImage"

import EstimateForm from '../../EstimateForm';

const S1Hero = (props) => {
  return (
    <>
      <section className="pt-20 md:pt-40 bg lg:mb-10" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${props.bgImage})`, backgroundPosition: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="container px-8 mx-auto lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold leading-none text-gray-300 text-shadow-xl lg:text-5xl xl:text-6xl">
              {props.Title}
            </h1>
            <p className="mt-6 text-xl font-light text-gray-300 text-shadow-xl lg:text-2xl">{props.Description}</p>
            {/*<p className="mt-8 md:mt-12">
              <Button size="lg" className=''>{props.ButtonText}</Button>
            </p>
            <p className="mt-4 text-gray-600">{props.BelowButtonText}</p>*/}
          </div>
          <div className="my-8 lg:w-1/2 md:my-2 lg:-mt-24 lg:mb-8">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero;
