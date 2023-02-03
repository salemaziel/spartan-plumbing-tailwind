import * as React from 'react';

const S2Intro = (props) => {
  return (
    <>
<section className="text-gray-700 body-font">
  <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
    <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:mr-20 md:items-start md:text-left md:mb-0 lg:text-center">
      <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-900 lg:text-left lg:text-4xl title-font">
      Welcome to Spartan Plumbing and Drain!
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-left text-gray-700 lg:text-left lg:text-xl">
       We are a professional plumbing company serving California in the cities of Escondido, San Marcos, Oceanside, Vista, Poway, Mira Mesa, Miramar, San Diego and Greater San Diego County and Temecula.</p>
       <p className="mb-8 text-lg leading-relaxed text-left text-gray-700 lg:text-left lg:text-xl"> Our team is dedicated to providing quality service at competitive prices. With years of experience in the industry we can guarantee that our services will exceed your expectations. Contact us today for all your plumbing needs!
      </p>
      
      
      {/*<p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg>
        </span>
        Ain't no sunshine when she's gone.
      </p>
      <p className="flex items-center mb-2 text-gray-600">
        <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg>
        </span>
        Expensive feature.
      </p>
      <p className="flex items-center mb-6 text-gray-600">
        <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg>
        </span>
        Really good feauture.
      </p>*/}
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <img className="object-cover object-center rounded-lg " alt="hero" src="https://cdn.pixabay.com/photo/2015/05/31/11/24/tap-791172_960_720.jpg?auto=format&q=75&fit=crop&w=720" />
    </div>
  </div>
</section>
    </>
  );
};

export default S2Intro;