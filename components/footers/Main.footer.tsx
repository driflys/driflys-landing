import React from "react"

// next
import Image from "next/image"
import Link from "next/link"

// icons
import MailIcon from "@heroicons/react/solid/MailIcon"
import LocationMarkerIcon from "@heroicons/react/solid/LocationMarkerIcon"

import dayjs from "dayjs"
import { brand, common } from "../../constants"

import SocialIcon from "../SocialIcon"

function MainFooter() {
  return (
    <footer className="bg-white">
      <div className="container grid grid-rows-7 grid-cols-3 md:grid-rows-3 md:grid-cols-8 gap-8 py-12 px-6">
        {/* Brand Logo */}
        <div className="col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1">
          <Image src={common.logoHorizontal} width={200} height={60} objectFit="contain" />
        </div>

        {/* Links */}
        <nav className="col-start-1 row-start-2 col-span-2 row-span-4 space-y-6 md:col-start-3 md:row-start-1 md:row-span-2 md:col-span-3 md:flex md:flex-row md:items-baseline md:justify-between">
          <div>
            <h3 className="font-semibold md:text-lg">Links</h3>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <FooterLink title="Home" href="/" />
              </li>
              <li>
                <FooterLink title="Features" href="/features/overview" />
              </li>
              <li>
                <FooterLink title="Pricing" href="/pricing" />
              </li>
              <li>
                <FooterLink title="Contact us" href="/contact-us" />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold md:text-lg">Branding</h3>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <FooterLink title="Standard" href="/features/standard-branding" />
              </li>
              <li>
                <FooterLink title="Premium" href="/features/premium-branding" />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold md:text-lg">App</h3>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <FooterLink title="Login" href="https://app.driflys.com/auth/login" />
              </li>
              <li>
                <FooterLink title="SignUp" href="https://app.driflys.com/auth/signUp" />
              </li>
            </ul>
          </div>
        </nav>

        {/* Email & Location */}
        <div className="col-start-1 row-start-6 col-span-2 md:col-start-8 md:row-start-2 md:col-span-1 flex md:justify-end">
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
        <div className="col-start-3 row-start-1 row-span-4 flex flex-col gap-2 md:justify-end items-end md:items-start md:col-start-8 md:row-start-1 md:row-span-1 md:flex-row">
          <SocialIcon href={brand.socialMedia.linkedIn} alt="linkedin" src={common.socialMedia.negative.linkedIn} />
          <SocialIcon href={brand.socialMedia.twitter} alt="twitter" src={common.socialMedia.negative.twitter} />
          <SocialIcon href={brand.socialMedia.instagram} alt="instagram" src={common.socialMedia.negative.instagram} />
          <SocialIcon href={brand.socialMedia.facebook} alt="facebook" src={common.socialMedia.negative.facebook} />
          {/* <SocialIcon href={brand.socialMedia.youtube} alt="youtube" src={common.socialMedia.negative.youtube} /> */}
        </div>

        {/* Copyright */}
        <div className="mt-8 mx-auto col-start-1 row-start-7 col-span-3 md:col-start-1 md:row-start-3 md:col-span-8">
          <div className="mx-auto w-fit flex items-center gap-4">
            <FooterLink title={`Terms & conditions`} href="/legal/terms-conditions" />
            <FooterLink title="Refund policy" href="/legal/refund-policy" />
          </div>
          <p className="mt-2 text-center text-gray-600">{dayjs().year()} All Rights Reserved ©️ Driflys</p>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter

interface FooterLinkProps {
  title: string
  href: string
}

const FooterLink = ({ title, href }: FooterLinkProps) => {
  return (
    <Link href={href}>
      <a className="cursor-pointer text-gray-600 md:text-md hover:text-black">{title}</a>
    </Link>
  )
}
