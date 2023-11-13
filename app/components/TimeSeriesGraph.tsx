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
                label: 'data',
                data: transacData,
                borderColor: 'rgba(75, 192, 192, 1)',
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
                    unit: 'minute',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };


    return (
        <div className='w-screen p-5 pb-20 bg-white flex flex-col justify-center items-center rounded-md bg-neutral-900 dark:bg-neutral-900'>
            <div className='h-[50vh] w-[90vw] flex items-center justify-center'>
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
};

export default TimeSeriesGraph;
