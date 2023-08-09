import Image from 'next/image'
import Link from 'next/link'
import hero from './assets/heropic.png'
import coffee from './assets/coffee.png'
import cursor from './assets/pointer.png'
import { headerFont, subheaderFont } from './utils/fonts.js'

export default function Home() {
  return (
    <main className="bg-sky-500 flex min-h-screen min-w-screen flex-col flex-wrap items-center justify-between">
      <section className="maintop flex md:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
        <div className="flex flex-col name-box text-center">
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
      <section className="mainbottom flex flex-row w-full justify-items-center">
        <div className="flex flex-row flex-wrap  text-box justify-between mx-[8rem] md:m-auto">
          <Link href="/pages/projects">
            <div className="bottombox box1 h-[9rem] md:h-[7rem] m-auto mx-3 bg-green-500 w-[25rem] md:w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.7rem] md:text-[1.4rem]
          hover:bg-green-600 hover:border-green-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white relative"
            >
              <p className={subheaderFont.className}>Projects</p>
              
            </div>
          </Link>

          <Link href="/pages/about">
            <div className="bottombox box2 h-[9rem] md:h-[7rem] m-auto  mx-3 bg-orange-400 w-[25rem] md:w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.7rem] md:text-[1.4rem]
          hover:bg-orange-500 hover:border-orange-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white"
            >
              <p className={subheaderFont.className}>About</p>
            </div>
          </Link>
          <Link href="/pages/contact">
          <div className="bottombox box3 h-[9rem] md:h-[7rem] m-auto  mx-3 bg-violet-600 w-[25rem] md:w-[20rem] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-[2rem] p-[0.2rem] text-[1.7rem] md:text-[1.4rem]
          hover:bg-violet-700 hover:border-violet-900 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:cursor-pointer hover:text-white"
          >
            <p className={subheaderFont.className}>Contact</p>
          </div>
          </Link>
        </div>
      </section>

    </main>
  )
}
