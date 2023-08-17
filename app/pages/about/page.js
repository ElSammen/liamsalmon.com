import Link from "next/link"
import Image from "next/image.js"
import hero from '../../assets/heropic.png'
import { headerFont, subheaderFont } from '../../utils/fonts.js'

export default function About() {
    return (
        <main className="bg-sky-500 flex min-h-screen w-screen flex-col flex-wrap items-center sm:justify-between sm:p-[3rem] overflow-clip">
            <section className="maintop flex md:flex-row flex-wrap sm:justify-between w-full sm:px-28 md:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1">
                        <span>return home</span>
                    </div>
                </Link>
                <div className="flex flex-col about-box bg-fuchsia-500 mt-5 mx-auto p-2 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] h-15 w-72 sm:w-80 text-center">
                    <div className={subheaderFont.className}>
                        <p className="border-b-2 w-20 border-black mx-auto text-lg">Hello!</p>
                        <p>I&apos;m Liam Salmon and I&apos;m a lifelong learner.</p>
                        <p> I want to know it all. Why this works, why we do it and why over other options?</p>
                        <p className="border-b-2 border-black w-40 mx-auto"></p>
                        <p className="mt-2">Most of all, I like learning new things. This portfolio for example, made in pure Nextjs and Tailwind - both of which completely new to me beforehand!</p>
                        <p className="border-b-2 border-black w-40 mx-auto"></p>
                        <p className="mt-2">As a recent graduate of <em><a className="hover:text-slate-200" href="https://thedeveloperacademy.com/" target="_blank">The Developer Academy</a></em>&apos;s nest, I&apos;m hoping to spread my wings into a bright new industry.</p>
                        <p></p>
                        <p className="mt-3">fr</p></div>
                </div>
                <div className="flex flex-col imgbox relative my-1  mx-auto">
                    <Image src={hero}
                        alt="Picture of the author over orange ink splatter"
                        className="hero aspectratio-auto w-[20rem] min-w-[15rem] sm:w-[28rem]"
                        style={{ overflow: 'none' }}
                    />
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