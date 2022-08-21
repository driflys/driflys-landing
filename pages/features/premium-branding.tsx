// next
import Image from "next/image"
import Link from "next/link"

// icons
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon"
import UserIcon from "@heroicons/react/outline/UserIcon"
import AdjustmentsIcon from "@heroicons/react/outline/AdjustmentsIcon"
import BadgeCheckIcon from "@heroicons/react/outline/BadgeCheckIcon"

// images & illustrations
import PremiumBrandingCustomization from "../../public/illustrations/PremiumBrandingCustomization.svg"

import Page from "../../components/Page"
import { MainLayout } from "../../layouts"
import InfoCard from "../../components/InfoCard"

function PremiumBranding() {
  return (
    <Page title="Premium Branding - Driflys">
      <main className="bg-white">
        <section id="hero" className="container">
          <div className="pt-12">
            <h1 className="mx-auto text-4xl font-bold text-center leading-normal md:text-6xl md:max-w-4xl md:leading-snug">
              {`Go beyond the limits with `}
              <span className="font-black text-blue-700">Premium Branding</span>
            </h1>
            <h2 className="mt-2 text-gray-500 font-semibold text-center mx-auto max-w-xl">
              With premium branding, you can customize every aspect that receivers see including header, footer, page
              content and domain
            </h2>
            <Link href="/contact-us">
              <a>
                <button className="mt-4 mx-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-gray-50 font-semibold py-2 px-6 rounded-md transition ease-in-out delay-150 duration-200 hover:shadow-lg hover:hover:scale-105 hover:text-white">
                  Talk to sales
                  <span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </section>

        <section className="container mt-16">
          <div className="w-fit mx-auto">
            <Image
              src={PremiumBrandingCustomization}
              alt="Customize certificate view page reflecting your branding on it"
              width={800}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="mt-8 flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="mx-auto text-4xl text-center font-bold leading-normal md:max-w-4xl md:leading-snug">
                {`Let the receivers feel like it’s home`}
              </h1>
              <p className="mt-4 mx-auto text-gray-500 text-center max-w-3xl">{`You can bring your own website or brand stylings to our platform. So that the receivers will no longer feel anything unfamiliar. This assures the the quality and legitimacy of your service as the responsible issuer of your certificates.`}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gray-50 py-16">
          <h1 className="text-4xl text-center font-semibold">Why Premium Branding?</h1>
          <div className="container mt-12 grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
            <InfoCard
              title={"Professionalism"}
              description={
                "Reach at your audience the most professional way it can be. Indicate the quality of your service"
              }
              icon={<UserIcon className="w-10" />}
            />

            <InfoCard
              title={"Full control"}
              description={
                "Customize every aspect where the receivers interacts with such as certificate and verification pages"
              }
              icon={<AdjustmentsIcon className="w-10" />}
            />

            <InfoCard
              title={"Legitimacy"}
              description={"Radiate the confidence of your service. So that the receivers can put trust on your brand"}
              icon={<BadgeCheckIcon className="w-10" />}
            />
          </div>
        </section>

        <section>
          <div className="container mt-8 py-16 flex flex-col gap-6 items-center">
            <h1 className="text-4xl text-center font-bold leading-normal max-w-2xl md:leading-snug">
              Assign your own domain with the certificates
            </h1>
            <p className="mt-4 text-gray-500 text-center max-w-3xl">{`No need to redirect your audience to a third-party url to reach their certificates anymore. Instead integrate Driflys with your own domain. Let the receivers experience a truly native feeling.`}</p>
            <p className="bg-blue-700 py-2 px-12 rounded-md text-white">https://certificate.yourdomain.com</p>
          </div>
        </section>
      </main>
    </Page>
  )
}

PremiumBranding.layout = MainLayout

export default PremiumBranding
