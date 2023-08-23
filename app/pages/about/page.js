import Link from "next/link"
import Image from "next/image.js"
import hero from '../../assets/heropic.png'
import arrow from '../../assets/arrow.png'
import nametag from '../../assets/nametag.png'
import { headerFont, subheaderFont } from '../../utils/fonts.js'

export default function About() {
    return (
        <main className="bg-sky-500 flex min-h-screen mt-12 md:mt-0 w-[100%] flex-col flex-wrap items-center sm:justify-between sm:p-[3rem] overflow-clip">
            <section className="maintop flex md:flex-row flex-wrap sm:justify-between w-full sm:px-28 md:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1">
                        <span>return home</span>
                    </div>
                </Link>
                <div className="flex flex-col about-box bg-fuchsia-500 mt-6 mx-auto p-2 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] h-15 w-80 sm:w-5/12 text-center">
                    <div className={subheaderFont.className}>
                        <p className="border-b-2 w-20 border-black mx-auto text-xl mb-1">Hello!</p>
                        <p>I&apos;m Liam Salmon and I make websites. Interesting ones, informative ones, responsive, scalable, mini, massive - you name it.</p>
                        <p> I want to do it all and know it all. Why this works, how it works and why we do it that way?</p>
                        <p className="my-3 border-b-2 border-black w-40 mx-auto"></p>
                        <p className="mt-3">Most of all, I like getting stuck into new challenges. This portfolio for example, pure Nextjs and Tailwind (apart from the graphics) - both of which were completely new to me beforehand!</p>
                        <p className="my-3 border-b-2 border-black w-40 mx-auto"></p>
                        <p className="mt-2">As a recent graduate of <em><a className="hover:text-slate-200" href="https://thedeveloperacademy.com/" target="_blank">The Developer Academy</a></em>&apos;s nest, I&apos;m currently learning and developing my skills daily, in order to breach the barrier into an exciting and rapidly evolving industry.</p>
                        <p></p>
                    </div>
                </div>
                <div className="flex flex-col imgbox relative mt-8 mb-5  mx-auto">
                    <Image src={hero}
                        alt="Picture of the author over orange ink splatter"
                        className="hero aspectratio-auto w-[20rem] min-w-[15rem] sm:w-[28rem]"

                    />
                    <div className="absolute top-1 left-1 motion-safe:animate-[diagonalMove45_0.7s_infinite]">
                        <Image src={arrow}
                            alt="arrow with lightbulbs around it pointing diagonally right onto author image"
                            className="arrow aspectratio-auto w-[5rem] min-w-[5rem] rotate-45 sm:w-[7rem] "

                        />
                    </div>
                    <div className="absolute top-1 right-1 motion-safe:animate-[diagonalMove-45_0.7s_infinite]">
                        <Image src={arrow}
                            alt="arrow with lightbulbs around it pointing downwards onto author image"
                            className="arrow aspectratio-auto w-[5rem] min-w-[5rem] rotate-[135deg] sm:w-[7rem] "

                        />
                    </div>
                    <div className="absolute -top-4 sm:-top-10 right-[7rem]  sm:right-[10rem] motion-safe:animate-bounce">
                        <Image src={arrow}
                            alt="arrow with lightbulbs around it pointing diagonally left onto author image"
                            className="arrow aspectratio-auto w-[5rem] min-w-[5rem] -rotate-[270deg] sm:w-[7rem] "

                        />
                    </div>
                    <div className="absolute bottom-1 right-12 sm:right-20">
                        <Image src={nametag}
                            alt="nametag with author name on it"
                            className="nametag aspectratio-auto w-[1.2rem] min-w-[5rem] rotate-[-20deg]  sm:w-[4rem] "
                        />
                    </div>
                </div>
            </section>
            {/* <section className="mainbottom flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <div className="w-[70%]">
                    test
                </div>
            </section> */}
        </main>

    )
}