import React, { useState } from "react";

// next
import Image from "next/image";
import Link from "next/link";

import * as Yup from "yup";

// formik
import { Field, Form, Formik, FormikHelpers } from "formik";

import { common } from "../../constants";

import axiosInstance from "../../config/axios";

import { toast } from "react-toastify";

// components
import TextField from "../form/TextField";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").trim().required("Required"),
});

function Hero() {
  const [loading, setLoading] = useState(false);

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
    <section id="hero" className="relative h-5/6">
      <div className="container py-14 lg:h-screen flex flex-col justify-center gap-12 md:items-center md:text-center z-10">
        <div>
          <h1 className="font-Exo2 text-4xl md:text-6xl font-bold max-w-2xl">
            Create design & send{" "}
            <span className="text-blue-700">certificates</span> hassle freely
          </h1>
          <p className="text-lg text-gray-500 tracking-wide mt-4 max-w-2xl">
            Issue digital certificates, promote your brand by admiring the
            audience. We can help you.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col justify-between gap-4 md:flex-row md:w-3/5 md:items-center">
            <Field
              name="email"
              label="Enter your Email"
              component={TextField}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-2 rounded-lg min-w-fit hover:bg-blue-600"
            >
              {loading ? "Sending" : "Notify Me"}
            </button>
          </Form>
        </Formik>

        <div className="flex justify-between items-center md:w-96">
          <SocialIcon
            href="https://facebook.com"
            alt="facebook"
            src={common.socialMedia.color.facebook}
          />
          <SocialIcon
            href="https://twitter.com"
            alt="twitter"
            src={common.socialMedia.color.twitter}
          />
          <SocialIcon
            href="https://instagram.com"
            alt="instagram"
            src={common.socialMedia.color.instagram}
          />
          <SocialIcon
            href="https://youtube.com"
            alt="youtube"
            src={common.socialMedia.color.youtube}
          />
          <SocialIcon
            href="https://linkedin.com"
            alt="linkedin"
            src={common.socialMedia.color.linkedIn}
          />
        </div>
      </div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-700 filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-slate-800 filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}

export default Hero;

const SocialIcon = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <Image src={src} alt={alt} width={25} height={25} objectFit="contain" />
      </a>
    </Link>
  );
};
