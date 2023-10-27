import { useState } from "react";

interface IProps {
  menuToggle: (e: boolean) => void;
}

export const ButtonHamburger = ({ menuToggle }: IProps) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const triggerCallback = () => {
    setToggle((toggle) => (toggle = !toggle));
    menuToggle(toggle);
  };

  return (
    <button
      id="toggler"
      type="button"
      onClick={triggerCallback}
      className="bg-gray-900 inline-flex border-[2px] rounded-xl border-black-2 items-center justify-center p-2 text-gray-400"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>

      <svg
        className="block w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        className="hidden w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
