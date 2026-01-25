import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>
        <br />
        <h2 className="text-2xl font-semibold mb-6"> Deepesh Singh</h2>

        <p className="text-gray-400 leading-relaxed mb-5 text-lg">
         I’m a software developer focused on building real-world web applications 
         through hands-on project work and internship experience. I enjoy working
          across the stack, from designing clean frontends to building scalable backend systems.
        </p>

        <p className="text-gray-400 leading-relaxed mb-5 text-lg">
        I’ve built full-stack applications using Django, REST APIs, WebSockets, and modern frontend 
        tools, with a strong emphasis on performance, clean architecture, and practical problem-solving.
         My projects include AI-assisted systems and real-time dashboards designed to handle live data efficiently.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg">
         Beyond coding, I’m continuously improving my fundamentals in data structures, system design, and backend development, with the 
         goal of becoming a developer who not only writes code, but understands how real systems are built,
          optimized, and maintained.
        </p>
        <div className="mt-20 h-px w-full bg-white/10 " />

      </motion.div>
    </section>
  );
}
