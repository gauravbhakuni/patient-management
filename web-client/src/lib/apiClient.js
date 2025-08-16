// lib/apiClient.js
async function parseJSON(response) {
    const text = await response.text();
    try {
        return text ? JSON.parse(text) : null;
    } catch {
        return text;
    }
}

export async function apiFetch(input, init) {
    const res = await fetch(input, {
        headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
        credentials: 'include',
        ...init,
    });

    if (!res.ok) {
        const body = await parseJSON(res);
        const message = body?.message || res.statusText;
        throw { status: res.status, message, details: body };
    }
    return await parseJSON(res);
}
