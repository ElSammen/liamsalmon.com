import Image from 'next/image'
import hero from './assets/heropic.png'
import {headerFont, subheaderFont} from './utils/fonts.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center justify-between px-24 ">
      <div className="flex flex-col name-box md:text-center">
        <div className="flex header name1 text-9xl">
          <p className={headerFont.className}>LIAM</p>
        </div>
        <div className="flex header name2 text-9xl">
          <p className={headerFont.className}>SALMON</p>
        </div>
        <div className="flex subheader name3 text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <p className={subheaderFont.className}>Full Stack Div</p>
        </div>
      </div>
      <div className="flex flex-col imgbox">
        <Image src={hero} 
        alt="Picture of the author over orange ink splatter" 
        className="hero"
        style={{width: 475}}
        />
      </div>
    </main>
  )
}
