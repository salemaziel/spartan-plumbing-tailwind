import * as React from 'react'
import Layout from '../components/layout/Layout'

//const BGImage = () 'http://localhost:8000/static/blue-red-pipewrench-58e5436635ba131ec085a8cb5c6d08f7.jpg'

// Set variable BGImage to be a url to the image
import Seo from '../components/seo'
import { Link } from 'gatsby'


const Emergency = () => (
    <Layout>


        <section className="py-20">
            <div className="w-full bg-no-repeat bg-cover h-112" /*style={ }}*/ />
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl p-6 mx-auto text-center bg-white lg:py-20 lg:px-20 rounded-xl">
                    <span className="text-xs font-semibold text-blue-400">Book Here Now</span>
                    <h2 className="mt-8 text-4xl font-semibold mb-14 font-heading">Book An Emergency Dispatch</h2>
                    <form action="#">
                        <div className="relative flex flex-wrap mb-6">
                            <input className="relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0" type="text" placeholder="Daniel" />
                            <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">Name</span>
                        </div>
                        <div className="relative flex flex-wrap mb-6">
                            <input className="relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0" type="email" placeholder="e.g hello@shuffle.dev" />
                            <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">Your email address</span>
                        </div>
                        <div className="relative flex flex-wrap mb-6">
                            <textarea className="relative w-full py-4 pl-4 mb-2 text-sm border rounded resize-none md:mb-0" id={1} type="message" cols={30} rows={10} placeholder="Message..." defaultValue={""} />
                            <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">Your message</span>
                        </div>
                        <button className="inline-block w-full px-6 py-4 text-sm text-white transition duration-200 bg-red-400 rounded hover:bg-red-300">Send message</button>
                    </form>
                </div>
            </div>
        </section>

        <section>
            <div className="py-6 bg-white sm:py-8 lg:py-12">
                <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">Get in touch</h2>
                        <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>
                    {/* text - end */}
                    {/* form - start */}
                    <form className="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">First name*</label>
                            <input name="first-name" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">Last name*</label>
                            <input name="last-name" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">Company</label>
                            <input name="company" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">Email*</label>
                            <input name="email" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">Subject*</label>
                            <input name="subject" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="inline-block mb-2 text-sm text-gray-800 sm:text-base">Message*</label>
                            <textarea name="message" className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300" defaultValue={""} />
                        </div>
                        <div className="flex items-center justify-between sm:col-span-2">
                            <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base">Send</button>
                            <span className="text-sm text-gray-500">*Required</span>
                        </div>
                        <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                    </form>
                    {/* form - end */}
                </div>
            </div>
        </section>



    </Layout>
)

export default Emergency


export const Head = () => (
    <Seo 
    title="Emergency Plumbing Services "
     />
    )