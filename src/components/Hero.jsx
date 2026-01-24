import {motion} from "framer-motion";
export default function Hero() {
  return (
    <section className="py-24 px-4">
        <motion.div
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
        >
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
            className="px-6 py-2 bg-blue-500 rounded 
                       transition duration-200
                       hover:bg-blue-600
                       hover:shadow-lg
                       "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-2 border border-gray-600 rounded
                        transition duration-200
                        hover:bg-gray-700
                        hover:border-blue-400"
          >
            Resume
          </a>
        </div>
        </motion.div>
    </section>
  );
}
