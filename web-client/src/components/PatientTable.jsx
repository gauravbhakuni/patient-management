"use client";
import { useState } from "react";

export default function PatientTable({ patients, onEdit, onDeleted }) {
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    function handleEditClick(patient) {
        setEditId(patient.id);
        setEditData(patient);
    }

    async function handleSave() {
        const res = await fetch(`/api/patients/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editData),
        });

        const data = await res.json(); // read backend response

        if (res.ok) {
            onEdit();
            setEditId(null);
        } else {
            alert(data.message || "Failed to update patient");
            console.error("Error:", data);
        }
    }

    return (
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Date of Birth</th>
                <th className="p-2 border">Actions</th>
            </tr>
            </thead>
            <tbody>
            {patients.map((p) => (
                <tr key={p.id} className="border-t">
                    {editId === p.id ? (
                        <>
                            <td className="p-2 border">
                                <input
                                    value={editData.name}
                                    onChange={(e) =>
                                        setEditData({ ...editData, name: e.target.value })
                                    }
                                    className="border p-1 w-full"
                                />
                            </td>
                            <td className="p-2 border">
                                <input
                                    value={editData.email}
                                    onChange={(e) =>
                                        setEditData({ ...editData, email: e.target.value })
                                    }
                                    className="border p-1 w-full"
                                />
                            </td>
                            <td className="p-2 border">
                                <input
                                    value={editData.address}
                                    onChange={(e) =>
                                        setEditData({ ...editData, address: e.target.value })
                                    }
                                    className="border p-1 w-full"
                                />
                            </td>
                            <td className="p-2 border">
                                <input
                                    type="date"
                                    value={editData.dateOfBirth}
                                    onChange={(e) =>
                                        setEditData({ ...editData, dateOfBirth: e.target.value })
                                    }
                                    className="border p-1 w-full"
                                />
                            </td>
                            <td className="p-2 border">
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-2 py-1 mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditId(null)}
                                    className="bg-gray-500 text-white px-2 py-1"
                                >
                                    Cancel
                                </button>
                            </td>
                        </>
                    ) : (
                        <>
                            <td className="p-2 border">{p.name}</td>
                            <td className="p-2 border">{p.email}</td>
                            <td className="p-2 border">{p.address}</td>
                            <td className="p-2 border">{p.dateOfBirth}</td>
                            <td className="p-2 border">
                                <button
                                    onClick={() => handleEditClick(p)}
                                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDeleted(p.id)}
                                    className="bg-red-500 text-white px-2 py-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
