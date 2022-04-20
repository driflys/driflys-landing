import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import { common } from "../../constants";

function LandingFooter() {
  return (
    <footer className="bg-white">
      <div className="container grid grid-rows-4 grid-cols-3 md:grid-rows-3 gap-8 py-12 px-12">
        {/* Brand Logo */}
        <div className="col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1">
          <Image
            src={common.logoHorizontal}
            width={250}
            height={80}
            objectFit="contain"
          />
        </div>

        {/* Links */}
        <div className="col-start-1 row-start-2 col-span-2 md:col-start-2 md:row-start-1 md:row-span-2 md:col-span-1 flex md:justify-center">
          <ul className="mt-2 flex flex-col gap-4">
            <li>
              <h3 className="font-semibold md:text-lg">Links</h3>
            </li>
            <li className="cursor-pointer w-fit text-gray-600 md:text-lg hover:text-black">
              Home
            </li>
            <li className="cursor-pointer w-fit text-gray-600 md:text-lg hover:text-black">
              Features
            </li>
            <li className="cursor-pointer w-fit text-gray-600 md:text-lg hover:text-black">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Email & Location */}
        <div className="col-start-1 row-start-3 col-span-2 md:col-start-3 md:row-start-2 md:col-span-1 flex md:justify-end">
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <p className="text-gray-800">driflys@gmail.com</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-800">Matale, Sri Lanka</p>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-start-3 row-start-1 row-span-4 flex flex-col gap-2 md:justify-end items-end md:items-start md:col-start-3 md:row-start-1 md:row-span-1 md:flex-row">
          <SocialIcon
            href="https://facebook.com"
            alt="facebook"
            src={common.socialMedia.negative.facebook}
          />
          <SocialIcon
            href="https://twitter.com"
            alt="twitter"
            src={common.socialMedia.negative.twitter}
          />
          <SocialIcon
            href="https://instagram.com"
            alt="instagram"
            src={common.socialMedia.negative.instagram}
          />
          <SocialIcon
            href="https://youtube.com"
            alt="youtube"
            src={common.socialMedia.negative.youtube}
          />
          <SocialIcon
            href="https://linkedin.com"
            alt="linkedin"
            src={common.socialMedia.negative.linkedIn}
          />
        </div>

        {/* Copyright */}
        <p className="col-start-1 row-start-4 col-span-3 text-center text-gray-600">
          {dayjs().year()} All Rights Reserved ©️ Driflys Inc.
        </p>
      </div>
    </footer>
  );
}

export default LandingFooter;

const SocialIcon = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <div className="bg-gray-900 hover:bg-gray-800 w-14 h-14 rounded-lg flex justify-center items-center">
          <Image
            src={src}
            alt={alt}
            width={25}
            height={25}
            objectFit="contain"
          />
        </div>
      </a>
    </Link>
  );
};
