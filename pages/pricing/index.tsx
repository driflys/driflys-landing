// react
import { useState } from "react"

// next
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { Disclosure, Transition } from "@headlessui/react"

import Page from "../../components/Page"
import { MainLayout } from "../../layouts"

// icons
import StarIcon from "@heroicons/react/solid/StarIcon"
import CheckIcon from "@heroicons/react/outline/CheckIcon"
import CheckCircleIcon from "@heroicons/react/solid/CheckCircleIcon"
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon"

// images
import VisaLogo from "../../public/other/visa.png"
import MastercardLogo from "../../public/other/mastercard.png"
import AmericanExpressLogo from "../../public/other/american-express.png"
import PaddleLogo from "../../public/other/paddle-payment-gateway.png"

import useSession from "../../hooks/useSession"

enum PlanDurations {
  MONTHLY = "MONTHLY",
  HALF_YEARLY = "HALF_YEARLY",
}
type PlanDuration = keyof typeof PlanDurations

interface Plan {
  name: string
  description: string
  monthlyPrice: number
  halfYearlyPrice: number
  quotas: string[]
  features: string[]
  buttonText: string
  productName: string
}

const plans: Plan[] = [
  {
    name: "FREE",
    description: "For non-professional use. Mainly for testing purposes",
    productName: "Driflys Free Forever",
    monthlyPrice: 0,
    halfYearlyPrice: 0,
    quotas: ["Up to 100 certificates yearly", "Up to 5 events yearly", "Up to 5 templates yearly"],
    features: [
      "Certificate builder",
      "Bulk certificate issue",
      "Certificate email tracking",
      "Certificate sharing",
      "Certificate verification",
      "High quality certificates in PDF",
    ],
    buttonText: "Start Free",
  },
  {
    name: "STANDARD",
    description: "For professional use with basic features. Best for issuing certificates to small groups",
    productName: "Driflys Standard",
    monthlyPrice: 20,
    halfYearlyPrice: 16,
    quotas: ["Up to 500 certificates yearly", "Up to 30 events yearly", "Up to 30 templates yearly"],
    features: [
      "All the free plan features",
      "Professional templates",
      "LinkedIn Certificates",
      "Remove Driflys branding on certificates",
    ],
    buttonText: "Talk to sales",
  },
  {
    name: "PRO",
    description: "For professional plus use with advanced features. Great for issuing certificates to large groups",
    productName: "Driflys Pro",
    monthlyPrice: 40,
    halfYearlyPrice: 32,
    quotas: ["Up to 1000 certificates yearly", "Unlimited events", "Unlimited templates"],
    features: [
      "All the standard plan features",
      "Email template customization",
      "Add your branding on email templates",
      "Revoke certificates",
      "Delete certificates",
    ],
    buttonText: "Talk to sales",
  },
]

const faqs = [
  {
    question: "Do you refund money?",
    answer:
      "Yes, if you cancelled the paid subscription within 7days from the day you purchased, we’ll refund your money back.",
    link: "https://driflys.com/legal/refund-policy",
    linkTitle: "Find out more at Refund Policy",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes, we offer discounts up to 50% for non-profit organizations. Please contact us.",
  },
  {
    question: "Can we cancel at anytime?",
    answer: "Yes, you can cancel your subscription at anytime.",
  },
  {
    question: "Is there any trial period?",
    answer:
      "As of now, we don’t offer any trial period but if you want to get hands on experience with the platform, we can offer you a demo.",
    link: "https://driflys.com/contact-us",
    linkTitle: "Contact Us",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes, we offer discounts up to 50% for non-profit organizations.",
    link: "https://driflys.com/contact-us",
    linkTitle: "Please contact Us",
  },
  {
    question: "How safe is our data?",
    answer:
      "We at Driflys have taken necessary steps. All data transmitted through the internet is encrypted and we save your data at a secure tier 3 SOC 2-certified data center. We take backups in a pre-defined interval so that we can guarantee your data is stored safely.",
  },
  {
    question: "How can we get premium branding and custom domain?",
    answer:
      "We provide premium branding and custom domain with dedicate hosting only for Enterprise plan users. Standard and Pro plan users are provided with Basic branding features.",
    link: "https://driflys.com/features/standard-branding",
    linkTitle: "Find out Basic branding",
  },
  {
    question: "Are there any long-term contracts to be signed?",
    answer:
      "No, there are no long-term contracts to be signed. You can create a subscription in a monthly or half-yearly(6 months) basis.",
  },
  {
    question: "Are there any ongoing fees for maintaining my certificates?",
    answer: "No, there are no extra fees involved to keep your certificates online after they are issued.",
  },
]

