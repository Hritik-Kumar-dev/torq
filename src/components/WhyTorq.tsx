import { motion } from 'framer-motion';
import { BadgeCheck, MapPin, Info, Smartphone, Users, Star, Shield } from 'lucide-react';

const advantages = [
  {
    icon: BadgeCheck,
    title: 'Verified Mechanic Network',
    description: 'Every mechanic on TORQ undergoes background verification, skill assessment, and continuous quality monitoring.',
    metric: 'Rigorous vetting',
  },
  {
    icon: MapPin,
    title: 'Location-Based Discovery',
    description: 'Real-time proximity matching connects you with the nearest available help, not just the first listing.',
    metric: 'Hyperlocal focus',
  },
  {
    icon: Info,
    title: 'Transparent Service Info',
    description: 'Clear pricing estimates, mechanic profiles, service scope, and expected timelines before you commit.',
    metric: 'No surprises',
  },
  {
    icon: Smartphone,
    title: 'Simple Digital Experience',
    description: 'Request, track, and communicate through a clean interface — no calls to multiple numbers, no confusion.',
    metric: 'One-tap request',
  },
  {
    icon: Users,
    title: 'Community-Driven Quality',
    description: 'Ratings, reviews, and peer feedback create accountability and help you choose with confidence.',
    metric: 'Peer verified',
  },
  {
    icon: Star,
    title: 'Built for Indian Roads',
    description: 'Designed for the realities of Indian highways, traffic, and vehicle types — not adapted from abroad.',
    metric: 'Local first',
  },
];

export default function WhyTorq() {
  return (
    <section id="why-torq" className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="sticky top-24 lg:top-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
              WHY TORQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal text-balance leading-tight mb-6">
              MORE THAN A MECHANIC.<br />
              <span className="text-brand-red">PEACE OF MIND.</span>
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-10">
              We're building a platform that transforms roadside emergencies from chaotic ordeals into manageable, transparent experiences.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal">No fake guarantees</p>
                  <p className="text-sm text-brand-muted">We don't promise 15-minute arrivals or fixed prices — we promise transparency</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-brand-orange fill-current" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal">Honest about coverage</p>
                  <p className="text-sm text-brand-muted">Starting in Azamgarh, expanding deliberately — not claiming nationwide from day one</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-charcoal/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand-charcoal" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal">Community accountability</p>
                  <p className="text-sm text-brand-muted">Real ratings from real users — no purchased testimonials or invented scores</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-neutral-200 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <advantage.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-brand-muted leading-relaxed mb-4">{advantage.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full">
                  {advantage.metric}
                </span>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-20 lg:mt-28 p-8 lg:p-12 rounded-3xl bg-brand-charcoal text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-orange/10" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              This is <span className="text-brand-red">Day One</span> — but the vision is clear.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              TORQ is in active development. The platform you see here represents our commitment to solving a real problem for Indian vehicle owners — not a finished product with inflated metrics.
            </p>
            <p className="text-white/50 text-base">
              We're building in public, listening to early users, and iterating fast. If this resonates with you, we'd love to hear from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}