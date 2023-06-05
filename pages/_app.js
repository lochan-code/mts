// "use client"
import Navbar from "../components/navbar";
import "../styles/globals.css";
import Top from "../components/Top";

export default function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Top />
      <Component {...pageProps} />
      <Navbar />
    </html>
  );
}