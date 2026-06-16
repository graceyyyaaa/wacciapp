import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-6xl font-bold">WACCI Aptitude Test Platform</h1>

          <p className="mt-6 text-xl max-w-2xl">
            Complete your aptitude assessment online and securely.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/register"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
            >
              Start Assessment
            </Link>

            <Link
              href="/login"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Candidate Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
