import React from "react"


const EstimateForm = (props) => {
    return(
        <>
                  <form 
          name="estimateform"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/#"
          className="flex-col w-full p-6 bg-gray-100 rounded-lg md:p-8 md:mt-10 md:w-3/4 md:flex md:mx-auto lg:mr-0 ">
            <h2 className="mb-5 text-lg font-medium text-center text-gray-900 title-font">Get A Free Estimate</h2>
            <div className="relative mb-3">

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="estimateform" />

              <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">
                Full Name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-3">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-3">
              <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
                Phone*
              </label>
              <input
                type="tel"
                id="tel"
                name="phone"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-3">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">
              What Can We Help You With?
              </label>
            <textarea 
            id="message" 
            name="message" 
            className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />
          </div>

            <button className="w-full px-8 py-2 text-lg text-white bg-red-800 border-0 rounded focus:outline-none hover:bg-green-600">
              Submit
            </button>
          </form>

        </>
    )
}

export default EstimateForm