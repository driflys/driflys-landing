// react
import { useEffect, useState } from "react";

// next
import { GetServerSidePropsContext } from "next";

import axiosInstance from "../../config/axios";

import SimpleLayout from "../../layouts/simple.layout";

import { formatDate } from "../../utils";

// components
import Page from "../../components/Page";
import Certificate from "../../components/certificateView/Certificate";
import Actions from "../../components/certificateView/Actions";
import Brand from "../../components/certificateView/Brand";
import Remarks from "../../components/certificateView/Remarks";
import Skills from "../../components/certificateView/Skills";
import Event from "../../components/certificateView/Event";
import RevokedBanner from "../../components/certificateView/RevokedBanner";

function CertificateView({ certificate, event }: any) {
  const [url, setUrl] = useState("https://driflys.com");
  const [issuer, setIssuer] = useState<any>({});
  const [brand, setBrand] = useState<any>({});

  useEffect(() => {
    setUrl(window.location.href);
    fetchIssuer();
    fetchBrand();
  }, [certificate]);

  const fetchIssuer = async () => {
    try {
      const res = await axiosInstance.get(`/users/${certificate?.userId}`);
      setIssuer(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBrand = async () => {
    try {
      const res = await axiosInstance.get(`/brands/${certificate.brandId}`);
      setBrand(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const certificateName = `${certificate?.receiver?.name}'s certificate for ${event?.name}`;
  const certificateDescription = `Check out ${certificate?.receiver?.name}'s certificate`;
  const hashtags = ["driflys", "certificate", "driflys_certificate"];

  return (
    <Page
      title={`${certificate?.receiver?.name} | ${event.name} - Driflys`}
      meta={
        <>
          <meta name="title" content={certificateName} />
          <meta name="description" content={certificateDescription} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={certificateName} />
          <meta property="og:description" content={certificateDescription} />
          <meta property="og:image" content={certificate?.media?.image} />

          <meta property="twitter:card" content="Sasnaka Certificate" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={certificateName} />
          <meta
            property="twitter:description"
            content={certificateDescription}
          />
          <meta property="twitter:image" content={certificate?.media?.image} />
        </>
      }
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

      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-12">
        <div className="md:col-start-1 md:col-span-2">
          {certificate?.remarks && <Remarks remarks={certificate?.remarks} />}
        </div>
        <div className="md:col-start-3 md:row-span-2">
          <Actions
            url={url}
            image={certificate?.media?.image}
            pdf={certificate?.media?.pdf}
            issuerEmail={issuer?.email}
            certificateName={certificateName}
            certificateDescription={certificateDescription}
            certificateId={certificate?.id}
            certificateCreatedAt={certificate?.createdAt}
            hashtags={hashtags}
          />
        </div>

        <div className="md:col-start-1 md:col-span-2">
          {certificate?.gainedSkills && (
            <Skills skills={certificate?.gainedSkills} />
          )}
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
  );
}

CertificateView.layout = SimpleLayout;

export default CertificateView;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const certificateId = ctx.params?.certificateId;
  if (!certificateId)
    return {
      redirect: {
        destination: "/verify",
        permanent: false,
      },
    };

  try {
    const certificateRes = await axiosInstance.get(
      `/certificates/${certificateId}`
    );
    const eventRes = await axiosInstance.get(
      `/events/${certificateRes.data?.eventId}`
    );

    return {
      props: {
        certificate: certificateRes.data,
        event: eventRes.data,
      },
    };
  } catch (err: any) {
    console.error(err);
    if (err?.response?.status === 404)
      return {
        redirect: {
          destination: `/verify?error=${encodeURI("Certificate not found")}`,
          permanent: false,
        },
      };
    if (err?.response?.status === 500)
      return {
        redirect: {
          destination: `/verify?error=${encodeURI(
            "An error occurred. Please try again later"
          )}`,
          permanent: false,
        },
      };
  }
};
