import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-16 pb-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Connect
        </h2>

        <p className="text-gray-300 mb-12 max-w-xl mx-auto
                       font-medium tracking-wide">
          Open to internships and entry-level opportunities.
          Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:deepeshsingh564@gmail.com"
            className="px-6 py-3 rounded-full
                       border border-white/15
                       text-gray-200
                       transition-all duration-300
                       hover:border-violet-400/50
                       hover:text-white"
          >
            📧 Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DeepeshSingh564"
            target="_blank"
            className="px-6 py-3 rounded-full
                       border border-white/15
                       text-gray-200
                       transition-all duration-300
                       hover:border-violet-400/50
                       hover:text-white"
          >
            🐙 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deepesh-singh-689289338"
            target="_blank"
            className="px-6 py-3 rounded-full
                       border border-white/15
                       text-gray-200
                       transition-all duration-300
                       hover:border-violet-400/50
                       hover:text-white"
          >
            💼 LinkedIn
          </a>

          {/* Resume */}
          <a
            href="/resumee.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full
                       border border-violet-400/40
                       text-white
                       font-medium
                       shadow-[0_0_20px_rgba(168,85,247,0.2)]
                       transition-all duration-300
                       hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]"
          >
            📄 Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
