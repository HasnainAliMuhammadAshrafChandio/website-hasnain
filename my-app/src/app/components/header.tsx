import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="logo">
          <Image
            src={"/image.png/Logo.png"}
            width={185}
            height={41}
            alt="logo"
            className="block"
          />
        </div>

        {/* Navigations Links */}
        <div className="navbtns hidden lg:block">
          <ul className="head flex space-x-6">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={"/components/shop"}>
              <li className="cursor-pointer">Shop</li>
            </Link>
            <Link href={"/components/blog"}>
              <li className="cursor-pointer">Blog</li>
            </Link>
            <Link href={"/components/contact"}>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Icon */}
        <div className="icons flex gap-4">
          <MdPersonOutline className="hidden lg:block" />
          <CiSearch className="block" />
          <GoHeart className="hidden lg:block" />
          <AiOutlineShoppingCart className="hidden lg:block" />
        </div>
      </div>
    </>
  );
}
