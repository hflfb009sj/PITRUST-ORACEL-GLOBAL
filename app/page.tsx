"use client";
import React from 'react';

export default function Home() {
  const handleConnect = () => {
    if (typeof window !== 'undefined' && (window as any).Pi) {
      alert("Connecting to Pi Wallet...");
    } else {
      alert("Please open this link inside Pi Browser.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full text-center space-y-8 border border-purple-900/50 p-10 rounded-3xl bg-gradient-to-b from-zinc-900 to-black shadow-2xl shadow-purple-500/10">
        <h1 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
          PITRUST ORACLE
        </h1>
        <div className="space-y-2">
          <p className="text-zinc-400 text-sm tracking-widest uppercase">Global Validation System</p>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <button 
          onClick={handleConnect}
          className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-600/20"
        >
          Initialize Vault
        </button>
        <p className="text-xs text-zinc-500 italic">Secure Node Connection: Active</p>
      </div>
    </main>
  );
}
