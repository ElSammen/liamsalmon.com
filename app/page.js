import Image from 'next/image'
import hero from './assets/heropic.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center justify-between p-24">
      <div className="flex flex-col name-box">
        <div className="flex header name1 text-9xl text-left">
          <p>LIAM</p>
        </div>
        <div className="flex header name2 text-9xl">
          <p>SALMON</p>
        </div>
        <div className="flex subheader name3 text-6xl">
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className="flex flex-col imgbox">
        <Image src={hero} 
        alt="hero" 
        className="hero h-auto w-auto drop-shadow-2xl blur-none shadow-solid-primary"
        layout='responsive'
        />
      </div>
    </main>
  )
}
