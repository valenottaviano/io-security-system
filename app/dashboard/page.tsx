import { PrismaClient } from "@prisma/client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import TimeSeriesGraph from "../components/TimeSeriesGraph";

const getData = async () => {
    const prisma = new PrismaClient()
    const data: any = await prisma.$queryRaw`SELECT * FROM users_in_spotter;`
    prisma.$disconnect()
    return data
}

export default async function Dashboard() {
    const data = await getData()
    return <>
        <section className="min-h-screen bg-neutral-900">
            <NavBar />
            <div>
                <Stats />
                <TimeSeriesGraph data={data} />
            </div>
        </section>
        <Footer />
    </>
}