"use strict"
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const cardVariants = {
  offscreen: {
    x: 300
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Home() {

  return (
    <div>
      <Head>
        <title>MTS School | Mother Teressa Senior Secondary School Baharawanda Kalan</title>
        <meta name="description" content="mts school is committed to providing a high-quality education for all students, regardless of their background. We offer a variety of programs and services to meet the needs of our diverse student body. Our goal is to help every student reach their full potential." />
        <meta name="description" content="Mother Teressa Senior Secondary School Baharawanda kalan, mts, mts school, mts school baharawanda kalan, barawanda kalan,  mother  teressa school" />
        <link rel="icon" href="/logo/favicon.png" />
        <meta name="google-site-verification" content="Qs4XobxT757h2HYne5BDi7Cn-FopBwFHyDe-wZEPiBQ" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="apple-touch-icon" href="/logo/favicon.png" />
      </Head>
      <div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div>
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className={`mb-6 font-bold lg:mb-8 md:text-2xl text-gray-900 lg:text-4xl text-xl`}>
                Mother Teressa Senior Secondary School<span className='text-slate-700'> Baharawanda kalan</span>
              </h1>
              <div className="flex">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=''
              >
                <a
                  href="mailto:contactmtsschool@gmail.com"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Contact Us
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                <Link
                  href="/addmission"
                >
                  Addmission Now
                </Link>
              </motion.div>
              </div>
            </div>
            <div className="place-self-center lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Image
                  src="/gallery7.jpg"
                  alt="MTS School Logo"
                  width={500}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
<div className="flex flex-wrap justify-center m-3 space-x-3">
  <motion.div
    className="p-3 flex flex-col bg-blue-200 rounded-md shadow-lg text-center"
    whileHover={{ scale: 1.1 }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
    <Image alt='student' src="/icons/stundent.png" width={100} height={100} />
    <p className='text-blue-700 text-3xl font-semibold'>500+</p>
  </motion.div>
  <motion.div
    className="p-3 flex flex-col bg-green-200 rounded-md shadow-lg text-center"
    whileHover={{ scale: 1.1 }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
    <Image alt='teacher' src="/icons/teacher.png" width={100} height={100} />
    <p className='text-green-700 text-3xl font-semibold'>15+</p>
  </motion.div>
</div>

<div>
  <h1 className='text-black text-center text-4xl font-bold py-6'>Facilities</h1>
  <div className="flex flex-wrap p-2 justify-center items-center">
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Medium: Hindi</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Medium: English</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>From 1 to 12</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Total Teachers: 15+</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Male Teachers: 10+</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Female Teachers: 2+</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Electricity</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Library</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Playground</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Drinking Water</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Contact Teacher</p>
    </div>
    <div className="m-3 bg-white rounded-lg shadow-lg flex justify-center p-3 items-center">
      <Image alt='facilities mts school' src="/icons/check.png" className='max-w-[768px]' width={40} height={40} />
      <p className='ml-1 text-sm text-gray-800'>Students Motivated</p>
    </div>
  </div>
</div>

      {/* <div className="bg-gray-900 py-12">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">Arts</h1>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">01</h2>
            <h3 className="text-lg font-semibold mb-2">HISTORY</h3>
            <a href="https://en.wikipedia.org/wiki/History"  rel="noreferrer"><button class="read-more-button bg-blue-500 text-white text-base px-4 py-2 rounded-md border-none cursor-pointer relative overflow-hidden transform perspective-1000 transition-transform duration-300">
  Read More
  <span class="read-more-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 transform rotate-x-90 translate-z(-100) transition-transform duration-300 opacity-0"></span>
</button>
</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">02</h2>
            <h3 className="text-lg font-semibold mb-2">HINDI LITERATURE</h3>
            <a href="https://en.wikipedia.org/wiki/Hindi_literature"  rel="noreferrer" className="text-blue-500 hover:underline"><button class="read-more-button bg-blue-500 text-white text-base px-4 py-2 rounded-md border-none cursor-pointer relative overflow-hidden transform perspective-1000 transition-transform duration-300">
  Read More
  <span class="read-more-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 transform rotate-x-90 translate-z(-100) transition-transform duration-300 opacity-0"></span>
</button></a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">03</h2>
            <h3 className="text-lg font-semibold mb-2">GEOGRAPHY</h3>
            <a href="https://en.wikipedia.org/wiki/Geography"  rel="noreferrer" className="text-blue-500 hover:underline"><button class="read-more-button bg-blue-500 text-white text-base px-4 py-2 rounded-md border-none cursor-pointer relative overflow-hidden transform perspective-1000 transition-transform duration-300">
  Read More
  <span class="read-more-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 transform rotate-x-90 translate-z(-100) transition-transform duration-300 opacity-0"></span>
</button></a>
          </div>
        </div>
      </div>
    </div> */}
      {/* <div className="flex justify-center linear-gradient-card-vala items-center p-10">
        <div className="wrapper w-full flex md:flex-nowrap flex-wrap justify-center md:justify-start items-center md:p-4 p-1">
          <div className="ml-5 md:w-1/2" >
            <div className="bg-gray-800 h-14  p-2  w-20 rounded-lg">
              <h1 className='text-4xl font-bold threed  text-white'>MST</h1>
            </div>
            <h2 className='text-4xl font-semibold mt-3 Josefin'>MTS SCHOLARSHIP TEST</h2>
            <p className='ubuntu text-xl mt-3'>You are intelligent but you have less money to pay the full fee. Intoduce MST. MST is a scholarship test which has to be given before taking admission. If you are take good marks in MST you change to get 50% Scholarship</p>
          </div>
          <div className="md:ml-40">
            <Image alt='photo' src="/icons/scholarship.webp" className='rounded-sm' width={300} height={300} />
          </div>
        </div>
      </div> */}
<div className="flex justify-center">
  <div className="bg-white w-full rounded-lg shadow-lg">
    <div className="flex flex-col md:flex-row items-center">
      <motion.div className="md:w-1/2" variants={cardVariants}>
        <Image alt="bus photo" src="/bus.jpg" className="w-full rounded-lg hidden md:block" />
        {/* <div className="w-full rounded-lg md:hidden" style={{ backgroundImage: 'url(/bus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '75%' }}></div> */}
      </motion.div>
      <div className="px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-500 mb-4">School Bus Service Available</h1>
        <p className="text-gray-500 mb-4">
          Our school provides a reliable bus service for students residing in several villages.
          We have a dedicated team of trained drivers who ensure safe transportation.
          Here are some of the villages where our bus service is available:
        </p>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-disc ml-6 text-gray-500"
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Piplet
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Kudana
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Kosra
          </motion.li>
        </motion.ul>
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col justify-center linear-gradient-contact-vala items-center p-5">
  <div className="wrapper">
    <header>Send us a Message</header>
    <form id="contact" method='POST' action='https://script.google.com/macros/s/AKfycbyljiE-vfkaJ_eHmDvmv2mNkRWMTM1sXSEdBFEwuy0U1CdNO2UxbJ0Cye6ccLRMx4gCzg/exec'>
      <div className="dbl-field">
        <div className="field">
          <input required type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="field">
          <input required type="email" name="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="message">
        <textarea required
          placeholder="Write your message"
          name="message"
          defaultValue={""}
        />
      </div>
      <div className="button-area">
        <button type="submit">
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            className="ml-2"
            viewBox="0 0 256.409 256.409"
            xmlSpace="preserve"
          >
            <g>
              <path
                style={{ fill: "#fff" }}
                d="M254.189,121.75L132.267,26.191c-1.898-1.632-4.574-2.012-6.853-0.974   c-2.274,1.044-3.737,3.318-3.737,5.825v82.206L10.59,26.191c-1.898-1.632-4.574-2.012-6.853-0.974C1.458,26.262,0,28.536,0,31.043   V225.37c0,2.518,1.479,4.808,3.78,5.842c2.306,1.028,4.993,0.615,6.886-1.061l111.006-89.924v85.143   c0,2.518,1.479,4.808,3.786,5.842c2.301,1.028,4.993,0.615,6.88-1.061l121.917-98.763c1.382-1.224,2.176-3.057,2.154-4.835   C256.397,124.709,255.587,122.952,254.189,121.75z M12.82,211.098V45.011l105.79,81.673L12.82,211.098z M134.492,211.098V127.76   c0.082-0.408,0.261-0.8,0.25-1.207c0-0.392-0.174-0.745-0.25-1.12V45.011l105.79,81.673L134.492,211.098z"
              />
            </g>
          </svg>
        </button>
        <span />
      </div>
    </form>
  </div>
  </div>
      <div className="py-8 px-8 mb-16 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <p className='text-center'>© 2023 <Link href={'/'}>mtsbk.vercel.app</Link> — All Rights Reserved</p>
    <div className="ml-4 flex items-center justify-center">
      <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.google.com/maps/place/MOTHER+TERESSA+SR.SEC.SCHOOL/@26.0164776,76.6950282,18z/data=!4m6!3m5!1s0x3971c5a3a3b38d7f:0xd7f03a79de35d82c!8m2!3d26.016386!4d76.6956022!16s%2Fg%2F11c6_ykb86">
        <Image alt='photo' src="/icons/map.png" width={30} height={30} />
      </a>
      <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://twitter.com/MTSSchool98">
        <Image alt='photo' src="/icons/twitter.png" width={30} height={30} />
      </a>
      <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://twitter.com/MTSSchool98">
              <Image alt='twitter' src="/icons/twitter.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.facebook.com/profile.php?id=100092324292806">
              <Image alt='facebook' src="/icons/facebook.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.instagram.com/mtsschool1998/">
              <Image alt='instagram' src="/icons/instagram.png" width={30} height={30} />
              </a>
       </div>
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <h1 className="text-slate-500 font-medium">This site is designed, developed, maintained and hosted by</h1>
      <h1 className="text-lg text-black font-semibold"><a href='mailto:lochanjangidcoder@gmail.com'>Lochan Jangid</a></h1>
    </div>
    <ul className="flex flex-wrap space-x-2">
      <li>
        <Link href={"/terms_and_conditions"} aria-current="page">
          Terms and Conditions
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link href={"/privacy_policy"} aria-current="page">
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
</div>
</div>
  <div>.</div>
    </div>
)
};
