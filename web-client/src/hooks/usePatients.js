'use client';
import { useEffect, useState } from 'react';
import { apiFetch } from '../lib/apiClient';

export function usePatients() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchAll() {
        setLoading(true);
        setError(null);
        try {
            const data = await apiFetch('/api/patients');
            setPatients(Array.isArray(data) ? data : []);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAll();
    }, []);

    return { patients, setPatients, loading, error, refresh: fetchAll };
}
