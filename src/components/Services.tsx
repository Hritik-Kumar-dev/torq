import { motion } from 'framer-motion';
import {
  Wrench,
  Battery,
  Cpu,
  Fuel,
  Truck,
  Settings,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Flat Tyre Assistance',
    description: 'On-the-spot tyre repair, replacement, or spare wheel fitting. We handle punctures, blowouts, and wheel changes.',
    features: ['Puncture repair', 'Tyre replacement', 'Wheel balancing', 'Spare fitting'],
  },
  {
    icon: Battery,
    title: 'Battery Jumpstart',
    description: 'Quick battery boost to get your engine running. If the battery is dead, we can arrange a replacement on-site.',
    features: ['Jumpstart service', 'Battery testing', 'Replacement arrangement', 'Terminal cleaning'],
  },
  {
    icon: Cpu,
    title: 'Engine Troubleshooting',
    description: 'Diagnosis and roadside repair for common engine issues — overheating, starting problems, warning lights, and more.',
    features: ['Diagnostic scan', 'Overheating fixes', 'Start issues', 'Warning light checks'],
  },
  {
    icon: Fuel,
    title: 'Emergency Fuel Assistance',
    description: 'Ran out of fuel? We deliver enough petrol or diesel to reach the nearest station. Available for cars and bikes.',
    features: ['Petrol delivery', 'Diesel delivery', '2-wheeler & 4-wheeler', 'Safety compliant'],
  },
  {
    icon: Truck,
    title: 'Vehicle Towing',
    description: 'When on-site repair isn\'t possible, we arrange safe towing to your preferred garage or dealership.',
    features: ['Flatbed towing', 'Wheel-lift towing', 'Bike towing', 'Garage drop-off'],
  },
  {
    icon: Settings,
    title: 'General Mechanical Assistance',
    description: 'From belt replacements to coolant top-ups, minor electrical fixes to clutch adjustments — whatever gets you moving.',
    features: ['Belt & hose repair', 'Coolant & oil top-up', 'Minor electrical', 'Clutch & cable adjust'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal text-balance leading-tight">
            ONE PLATFORM. HELP FOR THE<br />
            <span className="text-brand-red">UNEXPECTED.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
            Comprehensive roadside coverage for the most common vehicle emergencies on Indian roads.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-brand-muted leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6" role="list">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center gap-2 text-sm text-brand-charcoal/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" aria-hidden="true" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t border-neutral-100">
                <button className="group flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red/80 transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-brand-muted mb-4">Need a service not listed here?</p>
          <a
            href="#assistance"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
          >
            Request Custom Assistance
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}