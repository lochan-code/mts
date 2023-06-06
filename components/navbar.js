import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="fixed transition-all glass md:p-5 p-2 h-15 w-full items-center justify-start bottom-0 md:h-20 flex right-2 space-x-2">
        <div className="hidden sm:flex mr-5">
          <Link className='cursor-pointer' href="/">
              <Image alt="MTS" src="/logo.png" width={50} height={50} />
          </Link>
        </div>
        <Link className='cursor-pointer' href="/about">
          <a >
            <div className="transition-all icon-parent">
              <ul className="glass text-center flex flex-col text-black fixed left-14 text-xl p-3">
                <Link className='cursor-pointer' href="/vnm">
                    <li className="glass p-1 m-1">दृष्टि और उद्देश्य</li>
                </Link>
                <Link className='cursor-pointer' href="/story">
                    <li className="glass p-1 m-1">हमारी कहानी</li>
                </Link>
                {/* <Link className='cursor-pointer' href={'/'}><li className='glass p-1 m-1'>ACHIEVEMENTS</li></Link> */}
              </ul>
              <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer ">
                <Image alt="photo" src="/icons/about.png" width={30} height={30} />
              </div>
            </div>
          </a>
        </Link>
        <Link className='cursor-pointer' href="/addmission">
          <a >
            <div className="transition-all icon-parent">
              <ul className="glass text-center flex flex-col text-black fixed left-14 text-xl p-3">
                <Link className='cursor-pointer' href="/process">
                    <li className="glass p-1 m-1">MTS में प्रवेश प्रक्रिया</li>
                </Link>
                <Link className='cursor-pointer' href="/addmission">
                    <li className="glass p-1 m-1">प्रवेश फार्म</li>
                </Link>
              </ul>
              <div className=" glass-blur md:p-3 p-1 flex justify-center items-center z-50 cursor-pointer">
                <Image alt="photo" src="/icons/addmission.png" width={30} height={30} />
              </div>
            </div>
          </a>
        </Link>
        {/* <Link className='cursor-pointer' href={'/payment'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>Pay Fee</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image alt='photo' src="/icons/payment.png" width={30} height={30} />
      </div>
      </div>
      </Link> */}
        <Link className='cursor-pointer' href="/gallery">
            <div className="transition-all icon-parent">
              <div className=" glass-blur md:p-3 p-1 flex justify-center z-50 items-center cursor-pointer">
                <Image alt="photo" src="/icons/gallery.png" width={30} height={30} />
              </div>
            </div>
        </Link>
        <a
          className=" hover:scale-75 transition-all hover:rotate-12 z-50"
          href="tel:9983760244"
        >
          <Image alt="photo" src="/icons/call.png" width={40} height={40} />
        </a>
        <a
          className=" hover:scale-75 transition-all hover:rotate-12 z-50"
          href="mailto:contactmtsschool@gmail.com"
          
        >
          <Image alt="photo" src="/icons/mail.png" width={40} height={40} />
        </a>
      </div>

      {/* <!-- Chat widget --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
           (function (w, d, s, u) {
             w.gbwawc = {
               url: u,
               options: {
                 waId: "+91 9024543045",
                 siteName: "MTS School",
                 siteTag: "Usually reply in 5 minutes",
                 siteLogo: "https://lh3.googleusercontent.com/pw/AJFCJaVW1f4pmUzdB4HMLPgq2neI9XCtQFPuHCFIuWv5qiI3Xg_N83XoXP84kjAHJqaQ86INRfLIbEnyoZQqkGGw8nZsDPvJpFmjSwqtHu5l1lh2RJR6GB_8aMrXRCQdoPBF8yzmFC-JYyVdBzYW55SL1XQuV1sLHhDPSUZJ6uQ_WVTBfwtQFUDVjXwvG0IPMaQiW0qKHTV7nZVPz86rcPEoUTu5Tfub75T7R_JQWvQtaxcMP_gjz5gWVmtfGle-cW38Ty4P3EtpplPfHSOSG2NqapW0HTgkNW3CkuMu_HqHg6Uy3v_I7DvR-aVDlnwlAbPIwZvzNxi9HoKsYRRazIgUM-K-axMD6nkfa4LJMtKNc0bq0jXXqP3ji1eD_m6RwSHTZz5N1p7jadbqWN_ySQSlo_vhgpgyCDjSXhOqOz0MJhlfyM9K0tLxVBJOOdYkDNgZnZ_XUi0CHdo6YAiMIokXTYeu8XA5PyWaeMY26L2Rr4udTQqld3hMAkKV9j1sdsbv5vtCBsAJkfTFXFfM42bD9_UWqfiq4cdKu2v5VWPL6shH6nfdRt9z4cmWmZZA87lBzhPozffmWHju6FdBPsCTqnsQVLcmhf_eAIKrthDhwxn_6S7AoGqCPg61Ny3cSmuuALYYtnCgegZvTLVS3caOeSB5Cvxo5sV65roTRIvMQHoPuiQMi0s5xWuxXcsBKMq3vl37c5kIKWVfc7a8IyA7tpEZthIVHqtvPfEgqDaK9qGDtiVJrUgdY4jigHpbM2e7AqwqnkQFQfLmvTU1q692K5iy63h86QlB30n9cE-0iWI503zpLl97Ow1hFfSfCRiKIR_tqODQXkOP9YwqAkBHdSAJTdNdu8s0BHdVncQ4NCXgHtvlGoU2q0n_KO2HZm2fDKSmRBkGpD1XpceSsqTRHw=w505-h503-s-no?authuser=0",
                 widgetPosition: "RIGHT",
                 triggerMessage: "",
                 welcomeMessage: "Welcome to Mother Teressa Sr. Sec. School Baharawanda Kalan",
                 brandColor: "#25D366",
                 messageText: "Please Submit Your Query",
                 replyOptions: ["Looking for Addmission","Looking for Job", "Just Exploring"],
               }
             };
             let h = d.getElementsByTagName(s)[0],
             j = d.createElement(s);
             j.async = true;
             j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
             h.parentNode.insertBefore(j, h);
           })(window, document, "script", "https://waw.gallabox.com");
         `,
     }}
   />
    </>
  );
};

export default Navbar;
