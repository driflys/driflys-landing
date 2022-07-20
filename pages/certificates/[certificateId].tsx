// react
import { useEffect, useState } from "react"

// next
import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from "next"

import axiosInstance from "../../config/axios"

import SimpleLayout from "../../layouts/simple.layout"

import { formatDate } from "../../utils"

// components
import Page from "../../components/Page"
import Certificate from "../../components/certificateView/Certificate"
import Actions from "../../components/certificateView/Actions"
import Brand from "../../components/certificateView/Brand"
import Remarks from "../../components/certificateView/Remarks"
import Skills from "../../components/certificateView/Skills"
import Event from "../../components/certificateView/Event"
import RevokedBanner from "../../components/certificateView/RevokedBanner"

function CertificateView({ certificate, event, brand }: any) {
  const [url, setUrl] = useState("https://driflys.com")
  const [issuer, setIssuer] = useState<any>({})
  // const [brand, setBrand] = useState<any>({})

  useEffect(() => {
    setUrl(window.location.href)
    fetchIssuer()
    // fetchBrand()
  }, [certificate])

  const fetchIssuer = async () => {
    try {
      const res = await axiosInstance.get(`/users/${certificate?.userId}`)
      setIssuer(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  console.log("Certificate", certificate)

  // const fetchBrand = async () => {
  //   try {
  //     const res = await axiosInstance.get(`/brands/${certificate.brandId}`)
  //     setBrand(res.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const certificateName = `${certificate?.receiver?.name}'s certificate for ${event?.name}`
  const certificateDescription = `Check out ${certificate?.receiver?.name}'s certificate`
  const hashtags = ["driflys", "certificate", "driflys_certificate"]

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
      <div className="pt-20 px-2">
        <div className="mb-4">
          {certificate?.state?.isRevoked && (
            <RevokedBanner
              reason={certificate?.state?.revokedReason}
              revokedAt={formatDate(certificate?.state?.revokedAt)}
            />
          )}
        </div>

        <div className="flex items-center justify-center">
          <Certificate
            id={certificate?.id}
            image={certificate?.media?.image}
            name={certificate?.receiver?.name}
            issued={certificate?.createdAt}
          />
        </div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-12">
        {certificate?.remarks && (
          <div className="md:col-start-1 md:col-span-2">
            <Remarks remarks={certificate?.remarks} />
          </div>
        )}

        <div className="md:col-start-3 md:row-span-2">
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
        </div>

        <div className="md:col-start-1 md:col-span-2">
          {certificate?.gainedSkills && <Skills skills={certificate?.gainedSkills} />}
        </div>
        <div className="md:col-start-3">
          <Brand
            name={brand?.name}
            type={brand?.type}
            industry={brand?.industry}
            logo={brand?.logoUrl}
            web={brand?.webUrl}
            socialMedias={brand?.socialMedias}
          />
        </div>
        <div className="md:col-start-1">
          <Event {...event} />
        </div>
      </div>
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

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   // return {
//   //   redirect: {
//   //     destination: "/",
//   //     permanent: false,
//   //   },
//   // };

//   const certificateId = ctx.params?.certificateId
//   if (!certificateId)
//     return {
//       redirect: {
//         destination: "/verify",
//         permanent: false,
//       },
//     }

//   try {
//     const certificateRes = await axiosInstance.get(`/certificates/${certificateId}`)
//     const eventRes = await axiosInstance.get(`/events/${certificateRes.data?.eventId}`)

//     return {
//       props: {
//         certificate: certificateRes.data,
//         event: eventRes.data,
//       },
//     }
//   } catch (err: any) {
//     console.error(err)
//     if (err?.response?.status === 404)
//       return {
//         redirect: {
//           destination: `/verify?error=${encodeURI("Certificate not found")}`,
//           permanent: false,
//         },
//       }
//     if (err?.response?.status === 500)
//       return {
//         redirect: {
//           destination: `/verify?error=${encodeURI("An error occurred. Please try again later")}`,
//           permanent: false,
//         },
//       }
//   }
// }
