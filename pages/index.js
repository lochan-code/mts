import Head from 'next/head'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MTS School | Mother Teressa Senior Secondary School Baharawanda kalan</title>
        <meta name="description" content="Mother Teressa Senior Secondary School Baharawanda kalan, mts, mts school, mts school baharawanda kalan, barawanda kalan,  mother  teressa school" />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div>
        <div className="banner">
          <div className="video flex justify-center">
            <Image alt='photo' src='/hero.png' width={1200} height={700} className='w-[90vw] h-[70vh]' />
        </div>
        </div>
        <div className="flex flex-wrap justify-center m-3 space-x-3">
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image alt='photo' src="/icons/stundent.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>700+</p>
          </div>
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image alt='photo' src="/icons/teacher.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>15+</p>
          </div>
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image alt='photo' src="/icons/school.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>2</p>
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
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'> Pre Primary Section Available</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Board for ClassName 10th RBSE</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Board for ClassName 12th RBSE</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>ClassNamees: From ClassName 1 to ClassName 12</h1>
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
            <Image alt='photo' src="/icons/cross.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Meal Provided</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Contact Teacher</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Teacher Teaching with Fun</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image alt='photo' src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Students Motivated</h1>
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
          <h1 className='ml-5 ubuntu text-xl font-semibold'>Education is important for become a successfull person</h1>
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
          <h1 className='ml-10 ubuntu text-xl font-semibold'>Here bus sevice available. many villages in bus pickup and drop students. prepared driver Bus Driver in our bus service. These are villages where School Bus Service Available - <ul className='list-disc font-light'><li>Piplet</li><li>Kudana</li><li>Kosra</li></ul></h1>
        </div>
      </div>
      <div className="flex flex-col justify-center linear-gradient-contact-vala items-center p-5">
        <div className="wrapper">
          <header>Send us a Message</header>
          <form id="contact" method='POST' action='https://script.google.com/macros/s/AKfycbzEn0EMlSAcMfsXskT7zRtejbodanfb8Laafw5jG60bUYux9iV_AZ2d8h_Qgh55nUssHg/exec'>
            <div className="dbl-field">
              <div className="field">
                <input required type="text" name="name" placeholder="Enter your name" />
                <Image alt='photo' src='/icons/user.png' width={50} height={50}/>
              </div>
              <div className="field">
                <input required type="email" name="email" placeholder="Enter your email" />
                <Image  alt='photo' src="/icons/email.png"   width={50} height={50}/>
              </div>
            </div>
            <div className="message">
              <textarea required
                placeholder="Write your message"
                name="message"
                defaultValue={""}
              />
              <Image alt='photo' src="/icons/message.png"  width={50} height={50} />

            </div>
            <div className="button-area">
              <button type="submit">Send Message</button>
              <span />
            </div>
          </form>
        </div>
{/* <iframe className='-mb-36' src="https://docs.google.com/forms/d/e/1FAIpQLSf4yBDfigXCVt2krcd91Dz7Emxw9NPvXA0okDJZ23e4RRFU3g/viewform?embedded=true" width="640" height="947" frameBorder="0" marginheight="0" marginWidth="0"></iframe> */}
        <div className="glass -mt-5 p-1 text-gray-800 mb-24  flex justify-center items-center">
          <p>© 2022 mts.vercel.app — All Rights Reserved</p>
          <div className="ml-4 flex">
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://twitter.com/mtsschool1998">
              <Image alt='photo' src="/icons/twitter.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.facebook.com/profile.php?id=100085838620140">
              <Image alt='photo' src="/icons/facebook.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.instagram.com/mtsschool1998/">
              <Image alt='photo' src="/icons/instagram.png" width={30} height={30} />
            </a>
            <a className='m-1 hover:scale-150  hover:rotate-45 transition-all' href="https://www.youtube.com/channel/UCMXVcZ5OvOuPoC0Ty8OzJcw/videos">
              <Image alt='photo' src="/icons/youtube.png" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 m-10 mb-28 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
          <p className="text-slate-500 font-medium">This site is designed, developed, maintained and hosted by</p>
      <p className="text-lg text-black font-semibold"><a href='mailto:lochangta5@gmail.com'>Lochan Jangid</a></p>
    </div>
   
  </div>
</div>
  <div>.</div>
    </div>
  )
}
