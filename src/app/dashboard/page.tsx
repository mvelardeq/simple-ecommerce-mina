"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import imageFirst from "../assets/images/first.png";
import articleOne from "../assets/images/article-1.png";
import articleTwo from "../assets/images/article-2.png";
import articleThree from "../assets/images/article-3.png";
import articleFour from "../assets/images/article-4.png";
import homeDecor from "../assets/images/home-decor-item.png";
import aboutMina from "../assets/images/about-mina.png";
import sustainability from "../assets/images/sustainability.png";
import signUpImage from "../assets/images/sign-up-image.png";

export default function Page() {
  const [menuActive, setMenuActive] = useState(false);

  const [dropLinkActive, setDropLinkActive] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white md:fixed shadow-md px-8 flex justify-between h-[70px] items-center md:px-[60px] lg:px-[170px]">
        <span className="text-xl font-extrabold uppercase">Brand</span>
        <div className="flex items-center gap-1 md:order-last cursor-pointer">
          <PiBag size={25} />
          <span className="hidden md:block">Cart</span>
          <span>(0)</span>
        </div>
        <nav
          className={`${
            menuActive ? "top-full" : "-top-[200%]"
          } absolute py-4 -z-10 bg-white w-full left-0 text-right px-8 duration-500 ease-out md:static md:z-auto md:w-auto md:px-0 md:ml-auto md:mr-16`}
        >
          <ul className=" flex flex-col gap-2 md:flex-row md:flex md:gap-14">
            <li className="md:relative md:hover:underline md:hover:underline-offset-[6px]">
              <div
                className="flex justify-end items-center cursor-pointer gap-2"
                onClick={() => setDropLinkActive(!dropLinkActive)}
              >
                <span>Shop</span>
                <IoMdArrowDropdown
                  className={`duration-500 ${
                    dropLinkActive ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`${
                  dropLinkActive ? " " : "hidden"
                } pr-4 md:absolute md:top-[120%] md:left-0 md:w-[150px] md:rounded-md md:duration-500 md:px-4 md:py-2 md:bg-white`}
              >
                <li className="md:hover:underline md:hover:underline-offset-[6px]">
                  <Link href={"/dashboard"}>All products</Link>
                </li>
                <li className="md:hover:underline md:hover:underline-offset-[6px]">
                  <Link href={"/dashboard"}>New collection</Link>
                </li>
              </ul>
            </li>
            <li className="md:hover:underline md:hover:underline-offset-[6px]">
              <Link href={"/dashboard"}>Sustainability</Link>
            </li>
            <li className="md:hover:underline md:hover:underline-offset-[6px]">
              <Link href={"/dashboard"}>About</Link>
            </li>
            <li className="md:hover:underline md:hover:underline-offset-[6px]">
              <Link href={"/dashboard"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMenuActive(!menuActive)}
        >
          <IoMenuOutline size={28} className={menuActive ? "hidden" : ""} />
          <IoClose size={28} className={menuActive ? "" : "hidden"} />
        </button>
      </header>
      <main className="absolute -z-30 w-full top-[70px]">
        <span className="py-[0.6rem] md:py-4 text-center px-7 bg-purple-950 text-white flex items-center justify-center">
          Free shipping on orders over 50$ amount
        </span>
        <section className="relative">
          <Image
            src={imageFirst}
            sizes="100vw"
            alt="hero image"
            className="object-cover w-full h-[490px] brightness-75"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-[3.4rem] text-white leading-[3.5rem] font-medium mb-7">
              Handmade ceramics
            </h2>
            <p className="text-2xl text-white mb-6">
              Painted clay ceramics made with love.
            </p>
            <button className="bg-white px-6 py-3 rounded-md">Shop now</button>
          </div>
        </section>
        <section className="flex flex-col items-center px-10">
          <h2 className="text-[2.2rem] py-[45px] text-center">
            Our bestsellers
          </h2>
          <div className="flex flex-wrap justify-evenly gap-x-14">
            <article className="w-[312px] relative">
              <Image
                src={articleOne}
                sizes="full"
                className="w-full"
                alt="image of article"
              />
              <span className="uppercase p-3 bg-purple-900 text-white absolute top-3">
                sale
              </span>
              <footer className="text-center py-6">
                <h3 className="text-2xl font-semibold mb-2">
                  &apos;Candy&apos; Flowerpot
                </h3>
                <span className="flex gap-2 justify-center text-xl">
                  <p className="text-gray-400 font-thin line-through">$59.90</p>
                  <p>$49.90</p>
                </span>
              </footer>
            </article>
            <article className="w-[312px] relative">
              <Image
                src={articleTwo}
                sizes="full"
                className="w-full"
                alt="image of article"
              />
              <span className="uppercase p-3 bg-purple-900 text-white absolute top-3">
                sale
              </span>
              <footer className="text-center py-6">
                <h3 className="text-2xl font-semibold mb-2">
                  &apos;Drop&apos; Vase
                </h3>
                <span className="flex gap-2 justify-center text-xl">
                  <p className="text-gray-400 font-thin line-through">$49.90</p>
                  <p>$40.90</p>
                </span>
              </footer>
            </article>
            <article className="w-[312px] relative">
              <Image
                src={articleThree}
                sizes="full"
                className="w-full"
                alt="image of article"
              />
              <footer className="text-center py-6">
                <h3 className="text-2xl font-semibold mb-2">
                  &apos;Wave&apos; Vase
                </h3>
                <span className="flex gap-2 justify-center text-xl">
                  <p className="text-gray-400 font-thin">SOLD OUT</p>
                </span>
              </footer>
            </article>
            <article className="w-[312px] relative">
              <Image
                src={articleFour}
                sizes="full"
                className="w-full"
                alt="image of article"
              />
              <footer className="text-center py-6">
                <h3 className="text-2xl font-semibold mb-2">
                  &apos;Sun&apos; Vase
                </h3>
                <span className="flex gap-2 justify-center text-xl">
                  <p>$49.90</p>
                </span>
              </footer>
            </article>
          </div>
        </section>
        <section className="relative">
          <Image
            src={homeDecor}
            sizes="100vw"
            alt="hero image"
            className="object-cover w-full h-[380px] brightness-90 md:h-[620px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
            <h2 className="text-[3rem] md:text-[6rem] text-white leading-[3.5rem] font-medium mb-7">
              Home decor items
            </h2>
            <p className="text-xl text-white mb-6">
              Find your new favorite pieces.
            </p>
            <button className="bg-white px-6 py-3 rounded-md">Shop now</button>
          </div>
        </section>
        <section className="flex flex-wrap gap-[25px] justify-center">
          <article className="w-full relative flex flex-col px-6 pt-16 max-w-[550px]">
            <Image
              src={aboutMina}
              sizes="full"
              className="w-full"
              alt="image of article"
            />
            <footer className="mt-4">
              <h3 className="text-2xl font-semibold">About mina</h3>
              <p className="text-gray-500 text-lg">
                Mina is a brand born out of a passion for ceramics.
              </p>
              <button className="bg-purple-900 text-white px-6 py-3 rounded-md mt-4">
                Learn more
              </button>
            </footer>
          </article>
          <article className="w-full relative flex flex-col px-6 pt-16 max-w-[550px]">
            <Image
              src={sustainability}
              sizes="full"
              className="w-full"
              alt="image of article"
            />
            <footer className="mt-4">
              <h3 className="text-2xl font-semibold">Sustainability</h3>
              <p className="text-gray-500 text-lg">
                Mina is an eco-friendly brand that cares about sustainability.
              </p>
              <button className="bg-purple-900 text-white px-6 py-3 rounded-md mt-4">
                Learn more
              </button>
            </footer>
          </article>
        </section>
        <section className="relative mt-[60px]">
          <Image
            src={signUpImage}
            sizes="100vw"
            alt="hero image"
            className="object-cover w-full h-[480px] brightness-90 md:h-[490px]"
          />
          <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8">
            <h2 className="text-[2rem] md:text-[4rem] text-white leading-[] font-medium mb-7 text-center">
              Sign-up for our newsletter
            </h2>
            <form
              className="flex flex-col items-start md:w-[420px] md:mx-auto"
              onSubmit={handleSubmit}
            >
              <label className="text-white text-lg" htmlFor="email">
                your email
              </label>
              <input
                id="email"
                type="text"
                placeholder="your email address"
                className="w-full py-2 px-3 mt-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-purple-900 px-6 py-3 rounded-md mt-6 self-center"
              >
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
