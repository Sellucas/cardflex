"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Slide } from "react-awesome-reveal";

const CardSolutions = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full relative mt-24">
      <div className="grid grid-cols-1 gap-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 w-full max-w-7xl min-h-fit rounded-tr-3xl md:rounded-tr-full p-12 sm:grid-cols-2">
        <Slide cascade damping={0.1} direction="up" triggerOnce>
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
              <PrimaryButton
                text="Obtenha seu cartão"
                hasIcon={true}
                color="400"
              />
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
        </Slide>
      </div>
    </section>
  );
};

export default CardSolutions;
