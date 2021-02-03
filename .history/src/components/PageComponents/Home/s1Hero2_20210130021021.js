import React from 'react';
import Button from "../../Button"
import HeroImage from "../../../svg/HeroImage"

const S1Hero = (props) => {
  return (
    <>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              {props.Title}
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">{props.Description}</p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">{props.ButtonText}</Button>
            </p>
            <p className="mt-4 text-gray-600">{props.BelowButtonText}</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default S1Hero;
