// next
import Image from "next/image"
import Link from "next/link"

// icons
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon"

// images & illustrations
import CertificateCustomization from "../../public/illustrations/CertificateCustomization.svg"
import CertificateEmailCustomization from "../../public/illustrations/CertificateEmailCustomization.svg"

import Page from "../../components/Page"
import { MainLayout } from "../../layouts"

function StandardBranding() {
  return (
    <Page title="Standard Branding - Driflys">
      <main className="bg-white">
        <section id="hero" className="container">
          <div className="pt-12">
            <h1 className="mx-auto text-4xl font-bold text-center leading-normal md:text-6xl md:max-w-4xl md:leading-snug">
              {`An open space for showcasing your `}
              <span className="font-black text-blue-700">Branding</span>
            </h1>
            <h2 className="mt-2 text-gray-500 text-center mx-auto max-w-3xl md:text-xl">
              We let you to fully customize our platform according to your branding assuring the highest possible
              revenue gain for you.
            </h2>
            <Link href="https://app.driflys.com/auth/signUp">
              <a>
                <button className="mt-4 mx-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-gray-50 font-semibold py-2 px-6 rounded-md transition ease-in-out delay-150 duration-200 hover:shadow-lg hover:hover:scale-105 hover:text-white">
                  Create account
                  <span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:text-5xl md:max-w-4xl md:leading-snug">
                Reflect your brand on certificates
              </h1>
              <p className="mt-4 text-gray-500 md:text-lg">{`You can give your receivers a fully branded experience with their certificates.
As the issuer, you have full control over the design and appearance of the certificates.`}</p>
            </div>
            <div>
              <Image
                src={CertificateCustomization}
                alt="Customize certificates reflecting your branding on it"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="container mt-16 py-16 flex flex-col gap-6 items-center md:flex-row-reverse md:justify-between md:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-normal md:text-5xl md:max-w-4xl md:leading-snug">
                Land your branding professionally in the inbox
              </h1>
              <p className="mt-4 text-gray-500 md:text-lg">{`We use email as the media to send out certificates to the recipients. You can customize the look and feel of email templates by adding your brandings such as logo, name and colors. This helps to distribute certificates both in a professional and elegant way. Receivers can identify you right after opening the email.`}</p>
            </div>
            <div>
              <Image
                src={CertificateEmailCustomization}
                alt="Customize certificate email templates reflecting your branding on it"
                width={500}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-zinc-900">
          <div className="container py-16">
            <p className="text-gray-200 text-center font-semibold">✨ Introducing all new</p>
            <h1 className="mt-6 mx-auto text-4xl font-semibold text-center text-white max-w-4xl md:text-6xl">{`Tailored fit customizations with
Premium branding`}</h1>
            <p className="mt-6 mx-auto text-center text-gray-200 max-w-3xl md:text-lg">{`Give your certificate receivers a truly native experience `}</p>
            <Link href="/features/premium-branding">
              <a className="mt-6 flex items-center justify-center gap-2 text-blue-700 font-semibold">
                Find out more <ChevronRightIcon className="w-5" />
              </a>
            </Link>
          </div>
        </section>
      </main>
    </Page>
  )
}

StandardBranding.layout = MainLayout

export default StandardBranding
