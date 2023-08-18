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

    const [expandedState, setExpandedState] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    function setExpand(id) {
        setExpandedState((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    }

    function closeExpand(id) {
        console.log(id)
        setExpandedState((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    }



    return (
        <main className="bg-sky-500 flex min-h-screen min-w-screen flex-col flex-wrap items-center justify-between">
            <section className="maintop flex sm:flex-row flex-wrap justify-between w-full py-7 px-6  sm:px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1" expanded="false" >
                        <span>return home</span>
                    </div>
                </Link>
                <div className="projectbox flex sm:flex-row flex-wrap justify-between w-full sm:mx-auto sm:my-[3rem] text-center w-[20rem]">
                    <div
                        id={1}
                        onClick={() => setExpand(1)}
                        className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3 relative">
                        {expandedState[1] ? <div className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                            onClick={(e) => {
                                e.stopPropagation(); // This took a while to discover, but it's the only way to get the child closebutton to work.
                                closeExpand(1);
                            }}>
                            ☒
                        </div> : null}
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[50%] mx-auto text-[1.2]">Herd</p>
                            <p className="mx-auto">Spotify Connected Web App</p>
                            <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {expandedState[1] ? <div className="expanded mx-auto bg-fuchsia-400 border-black border-2 mt-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                {expandedState[1] ? <span ><Link className="hover:text-white mx-3" href="https://herd-frontend.onrender.com/">Demo</Link> <Link className="hover:text-white" href="https://github.com/ElSammen/Herd">Repo</Link></span> : null}
                                {expandedState[1] ? <p className="w-[90%] mx-auto text-center">Our final Bootcamp project, where our group used Agile methodologies to create a full stack application over the period of roughly 4 weeks. We created Herd, a Full Stack Music Recommendation Web App, powered by the Spotify API - you can enter a song or genre for related suggestions.</p> : null}
                                {expandedState[1] ? <p className="w-[90%] mx-auto text-center">Utilizing the MERN stack, whilst the frontend was written in React - we utilized Express and Nodejs for our backend which attached to the MongoDB database we had for user information. Scrambled jsonwebtokens were utilized to authenticate user logins and bcrypt was used to hash & salt passwords.</p> : null}
                                {expandedState[1] ? <p className="w-[90%] mx-auto text-center">Since the app is primarily powered by the Spotify API, users are required to have a Spotify account, also uses the Spotify Web Playback SDK with a custom built sound player. Incorporates an autocomplete feature to attach Spotify&apos;s official Genre Seeds to your account for automatic suggestions. Users can also create and add to playlists attached to their accounts.</p> : null}
                            </div> : null}
                        </div>
                    </div>
                    <div
                        id={2}
                        onClick={() => setExpand(2)}
                        className="transition flex flex-col bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3 relative">
                        {expandedState[2] ? <div className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpand(2);
                            }}>
                            ☒
                        </div> : null}
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[75%] mx-auto text-[1.2]">Weather App</p>
                            <p className="mx-auto">24 hour / 7 Day Forecast</p>
                            <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {expandedState[2] ? <div className="expanded mx-auto bg-violet-400 border-black border-2 mt-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                {expandedState[2] ? <span ><Link className="hover:text-white" href="https://elsammen.github.io/weather-api/#/days">Demo</Link> <Link className="hover:text-white" href="https://github.com/ElSammen/weather-api">Repo</Link></span> : null}
                                {expandedState[2] ? <p className=" mx-auto text-center">A React group project from the bootcamp, we mapped OpenWeatherMap API data to a 7 day forecast which can be clicked to take you to a more detailed 24 hour timeline.</p> : null}
                                {expandedState[2] ? <p className=" mx-auto text-center">Defaulting to Sheffield (where most of my coursemates were based) users are able to input any location of their choosing, features also include sound effects on hover over the individual 7 day forecast cards and a recharts graph on the detailed view displaying information on temperature, windspeed and humidity.</p> : null}
                            </div> : null}


                        </div>
                    </div>

                    <div
                        id={3}
                        onClick={() => setExpand(3)}
                        className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3 relative">
                        {expandedState[3] ? <div className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpand(3);
                            }}>
                            ☒
                        </div> : null}
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[50%] mt-2 mx-auto">Chromodoro</p>
                            <p className="mx-auto">Pomodoro Timer & Notes Extension</p>
                            <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {expandedState[3] ? <div className="expanded mx-auto bg-fuchsia-400 border-black border-2 mt-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                {expandedState[3] ? <span ><Link className="mx-3 line-through" href="">Demo</Link> <Link className="line-through" href="">Repo</Link></span> : null}
                                {expandedState[3] ? <p className="w-[90%] mx-auto text-center">To better understand Chrome extensions, I began making one to function as a productivity aid. For reasons unknown to me (masochism?) - I chose to do it purely in javascript, it's certainly promoted a newfound appreciation for frameworks.</p> : null}
                                {expandedState[3] ? <p className="w-[90%] mx-auto text-center">The Pomodoro Technique involves setting a timer for 25 minutes and working uninterrupted till after that 25 minutes passes, any interruptions and you restart the timer. After that 25 minutes, take a 5 minute break and the cycle begins anew. After 4 of these "pomos", take a longer break for your fourth break.</p> : null}
                                {expandedState[3] ? <p className="w-[90%] mx-auto text-center">I also incorporated a secondary feature of note taking that will be stored in the users local storage.</p> : null}
                            </div> : null}
                        </div>
                    </div>

                    <div
                        id={4}
                        onClick={() => setExpand(4)}

                        className="flex flex-col bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center p-5 mb-3 relative">
                        {expandedState[4] ? <div className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpand(4);
                            }}>
                            ☒
                        </div> : null}
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[50%] mx-auto">R8</p>
                            <p className="mx-auto">React Social Media Site</p>
                            <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {expandedState[4] ? <div className="expanded mx-auto bg-violet-400 border-black border-2 mt-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                {expandedState[4] ? <span ><Link className="mx-3 hover:text-white" href="https://jamesmdesign.github.io/rate-my/">Demo</Link> <Link className="hover:text-white" href="https://github.com/JamesMDesign/rate-my" >Repo</Link></span> : null}
                                {expandedState[4] ? <p className="w-[90%] mx-auto text-center">R8 is a dummy social media site, where users can post onto the main feed posts of their own choice and then "R8" them.</p> : null}
                                {expandedState[4] ? <p className="w-[90%] mx-auto text-center">The site was our introduction to React, posts were stored in users local storage.</p> : null}
                            </div> : null}
                        </div>
                    </div>

                    <div
                        id={5}
                        onClick={() => setExpand(5)}

                        className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center mb-3 relative">
                        {expandedState[5] ? <div className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpand(5);
                            }}>
                            ☒
                        </div> : null}
                        <div className={subheaderFont.className}>
                            <p className="border-b-2 border-black w-[50%] mx-auto">Pot Odds Calculator</p>

                            <div className="flex justify-center space-x-0.5 techbox mx-auto  mt-1">
                                <Image src={reactIcon} className="opacity-[1]" alt="React Icon" style={{ width: "2.2rem" }} />
                                <Image src={jsIcon} className="opacity-[1]" alt="JavaScript language icon" style={{ width: "2.2rem" }} />
                                <Image src={cssLogo} className="opacity-[1]" alt="CSS icon" style={{ width: "2.2rem" }} />
                                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
                            </div>
                            {expandedState[5] ? <div className="expanded mx-auto bg-fuchsia-400 border-black border-2 mt-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                {expandedState[5] ? <span ><Link className="mx-3 line-through" href="">Demo</Link> <Link className="line-through" href="">Repo</Link></span> : null}
                                {expandedState[5] ? <p className="w-[90%] mx-auto text-center">A simple pot odds calculator for Texas Hold'em Poker.</p> : null}
                                {expandedState[5] ? <p className="w-[90%] mx-auto text-center">The user inputs the pot size, the bet size, and the number of outs they have. The calculator then outputs the percentage chance of hitting one of those outs on the next card.</p> : null}
                                {expandedState[5] ? <p className="w-[90%] mx-auto text-center">More features to come such as calculating win percentage based on cards inputted.</p> : null}
                            </div> : null}
                        </div>
                    </div>
                </div>
            </section>
        </main >

    )
}
