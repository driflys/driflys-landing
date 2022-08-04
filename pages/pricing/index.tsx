// react
import { useState } from "react"

// next
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
    description: "For non-professional use. Mainly for test purposes",
    productName: "Driflys Free Forever",
    monthlyPrice: 0,
    halfYearlyPrice: 0,
    quotas: ["Up to 30 certificates monthly", "Up to 1 event monthly", "Up to 1 template monthly"],
    features: [
      "Certificate builder",
      // "Brand promoting",
      "Certificate email tracking",
      "Certificate sharing",
      "High quality certificates in PDF",
    ],
    buttonText: "Start Free",
  },
  {
    name: "STANDARD",
    description: "For professional use with basic features. Best for issue certificates to small groups",
    productName: "Driflys Standard",
    monthlyPrice: 15,
    halfYearlyPrice: 12,
    quotas: ["Up to 100 certificates monthly", "Up to 5 event monthly", "Up to 5 template monthly"],
    features: [
      "All the free plan features",
      "Professional templates",
      "Brand white labelling on certificates",
      "Basic brand promoting",
      // "Certificate issue history",
    ],
    buttonText: "Talk to sales",
  },
  {
    name: "PRO",
    description: "For professional plus use with advanced features. Great for issue certificates to large groups",
    productName: "Driflys Pro",
    monthlyPrice: 45,
    halfYearlyPrice: 40,
    quotas: ["Up to 1000 certificates monthly", "Up to 50 event monthly", "Up to 50 template monthly"],
    features: [
      "All the standard plan features",
      "LinkedIn Certificates",
      "Email template customization",
      "Brand white labelling on email templates",
      "Revokable certificates",
      "Delete certificates",
    ],
    buttonText: "Talk to sales",
  },
]

const faqs = [
  {
    question: "What is Driflys?",
    answer:
      "Driflys is a platform for creating and sharing certificates. It is a free service for non-professional use. It is mainly for test purposes.",
  },
  {
    question: "How do I use Driflys?",
    answer:
      "You can use Driflys to create certificates for your customers. You can also use Driflys to create templates for your customers. You can also use Driflys to create events for your customers. You can also use Driflys to create brands for your customers.",
  },
  {
    question: "How do I create a certificate?",
    answer:
      "You can use the certificate builder to create a certificate. You can also use the certificate builder to create a template. You can also use the certificate builder to create an event.",
  },
  {
    question: "How do I create a template?",
    answer:
      "You can use the certificate builder to create a template. You can also use the certificate builder to create an event.",
  },
]

function Pricing() {
  const { user } = useSession()
  const router = useRouter()
  const [planDuration, setPlanDuration] = useState<PlanDuration>(PlanDurations.MONTHLY)

  const currentPlan = user?.plan ?? ""

  const handlePlanSubscribe = (planName: string, productName: string, duration: string) => {
    if (planName === "FREE") router.push("https://app.driflys.com/auth/signUp")
    else router.push("/contact-us")
  }

  return (
    <Page title="Pricing - Driflys">
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
        </section>

        {/* FAQ */}
        <section className="container mt-8 pb-8">
          <div className="mx-auto">
            <h1 className="text-4xl text-center font-semibold">FAQs</h1>
          </div>
          <div className="mt-8 mx-auto max-w-3xl">
            {faqs.map((faq, i) => {
              return <FAQTab key={i} question={faq.question} answer={faq.answer} />
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
    <div className="bg-white drop-shadow-lg rounded-md px-6 py-12">
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
    <div className="flex flex-col gap-4 md:flex-row md:justify-evenly md:items-center md: bg-gradient-to-r from-blue-600 to-blue-900 rounded-md px-6 py-8 md:grid-cols-3 md:grid-rows-1">
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
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Custom quota
          </li>
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Custom features
          </li>
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Custom domain
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Dedicated hosting
          </li>
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Dedicated support
          </li>
          <li className="flex items-center gap-4 text-gray-50">
            <CheckCircleIcon className="w-5" /> Advanced branding
          </li>
        </ul>
      </div>
    </div>
  )
}

interface FAQTabProps {
  question: string
  answer: string
}

const FAQTab = ({ question, answer }: FAQTabProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg text-lg font-semibold px-4 py-2 text-left text-purple-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
            <span className={`${open && "text-blue-700"}`}>{question}</span>
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
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{answer}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
