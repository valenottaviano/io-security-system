import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import { cookies } from "next/headers";

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

export default async function Contact() {
    const session = await verifyToken()
    return <section className="min-h-screen w-screen bg-neutral-900 flex flex-col items-center justify-between">
        <NavBar />
        <LoginForm isLogged={session} />
        <Footer />
    </section>
}