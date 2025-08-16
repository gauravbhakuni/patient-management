'use client';
import { useState } from 'react';

export function useToast() {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState('info');

    function show(msg, t = 'info', ms = 4000) {
        setMessage(msg);
        setType(t);
        setTimeout(() => setMessage(null), ms);
    }
    return { message, type, show };
}
