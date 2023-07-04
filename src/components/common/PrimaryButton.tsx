import React from "react";

interface PrimaryButtonProps {
  text: string;
  hasIcon: boolean;
  color: string;
}

const PrimaryButton = ({ text, hasIcon, color }: PrimaryButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`text-white w-fit bg-blue-${color} hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center min-w-max`}
      >
        {text}
        {hasIcon && (
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
        )}
      </button>
    </>
  );
};

export default PrimaryButton;
