// next
import Image from "next/image"
import Link from "next/link"

import Page from "../../components/Page"

// icons
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon"
import { MainLayout } from "../../layouts"

// images
import FeaturesIllustration from "../../public/illustrations/FeaturesIllustration.svg"
import Design from "../../public/illustrations/Design.png"
import StatusTrack from "../../public/illustrations/StatusTrack.png"
import Verify from "../../public/illustrations/Verify.png"
import Share from "../../public/illustrations/Share.png"
import OnlineView from "../../public/illustrations/OnlineView.png"
import AnywhereAnytime from "../../public/illustrations/AnywhereAnytime.svg"

function Overview() {
  return (
    <Page title="Features overview - Driflys">
      <main className="bg-white">
        <section id="hero" className="container">
          <div className="pt-12">
            <h1 className="mx-auto text-4xl font-bold text-center leading-normal md:text-6xl md:max-w-4xl md:leading-snug">
              {`We got you covered with all the `}
              <span className="font-black text-blue-700">Features</span>
            </h1>
            <h2 className="mt-2 text-gray-500 font-semibold text-center mx-auto max-w-xl">
              Our platform provides all the features from certificates designing to sending to managing, ensuring a
              smooth experience throughout the process
            </h2>
            <Link href="https://app.driflys.com/auth/signUp">
              <a>
                <button className="mt-4 mx-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-gray-50 font-semibold py-2 px-6 rounded-md transition ease-in-out delay-150 duration-200 hover:shadow-lg hover:hover:scale-105 hover:text-white">
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
              src={FeaturesIllustration}
              alt="Features section illustration"
              width={1200}
              height={800}
              objectFit="contain"
            />
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:max-w-4xl md:leading-snug">
                Design certificates the way you want
              </h1>
              <p className="mt-4 text-gray-500">{`You can easily customize the look & feel of your certificates by using our drag n drop builder. You can craft your own design from scratch or continue with our professional templates. `}</p>
            </div>
            <div>
              <Image
                src={Design}
                alt="Design certificates using drag n drop editor image"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 items-center md:flex-row-reverse md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:max-w-4xl md:leading-snug">Deliver with confident</h1>
              <p className="mt-4 text-gray-500">{`With the help of realtime status tracking, you as the issuer can track the status of issued certificates. So that you can confirm whether the certificates were delivered, pending or an error ocurred.`}</p>
            </div>
            <div>
              <Image
                src={StatusTrack}
                alt="Certificate email status tracking feature image"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-500 text-gray-50 ">
          <div className="container py-16">
            <h1 className="mx-auto text-4xl font-semibold text-center max-w-4xl md:text-6xl">
              Start your digital certificates journey for free
            </h1>
            <button className="mt-10 mx-auto flex items-center gap-2 bg-gray-50 text-black font-semibold py-2 px-8 rounded-md transition ease-in-out delay-150 duration-200 hover:bg-white hover:shadow-xl">
              SignUp
            </button>
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:max-w-4xl md:leading-snug">
                Verify the validity with ease
              </h1>
              <p className="mt-4 text-gray-500">{`Every certificate issued via Driflys has an unique id. Receivers can verify the validity of their certificates 
using the certificate id.`}</p>
            </div>
            <div>
              <Image
                src={Verify}
                alt="Verifying the validity of certificates feature image"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 items-center md:flex-row-reverse md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:max-w-4xl md:leading-snug">
                One click away from social share
              </h1>
              <p className="mt-4 text-gray-500">{`Receivers can share the certificates instantly in social media with a single click. They can post the certificates or add into the credentials collection of their LinkedIn account or both. `}</p>
            </div>
            <div>
              <Image
                src={Share}
                alt="Sharing certificates feature image"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 bg-zinc-900">
          <div className="container py-16">
            <h1 className="mx-auto text-4xl font-semibold text-center text-white max-w-3xl md:text-6xl">{`It’s your Brand, Let them see`}</h1>
            <p className="mt-6 mx-auto text-center text-gray-200 max-w-3xl">{`Ultimately, how the receivers identify their issuer of the digital certificates
by the sight of brandings. Driflys know that receivers are familiar with you, not with us.
That’s why we let you to add your brandings such as logo, name, colors on 
where the receivers interact with.`}</p>
            <Link href="/features/standard-branding">
              <a className="mt-6 flex items-center justify-center gap-2 text-blue-700 font-semibold">
                Learn more <ChevronRightIcon className="w-5" />
              </a>
            </Link>
          </div>
        </section>

        <section className="mt-16 pb-16">
          <div className="container">
            <div className="mx-auto w-fit">
              <Image
                src={OnlineView}
                alt="Anytime anywhere online viewing feature image"
                width={600}
                height={300}
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-center items-center">
              <div>
                <Image
                  src={AnywhereAnytime}
                  alt="Anytime anywhere online viewing feature image"
                  width={600}
                  height={300}
                  objectFit="contain"
                />
              </div>
              <p className="flex-1 mt-4 text-gray-500 text-center text-lg max-w-md md:text-right">{`We host all the issued certificates via Driflys to assure
that the receivers can view/interact with their certificates
24/7`}</p>
            </div>
          </div>
        </section>
      </main>
    </Page>
  )
}

Overview.layout = MainLayout

export default Overview
