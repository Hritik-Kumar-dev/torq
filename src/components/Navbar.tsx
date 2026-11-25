import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#why-torq', label: 'Why TORQ' },
  { href: '#about', label: 'About Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            className="flex items-center gap-2 text-brand-charcoal hover:opacity-80 transition-opacity"
            aria-label="TORQ Home"
          >
            <svg
              className="w-8 h-8 text-brand-red"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
              <path
                d="M24 12v24M12 24h24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">
              TORQ
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal/70 hover:text-brand-charcoal transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#assistance"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
            >
              Get Assistance
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden overflow-hidden bg-white border-t border-neutral-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="container-custom py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-2 text-base font-medium text-brand-charcoal/70 hover:text-brand-red transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#assistance"
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Assistance
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}