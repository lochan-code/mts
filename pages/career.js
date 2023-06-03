import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
const Career = () => {
  return (
    <div>
      <Head>
        <title>
          CAREER - MTS School | Mother Teressa Senior Secondary School
          Baharawanda Kalan
        </title>
        <meta
          name="description"
          content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school"
        />
        <link rel="icon" href="/logo/favicon.png" />
      </Head>
      <div className="bg-slate-100">
        <div
          className="flex flex-col items-center" >
          <div className="p-5 py-20 m-2 text-center">
            <h1 className="text-2xl bruno text-center mb-2 text-black">
              
            </h1>
            <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-black text-[7vw] sm:text-[4vw] font-bold m-3'
        >
          Join us and work with{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-gray-700 text-[5vw] font-bold m-3'
        >
          MTS School
        </motion.h2>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                <Link
                  href="#career"
                  >
                  APPLY NOW
                </Link>
              </motion.div>
          </div>
        </div>
          <div className="flex flex-col items-center justify-center p-5 py-20 w-full m-2">
            <motion.h1   initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} className="font-bold px-4 py-2 text-3xl text-black shadow-lg">
              You’re in good company!
            </motion.h1>
            <motion.p   initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} className="text-xl bruno text-black mb-2">
              We are so fortunate to have a team of talented and dedicated
              educators like you here at our school. Your commitment to our
              students and their success is truly inspiring, and it is a
              privilege to work alongside such passionate and skilled
              professionals. Thank you for all that you do, and for being a
              vital part of our school community. We are proud to have you on
              our team and feel confident that together, we can continue to
              provide an exceptional education to our students.
            </motion.p>
          </div>
        <motion.section  initial={{ y: -300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }} className="bg-gray-100 p-5 mb-16" id="career">
              <h1 className="mb-4 text-4xl ubuntu tracking-tight font-extrabold text-black">
              Grow your career with MTS School
              </h1>
    <form method="POST" action="https://script.google.com/macros/s/AKfycbxbuazVKQsM0y6yBg5MQTgZbpTdaCuzjNv8iNFngMj4Rgapb3KF2X_bYmoi0mNciqryPg/exec">
    <h2 className="mb-4 text-xl font-bold ubuntu text-black">
    Basic Info
    </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Candidate Name *
          </label>
          <input
            type="text"
            name="name"
            className="text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Mobile Number *
          </label>
          <input
            type="numebr"
            maxLength={10}
            name="number"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Email ID
          </label>
          <input
            type="text"
            name="email_id"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Gender *
          </label>
          <select
            name="gender"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          >
            <option value={0}> Select Gender</option>
            <option value="male">👨‍🏫 Male</option>
            <option value="female">👩‍🏫 Female</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <h2 className="my-4 text-xl font-bold ubuntu text-black">
      Professional Details 
    </h2>
    <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Level of Education *
          </label>
          <select
            name="level_of_education"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          >
            <option value={0}>- Select -</option>
            <option value="ba"> B.A. </option>
            <option value="bcom"> B.Com. </option>
            <option value="bsc"> B.Sc. </option>
            <option value="babed"> B.A.-B.Ed. </option>
            <option value="bscbed"> B.Sc.-B.Ed. </option>
            <option value="ma"> M.A. </option>
            <option value="mmath"> M.Math </option>
            <option value="msc"> M.Sc. </option>
            <option value="med"> M.Ed. </option>
            <option value="msci"> M.Sci. </option>
            <option value="other"> Other </option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            You can Teach *
          </label>
          <select
            name="you_can_teach"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          >
            <option value={0}>- Select -</option>
            <option value="primary only">Primary Only</option>
            <option value="upper primary only">upper Primary Only</option>
            <option value="primary and upp">Primary and Upper Primary</option>
            <option value="secondary only">Secondary Only</option>
            <option value="high secondary only">High Secondary Only</option>
            <option value="secondary and high secondary">Secondary and High Secondary </option>
            <option value="pre-primary only">Pre-Primary Only</option>
            <option value="pre-primary and primary">Pre-Primary and Primary</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
           Employment Type *
          </label>
          <select
            name="employment_type"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          >
            <option value={0}>- Select -</option>
            <option value="full time">Full Time</option>
            <option value="part time">Part Time</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black"
          >
            Experience *
          </label>  
          <input
            name="experience"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 m-5"
              >
      <button
        type="submit"
      >
        Submit
      </button>
              </motion.div>
    </form>
        </motion.section>
        <div>.</div>
      </div>
    </div>
  );
};

export default Career;