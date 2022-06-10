import React, { useEffect, useState } from "react";

// gsap
import gsap from "gsap";

import * as Yup from "yup";

// formik
import { Field, Form, Formik, FormikHelpers } from "formik";

import { toast } from "react-toastify";

import axios from "axios";

// components
import TextField from "../form/TextField";
import Spinner from "../Spinner";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").trim().required("Required"),
});

function Hero() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

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
      }
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
      "-=1.6"
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
  }, []);

  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setLoading(true);
      await axios.post(
        `https://us-central1-driflys-80cfb.cloudfunctions.net/sendConnectingWithUsEmail?email=${values.email}`
      );
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
        <div className="flex flex-col gap-4">
          <div>
            <div
              id="hero-coming-soon"
              className="flex flex-row items-center gap-2 w-fit px-4 py-2 mx-auto rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <h3 className="text-xs text-white font-bold">Coming Soon</h3>
            </div>
            <h1
              id="hero-title"
              className="font-Poppins font-extrabold text-center text-4xl max-w-5xl leading-relaxed mt-4 md:leading-snug md:text-6xl"
            >
              {`Create design & send`}{" "}
              <span className="font-Exo font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                certificates
              </span>{" "}
              <span className="">hassle freely</span>
            </h1>
          </div>

          <p
            id="hero-subtitle"
            className="text-center text-lg text-gray-500 tracking-wide mt-4 max-w-5xl"
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
              <Form className="flex flex-col items-cent justify-center gap-4 mt-8 mx-auto max-w-3xl md:items-start md:flex-row">
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
                  <Spinner loading={loading} />
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
