import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0a0a0a] px-6 text-center">
      <div>
        <p className="font-mono text-sm text-[#b8f36b]">404 / NOT FOUND</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">Lost your way?</h1>
        <p className="mt-4 text-zinc-400">That page isn’t here.</p>
        <Link className="focus-ring mt-8 inline-block border border-[#b8f36b] px-5 py-3 text-sm text-[#b8f36b]" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
