"use client";
import { useState } from "react";

export default function PatientForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        dateOfBirth: "",
        registeredDate: "",
    });
    const [loading, setLoading] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/patients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                // Read the backend's error message
                const errorData = await res.json();
                console.log(errorData.message);
                throw new Error(errorData.message || 'Error creating patient');
            }

            setToastMsg("Patient created successfully!");
            setForm({
                name: "",
                email: "",
                address: "",
                dateOfBirth: "",
                registeredDate: "",
            });
        } catch (err) {
            setToastMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create New Patient</h2>

            {toastMsg && (
                <div
                    className={`mb-4 px-4 py-3 rounded-lg text-sm font-medium ${
                        toastMsg.includes("successfully")
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                >
                    {toastMsg}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                    </label>
                    <textarea
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="123 Street, City, Country"
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        value={form.dateOfBirth}
                        onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Registered Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Registered Date
                    </label>
                    <input
                        type="date"
                        value={form.registeredDate}
                        onChange={(e) => setForm({ ...form, registeredDate: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                    )}
                    {loading ? "Creating..." : "Create Patient"}
                </button>
            </form>
        </div>
    );
}
