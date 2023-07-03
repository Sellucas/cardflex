"use client";
import Image from "next/image";
import React from "react";

const SideMenu = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="pr-12 border-r-2 border-gray-300">
      <button
        className="text-black cursor-pointer text-xs leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none flex flex-row"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
        Sending money {">"} How do I send money to a bank account or card?
      </button>
      <div
        className={
          "md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className="font-bold text-gray-800 flex flex-col gap-2 p-4 lg:p-12 md:min-w-[300px] text-sm">
          <h2 className="font-bold text-gray-800 text-xl mb-4">
            Popular topics
          </h2>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Welcome</a>
          </li>
          <li>
            <li className="flex flex-row">
              <span className="mr-1">
                <Image
                  src={"/down-arrow-doc.svg"}
                  alt="checked"
                  width={20}
                  height={20}
                />
              </span>{" "}
              <a href="">Sending money</a>
            </li>
            <ul className="ml-8">
              <li className="pl-2 text-gray-500 font-normal flex flex-col gap-2">
                <li>
                  <a href="" className="text-blue-500 font-medium">
                    How do I send money to a bank account or card?
                  </a>
                </li>
                <li>
                  <a href="">What recipient account details do I need?</a>
                </li>
                <li>
                  <a href="">How do I send money to a bank account or card?</a>
                </li>
                <li>
                  <a href="">How do I download my transfer confirmation?</a>
                </li>
                <li>
                  <a href="">How to send money to a specific currency</a>
                </li>
              </li>
            </ul>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Account manager</a>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Card</a>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Credit product</a>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">App feature</a>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Insurance</a>
          </li>
          <li className="flex flex-row">
            <span className="mr-1">
              <Image
                src={"/right-arrow-doc.svg"}
                alt="checked"
                width={20}
                height={20}
              />
            </span>{" "}
            <a href="">Weath and trading</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
