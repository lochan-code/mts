import React from "react";
import Head from "next/head";

const story = () => {
  return (
    <div>
      <Head>
        <title>Story - MTS School</title>
        <meta
          name="description"
          content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school, vision, mission, story, importance, disciplined, sanskaar"
        />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className="m-3 p-2 bg-white mb-32">
        <h1 className="font-bold text-2xl text-gray-800 p-1 shadow-sm w-40">
          Our Story
        </h1>
        <h2 className="font-bold text-xl">Our Story</h2>
        <p className='text-lg'>
          The Mother Teressa sr. sec. School is not a one-day-wonder. It is
          backed up by the tremendous hard work put in by each of its team
          members over the years. Owing to the consistent and sincere efforts
          the MTS have been able to achieve a brand value and a goodwill.
        </p>
        <h2 className="font-bold text-xl">1998 – The Inception</h2>
        <p className='text-lg'>
          The Mother Teressa sr. sec. School started as a Primary School in
          1998.Blessed to have a highly motivated team of 17 staff members, the
          MTS School was catering its services to 50 students.
        </p>
        <h2 className="font-bold text-xl">Made it to the next milestone</h2>
        <p className='text-lg'>The Mother Teressa sr. sec. School made own building at 2015.</p>
        <h2 className="font-bold text-xl">Our Strength</h2>
        <p className='text-lg'>
          Empowering the MTS School are more than 15 dedicated and hard working
          Teachers. And, more than 500 students are now an integral part of the
          MTS family who are making us proud each day by their achievements and
          outstanding performances.{" "}
        </p>
        <h2 className="font-bold text-xl">Paving path to success and core values</h2>
        <p className='text-lg'>
          The Mother Teressa sr. sec. School aims at making the next generation
          a much better version of us. And, to achieve that the school
          implements modern techniques of imparting knowledge to the students
          and to educate them in the best possible way. Students are also taught
          about the importance of being disciplined in one’s life and how the
          good ‘sanskaars’ helps students in becoming a better human being.
        </p>
        <ul className="list-disc ml-4">
          <li>High quality rooms</li>
          <li>Big playground / prayerground</li>
          <li>Best Teachers</li>
        </ul>
      </div>
      .
    </div>
  );
};

export default story;