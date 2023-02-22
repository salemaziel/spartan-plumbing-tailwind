import React from "react";

import { FaPhoneAlt } from 'react-icons/fa'



const CallButton = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-full py-10" id="callnow">
                <a href="tel:6193249396" className="px-6 py-4 mx-auto text-lg font-semibold text-white transition duration-150 ease-in-out rounded bg-red-accent-700 focus:outline-none hover:bg-red-900 sm:px-8 sm:text-sm" /*onclick={()=>showModal(!modal)}*/ >
                    <FaPhoneAlt className="inline-block mr-2" />
                    Call Now
                </a>
            </div>
        </div>
    );
};
export default CallButton;
