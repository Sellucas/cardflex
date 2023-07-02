import Image from "next/image";
import React from "react";

const whyToUse = [
  "Pagamentos sem contato",
  "Pagamentos móveis",
  "Cartão extra (opcional)",
  "Pagamentos gratuitos em todo o mundo",
  "Retiradas gratuitas em caixas eletrônicos",
];

const Pricing = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-6xl relative mt-24">
      <div className="grid grid-cols-1 gap-6 w-full max-w-7xl min-h-fit">
        <div className="flex flex-col gap-6 justify-around items-start">
          <div className="max-w-4xl flex flex-col justify-between h-44 px-4">
            <h2 className="text-gray-800 text-4xl font-bold xl:text-5xl">
              Conecte todas as suas contas em um único lugar
            </h2>
            <p className="text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              quaerat dolorem asperiores ut nostrum quisquam deleniti nesciunt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 px-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="max-w-sm flex flex-col justify-around border-r-2 border-transparent p-4">
              <h2 className="text-lg text-gray-800 font-bold text-center mb-4">
                Iniciante
              </h2>
              <div className="flex justify-center items-center text-2xl font-bold text-white w-full h-36 rounded-xl bg-gradient-to-tr from-green-400 to-cyan-800">
                CardFlex
              </div>
              <div>
                <p className="text-3xl text-gray-800 font-medium text-center my-6">
                  R$0/m
                </p>
                <span className="flex justify-center">
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
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-800 mb-4">
                  Recursos incluídos
                </h3>
                <ul className="flex flex-col gap-2">
                  {whyToUse.map((item) => (
                    <li className="flex flex-row justify-start items-center text-gray-500">
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
            <div className="max-w-sm flex flex-col justify-around border-r-2 border-transparent bg-blue-100 p-4">
              <h2 className="text-lg text-gray-800 font-bold text-center mb-4">
                PREMIUM
              </h2>
              <div className="flex justify-center items-center text-2xl font-bold text-white w-full h-36 rounded-xl bg-gradient-to-tr from-blue-400 to-cyan-900">
                CardFlex
              </div>
              <div>
                <p className="text-3xl text-gray-800 font-medium text-center my-6">
                  R$24/m
                </p>
                <span className="flex justify-center">
                  <button
                    type="button"
                    className="text-white w-fit bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-800 mb-4">
                  Recursos incluídos
                </h3>
                <ul className="flex flex-col gap-2">
                  {whyToUse.map((item) => (
                    <li className="flex flex-row justify-start items-center text-gray-500">
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
            <div className="max-w-sm flex flex-col justify-around border-r-2 border-transparent p-4">
              <h2 className="text-lg text-gray-800 font-bold text-center mb-4">
                PREMIUM+
              </h2>
              <div className="flex justify-center items-center text-2xl font-bold text-white w-full h-36 rounded-xl bg-gradient-to-tr from-cyan-900 via-cyan-500 to-sky-900">
                CardFlex
              </div>
              <div>
                <p className="text-3xl text-gray-800 font-medium text-center my-6">
                  R$48/m
                </p>
                <span className="flex justify-center">
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
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-800 mb-4">
                  Recursos incluídos
                </h3>
                <ul className="flex flex-col gap-2">
                  {whyToUse.map((item) => (
                    <li className="flex flex-row justify-start items-center text-gray-500">
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
            <div className="max-w-sm flex flex-col justify-around border-r-2 border-transparent p-4">
              <h2 className="text-lg text-gray-800 font-bold text-center mb-4">
                Black
              </h2>
              <div className="flex justify-center items-center text-2xl font-bold text-white w-full h-36 rounded-xl bg-gradient-to-tr from-indigo-900 to-purple-600">
                CardFlex
              </div>
              <div>
                <p className="text-3xl text-gray-800 font-medium text-center my-6">
                  R$62/m
                </p>
                <span className="flex justify-center">
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
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-800 mb-4">
                  Recursos incluídos
                </h3>
                <ul className="flex flex-col gap-2">
                  {whyToUse.map((item) => (
                    <li className="flex flex-row justify-start items-center text-gray-500">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
