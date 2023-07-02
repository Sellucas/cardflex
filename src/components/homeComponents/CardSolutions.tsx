import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardSolutions = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full relative mt-24">
      <div className="grid grid-cols-1 gap-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 w-full max-w-7xl min-h-fit rounded-tr-3xl md:rounded-tr-full p-12 sm:grid-cols-2">
        <div className="flex flex-col gap-6 justify-around items-start">
          <h2 className="text-white text-4xl font-bold xl:text-5xl">
            Crie um programa de cartão flexível para as necessidades da sua
            empresa
          </h2>
          <p className="text-gray-300 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quaerat dolorem asperiores ut nostrum quisquam deleniti nesciunt.
            Distinctio saepe ipsa molestiae totam possimus sint adipisci nisi
            recusandae mollitia! Officia, minus.
          </p>
          <Link href={"/getcard"}>
            <button
              type="button"
              className="text-white w-fit bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
          </Link>
          <aside className="flex flex-row justify-between">
            <Image width={35} height={35} src={"/avatar.svg"} alt="avatar" />
            <p className="text-gray-300 font-light pl-2">
              "Nós conhecemos muito bem o mercado de cartões e este produto
              oferece a velocidade, modelo de conta flexível e abordagem
              API-first que mais ninguém pode oferecer."
            </p>
          </aside>
        </div>
        <div>
          <Image
            width={700}
            height={700}
            src={"/bill-card.svg"}
            alt="bill card"
          />
        </div>
      </div>
    </section>
  );
};

export default CardSolutions;
