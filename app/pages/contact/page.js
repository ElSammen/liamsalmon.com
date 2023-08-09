import Link from "next/link"

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col flex-wrap items-center justify-between">
            <section className="maintop flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
            <Link href="/">
                    <div className="absolute top-0 left-1">
                        <span>return home</span>
                    </div>
                </Link>
                contacto
                <div></div>
            </section>
        </main>

    )
}