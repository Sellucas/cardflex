import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: number;
  cardColor: string;
  bgColor?: string;
}

const whyToUse = [
  "Pagamentos sem contato",
  "Pagamentos móveis",
  "Cartão extra (opcional)",
  "Pagamentos gratuitos em todo o mundo",
  "Retiradas gratuitas em caixas eletrônicos",
];

const PricingCards = ({ title, price, cardColor, bgColor }: PricingCardProps) => {
  return (
    <>
      <div className={`max-w-sm flex flex-col justify-around border-r-2 border-transparent p-4 ${bgColor}`}>
        <h2 className="text-lg text-gray-800 font-bold text-center mb-4">
          {title}
        </h2>
        <div
          className={`flex justify-center items-center text-2xl font-bold text-white w-full h-36 rounded-xl bg-gradient-to-tr ${cardColor}`}
        >
          CardFlex
        </div>
        <div>
          <p className="text-3xl text-gray-800 font-medium text-center my-6">
            R${price}/m
          </p>
          <span className="flex justify-center">
            <Link href={"/getcard"}>
              <PrimaryButton
                text="Obtenha seu cartão"
                hasIcon={true}
                color="400"
              />
            </Link>
          </span>
        </div>
        <div className="mt-6">
          <h3 className="font-medium text-gray-800 mb-4">Recursos incluídos</h3>
          <ul className="flex flex-col gap-2">
            {whyToUse.map((item, index) => (
              <li key={index} className="flex flex-row justify-start items-center text-gray-500">
                <span className="mr-2">
                  <Image
                    src={"/checked.svg"}
                    alt="checked"
                    width={20}
                    height={1}
                  />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
