import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const facilities = () => {
  return (
    <div>
        <Head>
            <title>FACILITIES - MTS School | Mother Teressa Senior Secondary School Baharawanda Kalan</title>
            <meta
          name="description"
          content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school, facilities"
        />
        <link rel="icon" href="/logo/favicon.png" />
        </Head>
          <div className="m-3 p-2 bg-white mb-32">
        <h1 className="font-bold text-2xl text-gray-800 p-1 shadow-sm w-1/3">
        FACILITIES AT MTS School
        </h1>
        <div className="flex justify-center items-center">
      <div className="txt">
        <h2 className="font-bold text-xl">Kids Playground</h2>
        <p className='text-lg'>
        Outdoor playing is important for balanced and healthy development of a child. Children need that outdoor space, physically and metaphorically speaking, to explore, experiment and invent in and to play and learn freely. In MTS School Kids Paradise, kids feel fun & relax from stress. It is really a paradise for them.
        </p>
        </div>
        <Image
        src="/gallery5.jpg" width={800} height={800}
        alt="mts"
      />
      </div>
        <h2 className="font-bold text-xl">Cocurricular Activities</h2>
        <p className='text-lg'>
        Co-curricular activities are those which are under taken side by side with the curricular activities. A co-curricular activity essentially takes place outside a typical pen and pencil classroom experience. It gives the students an opportunity to develop particular skills and exhibit their non-academic abilities. They actually complement the curricular activities and groom the students in the Art of living & working together.
        </p>
        <h2 className="font-bold text-xl">Quality Education</h2>
        <p className='text-lg'>
        As a leading educational school, the MTS is strongly committed to delivering quality education with a wholesome culmination of both intellectual and creative aspects.
        </p>
        <h2 className="font-bold text-xl">Best Teachers</h2>
        <p className='text-lg'>
        the best teachers are dedicated professionals who care deeply about their students education and well-being. They have the ability to make a lasting impact on their students lives, and their contributions to education are invaluable.
        </p>
        <h2 className="font-bold text-xl">School Environment</h2>
        <p className='text-lg'>
        a good school environment is essential to fostering a positive learning experience and supporting student success. It includes a sense of community, access to resources and opportunities, skilled educators, and measures to promote student safety and well-being.
        </p>
      </div>
      .
    </div>
  )
}

export default facilities
