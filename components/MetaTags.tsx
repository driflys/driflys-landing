import Head from "next/head"

import { brand } from "../constants"

export interface MetaTagProps {
  pageTitle?: string
  title?: string
  description?: string
  author?: string
  og?: {
    type: string
    url: string
    title: string
    description: string
    image: string
    alt: string
  }
  twitter?: {
    card: "summary" | "summary_large_image" | "app" | "player"
    url: string
    title: string
    description: string
    image: string
    site: string
    creator: string
    alt: string
  }
}

const defaultProps: MetaTagProps = {
  pageTitle: brand.name,
  title: "Driflys - Create design & send certificates hassle freely",
  description:
    "Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature",
  author: brand.name,
  og: {
    type: "website",
    url: brand.webUrl,
    title: "Driflys - Create design & send certificates hassle freely",
    description:
      "Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature",
    image: "https://res.cloudinary.com/driflys/image/upload/v1654452870/logos/SEO.png",
    alt: "Driflys website social media card image",
  },
  twitter: {
    card: "summary_large_image",
    url: brand.webUrl,
    title: "Driflys - Create design & send certificates hassle freely",
    description:
      "Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature",
    image: "https://res.cloudinary.com/driflys/image/upload/v1654452870/logos/SEO.png",
    alt: "Driflys website social media card image",
    site: "@driflys",
    creator: "@driflys",
  },
}

function MetaTags({ title, description, author, og, twitter }: MetaTagProps) {
  return (
    <Head>
      <title>{title || defaultProps.pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content={author || defaultProps.author} />
      <meta name="title" content={title || defaultProps.title} />
      <meta name="description" content={description || defaultProps.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={og?.type || defaultProps.og?.type} />
      <meta property="og:url" content={og?.url || defaultProps.og?.url} />
      <meta property="og:title" content={title || defaultProps.og?.title} />
      <meta property="og:description" content={description || defaultProps.og?.description} />
      <meta property="og:image" content={og?.image || defaultProps.og?.image} />
      <meta property="og:image:alt" content={og?.alt || defaultProps.og?.alt} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitter?.card || defaultProps.twitter?.card} />
      <meta property="twitter:url" content={twitter?.url || defaultProps.twitter?.url} />
      <meta property="twitter:title" content={twitter?.title || defaultProps.twitter?.title} />
      <meta property="twitter:description" content={twitter?.description || defaultProps.twitter?.description} />
      <meta property="twitter:image" content={twitter?.image || defaultProps.twitter?.image} />
      <meta property="twitter:image:alt" content={twitter?.alt || defaultProps.twitter?.alt} />
      <meta name="twitter:site" content={twitter?.site || defaultProps.twitter?.site} />
      <meta name="twitter:creator" content={twitter?.creator || defaultProps.twitter?.creator} />
    </Head>
  )
}

export default MetaTags
