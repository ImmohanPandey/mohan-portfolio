export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-xl font-bold">
              Mohan Pandey
            </h3>

            <p className="text-zinc-500 mt-2">
              Full Stack & Mobile Developer
            </p>
          </div>

          <div className="text-zinc-500 text-sm text-center md:text-right">
            <p>
              MERN • Flutter • FastAPI • PostgreSQL
            </p>

            <p className="mt-2">
              © 2026 Mohan Pandey. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}