'use client'

import { subheaderFont } from '@/app/utils/fonts';
import { useState } from 'react'

export default function ContactForm() {

    //I'm going to set up a loading state for the form, so that the user knows that the form is being sent

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            message: event.target.elements.message.value
        }

        const sendmail = process.env.MAILURL

        try {
            
            let response = await fetch(sendmail, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            

            if (response.ok) {
                console.log("Message sent successfully");

                // reset the form
                event.target.name.value = "";
                event.target.email.value = "";
                event.target.message.value = "";
                setSuccess(true);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            console.log("Error sending message");
            setLoading(false);
        }



    }




    return (

        <form className="flex flex-col bg-orange-400 border-black border-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] p-2 mt-3 relative" onSubmit={handleSubmit}>
            <label className="text-2xl font-bold" htmlFor="name">Name</label>
            <input className="border-2 border-black " minLength={1} maxLength={25} required type="text" name="name" id="name" />

            <label className="text-2xl font-bold">Email</label>
            <input className="border-2 border-black " minLength={5} maxLength={150} required type="email" name="email" id="email" />

            <label className="text-2xl font-bold">Message</label>
            <textarea className="border-2 border-black " placeholder="I'm writing today to... " rows={4} maxLength={500} required name="message" id="message" />

            <button className="border-2 border-black text-[1.2rem] px-3 py-1 w-24 bg-orange-600 hover:bg-orange-500 mt-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-1" type="submit">
                <p className={subheaderFont.className}>Submit</p></button>
            {loading ? <div className='absolute left-[5rem] bottom-[6rem] bg-orange-400 border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] text-left w-[8.5rem] sm:w-[8.5rem] p-1 px-2'><p className="text-2xl font-bold loading">Sending</p></div> : null}
        </form>

    )

}