import React from "react";




const S2Header = (props) => {
return (
<section className="px-4 py-12 my-4">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center -mx-2 text-center lg:text-left">
      <div className="order-1 px-2 mt-10 lg:w-1/2 lg:pr-10 lg:mt-0 lg:order-none">
        <h2 className="mb-6 text-4xl font-semibold leading-tight lg:text-5xl font-heading">Reliable Service You Can Trust.</h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700">We started our plumbing company with an idea that we should be different from every other plumbing company out there. We want to provide excellent services at honest prices and we believe we’ve delivered on that.</p>
        <p className="mb-8 text-lg leading-relaxed text-gray-700">We have several years of experience in our service area and have helped countless businesses and residences alike with the upkeep and maintenance of their indoor plumbing.</p>
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          We are dedicated to providing you with superior quality and craftsmanship at a fair and reasonable price. You can be assured that our San Diego plumbing repair and installation experts will showcase the same care and concern to your home as they would to their own, and all recommendations will be made with your best interest in mind.
        </p>
      </div>
      <div className="px-2 lg:w-1/2">
        <img className="object-cover w-full rounded-lg" src="https://dummyimage.com/600x500" alt />
      </div>
    </div>
  </div>
</section>

);
};
export default S2Header