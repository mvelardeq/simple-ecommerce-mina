"use client";
import { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { NavbarMobile } from "./navbar/NavbarMobile";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(true);
  };
  const handleCross = () => {
    setMenuActive(false);
  };
  return (
    <header className="relative">
      <div className="h-[75px] px-8 md:px-[160px] bg-indigo-200 flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">Mina</span>
        <Navbar
          handleMenu={handleMenu}
          handleCross={handleCross}
          menuActive={menuActive}
        />
      </div>
      <NavbarMobile menuActive={menuActive} />
    </header>
  );
};
