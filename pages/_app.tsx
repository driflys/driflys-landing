import "tailwindcss/tailwind.css";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
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
