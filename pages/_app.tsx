// next
import Script from "next/script"

import "tailwindcss/tailwind.css"

// react-toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { env } from "../constants/env"

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>)

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script id="" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_ID}`} />
      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${env.GA_ID}', {
                page_path: window.location.pathname,
              });
          `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default MyApp
