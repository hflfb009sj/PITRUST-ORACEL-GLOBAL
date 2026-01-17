"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleConnect = () => {
    alert("جارٍ الاتصال بمحفظة Pi...");
    // هنا سيتم تفعيل Pi SDK لاحقاً
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24 text-center">
      <h1 className="text-5xl font-bold mb-6 text-purple-500">PITRUST ORACLE GLOBAL</h1>
      <p className="mb-10 text-xl text-gray-300">النظام العالمي الموثوق لشبكة Pi</p>
      <Button onClick={handleConnect} className="text-2xl px-10 py-6 rounded-full shadow-lg shadow-purple-500/50">
        Initialize Vault
      </Button>
    </main>
  );
}
