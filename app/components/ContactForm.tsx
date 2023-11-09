"use client"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactForm() {
    const [submit, setSubmit] = useState<any>(false);
    const [formData, setFormData] = useState<any>({
        "entry.332469334": "",
        "entry.596566398": "",
        "entry.1956321429": ""
    });
    const handleInputData = (input: any) => (e: any) => {
        const { value } = e.target;

        setFormData((prevState: any) => ({
            ...prevState,
            [input]: value
        }));
    };

    async function handleSubmit(e: any) {
        e.preventDefault();
        setSubmit(true);

        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLSdH7ZjwTL4asF2a5W2vKf8NUjudH0aro6g2ef3ohUJgiR5hfA/formResponse?entry.332469334=${formData["entry.332469334"]}&entry.596566398=${formData["entry.596566398"]}&entry.1956321429=${formData["entry.1956321429"]}`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).catch(err => {
            console.log('')
        })
    }

    return <form
        className="bg-neutral-800 flex flex-col border-[1px] border-neutral-700 items-center space-y-5 p-5 rounded-md w-[90vw] md:w-[70vw] lg:w-[40vw]"
        onSubmit={handleSubmit}>
        {submit ? <p className="text-center text-white text-xl">Thanks for your message! We&apos;ll be reaching you asap!</p> : <>
            <h2 className="font-bold text-2xl text-white">Leave us a message!</h2>
            <div className="flex flex-col w-full">
                <label className="text-neutral-400 ">Name</label>
                <input
                    className="w-full bg-neutral-800 border-b-[1px] border-neutral-400 text-white"
                    name="entry.332469334"
                    required
                    type="text"
                    onChange={handleInputData("entry.332469334")}
                    value={formData["entry.332469334"]}
                    autoComplete="false"
                /></div>
            <div className="flex flex-col w-full">
                <label className="text-neutral-400 ">Email</label>
                <input
                    className="w-full bg-neutral-800 border-b-[1px] border-neutral-400 text-white"
                    name="entry.596566398"
                    required
                    type="text"
                    onChange={handleInputData("entry.596566398")}
                    value={formData["entry.596566398"]}
                    autoComplete="false"
                /></div>
            <div className="flex flex-col w-full">
                <label className="text-neutral-400 ">Message</label>
                <textarea
                    className="w-full bg-neutral-800 border-b-[1px] border-neutral-400 text-white"
                    name="entry.1956321429"
                    required
                    onChange={handleInputData("entry.1956321429")}
                    value={formData["entry.1956321429"]}
                    autoComplete="false"
                /></div>
            <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3  rounded-lg shadow-md shadow-emerald-400/50 flex items-center">
                <span>Send</span> <FontAwesomeIcon icon={faEnvelope} style={{
                    width: '20px',
                    marginLeft: '1rem'
                }} />
            </button></>}
    </form>
}