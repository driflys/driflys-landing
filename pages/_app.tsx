// react
import { useEffect } from "react"

// next
import Script from "next/script"
import { useRouter } from "next/router"

import "tailwindcss/tailwind.css"

// react-toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { pageView } from "../utils/gtag"
import { env } from "../constants/env"

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageView(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_ID}`} />
      <Script strategy="lazyOnload">
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
