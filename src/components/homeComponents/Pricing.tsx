import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import PricingCards from "../common/PricingCards";

const whyToUse = [
  "Pagamentos sem contato",
  "Pagamentos móveis",
  "Cartão extra (opcional)",
  "Pagamentos gratuitos em todo o mundo",
  "Retiradas gratuitas em caixas eletrônicos",
];

const Pricing = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-6xl relative mt-24">
      <div className="grid grid-cols-1 gap-6 w-full max-w-7xl min-h-fit">
        <div className="flex flex-col gap-6 justify-around items-start">
          <div className="max-w-4xl flex flex-col justify-between h-44 px-4">
            <h2 className="text-gray-800 text-4xl font-bold xl:text-5xl">
              Conecte todas as suas contas em um único lugar
            </h2>
            <p className="text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              quaerat dolorem asperiores ut nostrum quisquam deleniti nesciunt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 px-4 md:grid-cols-2 xl:grid-cols-4">
            <PricingCards
              title="Iniciante"
              price={0}
              bgColor="from-green-400 to-cyan-800"
            />
            <PricingCards
              title="Premium"
              price={24}
              bgColor="from-blue-400 to-cyan-900"
            />
            <PricingCards
              title="Premium+"
              price={48}
              bgColor="from-cyan-900 via-cyan-500 to-sky-900"
            />
            <PricingCards
              title="Black"
              price={62}
              bgColor="from-indigo-900 to-purple-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
