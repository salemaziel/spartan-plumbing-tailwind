import * as React from 'react';
import PageBanner from '../../pageBanner';

import ShakingHands2 from '../../../images/2023/plumber-client-shaking-hands-resized.jpg'

import { Link } from 'gatsby';

const ServicePages = (props) => {
    return (

<section className="px-4 py-12 my-4">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center -mx-2 text-center lg:text-left">
      <div className="px-2 mt-10 lg:w-3/5 lg:pr-10 lg:mt-0">
      <h2 className="mb-6 text-4xl font-semibold leading-tight text-blue-800 lg:text-5xl font-heading">{props.serviceTitle}</h2>
      <p className="mb-8 text-xl text-gray-800">{props.subTitle}</p>
      <div id="content" className="mb-8 text-lg">{props.body}</div>
      </div>
      <div className="px-2 lg:w-2/5 lg:pl-10">
        <img className="object-cover w-full rounded-lg" src={ShakingHands2} alt={props.serviceTitle} />
      </div>

      </div>
      </div>
</section>
)
}

export default ServicePages;