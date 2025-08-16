"use client";
import { useEffect, useState } from "react";

export default function Toast({ message, duration = 3000 }) {
    const [visible, setVisible] = useState(true);

    // Auto-close after `duration`
    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
            {message}
        </div>
    );
}
