// next
import Image from "next/image"
import Link from "next/link"

import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon"

import { common } from "../../constants"

interface Props {
  name: string
  description?: string
  type: string
  logo?: string
  web?: string
  industry: string
}

const Brand = ({ name, type, description, logo, web }: Props) => {
  const defaultProps = {
    size: 24,
    round: true,
  }

  return (
    <div className="bg-white rounded-lg border-2 border-gray-400 px-4 py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="">
          <Image src={logo || common.noImage} alt="brand logo" width={100} height={50} objectFit="scale-down" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-center">{name}</h2>
          <p className="font-semibold text-xs text-center text-gray-500">{type}</p>
        </div>
      </div>

      {description && <p className="mt-4 text-justify text-sm">{description}</p>}
      <Link href={web || "/"}>
        <a target="_blank">
          <button className="mt-4 flex items-center justify-center gap-2 border-2 border-gray-500 rounded-md w-full py-2 hover:bg-gray-50">
            <span>Visit</span> <ExternalLinkIcon className="w-5 h-5" />
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Brand
