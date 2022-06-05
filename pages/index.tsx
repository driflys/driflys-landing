import { PreLaunchLayout } from "../layouts";

// components
import Page from "../components/Page";
import Hero from "../components/sections/Hero";

const Home = () => {
  return (
    <Page
      title="Driflys"
      meta={
        <>
          <meta
            name="description"
            content="Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature"
          />
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="title"
            content={`Driflys - Create design & send certificates hassle freely`}
          />
          <meta
            name="description"
            content={`Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature`}
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://driflys.com/" />
          <meta
            property="og:title"
            content={`Driflys - Create design & send certificates hassle freely`}
          />
          <meta
            property="og:description"
            content={`Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature`}
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/driflys/image/upload/v1654450395/logos/Google_SEO.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://driflys.com/" />
          <meta
            property="twitter:title"
            content={`Driflys - Create design & send certificates hassle freely`}
          />
          <meta
            property="twitter:description"
            content={`Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature`}
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/driflys/image/upload/v1654450395/logos/Google_SEO.png"
          />
        </>
      }
    >
      <main>
        <Hero />
      </main>
    </Page>
  );
};

Home.layout = PreLaunchLayout;

export default Home;
