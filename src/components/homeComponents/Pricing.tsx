"use client";
import React from "react";
import PricingCards from "../common/PricingCards";
import { Slide } from "react-awesome-reveal";

const Pricing = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-6xl relative mt-24">
      <div className="grid grid-cols-1 gap-6 w-full max-w-7xl min-h-fit">
        <div className="flex flex-col gap-6 justify-around items-start">
          <Slide cascade damping={0.1} direction="up" triggerOnce>
            <div className="max-w-4xl flex flex-col justify-between h-44 px-4">
              <h2 className="text-gray-800 text-4xl font-bold xl:text-5xl">
                Conecte todas as suas contas em um único lugar
              </h2>
              <p className="text-gray-500 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                quaerat dolorem asperiores ut nostrum quisquam deleniti
                nesciunt.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 px-4 md:grid-cols-2 xl:grid-cols-4">
              <PricingCards
                title="Iniciante"
                price={0}
                cardColor="from-green-400 to-cyan-800"
              />
              <PricingCards
                title="Premium"
                price={24}
                cardColor="from-blue-400 to-cyan-900"
                bgColor="bg-blue-100"
              />
              <PricingCards
                title="Premium+"
                price={48}
                cardColor="from-cyan-900 via-cyan-500 to-sky-900"
              />
              <PricingCards
                title="Black"
                price={62}
                cardColor="from-indigo-900 to-purple-600"
              />
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
