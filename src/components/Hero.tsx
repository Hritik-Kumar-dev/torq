import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Shield, Clock, Star, Users, Wrench } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Verified Mechanics', desc: 'Background checked' },
  { icon: Clock, label: 'Fast Response', desc: 'Nearby help' },
  { icon: Star, label: 'Transparent Pricing', desc: 'No hidden fees' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[650px] flex items-end hero-gradient overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 right-0 w-full lg:w-[55%] h-full" aria-hidden="true">
        <img
          src="/hero-image.png"
          alt="Stranded vehicle on Indian highway with mechanic arriving to help"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent lg:from-white/90 lg:via-white/50 lg:to-transparent" />
      </div>

      <div className="container-custom relative z-10 pb-12 lg:pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ROADSIDE ASSISTANCE, REIMAGINED
          </motion.span>

          <motion.h1
            className="mt-4 text-[48px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-bold leading-[1.02] text-brand-charcoal text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            BREAKDOWNS HAPPEN.<br />
            <span className="text-brand-red">WE'VE GOT YOUR BACK.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-brand-charcoal/70 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From unexpected breakdowns to roadside emergencies, TORQ connects you with verified nearby mechanics so you can get back on the road with confidence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#assistance"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
            >
              GET ROADSIDE ASSISTANCE
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-charcoal border-2 border-neutral-300 hover:border-brand-red hover:text-brand-red transition-colors rounded-md"
            >
              EXPLORE HOW IT WORKS
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-6 lg:gap-10 text-sm text-brand-muted"
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
                <div className="w-8 h-8 rounded-lg border border-brand-red/30 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-brand-charcoal">{item.label}</p>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 lg:left-auto lg:right-0 lg:bottom-8 w-full lg:w-[380px] max-w-[380px] bg-white rounded-xl shadow-xl p-5 border border-neutral-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-brand-red" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-brand-charcoal text-sm">Service Area</p>
              <p className="text-xs text-brand-muted">Azamgarh, Uttar Pradesh</p>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-4">
            <div className="flex items-center gap-2 text-xs text-brand-muted mb-2">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Mechanic network</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-muted mb-2">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Assistance</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-muted">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Service transparency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}