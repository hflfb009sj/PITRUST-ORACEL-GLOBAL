"use client";

import React, { useState } from 'react';
import { ShieldAlert, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

export default function DisputePage() {
    const { toast } = useToast();
    const [txId, setTxId] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = () => {
        if (!txId || !reason) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill all fields before submitting.",
            });
            return;
        }

        toast({
            variant: "destructive", // لون أحمر للتنبيه الأمني
            title: "Dispute Filed",
            description: "Oracle is now reviewing Transaction: " + txId,
        });

        // حفظ البيانات في الذاكرة (كما فعلنا سابقاً)
        const existing = JSON.parse(localStorage.getItem('pi_disputes') || '[]');
        existing.push({ id: txId, reason, date: new Date().toLocaleString() });
        localStorage.setItem('pi_disputes', JSON.stringify(existing));
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden">
                <div className="bg-red-600 p-10 text-white text-center">
                    <ShieldAlert size={48} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-black uppercase">Security Center</h2>
                </div>
                <div className="p-10 space-y-4">
                    <input type="text" placeholder="Transaction ID" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" value={txId} onChange={(e) => setTxId(e.target.value)} />
                    <textarea placeholder="Reason..." className="w-full p-4 bg-slate-50 border rounded-2xl outline-none h-32" value={reason} onChange={(e) => setReason(e.target.value)} />
                    <button onClick={handleSubmit} className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2">
                        <Send size={18} /> Submit to Oracle
                    </button>
                    <Link href="/dashboard" className="block text-center text-slate-400 font-bold text-xs pt-2">Cancel</Link>
                </div>
            </div>
        </div>
    );
}