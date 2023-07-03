import React from "react";
import Image from "next/image";
import SideMenu from "./SideMenu";

const Documentation = () => {
  return (
    <div className="flex flex-col max-w-7xl mt-24 md:flex-row">
      <div className="bg-white">
        <SideMenu />
      </div>
      <div className="p-12">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 text-xl flex flex-row items-center">
            <span className="mr-2">
              <Image src={"/support.svg"} alt="checked" width={60} height={1} />
            </span>
            Enviar dinheiro
          </h3>
          <h1 className="text-gray-800 text-4xl font-medium xl:text-5xl">
            Como faço para enviar dinheiro para uma conta bancária ou cartão?
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet
            how to manage anything malesuada proin libero nunc consequat
            interdum varius. Quam pellentesque nec nam aliquam sem et tortor
            consequat. Pellentesque adipiscing commodo elit at imperdiet.
          </p>
          <p className="text-gray-500">
            Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum
            sit amet justo donec enim diam. Varius sit amet mattis vulputate
            enim nulla aliquet porttitor. Odio pellentesque diam volutpat
            commodo sed. Elit sed vulputate mi sit amet mauris commodo quis
            imperdiet.
          </p>
          <h2 className="font-bold text-gray-800">
            Enviando dinheiro para conta bancária
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            minima similique tempora aliquid, est accusamus ad fuga saepe at
            labore! Accusantium sequi quidem asperiores illum ipsam veniam
            obcaecati. Ullam, modi!
          </p>
          <h2 className="font-bold text-gray-800">
            Enviando dinheiro para um cartão
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            sapiente sunt. Voluptas ex quibusdam provident dolorum rem rerum
            repudiandae cupiditate illo numquam! Excepturi aperiam, eaque alias
            perferendis voluptate eum aliquam! Accusantium sequi quidem
            asperiores illum ipsam veniam obcaecati. Ullam, modi!
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laudantium esse voluptatibus, minima incidunt quis voluptatem,
            expedita, necessitatibus laboriosam nesciunt temporibus? Esse
            commodi minima voluptatem necessitatibus quibusdam amet ipsum
            voluptatum?
          </p>
          <h2 className="font-bold text-gray-800">Conclusão</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, quis
            enim lobortis scelerisque fermentum, neque sodales ut etiam sit amet
            how to manage anything malesuada proin libero nunc consequat
            interdum varius, nec pellentesque nec nam aliquam sem et tortor
            consequat. Pellentesque adipiscing commodo elit here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
