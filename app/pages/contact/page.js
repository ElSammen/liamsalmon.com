import ContactForm from "./contactme.js"
import Link from 'next/link'
import Image from "next/image.js"
import linkedIn from "../../assets/linkedin.png"
import github from "../../assets/github.svg"
import { headerFont, subheaderFont } from '../../utils/fonts.js'

export default function Contact() {

    return (
        <main className="bg-sky-500 flex min-h-screen min-w-screen mt-14 md:mt-0 flex-col flex-wrap items-center justify-center px-10">
            <section className="maintop flex md:flex-row flex-wrap justify-center w-full gap-28 px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <div className="leftside relative ">
                    <div className="border-4 -top-5 left-3 border-black bg-fuchsia-500 p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute">
                        <span className={subheaderFont.className}>Drop me a message... </span>
                    </div>
                    <ContactForm />

                </div>

                <div className="rightside flex justify-center">
                    <div className="flex border-4 border-black bg-lime-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] px-12 h-[8rem] relative my-3 justify-center place-content-center" >
                        <div className="border-4 -top-5 left-0 border-black bg-fuchsia-500 p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute">
                            <span className={subheaderFont.className}>...or check me out below</span>
                        </div>


                        <div className="flex flex-row justify-center justify-self-center align-items-center my-[30%]">
                            <Link href="https://www.linkedin.com/in/liam-salmon-9053b8265/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[-0.1rem]" x="0px" y="0px" width="56" viewBox="0 0 50 50"
                                    style={{ fill: '#1A1A1A' }}>
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </Link>
                            <Link href="https://github.com/ElSammen" target="_blank">
                                <Image src={github} alt="GitHub" width={50} height={50} />
                            </Link>
                            <Link href="https://docs.google.com/document/d/e/2PACX-1vRTNDBfiiJFRHqduz-SzKs7BaxUb5X1gv24ZgN_ofI9djbE2OUASMpyfsmPkID6oORl5VbdQconx8iq/pub" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[-0.3rem]" height="60" viewBox="0 0 24 24" width="60"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                            </Link>

                        </div>
                    </div>

                </div>
            </section>
        </main>

    )
}