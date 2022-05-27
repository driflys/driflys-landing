import React, { useEffect, useState } from "react";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import * as Yup from "yup";

// formik
import { Field, Form, Formik, FormikHelpers } from "formik";

import axiosInstance from "../../config/axios";

import { toast } from "react-toastify";

// components
import TextField from "../form/TextField";

import LandingImage from "../../public/landingImage.svg";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").trim().required("Required"),
});

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    tl.fromTo(
      "#hero-image",
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
    );

    tl.fromTo(
      "#hero-coming-soon",
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
      },
      "-=1.5"
    );

    tl.fromTo(
      "#hero-title",
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
      "-=1.5"
    );

    tl.fromTo(
      "#hero-subtitle",
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
    );

    tl.fromTo(
      "#hero-form",
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
    );

    gsap.to("#hero-left", {
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: "#hero-left",
        start: "5% top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to("#hero-image", {
      scale: 0.4,
      scrollTrigger: {
        trigger: "#hero-image",
        start: "-50px top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setLoading(true);
      await axiosInstance.post("/feedbacks/notify-me", values);
      actions.resetForm();
      toast.success("Email sent successfully");
    } catch (err) {
      toast.error(
        "An error occurred while submitting your email. Please try again later."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-5/6 bg-white flex flex-col items-center justify-center"
    >
      <div className="container py-14 lg:h-screen flex flex-col items-center justify-center gap-12 md:flex-row-reverse z-10">
        <div id="hero-image" className="w-96 max-w-lg">
          <img src={LandingImage.src} alt="landing Image" width="content-fit" />
        </div>
        <div id="hero-left">
          <div
            id="hero-coming-soon"
            className="flex flex-row items-center gap-2"
          >
            <div className="border-t-2 w-8 border-gray-700" />
            <h3 className="text-gray-700">Coming Soon</h3>
          </div>
          <h1
            id="hero-title"
            className="font-Exo text-4xl font-normal max-w-2xl leading-relaxed mt-4 md:leading-snug md:text-6xl"
          >
            {`Create design & send`}{" "}
            <span className="text-blue-700 font-extrabold">certificates</span>{" "}
            <span className="font-extrabold">hassle freely</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg text-gray-500 tracking-wide mt-4 max-w-2xl"
          >
            Issue digital certificates, promote your brand by admiring the
            audience. We can help you.
          </p>
          <div id="hero-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col justify-between gap-4 mt-8 md:items-start">
                <Field
                  name="email"
                  label="Enter your Email"
                  component={TextField}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-3 rounded-lg min-w-fit hover:bg-blue-600 transition ease-out delay-150"
                >
                  {loading ? "Sending" : "Get my invitation"}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
