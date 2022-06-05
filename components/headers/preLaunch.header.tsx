import React, { useEffect, useState } from "react";

// next
import Image from "next/image";
import Link from "next/link";

import { common } from "../../constants";

// icons
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import XIcon from "@heroicons/react/outline/XIcon";

function PreLaunchHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY < 100) setScrolled(false);
    else setScrolled(true);
  };

  const menu = (
    <div className="absolute top-16 left-0 right-0 z-50 bg-white shadow-lg">
      <ul id="nav-drop-down-menu" className="text-center">
        <li
          className="cursor-pointer py-2 px-4 hover:text-black hover:bg-gray-100"
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li
          className="cursor-pointer py-2 px-4 hover:text-black hover:bg-gray-100"
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${
        scrolled && "transition ease-in-out delay-75 shadow-lg duration-300"
      }`}
    >
      <nav className="container py-4 flex justify-between items-center">
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
          <li className="cursor-pointer hover:text-black">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
        {openMenu ? (
          <XIcon
            className="w-6 h-6 text-black md:hidden cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <MenuIcon
            className="w-6 h-6 text-black md:hidden cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </nav>
      {openMenu && menu}
    </header>
  );
}

export default PreLaunchHeader;
