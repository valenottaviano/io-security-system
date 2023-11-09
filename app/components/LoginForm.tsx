"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ isLogged }: any) {
    const router = useRouter()
    if (isLogged == true) {
        router.push('/')
    }
    const [msg, setMsg] = useState<string>('')
    const [formData, setFormData] = useState<any>({
        "user": "",
        "password": "",
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
        axios.post('/api/login', formData)
            .then(res => {
                if (!res.data.logged) {
                    setMsg(res.data.msg)
                }
                if (res.data.logged) {
                    localStorage.setItem('token', res.data.token)
                    router.push('/')
                }
            })
    }

    return <form
        className="bg-neutral-800 flex flex-col border-[1px] border-neutral-700 items-center space-y-5 p-5 rounded-md w-[90vw] md:w-[70vw] lg:w-[40vw]"
        onSubmit={handleSubmit}>
        <>
            <h2 className="font-bold text-2xl text-white">Login form</h2>
            <p className="text-red-300">{msg}</p>
            <div className="flex flex-col w-full">
                <label className="text-neutral-400 ">User</label>
                <input
                    className="w-full bg-neutral-800 border-b-[1px] border-neutral-400 text-white"
                    name="user"
                    required
                    type="text"
                    onChange={handleInputData("user")}
                    value={formData["user"]}
                    autoComplete="false"
                /></div>
            <div className="flex flex-col w-full">
                <label className="text-neutral-400 ">Password</label>
                <input
                    className="w-full bg-neutral-800 border-b-[1px] border-neutral-400 text-white"
                    name="password"
                    required
                    type="password"
                    onChange={handleInputData("password")}
                    value={formData["password"]}
                    autoComplete="false"
                /></div>

            <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3  rounded-lg shadow-md shadow-emerald-400/50 flex items-center">
                <span>Login</span>
                {/* <FontAwesomeIcon icon={faEnvelope} style={{
                    width: '20px',
                    marginLeft: '1rem'
                }} /> */}
            </button></>
    </form>
}