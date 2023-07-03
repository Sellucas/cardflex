"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

const physicalStores = [
  "Walmart",
  "Nike",
  "H&M",
  "Apple Store",
  "Sephora",
  "Best Buy",
  "IKEA",
  "Starbucks",
];

const onlineStores = [
  "Mercado Livre",
  "Amazon",
  "eBay",
  "Alibaba",
  "ASOS",
  "Newegg",
  "iHerb",
  "Netflix",
];

const CashbackRewards = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-8 w-full max-w-7xl p-12 relative mt-24 md:grid-cols-2">
      <Slide cascade damping={0.1} direction="up" triggerOnce>
        <div className="flex flex-col gap-6 justify-around items-start">
          <h2 className="text-gray-800 text-4xl font-medium xl:text-5xl">
            Receba recompensas de cashback em suas marcas favoritas
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dolore rerum voluptatem enim illo quasi, reprehenderit odit beatae
            repellat at, earum laborum provident atque eligendi facilis
            necessitatibus id sit deserunt?
          </p>
          <div className="flex flex-row gap-24">
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-800">Lojas físicas</h3>
              <ul className="flex flex-col gap-2">
                {physicalStores.map((item) => (
                  <li className="flex flex-row justify-start items-center text-gray-500">
                    <span className="mr-2">
                      <Image
                        src={"/checked.svg"}
                        alt="checked"
                        width={20}
                        height={20}
                      />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-800">Lojas online</h3>
              <ul className="flex flex-col gap-2">
                {onlineStores.map((item) => (
                  <li className="flex flex-row justify-start items-center text-gray-500">
                    <span className="mr-2">
                      <Image
                        src={"/checked.svg"}
                        alt="checked"
                        width={20}
                        height={20}
                      />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-4">
            <Link href={"/getcard"}>
              <button
                type="button"
                className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 w-fit focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
          </div>
        </div>
        <div className="mt-16 md:mt-32">
          <Image width={400} height={1} src={"/cashback.png"} alt="cash back" />
        </div>
      </Slide>
    </section>
  );
};

export default CashbackRewards;
