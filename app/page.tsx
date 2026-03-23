'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<{ greeting: string } | null>(null);

  useEffect(() => {
    fetch('/api/shell')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="p-10 border border-slate-700 rounded-xl bg-slate-800 shadow-2xl">
        <h1 className="text-gray-400 text-xs uppercase mb-4 tracking-widest">Script Response:</h1>
        <p className="text-4xl font-bold text-green-400">
          {data ? data.greeting : 'Loading...'}
        </p>
      </div>
    </main>
  );
}
