import { motion } from 'framer-motion';
import { MapPin, Smartphone, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Request Assistance',
    description: 'Tell us your vehicle issue and location through our simple form. Select your vehicle type, the problem, and where you are.',
    details: ['Vehicle type selector', 'Problem categorization', 'Location input', 'Contact details'],
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Find Nearby Help',
    description: 'Our system identifies verified mechanics in your vicinity and shows you who\'s available, their distance, and estimated response time.',
    details: ['Real-time availability', 'Distance & ETA', 'Mechanic ratings', 'Service specialization'],
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect with a Mechanic',
    description: 'Review the mechanic\'s profile, pricing estimate, and connect directly. Confirm the service details before they head your way.',
    details: ['Mechanic profiles', 'Transparent pricing', 'Direct communication', 'Service confirmation'],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Get Back on the Road',
    description: 'The mechanic arrives, performs the roadside assistance, and you\'re back on your journey. Rate your experience to help others.',
    details: ['On-site repair', 'Quality assurance', 'Digital receipt', 'Rate & review'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal text-balance leading-tight">
            HELP IS JUST A<br />
            <span className="text-brand-red">FEW STEPS AWAY.</span>
          </h2>
          <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
            From breakdown to back on the road — a streamlined process designed for stressful moments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-brand-red/20 via-brand-red/40 to-brand-orange/20" aria-hidden="true" />

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center lg:text-left">
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto lg:mx-0 ${index % 2 === 0 ? 'bg-brand-red/10' : 'bg-brand-orange/10'} border border-neutral-200`}>
                      <step.icon className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: index % 2 === 0 ? '#D92727' : '#F28C28' }} aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-charcoal text-white font-heading font-bold text-lg lg:text-xl flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg lg:text-xl font-bold text-brand-charcoal mb-3">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-5">{step.description}</p>

                  <ul className="space-y-2" role="list">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + detailIndex * 0.08 }}
                        className="flex items-center gap-2 text-sm text-brand-charcoal/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: index % 2 === 0 ? '#D92727' : '#F28C28' }} aria-hidden="true" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[50px] right-[-50%] w-full h-0.5 bg-gradient-to-r from-brand-red/20 via-brand-red/40 to-brand-orange/20" aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="lg:hidden mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-brand-offwhite rounded-xl border border-neutral-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-brand-red/10">
                  <step.icon className="w-5 h-5 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading text-xl font-bold text-brand-charcoal">{step.number}</span>
                    <h3 className="font-semibold text-brand-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-sm text-brand-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}