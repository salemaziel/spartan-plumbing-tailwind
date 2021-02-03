import React from 'react';

const S3InfoGrid = (props) => {
  return (
    <>
<section className="container m-auto my-8 font-sans ">
  <div className="text-center">
    <h1 className="my-4 font-medium">Show Your Work</h1>
    <p className="max-w-sm m-auto mb-4 leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div className="flex flex-col flex-wrap my-8 sm:flex-row">
    <div className="flex flex-col items-center justify-center w-full h-48 bg-white border-b border-r border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Digital</h3>
      <p className="hidden px-6 mt-4 leading-normal text-center text-gray-700 hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-48 p-8 bg-white border-b border-r border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Branding</h3>
      <p className="hidden mt-4 leading-normal text-center text-gray-700 hover:block">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-48 p-8 bg-white border-b border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Excellence</h3>
      <p className="hidden mt-4 leading-normal text-center text-gray-700 hover:block">Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-48 p-8 bg-white border-r border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Strategy</h3>
      <p className="hidden mt-4 leading-normal text-center text-gray-700 hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-48 p-8 bg-white border-r border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Design</h3>
      <p className="hidden mt-4 leading-normal text-center text-gray-700 hover:block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-48 p-8 bg-white border-gray-300 sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-0 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 bg-gray-300 rounded-full" alt />
      <h3 className="mt-4 mb-1">Development</h3>
      <p className="hidden mt-4 leading-normal text-center text-gray-700 hover:block">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
    </div>
  </div>
</section>
    </>
  );
};

export default S3InfoGrid;
