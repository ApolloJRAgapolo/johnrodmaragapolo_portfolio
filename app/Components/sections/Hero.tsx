export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-lg text-blue-600 font-medium">
          BS Information Systems Graduate
        </p>

        <h1 className="text-6xl font-bold tracking-tight text-gray-900">
          John Rodmar E.
          <br />
          Agapolo
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Building digital solutions that bridge technology,
          business, and innovation.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-full bg-black px-8 py-3 text-white transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-3 transition hover:bg-gray-100">
            Download Resume
          </button>

        </div>

      </div>
    </section>
  );
}