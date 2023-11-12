
import React from 'react';



const UsersTable = ({ data }: any) => {
    return (
        <table className='bg-neutral-800 rounded-md border-separate border-spacing-4 w-[90vw] md:w-[70vw] text-center'>
            <thead>
                <tr>
                    <th>User Token</th>
                    <th>Datetime</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((status: any, index: any) => {
                    const dt = status.datetime
                    dt.setHours(dt.getHours() - 3)
                    return <tr key={index} className={`${parseInt(status.status) == 1 ? 'text-emerald-400' : "text-white/50"}`}>
                        <td>{status.user_token}</td>
                        <td>{dt.toISOString().replace('T', ' ').replace('Z', '')}</td>
                        <td>{parseInt(status.status)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
};

export default UsersTable;
