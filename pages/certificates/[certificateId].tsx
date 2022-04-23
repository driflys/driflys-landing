// react
import { useEffect, useState } from "react";

// next
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";

import axiosInstance from "../../config/axios";

// constants
import { common } from "../../constants";

import SimpleLayout from "../../layouts/simple.layout";

import { formatDate } from "../../utils";

// icons
import MailIcon from "@heroicons/react/outline/MailIcon";
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";

// react-share
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import Page from "../../components/Page";

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="bg-blue-500 text-white rounded-xl w-fit py-1 px-4">
      <p className="text-sm tracking-wide">{text}</p>
    </div>
  );
};

function CertificateView({ certificate, event, brand, issuer }: any) {
  const [url, setUrl] = useState("https://driflys.com");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  // mt-10 grid grid-cols-1 gap-4 auto-cols-min md:grid-cols-3

  return (
    <Page title={`${certificate?.receiver?.name} | ${event.name} - Driflys`}>
      <div className="pt-20 px-2 pb-10 lg:px-0">
        <Certificate
          id={certificate?.id}
          image={certificate?.media?.image}
          name={certificate?.receiver?.name}
          issued={certificate?.createdAt}
        />
        <div className="mt-8 lg:flex flex-row justify-between gap-2">
          <div className="flex-1 md:col-span-2 grid gap-10">
            <Actions
              pageUrl={url}
              png={certificate?.media?.image}
              pdf={certificate?.media?.pdf}
              issuerEmail={issuer?.email}
            />
            <Overview
              event={event}
              skillsGained={certificate?.gainedSkills}
              remarks={certificate?.remarks}
            />
          </div>
          <div className="w-full lg:w-96">
            <Brand
              name={brand?.name}
              type={brand?.type}
              industry={brand?.industry}
              logo={brand?.logoUrl}
              web={brand?.webUrl}
              socialMedias={brand?.socialMedias}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

CertificateView.layout = SimpleLayout;

export default CertificateView;

const Certificate = ({
  id,
  image,
  name,
  issued,
}: {
  id: string;
  image: string;
  name: string;
  issued: any;
}) => {
  return (
    <div className="flex-col justify-center max-w-2xl mt-5 mx-auto">
      <div className="shadow-xl">
        <Image
          src={image || common.noImage}
          alt="certificate"
          width={800}
          height={500}
          // objectFit="contain"
          layout="responsive"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <UserCircleIcon className="w-10 h-10 text-gray-600" />
          <div>
            <h1 className="font-bold">{name}</h1>
            <h5 className="text-gray-500 text-sm">
              Issued On:
              <span className="text-black">{formatDate(issued)}</span>
            </h5>
          </div>
        </div>

        <h1 className="font-bold text-blue-600 text-xl tracking-wide">{id}</h1>
      </div>
    </div>
  );
};

const Actions = ({
  pageUrl,
  png,
  pdf,
  issuerEmail,
}: {
  pageUrl: string;
  png: string;
  pdf: string;
  issuerEmail: string;
}) => {
  const SHARE_ICON_SIZE = 24;

  const handleDownloadPNG = () => {
    const link = document.createElement("a");
    link.href = png;
    link.setAttribute("download", "certificate.png");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.setAttribute("download", "certificate.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const renderShareOptions = (
    <div className="space-x-2">
      <LinkedinShareButton url={pageUrl}>
        <LinkedinIcon size={SHARE_ICON_SIZE} round />
      </LinkedinShareButton>

      <TwitterShareButton url={pageUrl}>
        <TwitterIcon size={SHARE_ICON_SIZE} round />
      </TwitterShareButton>

      <FacebookShareButton url={pageUrl}>
        <FacebookIcon size={SHARE_ICON_SIZE} round />
      </FacebookShareButton>

      <WhatsappShareButton url={pageUrl}>
        <WhatsappIcon size={SHARE_ICON_SIZE} round />
      </WhatsappShareButton>
    </div>
  );

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div>
        <h5 className="font-bold text-gray-500">Share</h5>
        <div className="mt-2">{renderShareOptions}</div>
      </div>
      <div>
        <h5 className="font-bold text-gray-500">Download</h5>
        <div className="flex gap-8 mt-2">
          <button onClick={handleDownloadPNG}>PNG</button>
          <button onClick={handleDownloadPDF}>PDF</button>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-gray-500">More</h5>
        <div className="flex gap-2 mt-2">
          <Link
            href={`mailto:${issuerEmail}?subject=${
              encodeURIComponent("Subject") || ""
            }&body=${encodeURIComponent("Body") || ""}`}
          >
            <a className="flex items-center gap-2 hover:underline">
              <MailIcon className="w-5 h-5 text-black" />
              <p>Contact Issuer</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Brand = ({
  name,
  type,
  industry,
  description,
  logo,
  web,
  socialMedias,
}: {
  name: string;
  type: string;
  industry: string;
  description?: string;
  logo?: string;
  web?: string;
  socialMedias?: any[];
}) => {
  const getSocialMedia = (name: string, url: string) => {
    switch (name) {
      case "FACEBOOK":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={common.socialMedia.color.facebook}
          />
        );

      case "TWITTER":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={common.socialMedia.color.twitter}
          />
        );

      case "INSTAGRAM":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={common.socialMedia.color.instagram}
          />
        );

      case "YOUTUBE":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={common.socialMedia.color.youtube}
          />
        );

      case "LINKEDIN":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={common.socialMedia.color.linkedIn}
          />
        );
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <div className="shadow-md rounded-full w-20 h-20">
          <Image
            src={logo || common.noImage}
            alt="brand logo"
            width={100}
            height={100}
            objectFit="scale-down"
          />
        </div>
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="font-semibold text-xs text-gray-500">{type}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-row gap-2">
          {socialMedias?.map((media) => {
            return getSocialMedia(media?.name, media?.url);
          })}
        </div>

        <Link href="">
          <a
            target="_blank"
            className="flex items-center gap-1 text-blue-500 hover:underline"
          >
            <p>visit</p>
            <ExternalLinkIcon className="w-5 h-5 text-blue-500" />
          </a>
        </Link>
      </div>
      {description && (
        <p className="mt-4 text-justify text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

const SocialMedia = ({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: any;
}) => {
  return (
    <Link href={url}>
      <a>
        <Image
          src={image || common.noImage}
          width={25}
          height={25}
          alt={name}
        />
      </a>
    </Link>
  );
};

const Overview = ({
  event,
  remarks,
  skillsGained,
}: {
  event: any;
  remarks?: string;
  skillsGained?: string[];
}) => {
  return (
    <>
      <div>
        <div className="mb-6">
          <h5 className="font-bold text-gray-500">Skills gained</h5>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillsGained?.map((skill) => {
              return <Chip key={skill} text={skill} />;
            })}
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-bold text-gray-500">Remarks</h5>
          <p className="mt-2">{remarks}</p>
        </div>

        <div className="mb-6">
          <h5 className="font-bold text-gray-500">{event?.name}</h5>
          <p className="text-sm text-gray-500">{event?.type}</p>
          <p className="mt-2">{event?.description}</p>
        </div>
      </div>
    </>
  );
};

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
    const brandRes = await axiosInstance.get(
      `/brands/${certificateRes.data?.brandId}`
    );
    const issuerRes = await axiosInstance.get(
      `/users/${certificateRes.data?.userId}`
    );

    return {
      props: {
        certificate: certificateRes.data,
        event: eventRes.data,
        brand: brandRes.data,
        issuer: issuerRes.data,
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
