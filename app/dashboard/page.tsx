import { PrismaClient } from "@prisma/client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import TimeSeriesGraph from "../components/TimeSeriesGraph";
import UsersTable from "../components/UsersTable";

export const dynamic = "force-dynamic";

const getData = async () => {
    const prisma = new PrismaClient()
    const data: any = await prisma.$queryRaw`select * from (
        SELECT
        transac_id,
        user_token,
        transac_datetime,
        transac_type,
        SUM(transac_type) OVER (ORDER BY transac_datetime)  AS current_users
        FROM
        spotter 
        ) as s2
        where transac_datetime <= now() 
            and transac_datetime >= CURRENT_DATE - INTERVAL '3 days'
        order by transac_datetime desc;`

    const users: any = await prisma.$queryRaw`select * from (
        select 
            s.user_token, 
            max(s.transac_datetime) as "datetime", 
            cast(sum(s.transac_type) as integer) as "status"
        from spotter s
        where s.transac_datetime <= now()
        group by s.user_token) s2 
        order by s2.status desc;`

    prisma.$disconnect()
    return { data, users }
}

export default async function Dashboard() {
    const { data, users } = await getData()

    return <>
        <section className="min-h-screen bg-neutral-900">
            <NavBar />
            <div className="flex flex-col md:flex-row justify-around">
                <div className="flex flex-col items-center">
                    <TimeSeriesGraph data={data} />
                    <Stats
                        users={users}
                        data={data}
                    />
                </div>
                <div className="">
                    <UsersTable data={users.filter((user: any) => parseInt(user.status) == 1)} />
                </div>
            </div>
        </section>
        <Footer />
    </>
}