export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200/70 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
