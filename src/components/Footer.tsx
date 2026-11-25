
const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Coverage', href: '#coverage' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Safety', href: '#safety' },
    { label: 'Become a Mechanic', href: '#mechanic' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { label: 'Twitter', href: '#', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
  )},
  { label: 'LinkedIn', href: '#', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  )},
  { label: 'Instagram', href: '#', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container-custom relative py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="xl:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6" aria-label="TORQ Home">
              <img src="/logo.png" alt="" className="h-7 lg:h-9 object-contain" />
              <span className="font-heading text-lg lg:text-xl font-bold tracking-tight">TORQ</span>
            </a>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed text-sm">
              Technology-enabled roadside assistance connecting vehicle owners with verified nearby mechanics. Starting in Azamgarh, Uttar Pradesh.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <span className="w-5 h-5">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-brand-red transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-brand-red transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support links">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-brand-red transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} TORQ. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
              Built with transparency. No invented numbers, fake reviews, or misleading claims.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}