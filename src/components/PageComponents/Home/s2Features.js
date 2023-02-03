import * as React from 'react';
import Card from "../../Card"

const S2Features = (props) => {
  return (
    <>
      {/*<section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container px-5 mx-auto text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">{props.Title}</h2>
          <div className="flex flex-col mt-12 sm:flex-row sm:-mx-3">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card1Title}</p>
                <p className="mt-4">
                    {props.Card1Description}
                  
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card2Title}</p>
                <p className="mt-4">
                {props.Card3Description}

                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card3Title}</p>
                <p className="mt-4">
                {props.Card3Description}
                 
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>*/}
      <section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center">Our Features</h2>
        <p class="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" /><circle cx="6" cy="14" r="3" /><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Certifications</h4>
                <p class="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" /><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Notifications</h4>
                <p class="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Bundles</h4>
                <p class="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9l3 3l-3 3" /><line x1="13" y1="15" x2="16" y2="15" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Developer Tools</h4>
                <p class="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="9.5" y1="11" x2="9.51" y2="11" /><line x1="14.5" y1="11" x2="14.51" y2="11" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Building Blocks</h4>
                <p class="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="15" y1="5" x2="15" y2="7" /><line x1="15" y1="11" x2="15" y2="13" /><line x1="15" y1="17" x2="15" y2="19" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Coupons</h4>
                <p class="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
            </div>

        </div>
    </div>
</section>



    </>
  );
};

export default S2Features;
