import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Shield, Clock, Star } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Verified Mechanics', desc: 'Background checked' },
  { icon: Clock, label: 'Fast Response', desc: 'Nearby help' },
  { icon: Star, label: 'Transparent Pricing', desc: 'No hidden fees' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16 lg:pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="z-10">
            <motion.span
              className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ROADSIDE ASSISTANCE, REIMAGINED
            </motion.span>

            <motion.h1
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-brand-charcoal text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              BREAKDOWNS HAPPEN.<br />
              <span className="text-brand-red">WE'VE GOT YOUR BACK.</span>
            </motion.h1>

            <motion.p
              className="mt-8 text-lg sm:text-xl text-brand-charcoal/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              From unexpected breakdowns to roadside emergencies, TORQ connects you with verified nearby mechanics so you can get back on the road with confidence.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="#assistance"
                className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
              >
                Get Roadside Assistance
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-charcoal border-2 border-neutral-300 hover:border-brand-red hover:text-brand-red transition-colors rounded-md"
              >
                Explore How It Works
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-8 text-sm text-brand-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {trustItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 text-brand-red" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-brand-charcoal">{item.label}</p>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative z-10">
            <motion.div
              className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-neutral-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/hero-image.png"
                alt="Stranded vehicle on Indian highway with mechanic arriving to help"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 lg:-left-12 w-48 lg:w-64 bg-white rounded-xl shadow-xl p-5 border border-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal">Service Area</p>
                  <p className="text-sm text-brand-muted">Azamgarh, Uttar Pradesh</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-brand-orange">
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span className="font-semibold">4.8</span>
                </div>
                <span className="text-brand-muted">120+ mechanics</span>
                <span className="text-brand-muted">24/7 support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <svg className="w-6 h-6 text-brand-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}