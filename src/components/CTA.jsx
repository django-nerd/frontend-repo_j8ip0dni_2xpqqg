export default function CTA() {
  return (
    <section id="get-started" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-900 p-8 sm:p-10 text-center shadow-xl">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to build something great?
        </h3>
        <p className="mt-3 text-slate-300">
          Kickstart your next idea with a clean, modern foundation that just works.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
          >
            Explore Docs
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
