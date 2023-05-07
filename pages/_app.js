import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/globals.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from "react-error-boundary";
import Script from 'next/script';
import Top from "../components/Top";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Analytics();
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school"
        />
        <link rel="icon" href="/logo/favicon.png" />
        <meta
          name="google-site-verification"
          content="Qs4XobxT757h2HYne5BDi7Cn-FopBwFHyDe-wZEPiBQ"
        />
      </Head>
        {/* <!-- Chat widget --> */}
        <Script id="my-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, u) {
                w.gbwawc = {
                  url: u,
                  options: {
                    waId: "+91 9024543045",
                    siteName: "MTS School",
                    siteTag: "Usually reply in 5 minutes",
                    siteLogo: "https://lh3.googleusercontent.com/pw/AJFCJaW3SsyQZJoanqxjxSya0666yTVdNymdSnJW89sH5NY7aaPACHmpn4KicQPdB1vZNzo5OmJUKlj22ndkE-L-yj3bRHEXj5HP0f1DOU47JEo_F3qP22QDS09gomQaV-8D04hMdhN18313kqoEWIxIfq27=w505-h503-s-no",
                    widgetPosition: "RIGHT",
                    triggerMessage: "",
                    welcomeMessage: "Welcome to Mother Teressa Sr. Sec. School Baharawanda Kalan",
                    brandColor: "#25D366",
                    messageText: "Please Submit Your Query",
                    replyOptions: ['Looking for Addmission','Looking for Job',''],
                  }
                };
                let h = d.getElementsByTagName(s)[0],
                j = d.createElement(s);
                j.async = true;
                j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
                h.parentNode.insertBefore(j, h);
              })(window, document, "script", "https://waw.gallabox.com");
            `,
          }}
        />
        {/* <!-- /Chat widget --> */}
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Top />
      <Component {...pageProps} />
      <Navbar />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
