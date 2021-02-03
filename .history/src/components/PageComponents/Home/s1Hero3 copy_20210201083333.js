const S1Hero3 = () => {
  return (
    <>
<section className="">

    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              We will bring your
              <br className="hidden md:block" />
              business{' '}
              <span className="inline-block text-deep-purple-accent-400">
                online
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <input
                placeholder="Name"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>

<section className="SectionWaves">
<div className="header">
  <div className="flex inner-header">
    {/*<svg version="1.1" className="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
<path fill="#FFFFFF" stroke="#000000" strokeWidth={10} strokeMiterlimit={10} d="M57,283" />
<g>
  <path fill="#fff" d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7      c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2    c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
</g>
</svg>*/}
    {/*<h1>Simple CSS Waves</h1>*/}
    <div className="px-2 d-block">
      {/*<Typist startDelay={100} cursor={{ show: false }}>*/}
        <span
          className="headline" /*style={{ color: "white", textShadow: "2px 2px 4px black" }}*/
        >
          {props.headline}
        </span>
        <br />
        {/*<Typist.Delay ms={800} />*/}
        <span
          className="headline" /*style={{ color: "white", textShadow: "2px 2px 4px black" }}*/
        >
          {props.headline2}
        </span>
        <br />
        <br />
        {/*<Typist.Delay ms={400} />*/}
        <span
          className="subtitle"
          /*style={{
        color: "white",
        letterSpacing: "normal",
        textShadow: "2px 2px 4px black",
      }}*/
        >
          {props.subtitle}
        </span>
        <br />
        {/*<Container className="mt-4">
          <Row>
            <Col>{props.service1}</Col>
            <Col>{props.service2}</Col>
          </Row>
          <Row>
            <Col>{props.service3}</Col>
         
          <Col>{props.service4}</Col>
          </Row>
    </Container>*/}
      {/*</Typist>*/}
    </div>
  </div>
  <Container className="pt-3 mt-3">
    <Row className="justify-content-center">
      <Col xs={10} lg={4}>
        <CalendlyButton />
      </Col>
    </Row>
  </Container>

  {/*Waves Container*/}
  <div>
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={0}
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={3}
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x={48}
          y={5}
          fill="rgba(255,255,255,0.3)"
        />
        <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
      </g>
    </svg>
  </div>
</div>
</section>
    </>
  );
};

export default S1Hero3

