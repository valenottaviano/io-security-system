import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'
// const { parseCookies, setCookie, destroyCookie } = require('nookies');

export async function POST(req: Request) {
    const body = await req.json();
    const user = body.user;
    const password = body.password;

    if (user && password) {
        if (user == process.env.APP_USERNAME && password == process.env.APP_PASSWORD) {
            const token = jwt.sign({ user: user }, process.env.JWT_SECRET)

            cookies().set('token', token)

            return NextResponse.json({
                'logged': true,
                'msg': 'Logged',
                'token': jwt.sign({ user: user }, process.env.JWT_SECRET)
            })
        } else {
            return NextResponse.json({
                'logged': false,
                'msg': 'Invalid credentials'
            })
        }
    } else {
        return NextResponse.json({
            'logged': false,
            'msg': 'Incomplete credentials'
        })
    }


}