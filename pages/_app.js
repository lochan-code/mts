"use client"
import Navbar from "../components/navbar";
import "../styles/globals.css";
import Top from "../components/Top";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Top />
      <Component {...pageProps} />
      <Navbar />
      </html>
  );
};

export default MyApp;