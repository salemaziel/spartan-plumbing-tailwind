import * as React from 'react';
import PageBanner from '../../pageBanner';

import { Link } from 'gatsby';

const ServiceAreas = (props) => {
    return (
        <>
            <PageBanner
                PageName={props.cityName}
            />


            <section className="py-16 bg-white">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="w-full px-5 mb-4 lg:mb-10">
                            <h2 className="mb-6 text-3xl font-semibold text-blue-900 sm:text-4xl title-font">
                                Plumbing and Repair Services in {props.cityName}
                            </h2>
                            <p className="mx-auto text-lg leading-relaxed text-left lg:text-center lg:w-2/3">
                                We're proud to offer a variety of plumbing services in {props.cityName}, California such as general repairs, drain cleaning, water heater installations, emergency repairs and more. With our expertise in the field combined with our commitment to customer satisfaction makes us the preferred choice for all your plumbing needs!
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="block p-0 pb-10 m-0 leading-6 text-left" style={{ listStyle: 'none' }}>
                <div className="container w-full px-0 py-10 mx-auto my-0 leading-6 " style={{ listStyle: 'none' }}>
                    <div className="flex flex-row flex-wrap justify-center p-0 my-0 text-left" style={{ listStyle: 'none' }}>
                        <div className='w-full lg:w-1/3'>
                            <div className="relative flex-grow-0 flex-shrink-0 w-full h-full max-w-full px-4 py-0 m-0 leading-6 text-left align-middle lg:flex-shrink-0 lg:flex-grow-0 basis-full ">
                                <iframe /*src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106912.80240572542!2d-117.14001754748739!3d33.134705805055646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf35e81c2437b%3A0x1d1c80f7796c5df!2sEscondido%2C%20CA!5e0!3m2!1sen!2sus!4v1611893579282!5m2!1sen!2sus"*/
                                    src={props.cityURL} width="auto" height frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} samesite="Secure" className="w-full h-full p-0 mx-0 mt-0 mb-6 leading-6 border-0 md:w-full" style={{ border: 0 }} />
                            </div>

                        </div>


                        <div className="w-full lg:w-2/3">
                            <div className="relative flex-grow w-full max-w-full px-5 py-0 mx-auto my-6 lg:my-0 basis-0" style={{ listStyle: 'none' }}>
                                <article className="block p-0 mx-auto lg:px-4 " >
                                    <h3 className="p-0 py-6 mx-0 mt-0 mb-2 text-3xl font-semibold text-center text-blue-900" style={{ listStyle: 'none' }}>
                                        What Spartan Plumbing and Drain Can Do For You
                                    </h3>
                                    <p className="mx-auto mb-8 text-lg leading-relaxed text-left" style={{ listStyle: 'none' }}>

                                        We understand the importance of having dependable plumbing services available when you need them most. We pride ourselves on providing dependable services and excellent customer care along with superior craftsmanship in everything we do, offering comprehensive plumbing repairs, installations, maintenance, and emergency service for all your <Link to="#" className="font-semibold text-blue-800" >residential</Link> or <Link to="#" className="font-semibold text-blue-800" >commercial</Link> needs - from  <Link to="#" className="font-semibold text-blue-800" >general repairs</Link> like <Link to="#" className="font-semibold text-blue-800">leaky faucets</Link>, <Link to="#" className="font-semibold text-blue-800" >drain cleaning</Link>, or <Link to="#" className="font-semibold text-blue-800" >pipe repairs</Link>, to more complex projects such as <Link to="#" className="font-semibold text-blue-800" >water heater installations</Link> and new construction installations like <Link to="#" className="font-semibold text-blue-800" >hot tubs </Link> or <Link to="#" className="font-semibold text-blue-800" ></Link><Link to="#" className="font-semibold text-blue-800" >irrigation systems.</Link>
                                    </p>
                                    <p className='mx-auto mb-8 text-lg leading-relaxed text-left' style={{ listStyle: 'none' }}>
                                        We understand how important it is for customers like yourself who need quick response times when they experience any type of issue or problem related their home's plumbing system - That's why every call made by one of clients receives priority attention from one our experienced technicians 24/7/365 days a year; so if you're ever in need professional and reliable services don't hesitate to give us a call.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block p-0 m-0 leading-6 text-left" style={{ listStyle: 'none' }}>
                <div className="container w-full px-4 py-10 mx-auto my-0 leading-6 " style={{ listStyle: 'none' }}>
                    <div className="flex flex-row flex-wrap justify-center p-0 my-0 text-left" style={{ listStyle: 'none' }}>
                        <div className='order-1 w-full lg:w-2/5 lg:order-2'>
                            <div className="relative flex-grow-0 flex-shrink-0 w-full h-full max-w-full px-4 py-0 m-0 leading-6 text-left align-middle lg:flex-shrink-0 lg:flex-grow-0 basis-full ">
                                <img src="https://dummyimage.com/560x500" alt width="auto" height className="object-cover w-full h-full p-0 mx-0 mt-0 mb-6 leading-6 border-0 rounded-lg md:w-full" />
                            </div>

                        </div>


                        <div className="order-2 w-full lg:w-3/5 lg:order-1">
                            <div className="relative flex-grow w-full max-w-full px-5 py-0 mx-auto my-6 lg:my-0 basis-0" style={{ listStyle: 'none' }}>
                                <article className="block p-0 mx-auto lg:px-4 " >
                                    <h3 className="p-0 py-6 mx-0 mt-0 mb-2 text-3xl font-semibold text-center text-blue-900" style={{ listStyle: 'none' }}>
                                        Our Promise
                                    </h3>
                                    <p className="mx-auto mb-8 text-lg leading-relaxed text-left" style={{ listStyle: 'none' }}>
                                        Our team is experienced in all aspects of plumbing work so no matter what issue arises; our technicians have the expertise necessary to get it done quickly and correctly every time; with over 10 years experience serving customers throughout {props.countyName}, trust us when it comes getting your home's plumbing back up & running smoothly once again!
                                    </p>
                                    {/*  <p className="px-0 pt-0 pb-4 mx-auto" style={{ listStyle: 'none', textDecoration: 'none' }}>

                                        As a homeowner, you know that plumbing issues can be some of the most frustrating and time-consuming problems to deal with. That's why it's so important to find a reliable and trustworthy plumber who can provide quality services at an affordable price.
</p>*/}

                                    <p className="mx-auto mb-8 text-lg leading-relaxed text-left" style={{ listStyle: 'none' }}>

                                        Plus, with our 24/7 emergency repair service available throughout {props.cityName}, you never have to worry about burst pipes or sewer line issues again! So if something does happen late at night on weekends - don't hesitate - call us right away for fast response times that will help minimize any further damage caused by these unexpected incidents .
                                    </p>
                                    <p className="mx-auto mb-8 text-lg leading-relaxed text-left" style={{ listStyle: 'none' }}>

                                        Our team also offers preventative maintenance plans which include annual inspections that will help keep your system running efficiently year-round so you can avoid costly repair bills down the road.We are proud to have earned an A+ rating from Better Business Bureau due to our commitment towards providing outstanding service at competitive prices while maintaining ethical business practices with each client we serve .

                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default ServiceAreas