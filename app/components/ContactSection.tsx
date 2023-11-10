"use client"
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return <>
        <section
            id="contact-form"
            className="bg-neutral-900 bg-gradient-to-t from-emerald-400/10 to-neutral-900  w-screen flex items-center justify-center pt-10 pb-20">
            <ContactForm />
        </section>

    </>
}