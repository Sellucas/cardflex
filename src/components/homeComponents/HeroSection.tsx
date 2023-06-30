import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-blue-500 w-full sm:py-32 lg:py-48 sm:flex-row">
      <div className="flex flex-col items-center w-full text-center px-4 max-w-lg sm:text-left xl:px-0">
        <div>
          <h1 className="text-4xl font-bold text-white leading-none mb-6 xl:text-5xl">
            Cartões <br /> físicos e virtuais personalizados para a sua empresa
          </h1>
          <p className="text-gray-300 font-light">
            Destaque sua empresa com cartões únicos. Impressione com designs
            exclusivos e materiais de alta qualidade.
          </p>
        </div>
        <div className="w-full mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-start">
          <div className="sm:mr-4">
            <button
              type="button"
              className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 w-fit focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            >
              Obtenha seu cartão
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="text-white w-fit bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Leia a documentação
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex w-full h-96 max-w-xl">
        <Image fill src="/hero.svg" alt="CardFlex" />
      </div>
    </section>
  );
};

export default HeroSection;
