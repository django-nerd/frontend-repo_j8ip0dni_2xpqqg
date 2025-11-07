import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-20 pb-24 sm:pt-28 sm:pb-32 grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              New: Beautiful starter UI with Tailwind
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Build delightful UIs, faster.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A polished starting point with modern components, sensible defaults, and thoughtful details. Perfect for landing pages and product sites.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-xl bg-white/90 p-6">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100" />
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
