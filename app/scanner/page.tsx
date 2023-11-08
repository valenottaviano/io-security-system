"use client"

import { useEffect, useState } from "react";
import QRCodeReader from "../components/QRCodeReader";
import axios from "axios";
import NavBar from "../components/NavBar";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Scanner() {
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
                    try {
                        const res = await axios.post('/api/proxy', { token: token })
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

    return <div className={`w-screen h-screen pt-[15vh]
                            ${status == null ? 'bg-neutral-900' : ''}
                            ${status == false ? 'bg-red-400' : ''}
                            ${status == true ? 'bg-green-400' : ''}`}>
        <div className="absolute top-0 left-0 z-20"><NavBar /></div>
        <div className="bg-neutral-800 border-[1px] border-neutral-700 text-white p-5 rounded-md w-[90vw] md:w-[30vw] mb-10 m-auto">
            <p>Current state: {qrData ? 'Processing' : 'Ready'}</p>
            <p>Users in system: {currentNumber}</p>
        </div>
        <div className="w-screen md:w-[30vw] flex items-center justify-center m-auto">
            <QRCodeReader setQrData={setQrData} />
        </div>
    </div>
}