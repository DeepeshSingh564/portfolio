export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className="space-y-4">
          <p>
            📧 <span className="text-gray-300">deepesh@example.com</span>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
