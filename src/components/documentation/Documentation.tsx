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
            Sending money
          </h3>
          <h1 className="text-gray-800 text-4xl font-medium xl:text-5xl">
            How do I send money to a bank account or card?
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
            Sending money to bank account
          </h2>
          <p className="text-gray-500">
            To transfer any of over 30 supported fiat currencies to a bank
            account, on the main accounts screen tap transfer (button with two
            arrows at the bottom of the screen) → New → Add a bank recipient.
            You'll be asked to add the bank transfer details for either an
            Individual, or a Business if you're paying a company.
          </p>
          <h2 className="font-bold text-gray-800">Sending money to card</h2>
          <p className="text-gray-500">
            Enter the details of the card you want to send money to. If you have
            the card at hand, you can take a picture of the front of the card or
            tap the back of your phone against the card to capture the card
            number. Hit 'Save securely' which saves the card number details so
            you won't have to re-enter it next time.
          </p>
          <p className="text-gray-500">
            Enter the amount you wish to send and below the currency, you can
            choose from which currency balance the amount will be deducted.
            There is also an option to add a note to yourself, but it is not
            required and won't be sent to the beneficiary.
          </p>
          <h2 className="font-bold text-gray-800">Conclusion</h2>
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
