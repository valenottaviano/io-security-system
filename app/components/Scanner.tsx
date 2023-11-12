"use client"

import { useEffect, useState } from "react";
import QRCodeReader from "../components/QRCodeReader";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Scanner({ session }: any) {
    const router = useRouter()

    const [qrData, setQrData] = useState<any>(null)
    const [status, setStatus] = useState<any>(0)
    const [currentNumber, setCurrentNumber] = useState<number>(0)

    useEffect(() => {
        (async () => {
            if (status == -1 || status == 3) {
                return
            } else {
                console.log(status)
                await sleep(2000)
                setStatus(0)
                setQrData(null)
            }
        })()
    }, [status])

    useEffect(() => {
        (async () => {
            if (qrData) {
                setStatus(3)
                try {
                    const token = qrData.split('?')[1].split('&')[0].replace('token=', '')
                    const type = qrData.split('?')[1].split('&')[1].replace('type=', '')
                    try {
                        const res = await axios.post('/api/proxy', { token: token, type: type })
                        const res2 = await axios.post('/api/transaction', { token: token })
                        const isTrue = (res.data.status === 'true');
                        if (isTrue) {
                            setCurrentNumber(currentNumber + 1)
                            setStatus(1)
                        } else {
                            setStatus(2)
                        }
                    } catch (error) {
                        setStatus(2)
                        console.error(error);
                    }
                } catch {
                    setStatus(2)
                }
            }
        })()
    }, [qrData])

    return <div className={`w-screen h-screen pt-[15vh] flex flex-col justify-between
                            ${status == 0 ? 'bg-neutral-900' : ''}
                            ${status == 2 ? 'bg-red-400' : ''}
                            ${status == 1 ? 'bg-green-400' : ''}
                            ${status == 3 ? 'bg-blue-400' : ''}`}>
        <div className="absolute top-0 left-0 z-20"><NavBar /></div>
        <div>
            <div className="bg-neutral-800 border-[1px] border-neutral-700 text-white p-5 rounded-md w-[90vw] md:w-[30vw] mb-10 m-auto">
                <p>Current state: {qrData ? 'Processing' : 'Ready'}</p>
                <div className="flex items-center space-x-5 justify-center mt-5">
                    <Link href={'/dashboard'}>
                        <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3 rounded-lg shadow-md shadow-emerald-400/50 flex items-center ">
                            <span>Dashboard</span> <FontAwesomeIcon icon={faArrowRight} style={{
                                width: '20px',
                                marginLeft: '1rem'
                            }} />
                        </button>
                    </Link>
                    <button
                        onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_API_URL })}
                        className="bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">
                        <span>Logout</span>
                    </button>
                </div>
            </div>
            <div className="w-screen md:w-[30vw] flex items-center justify-center m-auto mb-10">
                <QRCodeReader setQrData={setQrData} />
            </div>
        </div>
        <Footer />
    </div>
}