import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Why TORQ', href: '#why-torq' },
    { label: 'About Us', href: '#about' },
  ],
  services: [
    { label: 'Flat Tyre Assistance', href: '#services' },
    { label: 'Battery Jumpstart', href: '#services' },
    { label: 'Engine Troubleshooting', href: '#services' },
    { label: 'Emergency Fuel', href: '#services' },
    { label: 'Vehicle Towing', href: '#services' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety Guidelines', href: '#' },
    { label: 'Become a Mechanic', href: '#' },
    { label: 'Business Partnerships', href: '#' },
    { label: 'Contact Us', href: '#assistance' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const socialLinks = [
  { icon: socialIcons.Facebook, label: 'Facebook', href: '#' },
  { icon: socialIcons.Twitter, label: 'Twitter', href: '#' },
  { icon: socialIcons.Instagram, label: 'Instagram', href: '#' },
  { icon: socialIcons.Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-brand-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container-custom relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="flex items-center gap-2 mb-6" aria-label="TORQ Home">
              <svg className="w-10 h-10 text-brand-red" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
                <path d="M24 12v24M12 24h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="font-display text-2xl font-bold tracking-tight">TORQ</span>
            </a>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Technology-enabled roadside assistance connecting vehicle owners with verified nearby mechanics. Starting in Azamgarh, Uttar Pradesh.
            </p>
            <div className="flex flex-wrap gap-3">
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
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Platform links"
          >
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            aria-label="Services links"
          >
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Support links"
          >
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-white/40 text-sm mb-6">
                <em>Note: Contact details are placeholders and need to be updated with real business information.</em>
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-brand-red" aria-hidden="true" />
                  <span>Azamgarh, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-brand-red" aria-hidden="true" />
                  <a href="tel:+91-XXXXXXXXXX" className="hover:text-brand-red transition-colors">+91-XXXXXXXXXX</a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-brand-red" aria-hidden="true" />
                  <a href="mailto:hello@torq.in" className="hover:text-brand-red transition-colors">hello@torq.in</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2" role="list">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-brand-red transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="font-semibold text-white mb-4">Status</h3>
              <ul className="space-y-2 text-sm text-white/60" role="list">
                <li>Active in Azamgarh</li>
                <li>Expanding to Varanasi (Phase 2)</li>
                <li>Platform in active development</li>
                <li>No fake metrics or testimonials</li>
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/40 text-sm"
            >
              © {new Date().getFullYear()} TORQ. All rights reserved.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/30 text-xs"
            >
              Built with transparency. No invented numbers, fake reviews, or misleading claims.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}