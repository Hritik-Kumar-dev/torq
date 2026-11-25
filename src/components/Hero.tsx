import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

const trustIndicators = [
  { icon: Shield, label: 'Verified Mechanics', desc: 'Background checked & skilled' },
  { icon: Clock, label: 'Fast Response', desc: 'Average 30 min ETA' },
  { icon: MapPin, label: 'Local Network', desc: 'Mechanics near you' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/40" aria-hidden="true" />
      </div>

      <div className="relative z-10 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px]">
          <motion.span
            className="inline-block px-4 py-1.5 text-xs font-semibold text-brand-red uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            INDIA'S TRUSTED ROADSIDE ASSISTANCE
          </motion.span>

          <motion.h1
            className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[72px] font-bold text-white text-balance leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            YOUR JOURNEY SHOULDN'T END<br />
            <span className="text-brand-red">WITH A BREAKDOWN.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Flat tyre? Dead battery? Engine trouble? Get verified mechanics dispatched to your location in minutes. Transparent pricing. No hidden fees.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-brand-charcoal bg-white hover:bg-white/90 transition-colors rounded-md"
            >
              Request Assistance Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white/90 border border-white/30 hover:border-white/50 hover:bg-white/5 transition-colors rounded-md"
            >
              How It Works
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}