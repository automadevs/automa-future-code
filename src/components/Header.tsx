import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          Automa
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("criadores")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Criadores
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("empresas")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Empresas
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contato")}
              className="btn-primary"
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col gap-4 px-6 py-6">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("criadores")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Criadores
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("empresas")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Empresas
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="btn-primary w-full"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
