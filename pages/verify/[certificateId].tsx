import Image from "next/image";
import Link from "next/link";
import React from "react";
import SimpleLayout from "../../layouts/simple.layout";

import CertificateImg from "../../public/certificate.png";
import Logo from "../../public/logoHorizontal.png";

import Facebook from "../../public/socialMedias/facebook.svg";
import Twitter from "../../public/socialMedias/twitter.svg";
import Youtube from "../../public/socialMedias/youtube.svg";

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="bg-blue-500 text-white rounded-xl w-fit py-1 px-4">
      <p className="text-sm tracking-wide">{text}</p>
    </div>
  );
};

function CertificateView() {
  return (
    <div>
      <Certificate />
      <Actions />
      <div className="mt-10 flex gap-5">
        <Brand />
        <div>
          <div className="mb-6">
            <h5 className="font-bold text-gray-500">Skills gained</h5>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Thinking", "Dancing", "Management"].map((skill) => {
                return <Chip key={skill} text={skill} />;
              })}
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-500">Remarks</h5>
            <p className="mt-2">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
            </p>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-500">Event Name</h5>
            <p className="text-sm text-gray-500">Field Event</p>
            <p className="mt-2">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CertificateView.layout = SimpleLayout;

export default CertificateView;

const Certificate = () => {
  return (
    <div className="flex-col justify-center max-w-2xl mt-5 mx-auto">
      <div className="shadow-xl">
        <Image
          src={CertificateImg}
          alt="certificate"
          width={800}
          height={500}
          // objectFit="contain"
          layout="responsive"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h1 className="font-bold">Tharinda P Anurajeewa</h1>
            <h5 className="text-gray-500 text-sm">
              Issued On: <span className="text-black">2022/03/12</span>
            </h5>
          </div>
        </div>

        <h1 className="font-bold text-blue-600 text-xl tracking-wide">
          Dgjn5FhF53
        </h1>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="flex items-center justify-between mt-10 bg-white p-4 rounded shadow">
      <div>
        <h5 className="font-bold text-gray-500">Share</h5>
        <div className="flex gap-2 mt-2">
          <Image src={Facebook} width={25} height={25} />
          <Image src={Twitter} width={25} height={25} />
          <Image src={Youtube} width={25} height={25} />
        </div>
      </div>
      <div>
        <h5 className="font-bold text-gray-500">Download</h5>
        <div className="flex gap-8 mt-2">
          <button className="text-blue-500">PNG</button>
          <button className="text-blue-500">PDF</button>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-gray-500">More</h5>
        <div className="flex gap-2 mt-2">
          <Link href="">
            <a>Contact Issuer</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <div className="bg-white rounded shadow">
      <Image
        src={Logo}
        alt="brand logo"
        width={300}
        height={150}
        objectFit="contain"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">Brand Name</h2>
        <p className="text-sm text-gray-500">Organization</p>
        <div className="flex items-center justify-between mt-2">
          <div>
            <Image src={Facebook} width={25} height={25} />
            <Image src={Twitter} width={25} height={25} />
            <Image src={Youtube} width={25} height={25} />
          </div>
          <Link href="">
            <a>driflys.com</a>
          </Link>
        </div>
        <p className="mt-4 text-justify text-sm text-gray-500">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
        </p>
      </div>
    </div>
  );
};
