'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { subheaderFont, headerFont } from '../utils/fonts'
import borgor from '../assets/borgor.png'

function Navbar() {


    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addListener(updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeListener(updateTarget);
        }, [updateTarget, width]);

        return targetReached;
    };

    const isBreakpoint = useMediaQuery(768)


    /* handleMenu will be used to toggle the menu of the options */

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
       setMenu(!menu)
    }
    


    return (
        <div className='w-[100%] absolute top-0 bg-sky-600 border-b-2 h-16 md:h-10 border-sky-700 leading-0 z-10'>
            <div className='flex flex-row justify-between'>
                <Link href='/'>
                    <div className={headerFont.className}>
                        <p className='ml-2 mt-[-0.2rem] md:mt-0 text-[5rem] w-auto md:text-[3rem] text-white h-10  headerText
                    decoration-2 underline-offset-2 hover:underline hover:cursor-pointer'
                        >LIAM SALMON</p>
                    </div>
                </Link>

                {!isBreakpoint ? <div className='justify-self-end flex flex-row gap-3'>
                    <Link href='/pages/projects' >
                        <div className={headerFont.className}>
                            <p className='mr-2  text-[3rem] text-white h-10  headerText
                    decoration-2 underline-offset-2 hover:text-green-500 hover:underline hover:cursor-pointer'
                            >PROJECTS</p>
                        </div>
                    </Link>
                    <Link href='/pages/about' >
                        <div className={headerFont.className}>
                            <p className='mr-2  text-[3rem] text-white h-10  headerText
                    decoration-2 underline-offset-2 hover:text-amber-400 hover:underline hover:cursor-pointer'
                            >ABOUT</p>
                        </div>
                    </Link>
                    <Link href='/pages/contact' >
                        <div className={headerFont.className}>
                            <p className='mr-2  text-[3rem] text-white h-10  headerText
                    decoration-2 underline-offset-2 hover:text-violet-600 hover:underline hover:cursor-pointer'
                            >CONTACT</p>
                        </div>
                    </Link>
                </div> :
                    <div className='justify-self-end flex flex-row mt-[0.7rem] mr-2'
                        onClick={() => handleMenu()}
                    >
                        <Image src={borgor} alt='burger menu' className='w-[3.4rem] h-[2.4rem]' />
                        { menu ? 
                            <div className='absolute w-[99vw] top-14 right-1 bg-sky-600 p-1 border-b-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-0'>
                                <Link href='/pages/projects' >
                                    <div className={headerFont.className}>
                                        <p className='mr-2  text-[5rem] text-white text-center border-b-2 border-black  headerText
                    decoration-2 underline-offset-2 blrd'
                                        >PROJECTS</p>
                                        </div>
                                </Link>
                                <Link href='/pages/about' >
                                    <div className={headerFont.className}>
                                        <p className='mr-2  text-[5rem] text-white text-center border-b-2 border-black headerText
                    decoration-2 underline-offset-2 '
                                        >ABOUT</p>
                                        </div>
                                        </Link>
                                <Link href='/pages/contact' >
                                    <div className={headerFont.className}>
                                        <p className='mr-2  text-[5rem] text-white text-center border-b-2 border-black headerText
                    decoration-2 underline-offset-2'
                                        >CONTACT</p>
                                        </div>
                                        </Link>
                            </div> : <></>
                        }

                            
                    </div>
                }
            </div>

        </div>

    )
}

export default Navbar