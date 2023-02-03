import * as React from 'react'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function S2Form() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
              <div className="max-w-lg text-center">
                <h2 className="mb-3 text-4xl font-bold lg:mb-8 lg:text-5xl font-heading">Contact Us</h2>
                <div className="mb-6">
                <h3 className="mb-1 text-2xl text-gray-800">Give Us A Call</h3>
                <a href="tel:6193249396" className="text-lg leading-loose text-gray-500">(619) 324-9396</a>
                </div>
                <div className="mb-6">
                <h3 className="mb-1 text-2xl text-gray-800">Reach Us By Email</h3>
                <p className="text-lg leading-loose text-gray-500">contact@spartanpad.com</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <form
                name="contact"
                //    method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/success"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="form-name" value="contact" />
                <input 
                className="w-full py-3 pl-3 mb-4 leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                type="text"
                id="fullname"
                name="fullname"
                required
                onChange={handleChange}                
                placeholder="Name" />
                <input 
                className="w-full py-3 pl-3 mb-4 leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                type="email" 
                placeholder="E-mail" 
                id="email"
                name="email"
                required
                onChange={handleChange}
                />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                onChange={handleChange}
                className="w-full py-3 pl-3 mb-4 leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <textarea 
                className="w-full p-3 mb-4 leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                cols={30} rows={10} 
                defaultValue={""}
                id="message"
                name="message"
                placeholder="Your Message"
                required
                onChange={handleChange}


                />
                <button className="inline-block w-full px-6 py-3 mr-4 text-lg font-bold leading-loose text-white transition duration-200 bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
                              type="submit"
              id="submit"
              onChange={handleSubmit}
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>




     {/*} <section className="relative text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
          <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg md:w-1/2 sm:mr-10">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
                <a className="leading-relaxed text-blue-500">example@email.com</a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
            name="contact"
            //    method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="form-name" value="contact" />
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
            <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="tel" className="text-sm leading-7 text-gray-600">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
              <textarea id="message"
                name="message"
                placeholder="Your Message"
                required
                onChange={handleChange}
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" defaultValue={""} />
            </div>
            <button
              type="submit"
              id="submit"
              onChange={handleSubmit}
              className="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">Button</button>
          </form>
        </div>
      </section>*/}


    </>
  )
}

export default S2Form