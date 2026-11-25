import { motion } from 'framer-motion';
import { Search, Tag, Clock, Shield } from 'lucide-react';

const problems = [
  {
    icon: Search,
    title: 'Finding a reliable mechanic',
    desc: 'No easy way to know which nearby mechanics are trustworthy, skilled, or even open when you\'re stranded on an unfamiliar road.',
  },
  {
    icon: Tag,
    title: 'Unclear pricing',
    desc: 'Without standardized rates, you\'re often quoted arbitrary prices with no transparency on parts, labor, or whether you\'re being overcharged.',
  },
  {
    icon: Clock,
    title: 'Long waiting times',
    desc: 'Stranded on the roadside with no ETA. Hours can pass before help arrives, disrupting your schedule and leaving you vulnerable.',
  },
  {
    icon: Shield,
    title: 'Lack of service transparency',
    desc: 'No visibility into the mechanic\'s credentials, past work, or what the repair actually entails. You approve blindly and hope for the best.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -left-4 top-4 w-1 h-24 bg-gradient-to-b from-brand-red to-brand-orange rounded-full" aria-hidden="true" />
            <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
              THE PROBLEM
            </span>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] text-brand-charcoal text-balance">
              WHEN YOUR VEHICLE STOPS,<br />
              <span className="text-brand-red">YOUR DAY SHOULDN'T.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="relative group"
              >
                <div className="absolute top-0 left-0 w-full h-full border-r border-neutral-200 last:border-0 lg:last:border-r lg:border-neutral-200" aria-hidden="true" />
                <div className="relative p-4 lg:p-6">
                  <div className="w-10 h-10 rounded-lg border border-brand-red/30 flex items-center justify-center mb-4">
                    <problem.icon className="w-5 h-5 text-brand-red" aria-hidden="true" />
                  </div>
                  <p className="text-brand-charcoal/80 leading-relaxed text-base lg:text-lg font-medium">
                    {problem.title}
                  </p>
                  <p className="mt-2 text-brand-muted text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}