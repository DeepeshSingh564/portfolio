import { motion } from "framer-motion";


export default function Hero() {
    const smoothScrollTo = (id) => {
        const target = document.getElementById(id);
        if (!target) return;

        const start = window.scrollY;
        const end = target.offsetTop;
        const duration = 900; // <-- THIS controls speed
        let startTime = null;

        const easeInOut = (t) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const animateScroll = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = easeInOut(progress);

            window.scrollTo(0, start + (end - start) * eased);

            if (progress < 1) requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
            {/* Background */}
            <div className="hero-bg"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 max-w-5xl mx-auto px-6 md:px-0 text-left"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                   An insight into my journey as an aspiring software developer
                </h1>

                <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl">
                    Projects and experience gained during my internship and personal work.
                </p>

                <button
                    onClick={() => smoothScrollTo("about")}
                    className="group mt-10 inline-flex flex-col items-center gap-3
             text-gray-300 hover:text-white
             transition-colors duration-300"
                >
                    {/* Button */}
                    <div
                        className="relative px-7 py-3 rounded-full
               border border-violet-400/40
                shadow-md shadow-violet-500/20
                text-white font-medium
                shadow-[0_0_18px_rgba(168,85,247,0.15)]

               transition-all duration-300
               group-hover:border-violet-400
               group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]"
                    >
                        Explore more
                    </div>

                    {/* Animated arrow */}
                    <div
                        className="text-2xl
                        font-semibold
                        opacity-80
                        transition-transform duration-300
                         group-hover:translate-y-1
                     animate-bounce "
                    >
                        ↓
                    </div>
                </button>

            </motion.div>
        </section>

    );
}
