import * as React from 'react';
//import PageBanner from '../../pageBanner';


const ServicePages = ({ serviceTitle, body, children}) => {
    return (

<section className="px-4 py-4 my-4 md:py-12">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center -mx-2 text-center lg:text-left">
      <div className="px-2 mt-4 lg:w-3/5 lg:pr-10 lg:mt-0">
      <h2 className="mb-6 text-3xl font-semibold leading-tight text-blue-800 lg:text-5xl font-heading">{serviceTitle}</h2>
      {/*<p className="mb-8 text-xl text-gray-800">{props.subTitle}</p>*/}
      <div id="content" className="mb-8 text-lg text-left">{body}</div>
      </div>
      <div className="px-4 lg:w-2/5 lg:pl-10">
        {children}
      </div>

      </div>
      </div>
</section>
)
}

export default ServicePages;