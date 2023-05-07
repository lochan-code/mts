import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MTS School | Mother Teressa Senior Secondary School Baharawanda Kalan</title>
        <meta name="description" content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school" />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div>
        <div className="banner">
        <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
      MTS School
      </h1>
      <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-200">
      Mother Teressa Senior Secondary School Baharawanda kalan
      </p>
      <a
        href="mailto:contactmtsschool@gmail.com"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Contact Now
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <div
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
      <Link
        href={'/addmission'}
      >
        Admission Form
      </Link>
      </div>
      <a href="https://files.appsgeyser.com/MTS%20School%20Mother%20Teressa%20Senior%20Secondary%20School%20Baharawanda%20kalan_17045525.apk?utm_source=email&utm_medium=email&utm_campaign=downloadApp" target="_blank" rel="noreferrer"><button class="bg-gray-300 m-1 hover:bg-gray-400 text-gray-800 font-bold py-2 poppins sm:hidden px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download App</span>
</button>
  </a>
    </div>
    <div className="lg:mt-0 lg:col-span-5 lg:flex m-3">
      <Image
        src="/gallery7.jpg" width={500} height={400}
        alt="mts"
      />
    </div>
  </div>
</section>

        </div>
        <div className="flex flex-wrap justify-center m-3 space-x-3">
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image alt='photo' src="/icons/stundent.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>500+</p>
          </div>
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image alt='photo' src="/icons/teacher.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>15+</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-white text-center text-4xl w-full varela'>Facilities</h1>
        <div className="glass-blur flex flex-wrap p-2 justify-center items-center">
          <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Medium: Hindi</h1>
          </div>
          <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Medium: English</h1>
          </div>   <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>From 1 to 12</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Total Teachers: 15+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Male Teachers: 10+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'> Female Teacher: 2+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Electricity</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Library</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Playground</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Drinking Water</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Contact Teacher</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center">
            <Image alt='photo' src="/icons/check.png" className='max-[768px]:hidden flex' width={40} height={40} />
            <h1 className='ml-1 text-sm bungee text-white'>Students Motivated</h1>
          </div>
        </div>
      </div>
      {/* <div className="container mt-2">
            <h1 className='text-white text-4xl varela'>Arts</h1>
            <div className="flex flex-wrap justify-center text-center">
              <div className="card z-50">
                <div className="content">
                  <h2>01</h2>
                  <h3>HISTORY</h3>
                  <a href="https://en.wikipedia.org/wiki/History" target="_blank">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <h2>02</h2>
                  <h3>HINDI LITERATURE</h3>
                  <a href="https://en.wikipedia.org/wiki/Hindi_literature" target="_blank">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <h2>03</h2>
                  <h3>GEOGRAPHY</h3>
                  <a href="https://en.wikipedia.org/wiki/Geography" target="_blank">Read More</a>
                </div>
              </div>
            </div>

          </div> */}
      <div className="linear-gradient-card-vala p-5">
        <div className="wrapper flex items-center justify-center p-1">
          <Image alt='photo' src="/ceo.png"  className='rounded-full' width={100} height={100} />
          <h1 className='ml-5 ubuntu text-xl text-gray-500 font-semibold'>Education is important for become a successfull person</h1>
        </div>
      </div>
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
      <div className="flex  justify-center linear-gradient-card-vala items-center p-5">
        <div className="wrapper bus-service w-full h-full flex items-center ">
          <Image alt='photo' src="/bus.jpg" className='image-of-bus' width={1000} height={700} />
          <h1 className='ml-10 ubuntu text-xl font-semibold text-gray-500'>Here bus sevice available. many villages in bus pickup and drop students. prepared driver Bus Driver in our bus service. These are villages where School Bus Service Available - <ul className='list-disc font-light'><li>Piplet</li><li>Kudana</li><li>Kosra</li></ul></h1>
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
Send Message<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  height="25px"
  width="25px"
  version="1.1"
  id="Capa_1" className='ml-2'
  viewBox="0 0 256.409 256.409"
  xmlSpace="preserve"
>
  <g>
    <path
      style={{ fill: "#fff" }}
      d="M254.189,121.75L132.267,26.191c-1.898-1.632-4.574-2.012-6.853-0.974   c-2.274,1.044-3.737,3.318-3.737,5.825v82.206L10.59,26.191c-1.898-1.632-4.574-2.012-6.853-0.974C1.458,26.262,0,28.536,0,31.043   V225.37c0,2.518,1.479,4.808,3.78,5.842c2.306,1.028,4.993,0.615,6.886-1.061l111.006-89.924v85.143   c0,2.518,1.479,4.808,3.786,5.842c2.301,1.028,4.993,0.615,6.88-1.061l121.917-98.763c1.382-1.224,2.176-3.057,2.154-4.835   C256.397,124.709,255.587,122.952,254.189,121.75z M12.82,211.098V45.011l105.79,81.673L12.82,211.098z M134.492,211.098V127.76   c0.082-0.408,0.261-0.8,0.25-1.207c0-0.392-0.174-0.745-0.25-1.12V45.011l105.79,81.673L134.492,211.098z"
    />
  </g>
</svg></button>
              <span />
            </div>
          </form>
        </div>
{/* <iframe className='-mb-36' src="https://docs.google.com/forms/d/e/1FAIpQLSf4yBDfigXCVt2krcd91Dz7Emxw9NPvXA0okDJZ23e4RRFU3g/viewform?embedded=true" width="640" height="947" frameBorder="0" marginheight="0" marginWidth="0"></iframe> */}
        <div className="glass -mt-5 p-1 text-gray-800 mb-24  flex justify-center items-center flex-wrap">
          <p className='text-center'>© 2023 <Link href={'/'}>mtsbk.vercel.app</Link> — All Rights Reserved</p>
          <div className="ml-4 flex"> 
          <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.google.com/maps/place/MOTHER+TERESSA+SR.SEC.SCHOOL/@26.0164776,76.6950282,18z/data=!4m6!3m5!1s0x3971c5a3a3b38d7f:0xd7f03a79de35d82c!8m2!3d26.016386!4d76.6956022!16s%2Fg%2F11c6_ykb86">
              <Image alt='photo' src="/icons/map.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://twitter.com/MTSSchool98">
              <Image alt='photo' src="/icons/twitter.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.facebook.com/profile.php?id=100092324292806">
              <Image alt='photo' src="/icons/facebook.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.instagram.com/mtsschool1998/">
              <Image alt='photo' src="/icons/instagram.png" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 m-10 mb-28 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
          <h1 className="text-slate-500 font-medium">This site is designed, developed, maintained and hosted by</h1>
      <h1 className="text-lg text-black font-semibold"><a href='mailto:lochangta5@gmail.com'>Lochan Jangid</a></h1>
    </div>
   
  </div>
</div>
  <div>.</div>
    </div>
  )
}
