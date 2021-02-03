import React from 'react';
import Card from "../../Card"

const S2Features = (props) => {
  return (
    <>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container px-5 mx-auto text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">{props.Title}</h2>
          <div className="flex flex-col mt-12 sm:flex-row sm:-mx-3">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card1Title}</p>
                <p className="mt-4">
                    {props.Card1Description}
                  
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card2Title}</p>
                <p className="mt-4">
                {props.Card3Description}

                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="text-xl font-semibold">{props.Card3Title}</p>
                <p className="mt-4">
                {props.Card3Description}
                 
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default S2Features;
