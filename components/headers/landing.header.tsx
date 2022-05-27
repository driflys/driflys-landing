import React, { useEffect, useState } from "react";

// next
import Image from "next/image";
import Link from "next/link";

import { common } from "../../constants";

// icons
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import XIcon from "@heroicons/react/outline/XIcon";

function LandingHeader() {
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menu = (
    <div className="absolute top-16 left-0 right-0 z-50 bg-white shadow-lg">
      <ul id="nav-drop-down-menu" className="flex flex-col justify-start">
        <li
          className="cursor-pointer py-2 px-4 hover:text-black hover:bg-gray-100"
          onClick={() => {
            scrollTo("hero");
            setOpenMenu(false);
          }}
        >
          Home
        </li>
        <li
          className="cursor-pointer py-2 px-4 hover:text-black hover:bg-gray-100"
          onClick={() => {
            scrollTo("features");
            setOpenMenu(false);
          }}
        >
          Features
        </li>
        <li
          className="cursor-pointer py-2 px-4 hover:text-black hover:bg-gray-100"
          onClick={() => {
            scrollTo("contact-us");
            setOpenMenu(false);
          }}
        >
          Contact Us
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
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollTo("hero")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollTo("features")}
          >
            Features
          </li>
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollTo("contact-us")}
          >
            Contact Us
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

export default LandingHeader;
