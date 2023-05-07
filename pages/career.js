import Head from "next/head";
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Career = () => {
  const useTiltRef = useRef(null);
  useEffect(() => {
    if (useTiltRef.current) {
      VanillaTilt.init(useTiltRef.current, {
        max: 25,
        speed: 400,
      });
    }
  }, []);
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
      <div>
        <div
          className="flex flex-col justify-center items-center h-[80vh]"
          ref={useTiltRef}
        >
          <div className="bg-[#0795FF] p-5 py-20 w-[80vw] m-2 text-center">
            <h1 className="text-2xl bruno text-center text-white mb-2">
              Join us and work with{" "}
              <span className="font-bold bg-[#32A7FF] shadow-lg">
                MTS School
              </span>
            </h1>
            <div>
              <a
                href="#career"
                className="px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 "
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-900">
          <div className="bg-[#0795FF] p-5 py-20 w-[80vw] m-2">
            <h1 className="font-bold px-4 py-2 text-3xl text-white bg-[#32A7FF] hover:bg-[#32A7FF] shadow-lg">
              You’re in good company!
            </h1>
            <h1 className="text-xl bruno text-white mb-2">
              We are so fortunate to have a team of talented and dedicated
              educators like you here at our school. Your commitment to our
              students and their success is truly inspiring, and it is a
              privilege to work alongside such passionate and skilled
              professionals. Thank you for all that you do, and for being a
              vital part of our school community. We are proud to have you on
              our team and feel confident that together, we can continue to
              provide an exceptional education to our students.
            </h1>
          </div>
        </div>
        <section className="bg-gray-900" id="career">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h1 className="mb-4 text-4xl ubuntu tracking-tight font-extrabold text-white">
              Grow your career with MTS School
              </h1>
            </div>
            <section className="w-[90vw]">
  <div className="py-8 px-4 mx-auto w-full max-w-2xl lg:py-16 bg-gray-800">
    <form method="POST" action="https://script.google.com/macros/s/AKfycbxbuazVKQsM0y6yBg5MQTgZbpTdaCuzjNv8iNFngMj4Rgapb3KF2X_bYmoi0mNciqryPg/exec">
    <h2 className="mb-4 text-xl font-bold ubuntu text-white">
    Basic Info
    </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Candidate Name *
          </label>
          <input
            type="text"
            name="name"
            className="border  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Mobile Number *
          </label>
          <input
            type="numebr"
            maxLength={10}
            name="number"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Email ID
          </label>
          <input
            type="text"
            name="email_id"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Gender *
          </label>
          <select
            name="gender"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected=""> Select Gender</option>
            <option value="male">👨‍🏫 Male</option>
            <option value="female">👩‍🏫 Female</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <h2 className="my-4 text-xl font-bold ubuntu text-white">
      Professional Details 
    </h2>
    <div>
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Level of Education *
          </label>
          <select
            name="level_of_education"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected="">- Select -</option>
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
            className="block mb-2 text-sm font-medium text-white"
          >
            You can Teach *
          </label>
          <select
            name="you_can_teach"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected="">- Select -</option>
            <option selected="primary only">Primary Only</option>
            <option selected="upper primary only">upper Primary Only</option>
            <option selected="primary and upp">Primary and Upper Primary</option>
            <option selected="secondary only">Secondary Only</option>
            <option selected="high secondary only">High Secondary Only</option>
            <option selected="secondary and high secondary">Secondary and High Secondary </option>
            <option selected="pre-primary only">Pre-Primary Only</option>
            <option selected="pre-primary and primary">Pre-Primary and Primary</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
           Employment Type *
          </label>
          <select
            name="employment_type"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected="">- Select -</option>
            <option value="full time">Full Time</option>
            <option value="part time">Part Time</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-white"
          >
            Are You A Fresher or Experienced *
          </label>
          <select
            name="fresher/experienced"
            className=" text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected="">- Select -</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
      <button
        type="submit"
        className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;