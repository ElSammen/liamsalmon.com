"use client";

import Link from "next/link";
import { headerFont, subheaderFont } from "../../utils/fonts.js";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import reactIcon from "../../assets/React-icon.svg";
import jsIcon from "../../assets/JS-logo.png";
import cssLogo from "../../assets/CSSlogo.svg";
import mongoDB from "../../assets/mongoDB.png";
import nodeJS from "../../assets/nodejs.png";
import ProjModal from "./ProjModal.js";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleProjClick(projectIndex) {
    setSelectedProject(projectIndex);
    console.log(selectedProject);
  }

  const handleCloseClick = () => {
    setSelectedProject(null); 
  };

  return (
    <main className="bg-sky-500 flex min-h-screen min-w-screen mt-14 md:mt-0 flex-col flex-wrap items-center justify-between">
      {selectedProject === 0 ? (
        <ProjModal
          title="Portfolio Mail Service"
          subtitle="Express, Node & Nodemailer"
          images={[jsIcon, nodeJS]}
          demo="https://www.liamsalmon.com/pages/contact"
          repo="https://github.com/ElSammen/mailservice"
          description="An Express server email service that utilizes Nodemailer to pass along emails from my portfolio contact form to my personal email address. The server is hosted on Render and is called via a Nextjs fetch request from the contact form on the contact page."
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      {selectedProject == 1 ? (
        <ProjModal
          title="Herd"
          subtitle="Spotify Connected Web App"
          images={[reactIcon, jsIcon, cssLogo]}
          demo="https://herd-frontend.onrender.com/"
          repo="https://github.com/ElSammen/Herd"
          description="Our final Bootcamp project, where our group used Agile methodologies to create a full stack application over the period of roughly 4 weeks. We created Herd, a Full Stack Music Recommendation Web App with authentication, powered by the Spotify API - you can enter a song or genre for related suggestions."
          className="bg-fuchsia-500"
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      {selectedProject == 2 ? (
        <ProjModal
          title="Weather App"
          subtitle="24 hour / 7 Day Forecast"
          images={[reactIcon, jsIcon, cssLogo]}
          demo="https://elsammen.github.io/weather-api/#/days"
          repo=""
          description="A React group project from the bootcamp, we mapped OpenWeatherMap API data to a 7 day forecast which can be clicked to take you to a more detailed 24 hour timeline. Defaulting to Sheffield (where most of my coursemates were based) users are able to input any location of their choosing, features also include sound effects on hover over the individual 7 day forecast cards and a recharts graph on the detailed view displaying information on temperature, windspeed and humidity."
          className="bg-violet-500"
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      {selectedProject == 3 ? (
        <ProjModal
          title="Chromodoro"
          subtitle="Pomodoro Timer & Notes Extension"
          images={[jsIcon, cssLogo]}
          demo=""
          repo=""
          description="To better understand Chrome extensions, I began making one to function as a productivity aid. The Pomodoro Technique involves setting a timer for 25 minutes and working uninterrupted till after that 25 minutes passes, any interruptions and you restart the timer. After that 25 minutes, take a 5 minute break and the cycle begins anew. After 4 of these 'pomos', take a longer break for your fourth break."
          className="bg-fuchsia-500"
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      {selectedProject == 4 ? (
        <ProjModal
          title="R8"
          subtitle="React Social Media Site"
          images={[reactIcon, jsIcon, cssLogo]}
          demo="https://jamesmdesign.github.io/rate-my/"
          repo=""
          description="A dummy social media site built as a group for our intro to React, where you can create posts, which are pushed to a feed to be liked or disliked."
          className="bg-violet-500"
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      {selectedProject == 5 ? (
        <ProjModal
          title="Pot Odds Calculator"
          subtitle="Pot Ratio & Percentages"
          images={[reactIcon, jsIcon, cssLogo]}
          demo=""
          repo=""
          description="A Twofold Web App, a Poker Pot Odds Calculator and a quiz, users must guess the outs they have to win the hand. Features to come include a percentage calculator and a hand strength calculator"
          className="bg-fuchsia-500"
          handleCloseClick={handleCloseClick}
        />
      ) : null}

      <section className="maintop flex sm:flex-row flex-wrap justify-between w-full py-7 px-6  sm:px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
        <div className="projectbox flex sm:flex-row flex-wrap justify-between w-full sm:mx-auto sm:my-[3rem] text-center ">
          <div
            id={0}
            onClick={() => handleProjClick(0)}
            className="flex flex-col bg-violet-500 hover:bg-violet-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3 mx-auto relative"
          >
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[50%] mx-auto text-[1.2]">
                Portfolio Mail Service
              </p>
              <p className="mx-auto">Express, Node & Nodemailer</p>
              <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={nodeJS}
                  className="opacity-[1]"
                  alt="NodeJS icon"
                  style={{ width: "2.2rem" }}
                />
              </div>
            </div>
          </div>

          <div
            id={1}
            onClick={() => handleProjClick(1)}
            className="flex flex-col bg-fuchsia-500 hover:bg-fuchsia-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mb-3 mx-auto relative"
          >
            {/* {expandedState[1] ? (
                <div
                  className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                  onClick={(e) => {
                    e.stopPropagation(); // This took a while to discover, but its the only way to get the child closebutton to work.
                    closeExpand(1);
                  }}
                >
                  ☒
                </div>
              ) : null} */}
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[50%] mx-auto text-[1.2]">
                Herd
              </p>
              <p className="mx-auto">Spotify Connected Web App</p>
              <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                <Image
                  src={reactIcon}
                  className="opacity-[1]"
                  alt="React Icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={cssLogo}
                  className="opacity-[1]"
                  alt="CSS icon"
                  style={{ width: "2.2rem" }}
                />
                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
              </div>
            </div>
          </div>
          <div
            id={2}
            onClick={() => handleProjClick(2)}
            className="transition flex flex-col bg-violet-500 hover:bg-violet-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center mx-auto mb-3 relative"
          >
            {/* {expandedState[2] ? (
                <div
                  className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeExpand(2);
                  }}
                >
                  ☒
                </div>
              ) : null} */}
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[75%] mx-auto text-[1.2]">
                Weather App
              </p>
              <p className="mx-auto">24 hour / 7 Day Forecast</p>
              <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                <Image
                  src={reactIcon}
                  className="opacity-[1]"
                  alt="React Icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={cssLogo}
                  className="opacity-[1]"
                  alt="CSS icon"
                  style={{ width: "2.2rem" }}
                />
                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
              </div>
            </div>
          </div>

          <div
            id={3}
            onClick={() => handleProjClick(3)}
            className="flex flex-col bg-fuchsia-500 hover:bg-fuchsia-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-5 text-center  mx-auto mb-3 relative"
          >
            {/* {expandedState[3] ? (
                <div
                  className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeExpand(3);
                  }}
                >
                  ☒
                </div>
              ) : null} */}
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[50%] mt-2 mx-auto">
                Chromodoro
              </p>
              <p className="mx-auto">Pomodoro Timer & Notes Extension</p>
              <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={cssLogo}
                  className="opacity-[1]"
                  alt="CSS icon"
                  style={{ width: "2.2rem" }}
                />
                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
              </div>
            </div>
          </div>

          <div
            id={4}
            onClick={() => handleProjClick(4)}
            className="flex flex-col bg-violet-500 hover:bg-violet-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center  mx-auto p-5 mb-3 relative"
          >
            {/* {expandedState[4] ? (
                <div
                  className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeExpand(4);
                  }}
                >
                  ☒
                </div>
              ) : null} */}
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[50%] mx-auto">R8</p>
              <p className="mx-auto">React Social Media Site</p>
              <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
                <Image
                  src={reactIcon}
                  className="opacity-[1]"
                  alt="React Icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={cssLogo}
                  className="opacity-[1]"
                  alt="CSS icon"
                  style={{ width: "2.2rem" }}
                />
                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
              </div>
            </div>
          </div>

          <div
            id={5}
            onClick={() => handleProjClick(5)}
            className="flex flex-col bg-fuchsia-500 hover:bg-fuchsia-400 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center p-5 mx-auto mb-3 relative"
          >
            {/* {expandedState[5] ? (
                <div
                  className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeExpand(5);
                  }}
                >
                  ☒
                </div>
              ) : null} */}
            <div className={subheaderFont.className}>
              <p className="border-b-2 border-black w-[55%] mx-auto">
                Pot Odds Calculator
              </p>
              <p className="mx-auto">Pot Ratio & Percentages</p>

              <div className="flex justify-center space-x-0.5 techbox mx-auto  mt-1">
                <Image
                  src={reactIcon}
                  className="opacity-[1]"
                  alt="React Icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={jsIcon}
                  className="opacity-[1]"
                  alt="JavaScript language icon"
                  style={{ width: "2.2rem" }}
                />
                <Image
                  src={cssLogo}
                  className="opacity-[1]"
                  alt="CSS icon"
                  style={{ width: "2.2rem" }}
                />
                {/* <Image src={mongoDB} className="opacity-[1]" style={{width: "2.2rem"}}  />
                                <Image src={nodeJS} className="opacity-[1]" style={{width: "2.2rem"}}  /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
