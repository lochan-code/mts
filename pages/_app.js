import Navbar from "../components/navbar";
import "../styles/globals.css";
import Top from "../components/Top";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Navbar />
      </>
  );
};

export default MyApp;