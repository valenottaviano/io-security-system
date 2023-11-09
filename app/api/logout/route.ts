import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'
// const { parseCookies, setCookie, destroyCookie } = require('nookies');

export async function POST(req: Request) {
    cookies().delete('token')

    return NextResponse.json({
        'msg': 'Logged out.'
    })
}