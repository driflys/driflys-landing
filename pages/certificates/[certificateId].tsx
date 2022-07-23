// react
import { useEffect, useState } from "react"

// next
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import axiosInstance from "../../config/axios"

import SimpleLayout from "../../layouts/simple.layout"

import { formatDate } from "../../utils"

// components
import Page from "../../components/Page"
import BasicDetails from "../../components/certificateView/BasicDetails"
import Actions from "../../components/certificateView/Actions"
import Brand from "../../components/certificateView/Brand"
import Remarks from "../../components/certificateView/Remarks"
import Skills from "../../components/certificateView/Skills"
import Event from "../../components/certificateView/Event"
import RevokedBanner from "../../components/certificateView/RevokedBanner"
import Loader from "../../components/Loader"

import { common } from "../../constants"

function CertificateView({ certificate, event, brand }: any) {
  const router = useRouter()
  const [url, setUrl] = useState("https://driflys.com")
  const [issuer, setIssuer] = useState<any>({})

  useEffect(() => {
    setUrl(window.location.href)
    fetchIssuer()
  }, [certificate])

  const fetchIssuer = async () => {
    try {
      const res = await axiosInstance.get(`/users/${certificate?.userId}`)
      setIssuer(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const certificateName = `${certificate?.receiver?.name}'s certificate in ${event?.name} issued by ${brand?.name}`
  const certificateDescription = `This certificate was awarded to ${certificate?.receiver?.name} for participating in ${event?.name} which was organized by ${brand?.name}`
  const hashtags = ["driflys", "certificate", "driflysCertificate"]

  if (router.isFallback) return <Loader />

  return (
    <Page
      pageTitle={`${certificate?.receiver?.name} | ${event?.name} - Driflys`}
      title={certificateName}
      description={certificateDescription}
      author="Driflys"
      og={{
        type: "website",
        url: url,
        title: certificateName,
        description: certificateDescription,
        image: certificate?.media?.image,
        alt: "Certificate image",
      }}
      twitter={{
        card: "summary_large_image",
        url: url,
        title: certificateName,
        description: certificateDescription,
        image: certificate?.media?.image,
        alt: "Certificate image",
        site: "@driflys",
        creator: "@driflys",
      }}
    >
      <main className="bg-white">
        {certificate?.state?.isRevoked && (
          <RevokedBanner
            reason={certificate?.state?.revokedReason}
            revokedAt={formatDate(certificate?.state?.revokedAt)}
          />
        )}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto w-fit drop-shadow-lg">
            <Image
              src={certificate?.media?.image ?? common.noImage}
              alt="Certificate image"
              width={700}
              height={450}
              objectFit="contain"
            />
          </div>
        </section>

        <section className="container mt-12 pb-16">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Actions
                url={url}
                image={certificate?.media?.image}
                pdf={certificate?.media?.pdf}
                issuer={issuer}
                certificateName={certificateName}
                certificateDescription={certificateDescription}
                certificateId={certificate?.id}
                certificateCreatedAt={certificate?.createdAt}
                hashtags={hashtags}
              />

              <Brand
                name={brand?.name}
                description={brand?.description}
                type={brand?.type}
                industry={brand?.industry}
                logo={brand?.logoUrl}
                web={brand?.webUrl}
              />
            </div>
            <BasicDetails
              certificateId={certificate?.id}
              receiverName={certificate?.receiver?.name}
              createdAt={certificate?.createdAt}
            />
            {certificate?.remarks && <Remarks remarks={certificate?.remarks} />}
            {certificate?.gainedSkills && <Skills skills={certificate?.gainedSkills} />}
            <Event name={event?.name} description={event?.description} duration={event?.duration} type={event?.type} />
          </div>
        </section>
      </main>
    </Page>
  )
}

CertificateView.layout = SimpleLayout

export default CertificateView

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const certificateId = context.params?.certificateId
    const certificateRes = await axiosInstance.get(`/certificates/${certificateId}`)

    const results = await Promise.all([
      axiosInstance.get(`/events/${certificateRes.data?.eventId}`),
      axiosInstance.get(`/brands/${certificateRes.data?.brandId}`),
    ])

    const certificate = certificateRes.data
    const event = results[0]?.data
    const brand = results[1]?.data

    return {
      props: {
        certificate: certificate,
        event: event,
        brand: brand,
      },
    }
  } catch (err: any) {
    console.error(err)
    const status = err?.response?.status ?? 500

    if (status === 404)
      return {
        redirect: {
          destination: "/verify/?invalid=true",
          permanent: false,
        },
      }

    return {
      redirect: {
        destination: "/verify/?internalServerError=true",
        permanent: false,
      },
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: true, paths: [] }
}
