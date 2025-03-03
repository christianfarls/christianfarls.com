"use client";

import {ContactForm} from "./contact-form";

// Main Contact component
export default function Contact() {

    return (
        <main className="max-w-md mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <p className="text-md text-gray-500 mb-4">CV can be provided upon request.</p>
            <ContactForm />
        </main>
    );
}