function Pricing() {
  const { user } = useSession()
  const router = useRouter()
  const [planDuration, setPlanDuration] = useState<PlanDuration>(PlanDurations.MONTHLY)

  const currentPlan = user?.plan ?? ""

  const handlePlanSubscribe = (planName: string, productName: string, duration: string) => {
    if (planName === "FREE") return router.push("https://app.driflys.com/auth/signUp")
    return router.push(
      `https://app.driflys.com/auth/signUp?plan=${planName}&productName=${productName}&duration=${duration}`
    )
    // if (!user) return router.push("https://app.driflys.com/auth/login")
  }

  return (
    <Page
      title="Pricing - Driflys"
      description="Pricing plans suitable for every scale. Free: For non-professional use. No credit card required, Standard: For professional use with basic features. $20, Pro: For professional plus use with advanced features. $40, Enterprise: For fully customized experience"
    >
      <Head>
        <script type="application/ld+json">
          {`{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Does Driflys offer discounts for non-profits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>Yes, we offer discounts up to 50% for non-profit organizations. <a href=https://driflys.com/contact-us></a> Please contact us</p>"
        }
      }, {
        "@type": "Question",
        "name": "How safe is our data in Driflys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We at Driflys have taken necessary steps. All data transmitted through the internet is encrypted and we save your data at a secure tier 3 SOC 2-certified data center. We take backups in a pre-defined interval so that we can guarantee your data is stored safely."
        }
      }, {
        "@type": "Question",
        "name": "How can we get a custom domain in Driflys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>We provide <a href=https://driflys.com/features/premium-branding> Premium Branding </>and custom domain with dedicate hosting only for Enterprise plan users. Standard and Pro plan users are provided with <a href=https://driflys.com/features/standard-branding> Basic Branding </a>features.</p>"
        }
      }, {
        "@type": "Question",
        "name": "Are there any long-term contracts to be signed for a Driflys account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, there are no long-term contracts to be signed. You can create a subscription in a monthly or half-yearly(6 months) basis."
        }
      }, {
        "@type": "Question",
        "name": "Can we cancel Driflys account at anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":"Yes, you can cancel your subscription at anytime."}
        }]
    }`}
        </script>
      </Head>
      <main className="bg-white">
        <section id="hero" className="container">
          <div className="pt-12">
            <h1 className="mx-auto text-4xl font-bold text-center leading-normal md:text-6xl md:max-w-4xl md:leading-snug">
              <span className="font-black text-blue-700">Pricing</span>
              {` plans suitable for every scale`}
            </h1>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container">
          <div className="mt-8 mx-auto flex items-center max-w-sm bg-gray-100 drop-shadow-lg rounded-md">
            <div
              className={`text-md font-semibold cursor-pointer py-3 px-8 rounded-md ${
                planDuration === PlanDurations.HALF_YEARLY ? "bg-white text-black" : "text-gray-400"
              }`}
              onClick={() => setPlanDuration(PlanDurations.HALF_YEARLY)}
            >
              Half yearly <span className="ml-2 text-blue-700">save 20%</span>
            </div>
            <div
              className={`flex-1 text-md text-center font-semibold cursor-pointer py-3 px-8 rounded-md ${
                planDuration === PlanDurations.MONTHLY ? "bg-white text-black" : "text-gray-400"
              }`}
              onClick={() => setPlanDuration(PlanDurations.MONTHLY)}
            >
              Monthly
            </div>
          </div>

          <div
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
            onClick={() => setPlanDuration(PlanDurations.MONTHLY)}
          >
            <PlanCard
              plan={plans[0]}
              duration={planDuration}
              currentPlan={currentPlan}
              onSubscribe={handlePlanSubscribe}
            />
            <PlanCard
              plan={plans[1]}
              duration={planDuration}
              currentPlan={currentPlan}
              onSubscribe={handlePlanSubscribe}
            />
            <PlanCard
              plan={plans[2]}
              duration={planDuration}
              currentPlan={currentPlan}
              onSubscribe={handlePlanSubscribe}
            />
            <div className="col-start-1 md:col-start-1 md:col-span-3">
              <EnterprisePlanCard />
            </div>
          </div>

          <div className="mt-8 mx-auto w-fit">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src={VisaLogo} alt="Visa logo" width={60} height={50} objectFit="contain" />
              <Image src={MastercardLogo} alt="Mastercard logo" width={50} height={30} objectFit="contain" />
              <Image src={AmericanExpressLogo} alt="American express logo" width={70} height={35} objectFit="contain" />
              <Image src={PaddleLogo} alt="Paddle payment gateway logo" width={60} height={35} objectFit="contain" />
            </div>
            <p className="mt-4 text-center text-sm">We process all the payments using secure checkout via Paddle</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mt-16 pb-8">
          <div className="mx-auto">
            <h1 className="text-4xl text-center font-semibold">Frequently Asked Questions</h1>
          </div>
          <div className="mt-12 mx-auto max-w-4xl">
            {faqs.map((faq, i) => {
              return (
                <FAQTab key={i} question={faq.question} answer={faq.answer} link={faq.link} linkTitle={faq.linkTitle} />
              )
            })}
          </div>
        </section>
      </main>
    </Page>
  )
}

