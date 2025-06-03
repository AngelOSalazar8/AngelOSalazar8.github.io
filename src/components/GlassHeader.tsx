import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isScrolling, setIsScrolling] = useState(true);
  useEffect(() => {
  let timeout: NodeJS.Timeout;
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    // Mostrar header al detectar scroll
    setIsScrolling(true);
    clearTimeout(timeout);

    // Ocultar después de 2 segundos sin scroll
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 3000);

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header
        className={`fixed z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60 transition-transform duration-500`}>
      <div className="container max-w-4xl mx-auto py-2 px-4 md:py-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* 👨‍💻 {personalInfo.name} */}
          👨‍💻 Inicio
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["experience", "skills", "projects", "awards", "education"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item === "experience" && "💼 Experiencia"}
                {item === "skills" && "🛠️ Habilidades"}
                {item === "projects" && "🚀 Proyectos"}
                {item === "awards" && "🏆 Logros"}
                {item === "education" && "🎓 Educación"}
                {/* {item.charAt(0).toUpperCase() + item.slice(1)} */}
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-2 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["experience", "skills", "projects", "awards", "education"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                    onClick={() => {
                      setTimeout(() => {
                        toggleMenu();
                      }, 1000); // espera 300ms antes de cerrar el menú
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item === "experience" && "💼 Experiencia"}
                    {item === "skills" && "🛠️ Habilidades"}
                    {item === "projects" && "🚀 Proyectos"}
                    {item === "awards" && "🏆 Logros"}
                    {item === "education" && "🎓 Educación"}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

