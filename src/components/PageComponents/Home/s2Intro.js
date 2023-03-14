import * as React from 'react';

const S2Intro = (props) => {
  return (
    <>
<section className="text-gray-700 body-font">
  <div className="container flex flex-col items-center px-5 py-16 mx-auto animate-fade-in-bottom lg:px-20 lg:py-24 md:flex-row">
    <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:mr-20 md:items-start md:text-left md:mb-0 lg:text-center">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-center text-blue-900 lg:text-left lg:text-4xl title-font">
      Welcome to Spartan Plumbing and Drain!
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-left text-gray-700 lg:text-left lg:text-xl">
       We are a family owned and operated company serving California in the cities of Escondido, San Marcos, Oceanside, Vista, Poway, Mira Mesa, Miramar, San Diego and Greater San Diego County and Temecula.</p>
       <p className="mb-8 text-lg leading-relaxed text-left text-gray-700 lg:text-left lg:text-xl"> Our team is dedicated to providing quality service at competitive prices. With years of experience in the industry we can guarantee that our services will exceed your expectations. Contact us today for all your plumbing needs!
      </p>
      
      

    </div>
    <div className="w-5/6 align-top animate-fade-in-bottom lg:max-w-lg lg:w-full md:w-1/2">
      <img className="object-cover object-center rounded-lg " alt="hero" src="https://cdn.pixabay.com/photo/2015/05/31/11/24/tap-791172_960_720.jpg?auto=format&q=75&fit=crop&w=720" />
    </div>
  </div>
</section>
    </>
  );
};

export default S2Intro;