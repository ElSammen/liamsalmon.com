"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { subheaderFont } from "@/app/utils/fonts";

export default function ProjModal(props) {
  const mapImgs = props.images.map((img) => {
    <Image src={img} alt="project image" />;
  });

  return (
    /* modal for projects, will include props.title, props.subtitle, props.description, props.images, props.demo, props.repo */
    <>
      <div className="flex justify-center fixed my-[screen] sm:my-[5%] place-self-center justify-self-center z-40 border-4 bg-orange-400 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] p-5 text-center w-[20rem] sm:w-[22rem] ">
        <div
          className="absolute top-0 right-1 cursor-pointer hover:text-white text-[1.5rem]"
          onClick={(e) => {
            e.stopPropagation();
            props.handleCloseClick();
          }}
        >
          ☒
        </div>
        <div className={subheaderFont.className}>
          <p className="border-b-2 border-black w-[50%] mx-auto text-[1.2]">
            {props.title}
          </p>
          <p className="mx-auto">{props.subtitle}</p>
          <span className="mx-auto gap-2 flex-row ">
            <Link href={props.demo} className="hover:text-white mx-3">
              Demo
            </Link>
            <Link className="hover:text-white mx-3" href={props.repo}>
              Repo
            </Link>
          </span>
          <div className="flex justify-center space-x-0.5 techbox mt-2 mx-auto">
            {mapImgs}
          </div>
          <div className="w-[85%] mx-auto">
            <p className="mx-auto">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
