// react
import React, { useEffect, useRef, useState } from "react"

import { MainLayout } from "../../layouts"

// components
import Page from "../../components/Page"
import TextField from "../../components/form/TextField"
import TextArea from "../../components/form/TextArea"
import Spinner from "../../components/Spinner"

import * as Yup from "yup"

// formik
import { Field, Form, Formik, FormikHelpers } from "formik"

import { toast } from "react-toastify"

// axios
import axios from "axios"

// gsap
import gsap from "gsap"

// @ts-ignore
import Typewriter from "typewriter-effect"

import ReCAPTCHA from "react-google-recaptcha"

// constants
import { env } from "../../constants/env"

const initialContactUsValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

const contactUsValidationSchema = Yup.object({
  firstName: Yup.string().trim().required("Required"),
  lastName: Yup.string().trim().required("Required"),
  email: Yup.string().email("Invalid Email").trim().required("Required"),
  message: Yup.string().trim().required("Required"),
})

function ContactUs() {
  const [loading, setLoading] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    })

    tl.fromTo(
      "#title",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 0,
        y: 0,
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: -30,
        duration: 1.6,
      }
    )

    tl.fromTo(
      "#subtitle-1",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 0,
        y: 0,
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: -30,
        duration: 2.2,
      },
      "-=1.6"
    )

    tl.fromTo(
      "#subtitle-2",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 0,
        y: 0,
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: -30,
      },
      "-=2"
    )

    tl.fromTo(
      "#form",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=2.2"
    )
  }, [])

  const handleContactUsSubmit = async (
    values: typeof initialContactUsValues,
    actions: FormikHelpers<typeof initialContactUsValues>
  ) => {
    try {
      setLoading(true)

      const recaptchaToken = await recaptchaRef.current?.executeAsync()
      recaptchaRef.current?.reset()
      // const human = await isHuman(recaptchaToken || "");
      // if (!human) {
      //   toast.error("An error occurred. Please try again.");
      //   return;
      // }

      await axios.post("https://us-central1-driflys-80cfb.cloudfunctions.net/sendContactUsEmail", values)
      actions.resetForm()
      toast.success("Message sent successfully")
    } catch (err) {
      toast.error("An error occurred while submitting your message. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // const isHuman = async (token: string): Promise<boolean> => {
  //   try {
  //     const res = await axios.post(
  //       `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  //       {
  //         token,
  //       }
  //     );
  //     return res.data?.success;
  //   } catch (err) {
  //     console.error(err);
  //     return false;
  //   }
  // };

  return (
    <Page title="Contact us - Driflys">
      <div className="bg-white">
        <div className="container flex flex-col gap-8 py-14 lg:h-screen z-10 md:flex-row md:items-center md:justify-center md:gap-32">
          <div>
            <h1 id="title" className="font-bold text-center text-5xl">
              Get in touch!
            </h1>
            <h3
              id="subtitle-1"
              className="flex flex-row gap-2 items-center justify-center mt-4 font-semibold text-center text-2xl text-gray-500"
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter: any) => {
                  typewriter
                    .typeString("Have a comment ?")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Have a feedback ?")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Or anything else to say ?")
                    .pauseFor(2500)
                    .deleteAll()
                    .start()
                }}
              />
            </h3>
            <p id="subtitle-2" className="mt-2 font-semibold text-center text-md text-gray-500">
              Fill the form to contact us
            </p>
          </div>

          <div id="form" className="py-12 px-4 md:px-6 md:max-w-xl h-fit drop-shadow-xl rounded-xl bg-white md:flex-1">
            <Formik
              initialValues={initialContactUsValues}
              validationSchema={contactUsValidationSchema}
              onSubmit={handleContactUsSubmit}
            >
              <Form className="flex flex-col gap-2">
                <Field name="firstName" label="First Name" component={TextField} />
                <Field name="lastName" label="Last Name" component={TextField} />
                <Field name="email" label="Email" component={TextField} />
                <Field name="message" label="Message" component={TextArea} />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-2 rounded-lg min-w-fit hover:bg-blue-600"
                >
                  <Spinner loading={loading} />
                  {loading ? "Sending" : "Send Message"}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={env.RECAPTCHA_SITE_KEY} />
    </Page>
  )
}

ContactUs.layout = MainLayout

export default ContactUs
