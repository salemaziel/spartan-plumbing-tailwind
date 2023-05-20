import * as React from 'react';

import Button from "./Button"

import BG from '../images/plumbing-585658_1920.jpg'

import FormButton from './formButton';

const CTA = (props) => {
  return (
    <>
      <section className="w-full py-24 mt-10 text-center" style={{ backgroundImage: `linear-gradient(to top, rgba(21,101,192,0.6), rgba(21,101,192,0.6)), url(${BG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="container max-w-md mx-auto rounded-lg md:max-w-7xl bg-gray-50">
  <div className="px-8 py-8 mx-auto md:max-w-7xl sm:px-6 lg:py-16 lg:px-12 lg:flex lg:items-center lg:justify-evenly">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {/*<span className="block">{props.CTALine1}</span>*/}
      <span className="block text-logo-blue-500">{props.CTALine2}</span>
    </h2>
    <div className="flex mt-4 lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex mx-auto rounded-md">

        <FormButton
        color="bg-red-accent-700 hover:bg-red-accent-800"
         />
      </div>
    </div>
  </div>
</div>
</section>
    </>
  );
};

export default CTA;
