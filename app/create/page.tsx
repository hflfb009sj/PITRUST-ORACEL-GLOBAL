"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CreateEscrow() {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // نظام نجاح داخلي بدلاً من التوست الخارجي

    const handleCreate = () => {
        if (!amount || parseFloat(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        // محاكاة عملية القفل بنجاح
        setIsSuccess(true);

        // التوجه للوحة التحكم بعد رؤية رسالة النجاح
        setTimeout(() => {
            router.push('/dashboard');
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center font-sans">
            <div className="w-full max-w-md">

                {/* زر العودة */}
                <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-purple-700 mb-8 font-bold text-sm transition-all group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1" /> Back to Home
                </Link>

                <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 relative overflow-hidden">

                    {/* حالة النجاح - تظهر فوق النموذج */}
                    {isSuccess && (
                        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-10 text-center animate-fade-in">
                            <div className="bg-green-100 p-5 rounded-full mb-6">
                                <CheckCircle2 className="text-green-600 w-16 h-16 animate-bounce" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-2">Pi Locked!</h2>
                            <p className="text-slate-500 text-sm">Your transaction has been secured by the Oracle. Redirecting...</p>
                        </div>
                    )}

                    {/* أيقونة القفل */}
                    <div className="bg-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                        <Lock className="text-white" size={28} />
                    </div>

                    <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Initialize Vault</h1>
                    <p className="text-slate-500 text-sm mb-10 leading-relaxed">The Pi you lock will be held until the service is confirmed.</p>

                    <div className="space-y-6">
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] focus:border-purple-500 outline-none text-2xl font-black transition-all"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-300">PI</span>
                        </div>

                        <button
                            onClick={handleCreate}
                            className="w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-bold text-lg shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                            <ShieldCheck size={22} className="text-purple-500" /> Confirm & Lock
                        </button>

                        <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                            Fee: 1% will be sent to Oracle Treasury
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}