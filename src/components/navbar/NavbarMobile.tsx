import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  menuActive: boolean;
}

export const NavbarMobile = ({ menuActive }: Props) => {
  return (
    <div
      className={
        menuActive
          ? "bg-red-300 px-8 py-3 absolute top-full w-full transition-all ease-in-out delay-150"
          : "hidden bg-red-300 px-8 py-3 absolute bottom-0 w-full"
      }
    >
      <ul className="flex flex-col items-end">
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
    </div>
  );
};
