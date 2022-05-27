import React, { useEffect } from "react";

import Image from "next/image";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// images
import Design from "../../public/features/Design.png";
import StatusTrack from "../../public/features/StatusTrack.png";
import Verify from "../../public/features/Verify.png";
import Share from "../../public/features/Share.png";
import OnlineView from "../../public/features/OnlineView.png";
import OnlineViewHeading from "../../public/features/OnlineViewHeading.svg";
import BrandPromote from "../../public/features/BrandPromote.png";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  useEffect(() => {
    gsap.to("#feature-1", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-1",
        start: "-200px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-2", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-2",
        start: "-200px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-3", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-3",
        start: "-200px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-4", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-4",
        start: "-200px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from("#feature-5-image", {
      x: 0,
      opacity: 1,
      duration: 5,
      width: "80%",
      scrollTrigger: {
        trigger: "#feature-5-content",
        start: "-350px center",
        end: "300px center",
        scrub: 1,
      },
    });
    gsap.to("#feature-5-content", {
      y: -100,
      opacity: 0,
      duration: 5,
      width: "50%",
      scrollTrigger: {
        trigger: "#feature-5-content",
        start: "-300px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-6-image", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-6-image",
        start: "-150px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-6-content", {
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#feature-6-content",
        start: "-350px top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#feature-6-container", {
      duration: 2.5,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: "#feature-6-container",
        start: "40% top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="features" className="bg-white">
      <div className="container py-20 flex flex-col gap-40 lg:px-20">
        {/* Feature 1 */}
        <div
          id="feature-1"
          className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-between lg:gap-12"
        >
          <div className="w-3/4 max-w-lg lg:3/4">
            <Image src={Design} alt="Design Certificates" layout="responsive" />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
            <h1
              id="feature-1-title"
              className="font-bold text-center text-4xl lg:text-6xl lg:text-left"
            >
              <span className="text-blue-700">Design</span> certificates the way
              you want
            </h1>
            <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
              You can customize the look & feel of your certificates by using
              our drag n drop builder{" "}
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          id="feature-2"
          className="flex flex-col justify-center items-center gap-12 lg:flex-row-reverse lg:justify-between lg:gap-12"
        >
          <div className="w-3/5 max-w-sm md:w-2/5">
            <Image src={StatusTrack} alt="Status Track" layout="responsive" />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
            <h1
              id="feature-title"
              className="font-bold text-center text-4xl lg:text-6xl lg:text-left"
            >
              Deliver with <span className="text-blue-700">Confident</span>
            </h1>
            <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
              With the help of realtime status tracking, you as the issuer can
              track the status of certificate emails
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          id="feature-3"
          className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-between lg:gap-12"
        >
          <div className="w-3/4 max-w-xs lg:3/4">
            <Image src={Verify} alt="Verify" layout="responsive" />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
            <h1
              id="feature-title"
              className="font-bold text-center text-4xl lg:text-6xl lg:text-left"
            >
              <span className="text-blue-700">Verify</span> the validity with
              ease
            </h1>
            <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
              Receivers can verify the validity of their certificates using
              unique certificate id
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div
          id="feature-4"
          className="flex flex-col justify-center items-center gap-12 lg:flex-row-reverse lg:justify-between lg:gap-12"
        >
          <div className="w-3/4 max-w-xs lg:3/4">
            <Image src={Share} alt="Share" layout="responsive" />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
            <h1 className="font-bold text-center text-4xl lg:text-6xl lg:text-left">
              <span className="text-blue-700">Show</span> the world what you
              achieved
            </h1>
            <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
              Receivers can verify the validity of their certificates using
              unique certificate id
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div
          id="feature-5"
          className="flex flex-col justify-center items-center gap-4 lg:gap-12"
        >
          <div id="feature-5-image" className="w-4/5 md:w-3/5">
            <Image
              src={OnlineView}
              alt="Online Certificate View"
              layout="responsive"
            />
          </div>

          <div
            id="feature-5-content"
            className="flex flex-col justify-center items-center gap-8 lg:flex-row-reverse lg:gap-20"
          >
            <div id="feature-5-heading" className="w-4/5 md:w-2/5">
              <Image
                src={OnlineViewHeading}
                alt="View Anywhere Anytime"
                layout="responsive"
              />
            </div>
            <div
              id="feature-5-divider"
              className="lg:h-80 lg:w-px lg:bg-gray-500 lg:opacity-60"
            ></div>
            <p
              id="feature-5-description"
              className="text-xl text-gray-500 text-center lg:text-right md:w-1/2"
            >
              We host all the issued certificates via Driflys platform to assure
              that the receivers can view/interact with their certificates 24/7
            </p>
          </div>
        </div>

        {/* Feature 6 */}
        <div
          id="feature-6"
          className="container flex justify-center items-center content-center"
        >
          <div
            id="feature-6-container"
            className="py-20 px-4 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-900 rounded-t-3xl flex flex-col justify-center items-center gap-12"
          >
            <div id="feature-6-image" className="w-2/5 md:1/5">
              <Image
                src={BrandPromote}
                alt="Brand Promote"
                layout="responsive"
              />
            </div>
            <div
              id="feature-6-content"
              className="flex flex-col justify-center items-center gap-8"
            >
              <h1
                id="feature-6-heading"
                className="text-6xl text-white font-semibold text-center"
              >
                Promote your brand
              </h1>
              <p className="text-lg text-gray-400 text-center md:w-2/3">{`Essential brand details such as logo, name & social media links can be displayed in the certificate view page. 
We believe that this feature makes perfect impact both
the popularity of brand and receiver’s trustworthiness upon your brand`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
