import { motion } from "framer-motion";


export default function Skills() {
  return (
    <section id="skills"
      className="relative py-28 px-4 bg-transparent">
      <div className="section-glow"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto
              font-medium tracking-wide">
            Technologies I’ve worked with while building real-world applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6
                  transition-all duration-300
                  hover:border-violet-400/40
                   hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
              <h3 className="text-lg font-semibold mb-3 text-violet-300">
              Frontend</h3>
              <ul className="text-gray-200 space-y-2 text-[15px] font-medium">
  <li>🌐 HTML & CSS – semantic, responsive layouts</li>
  <li>🎨 Tailwind CSS – utility-first styling</li>
  <li>⚡ JavaScript (ES6+) – async logic, APIs</li>
</ul>

            </div>

            {/* Backend */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6
                  transition-all duration-300
                  hover:border-violet-400/40
                   hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
              <h3 className="text-lg font-semibold mb-3 text-violet-300">
Backend</h3>
             <ul className="text-gray-200 space-y-2 text-[15px] font-medium">
  <li>🧩 Django – backend logic & APIs</li>
  <li>🔄 Channels – WebSocket support</li>
  <li>🚀 Redis – caching & message broker</li>
  <li>🔐 Authentication – JWT & sessions</li>
</ul>


            </div>

            {/* Data / AI */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6
                  transition-all duration-300
                  hover:border-violet-400/40
                   hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
              <h3 className="text-lg font-semibold mb-3 text-violet-300">
Data / AI</h3>
<ul className="text-gray-200 space-y-2 text-[15px] font-medium">
  <li>🗄 SQL – queries & database </li>
  <li>📡 REST APIs – frontend ↔ backend flow</li>
  <li>🤖 AI API Integration – prompt-based features</li>
</ul>



            </div>

            {/* Tools */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6
                  transition-all duration-300
                  hover:border-violet-400/40
                  hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
             <h3 className="text-lg font-semibold mb-3 text-violet-300">
Tools & Practices</h3>
<ul className="text-gray-200 space-y-2 text-[15px] font-medium">
  <li>🐙 Git & GitHub – version control</li>
  <li>🧪 Postman – API testing</li>
  <li>🧹 Clean code practices</li>
</ul>


            </div>
          </div>


        </div>
      </motion.div>
    </section>
  );
}
