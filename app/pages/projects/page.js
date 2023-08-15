'use client'

import Link from "next/link"
import { headerFont, subheaderFont } from '../../utils/fonts.js'
import { useState, useEffect } from "react"
import Image from "next/image.js"
import reactIcon from '../../assets/React-icon.svg'
import jsIcon from '../../assets/JS-logo.png'
import cssLogo from '../../assets/CSSlogo.svg'
import mongoDB from '../../assets/mongoDB.png'
import nodeJS from '../../assets/nodejs.png'



export default function Projects() {

    const [isExpanded, setIsExpanded] = useState(false)

    function toggleExpand() {
        setIsExpanded(!isExpanded)
    }

    return (
        <main className="bg-sky-500 flex min-h-screen min-w-screen flex-col flex-wrap items-center justify-between">
            <section className="maintop flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1" expanded="false" >
                        <span>return home</span>
                    </div>
                </Link>
                projecto
                <div className="projectbox flex sm:flex-row flex-wrap justify-between w-full sm:mx-auto sm:my-[3rem] text-center w-[20rem]">
                    <div onClick={() => toggleExpand()}
                        className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3">
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[50%] mx-auto text-[1.2]">Herd</p>
                            <p className="mx-auto">Spotify Connected Web App</p>
                            <div className="flex justify-center space-x-0.5 techbox mx-auto">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {isExpanded ? <span ><Link className="hover:text-white" href="https://herd-frontend.onrender.com/">Demo</Link> <Link className="hover:text-white" href="https://github.com/ElSammen/Herd">Repo</Link></span> : null}
                            {isExpanded ? <p className="w-[90%] mx-auto">A Full Stack Music Recommendation Web App, powered by the Spotify API - enter a song and receive related suggestions.</p> : null}
                            {isExpanded ? <p className="w-[90%] mx-auto"> Incorporates an autocomplete feature to attach Spotify&apos;s official Genre Seeds to your account for automatic suggestions</p> : null}
                        </div>
                    </div>
                    <div className="flex flex-col projcard bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[5rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">Weather App</p>
                        <div className="flex justify-center space-x-0.5 techbox mx-auto">
                            <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                            <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                            <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                            {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                        </div>
                    </div>

                    <div className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[5rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">Chromodoro</p>
                        <div className="flex justify-center space-x-0.5 techbox mx-auto  mt-1">
                            <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                            <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                            {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                        </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[5rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">R8</p>
                        <div className="flex justify-center space-x-0.5 techbox mx-auto mt-1">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[5rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">Pot Odds Calculator</p>
                        <div className="flex justify-center space-x-0.5 techbox mx-auto  mt-1">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
