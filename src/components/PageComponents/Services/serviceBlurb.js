import * as React from "react";

import { Link } from "gatsby";


const ServiceBlurb = (props) => {
    return (
        <div className="flex flex-wrap items-stretch -mx-4">

            {props.items.map((item, index) => (
                <div className="block w-full h-full px-4 py-12 md:w-1/3" key={index}>
                    <Link to={"/services/" + (`${item.slug}`)} className="py-12 my-6">
                        <img
                            className="object-cover w-full rounded-t-lg rounded-b-none h-80"
                            src={item.imageSrc}
                            alt={item.imageAlt} />
                        <div className="flex flex-col px-8 py-4 bg-white rounded-t-none rounded-b-lg shadow-lg">
                            <h3 className="mt-4 mb-6 text-2xl font-bold text-logo-blue-500 font-heading">{item.ServiceTitle}</h3>
                            <p className="mb-2 text-lg font-medium text-gray-700 font-heading">{item.ServiceDescription}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ServiceBlurb