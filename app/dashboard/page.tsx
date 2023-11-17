import { PrismaClient } from "@prisma/client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import TimeSeriesGraph from "../components/TimeSeriesGraph";

const getData = async () => {
    const prisma = new PrismaClient()
    const data: any = await prisma.$queryRaw`SELECT
        transac_id,
        user_token,
        transac_datetime,
        transac_type,
        SUM(transac_type) OVER (ORDER BY transac_datetime) AS current_users
    FROM
        spotter 
    where transac_datetime <= now() and transac_datetime <= now() 
    limit 3000;`
    prisma.$disconnect()
    return data
}

export default async function Dashboard() {
    const data = await getData()
    return <>
        <section className="min-h-screen bg-neutral-900">
            <NavBar />
            <div>
                <TimeSeriesGraph data={data} />
                <Stats />
            </div>
        </section>
        <Footer />
    </>
}