// react
import { useState } from "react"

// next
import Link from "next/link"
import Image from "next/image"

// icons
import DuplicateIcon from "@heroicons/react/outline/DuplicateIcon"
import MailIcon from "@heroicons/react/outline/MailIcon"

// react-share
import {
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

import { toast } from "react-toastify"

// utils
import { getMonth, getYear } from "../../utils"

import { brand, common } from "../../constants"

const SHARE_ICON_SIZE = 36

interface Props {
  url: string
  image: string
  pdf: string
  issuer: any
  certificateId: string
  certificateName: string
  certificateDescription: string
  certificateCreatedAt: string
  hashtags: string[]
}

const Actions = ({
  url,
  image,
  pdf,
  issuer,
  certificateId,
  certificateName,
  certificateDescription,
  certificateCreatedAt,
  hashtags,
}: Props) => {
  const [copied, setCopied] = useState(false)

  const handleDownload = (url: string) => {
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `certificate-${certificateId}`)
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const handleCopyLink = () => {
    try {
      setCopied(true)
      navigator.clipboard.writeText(url)
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    } catch (err) {
      console.error(err)
      toast.error("Could not copy link to clipboard")
      setCopied(false)
    }
  }

  const handleAddToLinkedIn = () => {
    const year = getYear(certificateCreatedAt)
    const month = getMonth(certificateCreatedAt)
    const link = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certificateName}&issueYear=${year}&issueMonth=${month}&certUrl=${url}&certId=${certificateId}`
    window.open(link)
  }

  const renderShareOptions = (
    <div className="flex flex-row items-center gap-2">
      <LinkedinShareButton url={url} title={certificateName} summary={certificateDescription} source={brand.webUrl}>
        <SocialMediaIcon src={common.socialMedia.custom.linkedIn} />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={certificateName} hashtags={hashtags} via="driflys" related={["driflys"]}>
        <SocialMediaIcon src={common.socialMedia.custom.twitter} />
      </TwitterShareButton>

      <FacebookShareButton url={url} quote={certificateName} hashtag={hashtags[1]}>
        <SocialMediaIcon src={common.socialMedia.custom.facebook} />
      </FacebookShareButton>

      <WhatsappShareButton url={url} title={certificateName}>
        <SocialMediaIcon src={common.socialMedia.custom.whatsapp} />
      </WhatsappShareButton>
    </div>
  )

  return (
    <div className="flex flex-col items-left gap-6 bg-white px-4 py-8 rounded-lg border-2 border-gray-400">
      <div>
        <h5 className="font-bold">Share</h5>
        <div className="mt-2">{renderShareOptions}</div>
      </div>

      <div>
        <h5 className="font-bold">Download</h5>
        <div className="flex gap-2 mt-2">
          <button
            className="flex-1 py-2 px-4 rounded-md border-2 border-gray-500 text-gray-700 hover:bg-gray-50"
            onClick={() => handleDownload(image)}
          >
            Image
          </button>
          <button
            className="flex-1 py-2 px-4 rounded-md border-2 border-gray-500 text-gray-700 hover:bg-gray-50"
            onClick={() => handleDownload(pdf)}
          >
            PDF
          </button>
        </div>
      </div>

      <div>
        <h5 className="font-bold">More</h5>
        <div className="flex gap-2 mt-2">
          <Link href={`mailto:${issuer?.email}`}>
            <a className="flex items-center gap-2 hover:underline">
              <MailIcon className="w-5 h-5 text-black" />
              <p>Contact Issuer</p>
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="flex flex-row items-center justify-center gap-2 w-full py-2 text-center border-gray-500 border-2 rounded hover:bg-gray-50"
          onClick={handleCopyLink}
        >
          {copied ? (
            "Copied"
          ) : (
            <>
              <DuplicateIcon className="w-5 h-5" /> Copy link
            </>
          )}
        </button>
        {issuer?.permissions?.includes("LINKEDIN_CERTIFICATES") && (
          <button
            className="flex flex-row items-center justify-center gap-2 w-full py-2 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700 transition ease-linear delay-100"
            onClick={handleAddToLinkedIn}
          >
            <LinkedinIcon size={24} /> Add to profile
          </button>
        )}
      </div>
    </div>
  )
}

export default Actions

interface SocialMediaIconProps {
  src: string
  width?: number
  height?: number
}

const SocialMediaIcon = ({ src, width = 48, height = 48 }: SocialMediaIconProps) => {
  return <Image src={src} alt="Social Media Icon" width={width} height={height} objectFit="contain" />
}
