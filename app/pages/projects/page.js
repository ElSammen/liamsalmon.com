import Link from "next/link"

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col flex-wrap items-center justify-between">
            <section className="maintop flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <Link href="/">
                    <div className="absolute top-0 left-1">
                        <span>return home</span>
                    </div>
                </Link>
                projecto
                <div className="projectbox flex sm:flex-row flex-wrap justify-between w-full sm:mx-auto sm:my-[3rem] text-center md: text-left">
                    <div className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[4rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">test</p>
                    </div>

                    <div className="flex flex-col projcard bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[4rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">test</p>
                    </div>

                    <div className="flex flex-col bg-fuchsia-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[4rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">test</p>
                    </div>

                    <div className="flex flex-col bg-violet-500 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] h-[4rem] text-center mb-3">
                        <p className="border-b-2 border-black w-[50%] mx-auto">test</p>
                    </div>
                </div>
            </section>
        </main>

    )
}