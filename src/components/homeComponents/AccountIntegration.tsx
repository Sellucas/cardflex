"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

const AccountIntegration = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full relative mt-24">
      <div className="grid grid-cols-1 gap-6 bg-gradient-to-r from-blue-900 to-blue-500 w-full max-w-7xl min-h-fit rounded-tr-3xl p-12 md:p-24">
        <div className="flex flex-col gap-6 justify-around items-start">
          <Slide cascade damping={0.1} direction="up" triggerOnce>
            <div className="max-w-4xl flex flex-col justify-between h-44">
              <h2 className="text-white text-4xl font-bold xl:text-5xl">
                Conecte todas as suas contas em um único lugar
              </h2>
              <p className="text-gray-300 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                quaerat dolorem asperiores ut nostrum quisquam deleniti
                nesciunt.
              </p>
            </div>
            <div className="flex justify-center items-center w-full py-8">
              <Image width={700} height={1} src={"/banks.png"} alt="banks" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 px-4 lg:grid-cols-3">
              <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
                <Image
                  width={50}
                  height={50}
                  src={"/number-1.svg"}
                  alt="cards"
                />
                <h2 className="text-xl text-gray-300 font-bold">Baixe o app</h2>
                <p className="text-gray-300 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perferendis fugiat quidem mollitia explicabo animi.
                </p>
              </div>

              <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
                <Image
                  width={50}
                  height={50}
                  src={"/number-2.svg"}
                  alt="buy card"
                />
                <h2 className="text-xl text-gray-300 font-bold">
                  Solicite seu cartão
                </h2>
                <p className="text-gray-300 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perferendis fugiat quidem mollitia explicabo animi.
                </p>
              </div>

              <div className="max-w-sm flex flex-col justify-around h-48 border-r-2 border-transparent lg:border-gray-300">
                <Image
                  width={50}
                  height={50}
                  src={"/number-3.svg"}
                  alt="discount card"
                />
                <h2 className="text-xl text-gray-300 font-bold">
                  Conecte todas as suas contas
                </h2>
                <p className="text-gray-300 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perferendis fugiat quidem mollitia explicabo animi.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default AccountIntegration;
