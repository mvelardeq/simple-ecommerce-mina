"use client";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface Props {
  menuActive: boolean;
  handleMenu: () => void;
  handleCross: () => void;
}

export const Navbar = ({ menuActive, handleMenu, handleCross }: Props) => {
  return (
    <nav className="flex gap-[50px]">
      <ul className="hidden md:flex gap-[40px]">
        <li>
          <div className="cursor-pointer flex items-center gap-2">
            <span className="">Shop</span>
            <IoMdArrowDropdown
              size={16}
              className="hover:rotate-180 transition"
            />
          </div>
          <ul className="hidden">
            <li>
              <Link href={"/all-products"}>All products</Link>
            </li>
            <li>
              <Link href={"/new-collection"}>New collection</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"/sustainability"}>Sustainability</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="cursor-pointer flex gap-2 items-center">
        <IoCartOutline size={24} />
        <p className="hidden">Car</p>
        <span>(0)</span>
      </div>
      <div onClick={handleMenu} className={menuActive ? "hidden" : ""}>
        <IoMenuOutline size={28} />
      </div>
      <div onClick={handleCross} className={menuActive ? "" : "hidden"}>
        <RxCross2 size={28} />
      </div>
    </nav>
  );
};
