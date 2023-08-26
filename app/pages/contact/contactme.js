'use client'

export default function ContactForm() {


    async function handleSubmit(event) {
        event.preventDefault();

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
            }
        } catch (error) {
            console.log(error);
            console.log("Error sending message");
        }



    }

    


    return (

        <form className="flex flex-col bg-orange-400 border-black border-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] w-[20rem] p-2 mt-3" onSubmit={handleSubmit}>
            <label className="text-2xl font-bold" htmlFor="name">Name</label>
            <input className="border-2 border-black " minLength={1} maxLength={25} required type="text" name="name" id="name" />

            <label className="text-2xl font-bold">Email</label>
            <input className="border-2 border-black " minLength={5} maxLength={150} required type="email" name="email" id="email" />

            <label className="text-2xl font-bold">Message</label>
            <textarea className="border-2 border-black " placeholder="I'm writing today to... " rows={4} maxLength={500} required name="message" id="message" />

            <button className="border-2 border-black  px-4 py-2 w-24 bg-orange-600 hover:bg-orange-500 mt-2" type="submit">Submit</button>

        </form>

    )

}