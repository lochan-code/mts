import Head from 'next/head'
import Navbar from '../components/navbar'
import '../styles/globals.css'  

import React from 'react'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <meta name="google-site-verification" content="Qs4XobxT757h2HYne5BDi7Cn-FopBwFHyDe-wZEPiBQ" />
  </Head>
  <Component {...pageProps} />
  <Navbar />
  </>
}

export default MyApp