Pricing.layout = MainLayout

export default Pricing

interface PlanCardProps {
  plan: Plan
  currentPlan?: string | null
  duration: PlanDuration
  onSubscribe: (planName: string, productName: string, duration: string) => void
}

const PlanCard = ({ plan, duration, currentPlan = null, onSubscribe }: PlanCardProps) => {
  return (
    <div
      className={`bg-white rounded-md px-6 py-12 ${
        plan.name === "STANDARD" ? "border-t-4 border-blue-700 drop-shadow-2xl" : "drop-shadow-lg"
      }`}
    >
      <h2 className="font-semibold">{plan.name}</h2>
      <h1 className="mt-8 font-semibold text-4xl">
        $ {duration === PlanDurations.MONTHLY ? plan.monthlyPrice : plan.halfYearlyPrice}{" "}
        <span className="text-lg text-gray-600">/month</span>
      </h1>
      <p className="mt-4 text-gray-600">{plan.description}</p>
      <ul className="mt-8 flex flex-col gap-4">
        {plan.quotas.map((quota, i) => {
          return (
            <li key={i} className="flex gap-4 items-center">
              <StarIcon className="w-5" />
              {quota}
            </li>
          )
        })}
      </ul>

      <ul className="mt-4 flex flex-col gap-4">
        {plan.features.map((feature, i) => {
          return (
            <li key={i} className="flex gap-4 items-center">
              <CheckIcon className="w-5" /> {feature}
            </li>
          )
        })}
      </ul>

      <button
        className={`mt-8 font-semibold rounded-md py-3 px-12 w-full ${
          plan.name === "FREE" && "bg-white border-blue-700 border-2 hover:bg-blue-50"
        }
        ${plan.name === "STANDARD" && "bg-blue-700 text-gray-50 hover:bg-blue-600 hover:text-white"}
        ${plan.name === "PRO" && "bg-purple-700 text-gray-50 hover:bg-purple-600 hover:text-white"}
        `}
        disabled={currentPlan === plan.name ?? false}
        onClick={() => onSubscribe(plan.name, plan.productName, duration)}
      >
        {currentPlan === plan.name ? "Current plan" : plan.buttonText}
      </button>
    </div>
  )
}

const EnterprisePlanCard = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-evenly md:items-center md: bg-gradient-to-r from-blue-600 to-blue-900 rounded-md px-6 py-12 md:grid-cols-3 md:grid-rows-1">
      <div>
        <h2 className="text-white font-semibold">Enterprise</h2>
        <h1 className="mt-4 text-white font-semibold text-4xl">Custom Pricing</h1>
        <Link href="/contact-us">
          <a>
            <button className="mt-4 bg-gray-50 font-semibold  px-4 py-3 rounded-md w-full hover:bg-white">
              Contact Us
            </button>
          </a>
        </Link>
      </div>

      <div>
        <ul className="flex flex-col justify-center gap-4">
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Custom quota
          </li>
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Custom features
          </li>
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Custom domain
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Dedicated hosting
          </li>
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Dedicated support
          </li>
          <li className="flex items-center gap-4 text-gray-50 md:text-lg">
            <CheckCircleIcon className="w-5" /> Premium branding
          </li>
        </ul>
      </div>
    </div>
  )
}

interface FAQTabProps {
  question: string
  answer: string
  link?: string
  linkTitle?: string
}

const FAQTab = ({ question, answer, link, linkTitle }: FAQTabProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex w-full justify-between rounded-lg text-xl font-semibold px-4 py-4 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
            <span className={`${open ? "text-blue-700" : "text-zinc-600"}`}>{question}</span>
            <ChevronRightIcon className={`${open && "rotate-90 transform text-blue-700"} w-6`} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 py-4 text-md text-gray-600">
              {answer}{" "}
              {link && (
                <span>
                  <Link href={link}>
                    <a className="text-blue-700" target="_blank">
                      {linkTitle}
                    </a>
                  </Link>{" "}
                </span>
              )}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
