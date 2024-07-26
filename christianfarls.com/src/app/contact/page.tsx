"use client";

import {SubmitHandler} from "react-hook-form";

// Main Contact component
export default function Contact() {
    const handleSubmit: SubmitHandler<FormData> = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div className="">
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Contact</h1>
            <p>You can reach me at +1 (412) 713-5531 or cfarls@nd.edu. Hope to chat soon!</p>
            {/*
            <div className="flex flex-col gap-5 items-center">
                <ContactForm onSubmit={handleSubmit}/>
            </div>
            */}
        </div>
    );
}
