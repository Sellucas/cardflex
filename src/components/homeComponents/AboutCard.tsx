import Image from "next/image";
import React from "react";

const AboutCard = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full relative">
      <div className="aboslute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="divider h-max"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-500"
          ></path>
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 px-4 lg:grid-cols-3">
        <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
          <Image width={50} height={50} src={"/cards.svg"} alt="cards" />
          <h2 className="text-xl text-gray-700 font-bold">
            Criar cartões personalizados
          </h2>
          <p className="text-gray-700 font-light">
            Crie cartões que operem de acordo com suas configurações,
            proporcionando tomada de decisões em tempo real sobre cobranças e
            despesas.
          </p>
        </div>

        <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
          <Image width={50} height={50} src={"/buycard.svg"} alt="buy card" />
          <h2 className="text-xl text-gray-700 font-bold">
            Criar cartões personalizados
          </h2>
          <p className="text-gray-700 font-light">
            Crie cartões que operem de acordo com suas configurações,
            proporcionando tomada de decisões em tempo real sobre cobranças e
            despesas.
          </p>
        </div>

        <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
          <Image
            width={50}
            height={50}
            src={"/discountcard.svg"}
            alt="discount card"
          />
          <h2 className="text-xl text-gray-700 font-bold">
            Criar cartões personalizados
          </h2>
          <p className="text-gray-700 font-light">
            Crie cartões que operem de acordo com suas configurações,
            proporcionando tomada de decisões em tempo real sobre cobranças e
            despesas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
