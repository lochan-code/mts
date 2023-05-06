import React, { useState } from "react";
import Head from 'next/head'
import Image from "next/image";
import TinderCard from "react-tinder-card";
const Gallery = () => {
  const [people, setPeople] = useState([
    {
      url: "/gallery1.jpg",
    },
    {
      url: "/gallery2.jpg",
    },
    {
      url: "/gallery3.jpg",
    },
    {
      url: "/gallery4.jpg",
    },
    {
      url: "/gallery5.jpg",
    },
    {
      url: "/gallery6.jpg",
    },
    {
      url: "/gallery7.jpg",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outofFrame = (name) => {
    console.log(name + " left the  screen!");
  };
  return (
    <>
      <Head>
        <title>
          Gallery - MTS School
        </title>
        <meta
          name="description"
          content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school, photo, video, photo mts school"
        />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className="flex flex-wrap justify-center items-center">
        {people.map((person) => {
          return (
            <TinderCard
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outofFrame(person.name)}
            >
              <div className="glass-blur p-2 m-2 flex w-72 ">
                <Image
                  alt="photo"
                  src={`${person.url}`}
                  className="w-full"
                  width={500}
                  height={500}
                />
              </div>
            </TinderCard>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
