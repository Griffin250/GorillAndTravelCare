import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Experiences", href: "#experiences" },
  { name: "About", href: "#about" },
  { name: "Plan Your Trip", href: "#plan" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Gorilland TravelCare Uganda
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${
                isScrolled ? "nav-link-dark" : "nav-link-light"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#plan"
            className="btn-luxury-primary text-xs py-3 px-6"
          >
            Inquire Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container-luxury py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link nav-link-dark py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#plan"
                className="btn-luxury-primary text-xs py-3 px-6 mt-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
