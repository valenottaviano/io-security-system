import { PrismaClient } from '@prisma/client'
import UsersTable from './UsersTable'

type Transaction = {
    user_token: string,
    datetime: Date,
    status: number
}

const getData = async () => {
    const prisma = new PrismaClient()
    const data: any = await prisma.$queryRaw`select * from (
        select 
            s.user_token, 
            max(s.transac_datetime) as "datetime", 
            sum(s.transac_type) as "status"
        from spotter s
        group by s.user_token) s2 
        order by s2.status desc;`

    prisma.$disconnect()

    return data
}


export default async function Stats() {
    const data: any[] = await getData()

    return <div className='flex  flex-col w-screen items-center py-20 text-white space-y-5'>
        <div className='flex space-x-5'>
            <div className='flex flex-col items-center justify-center bg-neutral-800 p-5 rounded-md'>
                <span className='text-4xl font-bold text-emerald-400'>{data.reduce((accumulator, currentValue) => {
                    return accumulator + parseInt(currentValue.status);
                }, 0)}</span>
                <span className='font-bold text-neutral-500'>Current users</span>
            </div>
            <div className='flex flex-col items-center justify-center bg-neutral-800 p-5 rounded-md'>
                <span className='text-4xl font-bold text-emerald-400'>{data.length}</span>
                <span className='font-bold text-neutral-500'>Historical users</span>
            </div>
        </div>
        <UsersTable data={data} />
    </div>
}