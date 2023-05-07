import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/globals.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
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
        <title>MTS School | Mother Teressa Sr. Sec. School Baharawanda Kalan</title>
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
      <Top />
      <Component {...pageProps} />
      <Navbar />
      </>
  );
};

export default MyApp;