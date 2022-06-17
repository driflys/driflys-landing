import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import { brand, common } from "../../constants";

// icons
import MailIcon from "@heroicons/react/solid/MailIcon";
import LocationMarkerIcon from "@heroicons/react/solid/LocationMarkerIcon";

import SocialIcon from "../SocialIcon";

function PreLaunchFooter() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="cursor-pointer w-fit text-gray-600 md:text-lg hover:text-black">
              <Link href="/contact-us">
                <a> Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Email & Location */}
        <div className="col-start-1 row-start-3 col-span-2 md:col-start-3 md:row-start-2 md:col-span-1 flex md:justify-end">
          <ul className="flex flex-col items-start md:items-end gap-2">
            <li className="flex flex-row items-center gap-2">
              <MailIcon className="w-5 h-5 text-gray-800" />
              <p className="text-gray-800">{brand.email}</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <LocationMarkerIcon className="w-5 h-5 text-gray-800" />
              <p className="text-gray-800">{brand.address}</p>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-start-3 row-start-1 row-span-4 flex flex-col gap-2 md:justify-end items-end md:items-start md:col-start-3 md:row-start-1 md:row-span-1 md:flex-row">
          <SocialIcon
            href={brand.socialMedia.facebook}
            alt="facebook"
            src={common.socialMedia.negative.facebook}
          />
          <SocialIcon
            href={brand.socialMedia.twitter}
            alt="twitter"
            src={common.socialMedia.negative.twitter}
          />
          <SocialIcon
            href={brand.socialMedia.instagram}
            alt="instagram"
            src={common.socialMedia.negative.instagram}
          />
          <SocialIcon
            href={brand.socialMedia.youtube}
            alt="youtube"
            src={common.socialMedia.negative.youtube}
          />
          <SocialIcon
            href={brand.socialMedia.linkedIn}
            alt="linkedin"
            src={common.socialMedia.negative.linkedIn}
          />
        </div>

        {/* Copyright */}
        <p className="col-start-1 row-start-4 col-span-3 text-center text-gray-600">
          {dayjs().year()} All Rights Reserved ©️ Driflys
        </p>
      </div>
    </footer>
  );
}

export default PreLaunchFooter;
