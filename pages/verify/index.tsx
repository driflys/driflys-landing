// react
import { FormEvent, useEffect, useState } from "react";

// next
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import SimpleLayout from "../../layouts/simple.layout";

import { toast } from "react-toastify";

import Page from "../../components/Page";

function Verify() {
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    const error = router.query.error;
    if (error) {
      toast.error(error);
      router.replace("/verify?error=", "/verify", { shallow: true });
    }
  }, [router.query.error]);

  const handleVerify = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      toast.error("Please enter your certificate id");
      return;
    }
    router.push(`/certificates/[id]`, `/certificates/${id}`);
  };

  return (
    <Page title="Verify Certificate - Driflys">
      <div className="bg-gray-50 flex justify-center items-center h-screen">
        <div className="bg-white px-10 py-20 shadow-xl">
          <h1 className="text-2xl">Verify your Certificate</h1>
          <form onSubmit={handleVerify}>
            <input
              type="text"
              id="floating_email"
              name="floating_email"
              className="block mt-10 tracking-widest py-1 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Certificate ID"
              onChange={(e) => setId(e.target.value)}
            />
            <p className="text-gray-400 mt-2">
              Certificate ID can be found at bottom of the certificate
            </p>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out delay-50 text-white w-full px-5 mt-4 py-2 rounded"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
}

Verify.layout = SimpleLayout;

export default Verify;

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   return {
//     redirect: {
//       destination: "/",
//       permanent: false,
//     },
//   };
// };
