"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center bg-blue-500 w-full lg:px-60 sm:py-32 sm:grid-cols-2">
      <Slide cascade damping={0.1} direction="down" triggerOnce>
        <div className="flex flex-col items-center w-full text-center px-4 max-w-md sm:text-left xl:px-0">
          <div>
            <h1 className="text-4xl font-bold text-white leading-none mb-6 xl:text-5xl">
              Cartões <br /> físicos e virtuais personalizados para a sua
              empresa
            </h1>
            <p className="text-gray-300 font-light">
              Destaque sua empresa com cartões únicos. Impressione com designs
              exclusivos e materiais de alta qualidade.
            </p>
          </div>
          <div className="w-full mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-start">
            <div className="sm:mr-4">
              <Link href={"/getcard"}>
                <PrimaryButton
                  text="Obtenha seu cartão"
                  hasIcon={true}
                  color="900"
                />
              </Link>
            </div>
            <div>
              <Link href={"/documentation"}>
                <PrimaryButton
                  text="Documentação"
                  hasIcon={false}
                  color="400"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full">
          <Image
            width={500}
            height={1}
            src="/hero.svg"
            alt="CardFlex"
            className="xl:scale-150"
            priority
          />
        </div>
      </Slide>
    </section>
  );
};

export default HeroSection;
