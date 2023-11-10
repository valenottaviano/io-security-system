"use client"

import { useEffect, useState } from "react";
import QRCodeReader from "../components/QRCodeReader";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Scanner({ isLogged }: any) {
    const router = useRouter()

    if (isLogged == false) {
        router.push('/login')
    }

    const [qrData, setQrData] = useState<any>(null)
    const [status, setStatus] = useState<boolean | null>(null)
    const [currentNumber, setCurrentNumber] = useState<number>(0)

    useEffect(() => {
        (async () => {
            if (status == null) {
                return
            } else {
                console.log(status)
                await sleep(2000)
                setStatus(null)
                setQrData(null)
            }
        })()
    }, [status])

    useEffect(() => {
        (async () => {
            if (qrData) {
                try {
                    const token = qrData.split('?')[1].split('&')[0].replace('token=', '')
                    const type = qrData.split('?')[1].split('&')[1].replace('type=', '')
                    try {
                        const res = await axios.post('/api/proxy', { token: token, type: type })
                        const isTrue = (res.data.status === 'true');
                        if (isTrue) {
                            setCurrentNumber(currentNumber + 1)
                            setStatus(true)
                        } else {
                            setStatus(false)
                        }
                    } catch (error) {
                        setStatus(false)
                        console.error(error);
                    }
                } catch {
                    setStatus(false)
                }
            }
        })()
    }, [qrData])

    return <div className={`w-screen h-screen pt-[15vh] flex flex-col justify-between
                            ${status == null ? 'bg-neutral-900' : ''}
                            ${status == false ? 'bg-red-400' : ''}
                            ${status == true ? 'bg-green-400' : ''}`}>
        <div className="absolute top-0 left-0 z-20"><NavBar /></div>
        <div>
            <div className="bg-neutral-800 border-[1px] border-neutral-700 text-white p-5 rounded-md w-[90vw] md:w-[30vw] mb-10 m-auto">
                <p>Current state: {qrData ? 'Processing' : 'Ready'}</p>
                <p>Users in system: {currentNumber}</p>
            </div>
            <div className="w-screen md:w-[30vw] flex items-center justify-center m-auto">
                <QRCodeReader setQrData={setQrData} />
            </div>
        </div>
        <button
            onClick={async () => {
                await axios.post('/api/logout')
                router.push('/login')
            }}
            className="bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">
            <span>Logout</span>
        </button>
        <Footer />
    </div>
}