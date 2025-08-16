import { NextResponse } from 'next/server';

// const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
// if (!BACKEND_URL) {
//     throw new Error('NEXT_PUBLIC_BACKEND_URL is not set in environment');
// }

export async function GET(req, { params }) {
    const { id } = params;
    const backendRes = await fetch(`http://localhost:4000/patients/${id}`, {
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

export async function PUT(req, context) {
    const { id } = await context.params; // await params
    const data = await req.text();

    const backendRes = await fetch(`http://localhost:4000/patients/${id}`, {
        method: 'PUT',
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


export async function DELETE(req, { params }) {
    const backendRes = await fetch(`http://localhost:4000/patients/${params.id}`, {
        method: 'DELETE'
    });

    if (backendRes.status === 204) {
        // Return a Response with null body
        return new Response(null, { status: 204 });
    }

    const data = await backendRes.json();
    return new Response(JSON.stringify(data), {
        status: backendRes.status,
        headers: { 'Content-Type': 'application/json' }
    });
}
