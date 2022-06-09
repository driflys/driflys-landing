// react
import { useEffect } from "react";

// next
import { useRouter } from "next/router";

import "tailwindcss/tailwind.css";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { pageView } from "../utils/gtag";

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default MyApp;
