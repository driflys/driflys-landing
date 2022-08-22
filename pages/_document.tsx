import Document, { Html, Head, Main, NextScript } from "next/document"

import { env } from "../constants/env"

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href={`https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body className="font-Poppins bg-gray-50 overflow-x-hidden">
          {/* Google Tag Manager (noscript)  */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${env.GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
