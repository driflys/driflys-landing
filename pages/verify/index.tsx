// react
import { FormEvent, useEffect, useState } from "react"

// next
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { toast } from "react-toastify"

// components
import Page from "../../components/Page"
import Loader from "../../components/Loader"

import { common } from "../../constants"

import axiosInstance from "../../config/axios"

function Verify() {
  const router = useRouter()
  const [id, setId] = useState("")
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)

  useEffect(() => {
    // check that the user was redirected from certificate
    // view page due to an invalid certificate
    const invalidCertificate = router.query?.invalid
    if (invalidCertificate && invalidCertificate === "true") {
      toast.error("Invalid Certificate")
      router.replace("/verify")
    }

    const internalError = router.query?.internalServerError
    if (internalError && internalError === "true") {
      toast.error("Internal Server Error. Please try again later")
      router.replace("/verify")
    }

    registerRouterEvents()
  })

  const registerRouterEvents = () => {
    const handleStart = (url: string) => url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) => url === router.asPath && setLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }

  const handleVerify = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id) {
      toast.error("Please enter your certificate id")
      return
    }
    try {
      setVerifying(true)
      // make the call to the api
      const res = await axiosInstance.get(`/certificates/verify/${id}`)
      if (res.data.verified) {
        // redirect to the certificate view page with the certificate id
        toast.success("Certificate identity was successfully verified")
        router.push(`/certificates/${id}`)
        return
      }
      toast.error("Invalid Certificate")
    } catch (err) {
      console.error(err)
      toast.error("Internal Server Error. Please Try Again Later")
    } finally {
      setVerifying(false)
    }
  }

  if (loading) return <Loader />

  return (
    <Page title="Verify Certificate - Driflys">
      <div className="container bg-gray-50 flex justify-center items-center h-screen">
        <div className="bg-white px-10 py-20 shadow-xl">
          <Link href="/">
            <a target="_blank">
              <Image
                src={common.logoHorizontalNoSlogan}
                alt="Driflys Logo"
                width={150}
                height={40}
                objectFit="contain"
              />
            </a>
          </Link>
          <h1 className="mt-4 text-2xl">Verify your Certificate</h1>
          <form onSubmit={handleVerify}>
            <input
              type="text"
              id="floating_email"
              name="floating_email"
              className="block mt-10 py-1 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Certificate ID"
              onChange={(e) => setId(e.target.value)}
            />
            <p className="mt-2 text-gray-400 text-sm">Certificate ID can be found at bottom of the certificate</p>

            <button
              type="submit"
              disabled={verifying}
              className="bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out delay-50 text-white w-full px-5 mt-4 py-2 rounded disabled:bg-blue-700 disabled:opacity-50"
            >
              {verifying ? "Verifying" : "Verify"}
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default Verify
