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
      <Script id="">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${env.GOOGLE_TAG_MANAGER_ID}');`}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default MyApp
