import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 h-16 lg:h-20 pt-2 lg:pt-0">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-full">
          <a
            href="#"
            className="flex items-center gap-3 text-brand-charcoal hover:opacity-80 transition-opacity"
            aria-label="TORQ Home"
          >
            <span className="font-heading text-xl lg:text-2xl font-bold tracking-tight text-brand-charcoal">TORQ</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal/70 hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
            >
              Get Started
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

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden overflow-hidden bg-white border-t border-neutral-200 animate-slide-up">
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
                href="#cta"
                className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}