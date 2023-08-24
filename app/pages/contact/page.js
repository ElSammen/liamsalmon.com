import ContactForm from "./contactme.js"

export default function Contact() {

    return (
        <main className="bg-sky-500 flex min-h-screen min-w-screen mt-14 md:mt-0 flex-col flex-wrap items-center justify-between">
            <section className="maintop flex sm:flex-row flex-wrap justify-between w-full  px-28 sm:mx-auto sm:my-[3rem] text-center md:text-left">
                <div className="left ">
                    <h1 className="text-5xl font-bold">Get in touch!</h1>

                    <ContactForm />
                    
                </div>

                <div className="">
                    test post pls ignore
                </div>
            </section>
        </main>

    )
}