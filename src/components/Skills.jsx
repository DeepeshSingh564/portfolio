import { motion } from "framer-motion";


export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
     >

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "Django",
            "WebSockets",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 rounded-lg bg-gray-800 border border-gray-700
           text-gray-200 transition
           hover:border-blue-400 hover:bg-gray-700
           hover:-translate-y-1 hover:shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
     
      </div>
      </motion.div>
    </section>
  );
}
