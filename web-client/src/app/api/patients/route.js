import { NextResponse } from 'next/server';

// const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
// if (!BACKEND_URL) {
//     throw new Error('NEXT_PUBLIC_BACKEND_URL is not set in environment');
// }

export async function GET(req) {

    const backendRes = await fetch(`http://localhost:4000/patients`, {
        method: 'GET',
    });

    const body = await backendRes.text();
    return new NextResponse(body, {
        status: backendRes.status,
        headers: {
            'Content-Type':
                backendRes.headers.get('content-type') || 'application/json',
        },
    });
}

export async function POST(req) {
    const data = await req.text();

    const backendRes = await fetch(`http://localhost:4000/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
    });

    const body = await backendRes.text();
    return new NextResponse(body, {
        status: backendRes.status,
        headers: {
            'Content-Type':
                backendRes.headers.get('content-type') || 'application/json',
        },
    });
}
