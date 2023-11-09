import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');

export async function POST(req: Request) {
    const body = await req.json();
    const token = body.token;
    if (token) {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        if (verified) {
            return NextResponse.json(true)
        } else {
            return NextResponse.json(false)
        }
    } else {
        return NextResponse.json(false)
    }
}