import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

import { common } from "../../constants";

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
        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
      <div className="absolute left-0 top-16 bg-gray-300 w-full h-px"></div>
    </header>
  );
}

export default LandingHeader;
