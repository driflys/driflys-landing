import Head from "next/head";

function MetaTags({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={`Driflys is a platform/app which helps to automate the process of designing & issuing certificates with built in certificate validation feature`}
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
        content="https://res.cloudinary.com/driflys/image/upload/v1654452870/logos/SEO.png"
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
        content="https://res.cloudinary.com/driflys/image/upload/v1654452870/logos/SEO.png"
      />
      <meta name="twitter:site" content="@driflys" />
      <meta name="twitter:creator" content="@driflys" />
      <meta name="author" content="Driflys" />
    </Head>
  );
}

export default MetaTags;
