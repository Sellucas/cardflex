"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Slide } from "react-awesome-reveal";

const PaymentEverywhere = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-8 w-full max-w-7xl p-12 relative mt-24 sm:grid-cols-2">
      <Slide cascade damping={0.1} direction="up" triggerOnce>
        <div className="order-1 sm:-order-1">
          <Image
            width={500}
            height={500}
            src={"/world-wide.svg"}
            alt="bill card"
          />
        </div>
        <div className="flex flex-col gap-6 justify-around items-start">
          <h2 className="text-gray-800 text-4xl font-medium xl:text-5xl">
            Gaste seu dinheiro em qualquer lugar, pague a qualquer um sem
            esforço
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro
            velit quidem, labore earum voluptatum consequatur, maxime delectus,
            sit maiores eveniet eius fuga vero distinctio aliquam sapiente.
            Accusantium, ratione culpa!
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
            <p className="text-gray-500 font-light pl-2">
              &quot;Nós conhecemos muito bem o mercado de cartões e este produto
              oferece a velocidade, modelo de conta flexível e abordagem
              API-first que mais ninguém pode oferecer.&quot;
            </p>
          </aside>
        </div>
      </Slide>
    </section>
  );
};

export default PaymentEverywhere;
