import Navbar from '../components/navbar'
import '../styles/globals.css'  
import React from 'react'
function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <Navbar />
  </>
}

export default MyApp
