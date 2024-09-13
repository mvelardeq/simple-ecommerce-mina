"use client";
import Image from "next/image";
import React, { FormEvent } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import imageFirst from "./assets/images/first.png";
import articleOne from "./assets/images/article-1.png";
import articleTwo from "./assets/images/article-2.png";
import articleThree from "./assets/images/article-3.png";
import articleFour from "./assets/images/article-4.png";
import homeDecor from "./assets/images/home-decor-item.png";
import aboutMina from "./assets/images/about-mina.png";
import sustainability from "./assets/images/sustainability.png";
import signUpImage from "./assets/images/sign-up-image.png";
import followImageOne from "./assets/images/follow-image-1.png";
import followImageTwo from "./assets/images/follow-image-2.png";
import followImageThree from "./assets/images/follow-image-3.png";
import { Header } from "@/components/Header/Header";

export default function Page() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <Header />

      <main className="">
        <span className="py-[0.6rem] md:py-4 text-center px-7 bg-purple-950 text-white flex items-center justify-center">
          Free shipping on orders over 50$ amount
        </span>
        <section className="relative">
          <Image
            src={imageFirst}
            sizes="auto"
            alt="hero image"
            className="object-cover w-full h-[490px] md:h-[650px] brightness-90 static"
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
        <section className="flex flex-col items-center px-10 md:px-[4rem]">
          <h2 className="text-[2.2rem] py-[45px] text-center">
            Our bestsellers
          </h2>
          <div className="flex flex-wrap justify-evenly gap-x-10 relative">
            <article className="w-[312px]">
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
            <article className="w-[312px]">
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
            <article className="w-[312px]">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full px-8 text-center">
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
          <article className="w-full flex flex-col px-6 pt-16 max-w-[550px]">
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
          <article className="w-full flex flex-col px-6 pt-16 max-w-[550px]">
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
        <section className="py-[45px] md:py-[75px] md:px-[145px] px-4">
          <h2 className="text-[2.3rem] md:text-[3.2rem] text-center mb-6 md:mb-[40px] font-bold">
            Follow us on Instagram
          </h2>
          <div className="flex w-full gap-2 justify-between ">
            <Image
              src={followImageOne}
              sizes="auto"
              className="full"
              alt="image of article"
            />
            <Image
              src={followImageTwo}
              sizes="auto"
              className="full"
              alt="image of article"
            />
            <Image
              src={followImageThree}
              sizes="auto"
              className="full"
              alt="image of article"
            />
          </div>
          <button className="bg-purple-900 text-white px-6 py-3 rounded-md my-7 md:my-14  block mx-auto">
            @mina_studio
          </button>
        </section>
      </main>
      <footer className="flex flex-col md:flex-row md:justify-between bg-neutral-100 py-[45px] md:px-[145px] px-4">
        <div>
          <h4 className="text-3xl font-bold uppercase mb-4">Mina</h4>
          <span className="flex mb-[30px] gap-4">
            <a href="#">
              <IoLogoTwitter size={27} />
            </a>
            <a href="#">
              <IoLogoFacebook size={27} />
            </a>
            <a href="#">
              <IoLogoInstagram size={27} />
            </a>
          </span>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-lg font-thin">
            <li className="underline md:order-3">
              <a href="#">Payments & Delivery</a>
            </li>
            <li className="underline md:order-1">
              <a href="#">Contact</a>
            </li>
            <li className="underline md:order-2">
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
