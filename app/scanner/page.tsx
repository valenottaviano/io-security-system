"use client"

import { useEffect, useState } from "react";
import QRCodeReader from "../components/QRCodeReader";
import axios from "axios";

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

    return <div className={`w-screen h-screen flex flex-col items-center justify-center
                            ${status == null ? 'bg-default-400' : ''}
                            ${status == false ? 'bg-red-400' : ''}
                            ${status == true ? 'bg-green-400' : ''}`}>
        <div className="bg-white p-5 rounded-md w-[90vw] mb-10">
            <p>Current state: {qrData ? 'Processing' : 'Ready'}</p>
            <p>Users in system: {currentNumber}</p>
        </div>
        <QRCodeReader setQrData={setQrData} />
    </div>
}