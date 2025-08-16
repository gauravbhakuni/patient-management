'use client';
import React, { useState } from 'react';
import { usePatients } from '../hooks/usePatients';
import PatientTable from '../components/PatientTable';
import PatientForm from '../components/PatientForm';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';

export default function DashboardPage() {
    const { patients, loading, error, refresh, setPatients } = usePatients();
    const [createOpen, setCreateOpen] = useState(false);
    const toast = useToast();

    // Create or update patient
    function handleSuccess(p) {
        setPatients(prev => {
            const exists = prev.some(x => x.id === p.id);
            if (exists) return prev.map(x => x.id === p.id ? p : x);
            return [p, ...prev];
        });
        toast.show('Saved successfully', 'success');
        setCreateOpen(false);
    }

    // Update directly from table
    async function handleUpdate(id, updatedFields) {
        try {
            const res = await fetch(`/api/patients/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            if (!res.ok) throw new Error('Failed to update patient');
            const updatedPatient = await res.json();
            setPatients(prev => prev.map(p => p.id === id ? updatedPatient : p));
            toast.show('Edited', 'success');
        } catch (err) {
            toast.show(err.message, 'error');
        }
    }

    // Delete patient
    async function handleDelete(id) {
        try {
            const res = await fetch(`/api/patients/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            setPatients(prev => prev.filter(p => p.id !== id));
            toast.show('Deleted', 'success');
        } catch (err) {
            toast.show(err.message, 'error');
        }
    }

    return (
        <div className="p-6 max-w-7xl mx-auto font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                    Patient Management
                </h1>
                <div className="flex gap-3">
                    <button
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition-all"
                        onClick={() => setCreateOpen(true)}
                    >
                        + New Patient
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg border border-gray-300 transition-all"
                        onClick={refresh}
                    >
                        Refresh
                    </button>
                </div>
            </div>

            {/* Create Form */}
            {createOpen && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <PatientForm
                        initial={{}}
                        onSuccess={handleSuccess}
                        onCancel={() => setCreateOpen(false)}
                    />
                </div>
            )}

            {/* Table / States */}
            {loading && (
                <div className="p-10 text-center text-gray-500 text-lg">Loading patients...</div>
            )}
            {error && (
                <div className="p-10 text-center text-red-500 font-medium">Failed to load patients</div>
            )}
            {!loading && !error && patients.length > 0 && (
                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
                    <PatientTable
                        patients={patients}
                        onUpdate={handleUpdate}
                        onDeleted={handleDelete}
                    />
                </div>
            )}
            {!loading && !error && patients.length === 0 && (
                <div className="p-10 text-center text-gray-500">No patients found. Add one above.</div>
            )}

            {/* Toast */}
            <Toast message={toast.message} type={toast.type} />
        </div>
    );
}
