import Link from "next/link"
import Image from "next/image.js"
import hero from '../../assets/heropic.png'
import { headerFont, subheaderFont } from '../../utils/fonts.js'

export default function About() {
    return (
        <main className="bg-sky-500 flex min-h-screen min-w-screen flex-col flex-wrap items-center justify-between mx-[3rem]">
            <section className="maintop flex md:flex-row flex-wrap justify-between w-full px-28 md:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1">
                        <span>return home</span>
                    </div>
                </Link>
                <div className="flex flex-col about-box bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] text-center">
                    <div className={subheaderFont.className}>
                        <p>About</p>
                        <p></p>
                        <p>Im a real human bean</p>
                        <p></p>
                        <p></p>
                        <p className="mt-3">fr</p></div>
                </div>
                <div className="flex flex-col imgbox relativ">
                    <Image src={hero}
                        alt="Picture of the author over orange ink splatter"
                        className="hero aspectratio-auto"
                        style={{ width: "28rem", minWidth: "20rem" }}
                    />
                </div>
            </section>
            <section className="mainbottom flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <div className="w-[70%]">
                    test
                </div>
            </section>
        </main>

    )
}