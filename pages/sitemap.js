import Head from "next/head";
import Link from "next/link";
import React from "react";

const sitemap = () => {
  return (
    <div>
      <Head>
        <title>
          SITEMAP - MTS School | Mother Teressa Senior Secondary School
          Baharawanda Kalan
        </title>
      </Head>
      <div>
        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0  m-20">
          <Link href={"/"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">Home</span>
              <svg
                aria-hidden="true"
                class="w-6 h-6 ml-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <Link href={"/career"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ career</span>
            </div>
          </Link>
          <Link href={"/facilities"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ facilities</span>
            </div>
          </Link>
          <Link href={"/sitemap"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ sitemap</span>
            </div>
          </Link>
          <Link href={"/contact"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ contact us</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0  m-20">
          <Link href={"/about"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ about</span>
              <svg
                aria-hidden="true"
                class="w-6 h-6 ml-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <Link href={"/vnm"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ vision and mission</span>
            </div>
          </Link>
          <Link href={"/story"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ our story</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0  m-20">
          <Link href={"/addmission"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ admission</span>
              <svg
                aria-hidden="true"
                class="w-6 h-6 ml-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <Link href={"/process"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ admission proccess at mts</span>
            </div>
          </Link>
          <Link href={"/addmission"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ admission enquiry form</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0  m-20">
          <Link href={"/gallery"}>
            <div className="inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">/ gallery</span>
            </div>
          </Link>
        </div>
      </div>
      .
    </div>
  );
};

export default sitemap;
