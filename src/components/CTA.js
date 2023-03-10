import * as React from 'react';

import Button from "./Button"

import FormButton from './formButton';

const CTA = (props) => {
  return (
    <>
      <section className="w-full py-24 mt-10 text-center bg-blue-700">
        {/*<h3 className="text-5xl font-semibold">{props.Title}</h3>
        <p className="mt-8 text-xl font-light">
            {props.Description}
          
        </p>
        <p className="mt-8">
          <Button size="xl">{props.ButtonText}</Button>
  </p>*/}


<div className="container mx-auto rounded-lg bg-gray-50">
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {/*<span className="block">{props.CTALine1}</span>*/}
      <span className="block text-indigo-600">{props.CTALine2}</span>
    </h2>
    <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex mx-auto rounded-md">
        {/*<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-red-800 border border-transparent rounded-md hover:bg-red-900">
          {props.Button1Text}
        </a>*/}
        <FormButton
        color="bg-red-accent-700 hover:bg-red-accent-800"
         />
      </div>
      {/*(<div className="inline-flex ml-3 rounded-md shadow">
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50">
          Learn more
        </a>
      </div>*/}
    </div>
  </div>
</div>
</section>
    </>
  );
};

export default CTA;
