// react
import { forwardRef, Fragment } from "react"

// next
import Image from "next/image"
import Link from "next/link"

import { Menu, Popover, Transition } from "@headlessui/react"

// icons
import MenuIcon from "@heroicons/react/outline/MenuIcon"
import XIcon from "@heroicons/react/outline/XIcon"

import { common } from "../../constants"

import useScroll from "../../hooks/useScroll"

function MainHeader() {
  const { scrolled } = useScroll()

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${scrolled && "transition ease-in-out delay-75 shadow-lg duration-300"}`}
    >
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/">
          <a>
            <Image src={common.logoHorizontalNoSlogan} alt="Driflys Logo" width={100} height={30} objectFit="contain" />
          </a>
        </Link>

        <ul className="hidden md:flex flex-1 gap-12 items-center justify-center text-slate-600 text-md">
          <li>
            <NavLink title="Home" href="/" />
          </li>
          <li>
            <FeaturesMenu />
          </li>
          <li>
            <NavLink title="Pricing" href="/pricing" />
          </li>
          <li>
            <NavLink title="Contact us" href="/contact-us" />
          </li>
        </ul>

        <ul className="hidden md:flex gap-12 items-center justify-center">
          <li>
            <Link href="https://app.driflys.com/auth/login">
              <a className="text-blue-700 font-semibold">Login</a>
            </Link>
          </li>
          <li>
            <Link href="https://app.driflys.com/auth/signUp">
              <a className="bg-blue-700 text-gray-100 font-semibold py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white">
                SignUp
              </a>
            </Link>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default MainHeader

interface NavLinkProps {
  href: string
  title: string
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="cursor-pointer hover:text-black">{title}</a>
    </Link>
  )
}

const FeaturesMenu = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="cursor-pointer hover:text-black">
            <span>Features</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-4 bg-white p-7">
                  <NavLink title="Overview" href="/features/overview" />
                  <NavLink title="Standard branding" href="/features/standard-branding" />
                  <NavLink title="Premium branding" href="/features/premium-branding" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left md:invisible">
      <Menu.Button>
        {({ open }) => (open ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />)}
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <MenuItem title="Home" href="/" />
            <p className="px-2 py-2 text-sm">Features</p>
            <div className="pl-6">
              <MenuItem title="Overview" href="/features/overview" />
              <MenuItem title="Standard branding" href="/features/standard-branding" />
              <MenuItem title="Premium branding" href="/features/premium-branding" />
            </div>
            <MenuItem title="Pricing" href="/pricing" />
            <MenuItem title="Contact us" href="/contact-us" />
            <MenuItem title="Login" href="https://app.driflys/auth/login" />
            <MenuItem title="Create account" href="https://app.driflys/auth/signup" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

interface MenuItemsProps {
  href: string
  title: string
}

const MenuItem = ({ title, href }: MenuItemsProps) => {
  return <Menu.Item>{({ active }) => <MenuLink href={href} title={title} active={active} />}</Menu.Item>
}

interface MenuLinkProps extends MenuItemsProps {
  active: boolean
}

const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>((props, ref) => {
  const { title, href, active, children, ...rest } = props

  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className={`${
          active ? "bg-gray-100 text-black" : "text-gray-900"
        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
      >
        {title}
      </a>
    </Link>
  )
})
