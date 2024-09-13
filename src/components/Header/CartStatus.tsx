import { IoClose } from "react-icons/io5";

interface Props {
  cartActive: boolean;
  setCartActive: (cartActive: boolean) => void;
}
export const CartStatus = ({ cartActive, setCartActive }: Props) => {
  return (
    <div
      className={`${
        cartActive ? "right-0" : "-right-[110%]"
      } fixed transition-all duration-500 top-0 z-50 bg-white w-screen md:w-1/2 h-screen p-4 flex flex-col`}
    >
      <IoClose
        onClick={() => setCartActive(false)}
        className="self-end mb-[150px] cursor-pointer"
        size={24}
      />
      <p className="self-center text-lg font-semibold">
        Shopping cart is epmty
      </p>
    </div>
  );
};
