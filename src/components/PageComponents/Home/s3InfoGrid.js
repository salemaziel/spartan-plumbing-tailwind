import * as React from 'react';

import { Link } from 'gatsby';

const S3InfoGrid = (props) => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto lg:py-10">
    <div className="flex flex-col w-full mb-12 text-left lg:text-center">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-900 sm:text-5xl title-font ">Our Services</h1>
      <p className="mx-auto my-4 text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">We understand how important it is for you that any work done in your home meets high standards both in terms of quality materials used and craftsmanship applied when completing projects. That’s why at Spartan Plumbing & Drain we only use top quality tools from trusted brands with an eye towards ensuring long lasting results every time — guaranteed! </p>
      <p className="mx-auto my-4 text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">No matter what your issue may be, our experienced team of plumbers is dedicated to providing top-notch service for all your plumbing needs.  </p>
      </div>


<div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 xl:gap-8 md:mb-8">
  {/* image - start */}
  <Link to="/services/plumbing-installation-and-repairs" className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80">
    <img src="https://cdn.pixabay.com/photo/2017/09/26/11/10/plumber-2788330_960_720.jpg?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
    <span className="relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5">Plumbing Installations &amp; Repairs</span>
  </Link>
  {/* image - end */}
  {/* image - start */}
  <Link to="" className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80">
    <img src="https://plus.unsplash.com/premium_photo-1661301068444-8ac48208d017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
    <span className="relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5">Water Heater Installations</span>
  </Link>
  {/* image - end */}
  {/* image - start */}
  <Link to="/services/drain-cleaning-and-pipe-repair" className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80">
    <img src="https://cdn.pixabay.com/photo/2016/07/07/15/23/basin-1502544_960_720.jpg?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
    <span className="relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5">Drain Cleaning &amp; Pipe Repair</span>
  </Link>
  {/* image - end */}
  {/* image - start */}
  <Link to="/services/leak-detection-and-prevention" className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80">
    <img src="https://cdn.pixabay.com/photo/2020/12/24/14/15/leaking-tap-5857559_960_720.jpg?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
    <span className="relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5">Leak Detection &amp; Prevention</span>
  </Link>
  {/* image - end */}
</div>






    {/*<div className="flex flex-wrap py-6 -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx={6} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap py-6 -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx={6} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-red-500 bg-red-100 rounded-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="inline-flex items-center mt-3 text-red-500">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="my-20 text-center">
      <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Raw Denim Heirloom Man Braid</h1>
      <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex justify-center mt-6">
        <div className="inline-flex w-16 h-1 bg-red-500 rounded-full" />
      </div>
    </div>

    <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">Button</button>*/}
  </div>
</section>

    </>
  );
};

export default S3InfoGrid;
