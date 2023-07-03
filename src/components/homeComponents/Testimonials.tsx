"use client";
import Image from "next/image";
import React from "react";
import Carousel from "../common/Carousel";
import { Slide } from "react-awesome-reveal";

const whyToUse = [
  "Verificações de identidade",
  "Tokenização segura de dados de cartão de crédito",
  "Pagamentos online e móveis",
  "Regulamentações e conformidade globais",
];

const Testimonials = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-8 w-full max-w-7xl p-12 relative mt-24 md:grid-cols-2">
      <Slide cascade damping={0.1} direction="up" triggerOnce>
        <div className="w-full h-auto order-1 sm:-order-1">
          <Carousel />
        </div>
        <div className="flex flex-col gap-6 justify-around items-start">
          <h2 className="text-gray-800 text-4xl font-medium xl:text-5xl">
            Cartão desenvolvido para empresas e profissionais
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
                {whyToUse.map((item) => (
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
        </div>
      </Slide>
    </section>
  );
};

export default Testimonials;
