import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const prisma = new PrismaClient()
    const body = await req.json();
    const token = body.token;

    if (token) {
        try {
            await prisma.$executeRaw`call addTransaction(${token as string});`
            prisma.$disconnect();
            return NextResponse.json({
                'status': 'ok',
                'msg': 'saved'
            })
        } catch {
            return NextResponse.json({
                'status': 'error',
                'msg': 'error in db'
            })
        }
    } else {
        return NextResponse.json({
            'status': 'error',
            'msg': 'no token'
        })
    }
}