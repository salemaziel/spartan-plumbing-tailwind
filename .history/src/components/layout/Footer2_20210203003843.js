import React from 'react';

const Footer2 = () => (
<footer className="text-gray-100 bg-blue-700">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap justify-between -mx-4">
      <div className="w-full px-4 my-4 md:w-1/3">
        <h2 className="mb-6 text-xl">Contact</h2>
        <ul className="mb-6">
          <li className="flex items-center mb-2">
            <div className="mr-4 text-gray-100">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
            </div>
            <div>
              <a href="http://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-500">
                Tailwindow Street, California, USA
              </a>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <div className="mr-4 text-gray-100">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
              </svg>
            </div>
            <div>
              <a href="mailto:info@tailwindow.com" className="text-gray-100 hover:text-yellow-500">info@tailwindow.com</a>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <div className="mr-4 text-gray-100">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
            </div>
            <div>
              <a href="tel:+18245946369" className="text-gray-100 hover:text-yellow-500">+1 8245 946 369</a>
            </div>
          </li>
        </ul>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-sm hover:bg-gray-700">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </a>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-sm hover:bg-gray-700">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </a>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-sm hover:bg-gray-700">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-sm hover:bg-gray-700">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-sm hover:bg-gray-700">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
        </a>
      </div>
      <div className="w-full px-4 my-4 md:w-1/3">
        <h2 className="mb-6 text-xl">Latest Posts</h2>
        <ul>
          <li>
            <a href="#" className="flex mb-2 text-gray-100 hover:text-yellow-500">
              <img className="rounded-sm" src="https://picsum.photos/id/121/40" alt="article 1" />
              <div className="ml-3 overflow-hidden">
                <h3 className="font-semibold truncate">
                  How to use TailwindCSS with Vuejs and Laravel Mix
                </h3>
                <span className="block text-xs text-gray-500">July 17, 2020</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex mb-2 text-gray-100 hover:text-yellow-500">
              <img className="rounded-sm" src="https://picsum.photos/id/122/40" alt="article 2" />
              <div className="ml-3 overflow-hidden">
                <h3 className="font-semibold truncate">
                  5 Tips to Make Responsive Website
                </h3>
                <span className="block text-xs text-gray-500">June 06, 2020</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex mb-2 text-gray-100 hover:text-yellow-500">
              <img className="rounded-sm" src="https://picsum.photos/id/123/40" alt="article 3" />
              <div className="ml-3 overflow-hidden">
                <h3 className="font-semibold truncate">
                  What Is Flex And When to Use It?
                </h3>
                <span className="block text-xs text-gray-500">May 28, 2020</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex mb-2 text-gray-100 hover:text-yellow-500">
              <img className="rounded-sm" src="https://picsum.photos/id/124/40" alt="article 4" />
              <div className="ml-3 overflow-hidden">
                <h3 className="font-semibold truncate">
                  How TailwindCSS Can Help Your Productivity?
                </h3>
                <span className="block text-xs text-gray-500">March 15, 2020</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex mb-2 text-gray-100 hover:text-yellow-500">
              <img className="rounded-sm" src="https://picsum.photos/id/125/40" alt="article 4" />
              <div className="ml-3 overflow-hidden">
                <h3 className="font-semibold truncate">
                  Getting Started With HTML and CSS
                </h3>
                <span className="block text-xs text-gray-500">February 14, 2020</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full px-4 my-4 md:w-1/3">
        <h2 className="mb-6 text-xl">Send Us Message</h2>
        <form>
          <div className="mb-2">
            <label htmlFor="email" className="text-xs text-gray-200">Email</label>
            <input id="email" type="email" className="block w-full px-4 py-1 text-gray-700 border border-gray-400 rounded-sm text-md focus:outline-none focus:border-gray-500" placeholder="john@example.com" />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="text-xs text-gray-200">Message</label>
            <textarea id="message" cols={30} rows={3} className="block w-full px-4 py-1 text-gray-700 border border-gray-400 rounded-sm text-md focus:outline-none focus:border-gray-500" placeholder="I have something in mind" defaultValue={""} />
          </div>
          <button className="px-4 py-2 text-gray-100 bg-gray-600 rounded-sm hover:bg-gray-700 focus:outline-none">Send</button>
        </form>
      </div>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-between py-4 -mx-4">
      <div className="w-full px-4 text-center sm:w-auto">
        <a href="/" className="inline-flex">
          <svg className="w-40" version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(0 -75)">
                <g transform="translate(0 75)">
                  <rect width={512} height={512} rx={128} fill="#3D5AFE" />
                  <rect x={149} y={176} width={220} height={220} fill="#fff" />
                  <circle cx={259} cy={156} r={40} fill="#fff" />
                  <circle cx={369} cy={286} r={40} fill="#2962FF" />
                </g>
                <text fill="white" fontFamily="Nunito-Bold, Nunito" fontSize={512} fontWeight="bold">
                  <tspan x={654} y={518}>Tailwindow</tspan>
                </text>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="w-full px-4 text-center sm:w-auto sm:text-left">
        Copyright © 2020
      </div>
    </div></div></footer>

);

export default Footer2;