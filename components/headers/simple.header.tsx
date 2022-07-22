// next
import Image from "next/image"
import Link from "next/link"

import useSession from "../../hooks/useSession"

// constants
import { common } from "../../constants"

import useScroll from "../../hooks/useScroll"

function SimpleHeader() {
  const { user } = useSession()
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

        <Link href="/verify">
          <a target="_blank">
            <button className="text-gray-600 bg-transparent border-2 border-gray-400 hover:bg-gray-100 transition-colors ease-in-out delay-50 px-5 py-1 rounded">
              Verify
            </button>
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default SimpleHeader
