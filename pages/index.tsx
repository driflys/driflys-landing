// next
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { MainLayout } from "../layouts"

// components
import Page from "../components/Page"
import InfoCard from "../components/InfoCard"

// hero icons
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon"
import UserAddIcon from "@heroicons/react/outline/UserAddIcon"
import CheckCircleIcon from "@heroicons/react/outline/CheckCircleIcon"
import BookOpenIcon from "@heroicons/react/outline/BookOpenIcon"
import GlobeAltIcon from "@heroicons/react/outline/GlobeAltIcon"
import SpeakerphoneIcon from "@heroicons/react/outline/SpeakerphoneIcon"

// images & illustrations
import HeroCertificate from "../public/illustrations/HeroCertificate.svg"
import DashboardUI from "../public/illustrations/DashboardUI.svg"
import ArtWork from "../public/illustrations/ArtWork.svg"
import GrowthChart from "../public/illustrations/GrowthChart.svg"

const Home = () => {
  return (
    <Page title="Driflys">
      <Head>
        <script type="application/ld+json">
          {`    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Driflys - Create design and send certificates hassle freely",
      "image": [
        "https://res.cloudinary.com/driflys/image/upload/v1660485715/logos/SEO.png",
        "https://res.cloudinary.com/driflys/image/upload/v1654452870/logos/SEO-Old.png"
       ],
      "description": "Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "Driflys"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Course Instructor"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://driflys.com",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2023-03-2",
        "itemCondition": "",
        "availability": ""
      }
    }
`}
        </script>
      </Head>
      <main className="bg-white">
        <section id="hero" className="container">
          <div className="pt-12">
            <p className="mt-4 mx-auto w-fit flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-gray-50 font-semibold py-2 px-6 rounded-md">
              Beta
            </p>
            <h1 className="mx-auto mt-4 text-4xl font-bold text-center leading-normal md:text-6xl md:max-w-4xl md:leading-snug">
              {`Create design  & send `}
              <span className="font-black text-blue-700">Certificates</span> Hassle freely
            </h1>
            <h2 className="mt-2 text-gray-500 font-semibold text-center mx-auto max-w-xl">
              Issue digital certificates, promote your brand by admiring the audience. We can help you.{" "}
            </h2>
            <Link href="https://app.driflys.com/auth/signUp">
              <a>
                <button className="mt-4 mx-auto flex items-center gap-2 bg-blue-700 text-gray-50 font-semibold py-2 px-6 rounded-md transition ease-in-out delay-150 duration-200 hover:shadow-lg hover:hover:scale-105 hover:text-white">
                  Get started
                  <span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </section>

        <section>
          <div className="relative mt-14 mx-auto px-4 w-fit drop-shadow-2xl z-10">
            <Image
              src={HeroCertificate}
              alt="Hero section certificate image"
              width={800}
              height={500}
              objectFit="contain"
            />
          </div>
        </section>

        <section className="relative -mt-40 pt-56 z-0 bg-gradient-to-r from-blue-600 to-blue-900">
          <div className="mx-auto w-fit">
            <div className="container">
              <h1 className="text-white text-4xl text-center font-bold md:text-6xl">
                All can be done via easy to use interface
              </h1>
              <Link href="https://app.driflys.com/auth/signUp">
                <a>
                  <button className="mt-10 mx-auto flex items-center gap-2 bg-gray-50 text-black font-semibold py-2 px-8 rounded-md transition ease-in-out delay-150 duration-200 hover:bg-white hover:shadow-xl">
                    <UserAddIcon className="w-5 h-5" />
                    Free SignUp
                  </button>
                </a>
              </Link>
              <div className="relative mt-10 mx-auto w-fit">
                <Image
                  src={DashboardUI}
                  alt="Driflys dashboard UI image"
                  width={800}
                  height={500}
                  objectFit="contain"
                />
              </div>
              <div className="mx-auto flex items-center justify-between w-full max-w-xl pb-16">
                <div className="flex items-center gap-2 text-gray-50">
                  <CheckCircleIcon className="w-5 h-5" />
                  <h3 className="font-semibold md:text-xl">Nothing complex</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-50">
                  <CheckCircleIcon className="w-5 h-5" />
                  <h3 className="font-semibold md:text-xl">Nothing overwhelming</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="mt-20 mx-auto w-fit">
            <Image src={ArtWork} alt="ArtWork image" width={800} height={500} objectFit="contain" />
          </div>
          <div className="mt-5 mx-auto max-w-3xl ">
            <p className="text-lg text-gray-500 font-semibold">
              Literally everyone can use our platform to issue digital certificates. Driflys can be utilized from small
              organizations to large scale companies for launching certification programs with ease.
            </p>
            <Link href="https://app.driflys.com/auth/signUp">
              <a>
                <button className="mt-5 bg-blue-700 text-gray-50 font-semibold py-2 px-6 rounded-md hover:bg-blue-600 hover:text-white">
                  Start using Driflys
                </button>
              </a>
            </Link>
            <p className="mt-2 text-sm">*No credit card required</p>
          </div>
        </section>

        <section className="container mt-10">
          <div className="grid gap-4 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
            <InfoCard
              title="Courses"
              description="Certificates of participation or achievement for online/offline courses"
              icon={<BookOpenIcon className="w-10" />}
            />

            <InfoCard
              title="Webinars"
              description="Certificates of participation upon completion of webinars"
              icon={<GlobeAltIcon className="w-10" />}
            />

            <InfoCard
              title="Workshops"
              description="Certificates of participation upon completion of workshops or boot camps"
              icon={<SpeakerphoneIcon className="w-10" />}
            />
          </div>
        </section>

        <section className="mt-20 bg-gray-50">
          <div className="container py-20">
            <div className="mx-auto w-fit">
              <Image src={GrowthChart} alt="Growth chart" width={500} height={300} objectFit="contain" />
            </div>
            <h1 className="mt-5 text-4xl text-center font-semibold md:text-6xl">Promote your brand</h1>
            <p className="mt-5 mx-auto text-lg text-center max-w-xl md:text-xl">{`Certificate is a powerful marketing tool. Our platform allows you to add your brandings such as logo, name, colors so that your brand can be promoted & reached at a large audience organically. `}</p>
            <div className="mt-5 mx-auto w-fit">
              <Link href="/features/standard-branding">
                <a className="flex items-center gap-1 text-blue-700 text-center text-lg font-semibold md:text-xl">
                  <p>Learn more</p>
                  <ChevronRightIcon className="w-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900">
          <div className="container py-20 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl text-center font-semibold md:text-6xl">Interested in Driflys</h1>
            <p className="mt-5 text-gray-300 text-md text-center md:text-xl">
              Start using Driflys to simplify the Digital Certificate Issuing process
            </p>
            <Link href="https://app.driflys.com/auth/signUp">
              <a>
                <button className="mt-5 bg-gray-100 text-black font-semibold py-2 px-6 rounded-md hover:bg-white">
                  Try it out Now
                </button>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </Page>
  )
}

Home.layout = MainLayout

export default Home
