import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative z-0">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 h-[80vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1437.9436408202141!2d76.6950282!3d26.0164776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971c5a3a3b38d7f%3A0xd7f03a79de35d82c!2sMOTHER%20TERESSA%20SENIOR%20SECONDARY%20SCHOOL!5e1!3m2!1sen!2sin!4v1683376913211!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-[80vh]"
              title="map"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-lg">
                  MOTHER TERESSA SENIOR SECONDARY SCHOOL, Bahrawada Kalan,
                  Rajasthan (322025)
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed"
                  href="mailto:contactmtsschool@gmail.com"
                >
                  contactmtsschool@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a className="leading-relaxed" href="tel:9983760244">
                  +91 9983760244
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col text-left md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <form
              id="contact"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbyljiE-vfkaJ_eHmDvmv2mNkRWMTM1sXSEdBFEwuy0U1CdNO2UxbJ0Cye6ccLRMx4gCzg/exec"
            >
              <div className="dbl-field">
                <div className="field">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="field">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="message">
                <textarea
                  required
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
            <div className="ml-4 flex">
              <a
                className="m-1 hover:scale-150  hover:rotate-45 transition-all"
                href="https://www.google.com/maps/place/MOTHER+TERESSA+SR.SEC.SCHOOL/@26.0164776,76.6950282,18z/data=!4m6!3m5!1s0x3971c5a3a3b38d7f:0xd7f03a79de35d82c!8m2!3d26.016386!4d76.6956022!16s%2Fg%2F11c6_ykb86"
              >
                <Image
                  alt="photo"
                  src="/icons/map.png"
                  width={30}
                  height={30}
                />
              </a>
              <a
                className="m-1 hover:scale-150  hover:rotate-45 transition-all"
                href="https://twitter.com/MTSSchool98"
              >
                <Image
                  alt="photo"
                  src="/icons/twitter.png"
                  width={30}
                  height={30}
                />
              </a>
              <a
                className="m-1 hover:scale-150  hover:rotate-45 transition-all"
                href="https://www.facebook.com/profile.php?id=100092324292806"
              >
                <Image
                  alt="photo"
                  src="/icons/facebook.png"
                  width={30}
                  height={30}
                />
              </a>
              <a
                className="m-1 hover:scale-150  hover:rotate-45 transition-all"
                href="https://www.instagram.com/mtsschool1998/"
              >
                <Image
                  alt="photo"
                  src="/icons/instagram.png"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
