export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
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
              className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-gray-300
                         hover:border-blue-400 hover:bg-gray-700 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
