import React from 'react';

const UsersTable = async ({ data }: any) => {
    return (
        <table className='my-3 text-sm  md:text-md bg-neutral-800 rounded-md border-separate border-spacing-4 w-[90vw] md:w-[30vw] text-center'>
            <thead >
                <tr>
                    <th className='text-white'>User Token</th>
                    <th className='hidden text-white md:block'>Datetime</th>
                    {/* <th className='text-white'>Status</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map((status: any, index: any) => {
                    const dt = status.datetime
                    dt.setHours(dt.getHours() - 3)
                    return <tr key={index} className={`${parseInt(status.status) == 1 ? 'text-emerald-400' : "text-white/50"}`}>
                        <td>{status.user_token}</td>
                        <td className='hidden md:block'>{dt.toISOString().replace('T', ' ').replace('Z', '')}</td>
                        {/* <td>{parseInt(status.status)}</td> */}
                    </tr>
                })}
            </tbody>
        </table>
    );
};

export default UsersTable;
