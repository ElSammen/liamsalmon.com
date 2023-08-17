import Image from 'next/image'
import Link from 'next/link'
import hero from './assets/heropic.png'
import nameimg from './assets/nameimg.png'
import coffee from './assets/coffee.png'
import cursor from './assets/pointer.png'
import jsloon from './assets/jsloon.png'
import reactloon from './assets/reactloon.png'
import mongoloon from './assets/mongoloon.png'
import nodeloon from './assets/nodeloon.png'
import { headerFont, subheaderFont } from './utils/fonts.js'

export default function Home() {
  return (
    <main className="bg-sky-500 flex min-h-screen min-w-full px-7 sm:px-20 flex-col flex-wrap items-center justify-between">
      <section className="maintop flex md:flex-row flex-wrap justify-between w-full  sm:px-28 sm:mx-auto sm:my-[3rem]">
        <div className="flex flex-col name-box text-center mx-1 ml-2">
          <Image src={nameimg}
            alt="Picture of name of author over fuchsia ink splatter"
            className="nameimg mt-3 sm:mt-4 mx-auto sm-mx-auto sm:ml-10 w-[22rem] sm:w-[20rem]"

          />
          {/* <div className='bg-amber-400 border-black border-4 mt-1 mx-auto p-3 w-[20rem]'>
            <p className={subheaderFont.className}>While primarily skilled with the below technologies, I'm open to learning any new technology that comes my way.</p>
          </div> */}
          <div className="flex flex-row justify-center sm:mt-10">

            <Image src={jsloon}
              alt="Picture of javascript logo imposed onto a balloon"
              className="jsloon animate-[balloon1_10s_infinite] w-[5rem] sm:w-[5rem] mx-1 sm:mx-2"

            />
            <Image src={reactloon}
              alt="Picture of React logo imposed onto a balloon"
              className="reactloon animate-[balloon2_10s_infinite] w-[5rem] sm:w-[5rem] mx-1 sm:mx-2"

            />
            <Image src={mongoloon}
              alt="Picture of mongoDB logo imposed onto a balloon"
              className="mongoloon animate-[balloon1_10s_infinite] w-[5rem] sm:w-[5rem] mx-1 sm:mx-2"

            />
            <Image src={nodeloon}
              alt="Picture of nodejs logo imposed onto a balloon"
              className="nodeloon animate-[balloon2_10s_infinite] w-[5rem] sm:w-[5rem] mx-1 sm:mx-2"

            />
          </div>
        </div>
        <div className="flex flex-col imgbox relative sm:mt-4 sm:mx-4 md:mr-[2rem]">
          <Image src={hero}
            alt="Picture of the author over orange ink splatter"
            className="hero md:rotate-[-5deg] aspectratio-auto w-[20rem] sm:w-[28rem]"
          // style={{ minWidth: "15rem" }}
          />
          <Image src={coffee}
            alt="Picture of coffee cup"
            className="coffee absolute aspectratio-auto -right-6 sm:-right-2 top-4 rotate-[15deg] w-[7rem]"
          />
          <Image src={cursor}
            alt="Picture of cursor"
            className="cursor absolute bottom-[3.5rem] left-6 motion-safe:animate-[mousemove_30s_infinite] motion-safe:sm:animate-[fullmousemove_30s_infinite]"
            style={{ width: "1.5rem" }}
          />
        </div>
      </section>
      <section className="mainbottom flex flex-row w-full justify-items-center">
        <div className="flex flex-row flex-wrap  text-box justify-between mt-6 sm:mx-[8rem]  sm:mb-8 md:mx-auto">
          <Link href="/pages/projects">
            <div className="bottombox box1 h-[7rem] md:h-[7rem] sm:m-auto mx-5 sm:mx-3 bg-green-500 w-[18rem] md:w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem] sm:text-[1.7rem] md:text-[1.4rem]
          hover:bg-green-600 hover:border-green-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white relative"
            >
              <p className={subheaderFont.className}>Projects</p>
              <div className='svgbox absolute right-2 bottom-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>

            </div>
          </Link>

          <Link href="/pages/about">
            <div className="bottombox box2 h-[7rem] md:h-[7rem] sm:m-auto mx-5 sm:mx-3 bg-orange-400 w-[18rem] md:w-[20rem]  border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem] sm:text-[1.7rem] md:text-[1.4rem]
          hover:bg-orange-500 hover:border-orange-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white relative"
            >
              <p className={subheaderFont.className}>About</p>
              <div className='svgbox absolute right-2 bottom-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/pages/contact">
            <div className="bottombox box3 h-[7rem] md:h-[7rem] sm:m-auto mx-5 sm:mx-3 bg-violet-600 w-[18rem] md:w-[20rem]  border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem] sm:text-[1.7rem] md:text-[1.4rem]
          hover:bg-violet-700 hover:border-violet-900 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white relative"
            >
              <p className={subheaderFont.className}>Contact</p>
              <div className='svgbox absolute right-2 bottom-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </main>
  )
}
