export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin mb-4"></div>
      <p className="text-slate-500 font-medium animate-pulse">PiTrust Oracle is securing connection...</p>
    </div>
  );
}