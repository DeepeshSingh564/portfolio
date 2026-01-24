import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-5xl mx-auto"
            >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl"

                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-sm bg-gray-700 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 text-sm">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="text-blue-400 hover:underline
                                                        transition duration-200
                                                        hover:text-blue-600" 
                                    >
                                        GitHub
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="text-blue-400 hover:underline
                                                        transition duration-200
                                                        hover:text-blue-600"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
