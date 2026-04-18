import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-4 ">
                    Projects
                </h2>

                <p className="text-gray-300 text-center mb-16 max-w-xl mx-auto
                       font-medium tracking-wide">
                    Selected projects that demonstrate practical problem solving
                    and hands-on experience in full-stack development.

                </p>

                <div className="space-y-10">
                    {/* Project 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8
                          transition-all duration-300
                          hover:border-violet-400/40
                          hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]">
                        <h3 className="text-xl font-semibold mb-3">
                            AI Interview Platform
                        </h3>

                        <p className="text-gray-300 mb-5">
                            AI-driven platform that generates interview questions,
                            evaluates answers, and provides structured feedback
                            in real time.
                        </p>

                        <ul className="text-gray-200 space-y-2 text-[15px] font-medium mb-6">
                            <li>🤖 Real-time interview Q&A flow</li>
                            <li>📊 AI-based answer evaluation & scoring</li>
                            <li>🔄 WebSocket-powered live interactions</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["React", "Django", "REST APIs", "WebSockets", "AI API"].map(t => (
                                <span key={t}
                                    className="px-3 py-1 rounded-full text-sm
                             bg-white/10 text-gray-200">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm font-medium">
                            <a href="https://github.com/DeepeshSingh564/interview-coach-ai" className="text-violet-300 hover:underline">
                                GitHub
                            </a>
                            <a href="https://intelliview-r9bp.onrender.com/" className="text-violet-300 hover:underline">
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8
                          transition-all duration-300
                          hover:border-violet-400/40
                          hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]">
                        <h3 className="text-xl font-semibold mb-3">
                            Realtime Activity Dashboard
                        </h3>

                        <p className="text-gray-300 mb-5">
                            A real-time monitoring dashboard that streams live activity
                            updates and system events efficiently.
                        </p>

                        <ul className="text-gray-200 space-y-2 text-[15px] font-medium mb-6">
                            <li>📡 Live updates using WebSockets</li>
                            <li>🧩 Channel-based real-time messaging</li>
                            <li>⚙️ Backend event processing</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Django", "Channels", "Redis", "WebSockets", "HTML/CSS"].map(t => (
                                <span key={t}
                                    className="px-3 py-1 rounded-full text-sm
                             bg-white/10 text-gray-200">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm font-medium">
                            <a href="https://github.com/DeepeshSingh564/WorkStream-Realtime-Activity-Dashboard1" className="text-violet-300 hover:underline">
                                GitHub
                            </a>
                            <a href="https://workstream-realtime-activity-dashboard1.onrender.com" className="text-violet-300 hover:underline">
                                Live Demo
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-20 h-px w-full bg-white/10 " />
            </motion.div>
        </section>
    );
}
