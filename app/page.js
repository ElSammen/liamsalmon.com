import Image from 'next/image'
import Link from 'next/link'
import hero from './assets/heropic.png'
import coffee from './assets/coffee.png'
import cursor from './assets/pointer.png'
import { headerFont, subheaderFont } from './utils/fonts.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-wrap items-center justify-between">
      <section className="maintop flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
        <div className="flex flex-col name-box">
          <div className="flex header name1 text-9xl cursor-default">
            <p className={headerFont.className}>LIAM</p>
          </div>
          <div className="flex header name2 text-9xl cursor-default">
            <p className={headerFont.className}>SALMON</p>
          </div>
          <div className="flex subheader name3 text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] cursor-default">
            <p className={subheaderFont.className}>Full Stack Div</p>
          </div>
        </div>
        <div className="flex flex-col imgbox relative md:mr-[2rem]">
          <Image src={hero}
            alt="Picture of the author over orange ink splatter"
            className="hero md:rotate-[-5deg] aspectratio-auto"
            style={{ width: "28rem", minWidth: "20rem" }}
          />
          <Image src={coffee}
            alt="Picture of coffee cup"
            className="coffee absolute -right-2 top-4 rotate-[15deg] animate-bounce "
            style={{ width: "8rem" }}
          />
          <Image src={cursor}
            alt="Picture of cursor"
            className="cursor absolute bottom-[3.5rem] -left-0 animate-[mousemove_30s_infinite]"
            style={{ width: "1.5rem" }}
          />
        </div>
      </section>
      <section className="mainbottom flex flex-row w-full justify-items-auto">
        <div className="flex flex-row flex-wrap  text-box justify-between m-auto">
          <Link href="/pages/projects">
            <div className="bottombox box1 h-[7rem] m-auto mx-9 bg-green-500 w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem]
          hover:bg-green-600 hover:border-green-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white"
            >
              <span className={subheaderFont.className}>Projects</span>
            </div>
          </Link>

          <Link href="/pages/about">
            <div className="bottombox box2 h-[7rem] m-auto  mx-9 bg-orange-400 w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem]
          hover:bg-orange-500 hover:border-orange-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white"
            >
              <span className={subheaderFont.className}>About</span>
            </div>
          </Link>
          <Link href="/pages/contact">
          <div className="bottombox box3 h-[7rem] m-auto  mx-9 bg-violet-600 w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.2rem]
          hover:bg-violet-700 hover:border-violet-900 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white"
          >
            <span className={subheaderFont.className}>Contact</span>
          </div>
          </Link>
        </div>
      </section>

    </main>
  )
}
