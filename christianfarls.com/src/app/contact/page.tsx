"use client";

import {SubmitHandler} from "react-hook-form";
import {ContactForm} from "./contact-form";

// Main Contact component
export default function Contact() {
    const handleSubmit: SubmitHandler<FormData> = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <main className="max-w-md mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <ContactForm />
        </main>
    );
}
