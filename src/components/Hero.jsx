export default function Hero() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-400">Deepesh</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Software Developer focused on building real-world web applications
          using modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-2 border border-gray-600 rounded hover:border-blue-400"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
