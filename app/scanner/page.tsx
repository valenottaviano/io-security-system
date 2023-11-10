
'use client'

import Scanner from "../components/Scanner";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ScannerPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/scanner')
        }
    })
    return (
        <Scanner session={session} />
    )
}