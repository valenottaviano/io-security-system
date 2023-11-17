'use client'

import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
)

const TimeSeriesGraph: any = async (props: any) => {

    let transacData = props.data.map((entry: any) => ({
        x: new Date(entry.transac_datetime),
        y: parseInt(entry.current_users),
    }))

    const chartData = {
        datasets: [
            {
                label: 'users',
                data: transacData,
                borderColor: 'rgb(52, 211, 153)',
                borderWidth: 1,
                fill: false,
            },

        ],
    };


    const options: any = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };


    return (
        <div className='w-screen p-5 pb-20 bg-white flex flex-col justify-center items-center rounded-md bg-neutral-900 dark:bg-neutral-900'>
            <div className='h-[50vh] w-[90vw] mt-10 flex justify-center flex-col'>
                <h2 className='text-3xl text-emerald-400 font-bold'>Current amount of users in the parking lot.</h2>
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
};

export default TimeSeriesGraph;
