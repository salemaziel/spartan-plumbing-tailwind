import React from "react";

import { Link } from "gatsby";

import ServiceBlurb from "./serviceBlurb";


const S2Services = (props) => {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-end justify-between mb-12">
            <div className="w-full mb-4 md:w-auto md:mb-0">

              <h3 className="mt-2 text-2xl font-bold text-logo-blue-500 lg:text-4xl font-heading">Services We Offer</h3>
            </div>
          </div>




          <div className="py-10 bg-white">


            <ServiceBlurb
              items={[
                {
                  ServiceTitle: "Plumbing Installations and Repairs",
                  ServiceDescription: "We provide expert installation and repair services for all plumbing needs, from faucets and fixtures to pipes and valves.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Plumbing Installations and Repairs",
                  slug: "plumbing-installations-and-repairs",
                },
                {
                  ServiceTitle: "Leak Detection and Prevention",
                  ServiceDescription: "We offer comprehensive leak detection and prevention services to quickly identify and fix leaks, helping customers save money and avoid further damage.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Leak Detection and Prevention",
                  slug: "leak-detection-and-prevention",
                },
                {
                  ServiceTitle: "Water Heater Installation and Repair",
                  ServiceDescription: "We provide professional water heater installation services to help you choose the right water heater to install for your needs.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Water Heater Installation and Repair",
                  slug: "water-heater-installation-and-repair",
                },
                {
                  ServiceTitle: "Drain Cleaning and Pipe Repairs",
                  ServiceDescription: "We provide expert drain cleaning and pipe repair services, including snaking and jetting, and pipe replacement, to keep your plumbing systems in top condition and running smoothly.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Drain Cleaning and Pipe Repairs",
                  slug: "drain-cleaning-and-pipe-repairs",
                },
                {
                  ServiceTitle: "Bathroom and Kitchen Plumbing Services",
                  ServiceDescription: "We provide expert installation and repair services for a range of bathroom and kitchen plumbing systems, including sink, toilet, and fixture installations, shower and tub repair.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Bathroom and Kitchen Plumbing Services",
                  slug: "bathroom-and-kitchen-plumbing-services",
                },
                {
                  ServiceTitle: "Gas Line Repairs and Installations",
                  ServiceDescription: "We provide expert gas line repair and installation services, including gas line leak detection and repair, gas line installation, and gas line replacement, ensuring that your gas lines are safe and functioning properly.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Gas Line Repairs and Installations",
                  slug: "gas-line-repairs-and-installations",
                },
                {
                  ServiceTitle: "Sump Pump Installation and Repair",
                  ServiceDescription: "We provide expert sump pump installation and repair services, including sump pump installation, sump pump repair, and sump pump replacements.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Sump Pump Installation and Repair",
                  slug: "sump-pump-installation-and-repair",
                },
                {
                  ServiceTitle: "Sewer Line Installation, Cleaning and Replacements",
                  ServiceDescription: "We provide expert sewer line installation, cleaning and replacement services, including sewer line installation, sewer line cleaning, sewer line replacement, and sewer line repair.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Sewer Line Installation, Cleaning and Replacements",
                  slug: "sewer-line-installation-cleaning-and-replacements",
                },
                {
                  ServiceTitle: "Water Treatment and Filtration Systems",
                  ServiceDescription: "We offer water treatment and filtration system installation and maintenance services, helping to ensure that your water is clean and safe to use.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Water Treatment and Filtration Systems",
                  slug: "water-treatment-and-filtration-systems",
                },
                {
                  ServiceTitle: "Plumbing Maintenance and Inspections",
                  ServiceDescription: "We offer comprehensive plumbing maintenance and inspection services to keep your plumbing system in top condition.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Plumbing Maintenance and Inspections",
                  slug: "plumbing-maintenance-and-inspections",
                },
                {
                  ServiceTitle: "Commercial Plumbing Services",
                  ServiceDescription: "We provide expert commercial plumbing services, including commercial plumbing installation, commercial plumbing repair, and commercial plumbing maintenance.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Commercial Plumbing Services",
                  slug: "commercial-plumbing-services",
                },
                {
                  ServiceTitle: "Emergency Plumbing Services",
                  ServiceDescription: "We offer quick-response emergency plumbing services to dispatch to your home as soon as possible, whenever emergency may strike, day or night.",
                  imageSrc: "https://dummyimage.com/500x500",
                  imageAlt: "Emergency Plumbing Services",
                  slug: "emergency-plumbing-services",
                },
              ]}
            />

          </div>
        </div>
      </section>



    </>
  );
};
export default S2Services
