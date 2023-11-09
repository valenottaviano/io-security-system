import axios from "axios";
import Scanner from "../components/Scanner";
import { cookies } from 'next/headers'

const verifyToken = async () => {
    if (cookies().get('token')) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-token`, {
            method: 'POST',
            body: JSON.stringify({
                token: cookies().get('token')?.value
            }),
            cache: "no-store"
        })
        const r_json = res.json()
        return r_json;
    } else {
        return false
    }
}

export default async function ScannerPage() {
    const session = await verifyToken()

    return (
        <>
            <Scanner isLogged={session} />
        </>
    )
}