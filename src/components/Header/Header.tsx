"use client";

import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { CartStatus } from "./CartStatus";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [cartActive, setCartActive] = useState(false);

  return (
    <>
      <header className="h-[70px] sticky top-0 z-20 w-full">
        <div className="absolute z-20 md:relative md:z-0 w-full bg-white shadow-md px-8 flex justify-between h-full items-center md:px-[60px] lg:px-[170px]">
          <span className="text-xl font-extrabold uppercase">Brand</span>
          <div
            className="flex items-center gap-1 md:order-last cursor-pointer"
            onClick={() => setCartActive(true)}
          >
            <PiBag size={25} />
            <span className="hidden md:block">Cart</span>
            <span>(0)</span>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuActive(!menuActive)}
          >
            <IoMenuOutline size={28} className={menuActive ? "hidden" : ""} />
            <IoClose size={28} className={menuActive ? "" : "hidden"} />
          </button>
        </div>
        <NavBar menuActive={menuActive} />
      </header>
      <CartStatus cartActive={cartActive} setCartActive={setCartActive} />
    </>
  );
};
