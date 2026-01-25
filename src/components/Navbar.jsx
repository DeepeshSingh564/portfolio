import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const smoothScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 900;
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


  useEffect(() => {
    const handleScroll = () => {
      // hide/show navbar
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);

      // reset active section when near top
      if (window.scrollY < 200) {
        setActiveSection(null);
        return;
      }

      // active section detection
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;



      for (let id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
                  transition-transform duration-300
                  ${show ? "translate-y-0" : "-translate-y-20"}`}
    >
      <div
        className="grid grid-cols-3 items-center
                   w-[680px] h-14 px-6
                   rounded-full
                   bg-[#0b0f1a]/70
                   backdrop-blur-md
                   border border-white/10
                   shadow-lg shadow-black/30"
      >
        {/* Left */}
        <div className="font-medium tracking-wide text-gray-200">

        </div>

        {/* Center */}
        <div className="flex justify-center gap-10 text-[15px] font-medium tracking-wide">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => smoothScrollTo(item)}
              className={`px-4 py-1.5 rounded-full transition-all duration-300
                    ${activeSection === item
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
            `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>

          ))}
        </div>

        {/* Right spacer */}
        <div />
      </div>
    </nav>
  );
}
