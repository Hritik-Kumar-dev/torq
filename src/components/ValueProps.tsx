import { motion } from 'framer-motion';
import { Wrench, Smartphone, MapPin, Users, DollarSign, Star } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'Expert Roadside Repairs',
    desc: 'From flat tyres to engine diagnostics, our verified mechanics handle it all on the spot.',
    highlight: '50+ services covered',
  },
  {
    icon: Smartphone,
    title: 'Tap & Track',
    desc: 'Request help in 30 seconds. Track your mechanic in real-time. No calls to multiple numbers.',
    highlight: 'Live ETA updates',
  },
  {
    icon: MapPin,
    title: 'Hyperlocal Network',
    desc: 'We connect you with the nearest available mechanic — not just the first one on a list.',
    highlight: '15km radius coverage',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'Upfront estimates before you confirm. No surge pricing. No hidden charges. Ever.',
    highlight: 'Fixed quotes',
  },
  {
    icon: Users,
    title: 'Verified Professionals',
    desc: 'Every mechanic passes background checks, skill tests, and ongoing quality reviews.',
    highlight: 'Rigorous vetting',
  },
  {
    icon: Star,
    title: 'Built for Indian Roads',
    desc: 'Designed for our highways, traffic, and vehicle types — not adapted from abroad.',
    highlight: 'Local-first design',
  },
];

export default function ValueProps() {
  return (
    <section id="features" className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
            WHY TORQ
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal text-balance leading-tight mb-4">
            MORE THAN A MECHANIC.<br />
            <span className="text-brand-red">PEACE OF MIND.</span>
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            We're transforming roadside emergencies from chaotic ordeals into manageable, transparent experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-neutral-200 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-red transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">{feature.desc}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full">
                {feature.highlight}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}