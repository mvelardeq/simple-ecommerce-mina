import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  menuActive: boolean;
}
export const NavBar = ({ menuActive }: Props) => {
  const [dropLinkActive, setDropLinkActive] = useState(false);

  return (
    <nav
      className={`${
        menuActive ? "top-full" : "-top-[280%]"
      } absolute z-10 py-4 bg-white w-full left-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-right px-8 duration-500 ease-out md:z-30 md:w-auto shadow-md md:shadow-none`}
    >
      <ul className="flex flex-col gap-2 md:flex-row md:flex md:gap-14">
        <li className="md:relative md:hover:underline md:hover:underline-offset-[6px]">
          <div
            className="flex justify-end items-center cursor-pointer gap-2"
            onClick={() => setDropLinkActive(!dropLinkActive)}
          >
            <span>Shop</span>
            <IoMdArrowDropdown
              className={`duration-500 ${dropLinkActive ? "rotate-180" : ""}`}
            />
          </div>
          <ul
            className={`${
              dropLinkActive ? " " : "hidden"
            } md:absolute md:text-start pr-4 md:top-[120%] md:left-0 md:w-[160px] md:rounded-md md:duration-500 md:px-6 md:py-4 md:bg-white`}
          >
            <li className="md:hover:underline md:hover:underline-offset-[6px] md:mb-2">
              <Link href={"/dashboard"}>All products</Link>
            </li>
            <li className="md:hover:underline md:hover:underline-offset-[6px]">
              <Link href={"/dashboard"}>New collection</Link>
            </li>
          </ul>
        </li>
        <li className="md:relative md:hover:underline md:hover:underline-offset-[6px]">
          <Link href={"/dashboard"}>Sustainability</Link>
        </li>
        <li className="md:relative md:hover:underline md:hover:underline-offset-[6px]">
          <Link href={"/dashboard"}>About</Link>
        </li>
        <li className="md:relative md:hover:underline md:hover:underline-offset-[6px]">
          <Link href={"/dashboard"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
