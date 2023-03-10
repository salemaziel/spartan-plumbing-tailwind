import React, { useState } from "react";

import EstimateForm from "./EstimateForm";



const FormButton = (props) => {
    const[modal, showModal] = useState(true);
    // if color is passed in as a prop, use that color, otherwise use the default color
    const color = props.color ? props.color : "bg-blue-800 hover:bg-blue-900";
    return (
        <div>
          {!modal && (   
           
            <div className="fixed top-0 bottom-0 left-0 right-0 z-10 py-12 transition duration-150 ease-in-out bg-gray-800/50" id="modal">
               
                    <div role="alert" className="container relative z-20 w-11/12 max-w-lg mx-auto md:w-2/3">
                        <div className="p-4 bg-gray-100 border border-gray-400 rounded shadow-md md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <EstimateForm />
                            <div className="absolute top-0 right-0 mt-4 mr-5 text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-gray-600 dark:text-gray-400" onClick={()=>showModal(!modal)}>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                
            </div>
            )}
            <div className="flex items-center justify-center w-full py-10" id="getquote">
                <button className={ "px-6 py-4 mx-auto text-lg font-semibold text-white transition duration-150 ease-in-out rounded " + props.color + " rounded focus:outline-none sm:px-8 sm:text-sm"} onClick={()=>showModal(!modal)}>
                    Get A Quote
                </button>
            </div>
        </div>
    );
};
export default FormButton;
