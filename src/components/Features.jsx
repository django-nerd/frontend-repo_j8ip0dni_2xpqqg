import { Rocket, Shield, Wand2, Zap } from 'lucide-react';

const features = [
  {
    title: 'Fast by default',
    description: 'Vite + React + Tailwind for instant feedback and rapid iteration.',
    icon: Zap,
  },
  {
    title: 'Polished components',
    description: 'Thoughtfully designed, accessible building blocks for modern UIs.',
    icon: Wand2,
  },
  {
    title: 'Production ready',
    description: 'Clean structure and best practices that scale with your project.',
    icon: Shield,
  },
  {
    title: 'Launch with confidence',
    description: 'Everything you need to ship quickly and look great doing it.',
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Features</h2>
          <p className="mt-3 text-slate-600">A curated set of essentials to help you move faster and ship better.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
