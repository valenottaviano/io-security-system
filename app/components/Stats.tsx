function calculateHoursDifference(startDate: Date, endDate: Date): number {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    return hoursDifference;
}


export default async function Stats(props: any) {
    let porcentaje = props.users.reduce((accumulator: any, currentValue: any) => {
        return accumulator + parseInt(currentValue.status);
    }, 0) / 474

    let lastTransac = props.data[0].transac_datetime
    let firstTransac = props.data[props.data.length - 1].transac_datetime
    let carsPerHour = props.data.filter((d: any) => d.transac_type == 1).length / calculateHoursDifference(firstTransac, lastTransac)

    return <div className='flex  flex-col items-center py-20 text-white space-y-5'>
        <div className='flex space-x-5'>
            <div className='flex flex-col items-center justify-center bg-neutral-800 p-5 rounded-md'>
                <span className='text-4xl font-bold text-emerald-400'>{props.users ? props.users.reduce((accumulator: any, currentValue: any) => {
                    return accumulator + parseInt(currentValue.status);
                }, 0) : "loading"}/474</span>
                <span className='font-bold text-neutral-500'>Current users</span>
                <div className="h-[2rem] w-[10rem] mt-5 bg-neutral-900 rounded-md">
                    <div className={`h-full bg-emerald-400 rounded-md`} style={{ width: Math.round(porcentaje * 100) + "%" }}></div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center bg-neutral-800 p-5 rounded-md'>
                <span className='text-4xl font-bold text-emerald-400'>{Math.round(carsPerHour * 100) / 100}</span>
                <span className='font-bold text-neutral-500'>cars/hour</span>
            </div>
        </div>
    </div>
}