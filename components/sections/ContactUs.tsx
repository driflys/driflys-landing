import React, { useState } from "react";

import * as Yup from "yup";

// formik
import { Field, Form, Formik, FormikHelpers } from "formik";

// components
import TextField from "../../components/form/TextField";
import TextArea from "../../components/form/TextArea";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axios";

const initialContactUsValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const contactUsValidationSchema = Yup.object({
  firstName: Yup.string().trim().required("Required"),
  lastName: Yup.string().trim().required("Required"),
  email: Yup.string().email("Invalid Email").trim().required("Required"),
  message: Yup.string().trim().required("Required"),
});

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleContactUsSubmit = async (
    values: typeof initialContactUsValues,
    actions: FormikHelpers<typeof initialContactUsValues>
  ) => {
    try {
      setLoading(true);
      await axiosInstance.post("/feedbacks", values);
      actions.resetForm();
      toast.success("Message sent successfully");
    } catch (err) {
      toast.error(
        "An error occurred while submitting your message. Please try again later."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="bg-white">
      <div className="container h-screen flex justify-center items-center content-center">
        <div className="py-16 px-4 md:px-10 max-w-2xl shadow-xl rounded-xl bg-white">
          <h1 className="font-bold text-center text-4xl">Get in touch!</h1>
          <p className="mt-2 font-semibold text-center text-md text-gray-500">
            Have a comment or feedback? Fill the below form to contact us
          </p>
          <Formik
            initialValues={initialContactUsValues}
            validationSchema={contactUsValidationSchema}
            onSubmit={handleContactUsSubmit}
          >
            <Form className="mt-8 flex flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-row">
                <Field
                  name="firstName"
                  label="First Name"
                  component={TextField}
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  component={TextField}
                />
              </div>
              <Field name="email" label="Email" component={TextField} />
              <Field name="message" label="Message" component={TextArea} />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-2 rounded-lg min-w-fit hover:bg-blue-600"
              >
                {loading ? "Sending" : "Send Message"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
