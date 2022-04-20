import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

import { common } from "../../constants";

import MenuIcon from "@heroicons/react/outline/MenuIcon";

function LandingHeader() {
  return (
    <header className="container z-50">
      <nav className="py-4 flex justify-between items-center">
        <Link href="/">
          <a>
            <Image
              src={common.logoHorizontalNoSlogan}
              alt="Driflys Logo"
              width={100}
              height={30}
              objectFit="contain"
            />
          </a>
        </Link>

        <ul className="hidden md:flex flex-1 gap-12 items-center justify-end text-slate-600 text-md">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">Features</li>
          <li className="cursor-pointer hover:text-black">Contact Us</li>
        </ul>
        <MenuIcon className="w-6 h-6 text-black md:hidden cursor-pointer" />
      </nav>
      <div className="absolute left-0 top-16 bg-gray-300 w-full h-px"></div>
    </header>
  );
}

export default LandingHeader;
