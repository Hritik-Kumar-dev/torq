import { motion } from 'framer-motion';
import { Search, Tag, Clock, Shield, HelpCircle } from 'lucide-react';

const problems = [
  {
    number: '01',
    icon: Search,
    title: 'Finding a Reliable Mechanic',
    description: 'When your vehicle breaks down on an unfamiliar road, there\'s no easy way to know which nearby mechanics are trustworthy, skilled, or even open.',
    accent: 'text-brand-red',
  },
  {
    number: '02',
    icon: Tag,
    title: 'Unclear & Inflated Pricing',
    description: 'Without standardized rates, you\'re often quoted arbitrary prices with no transparency on parts, labor, or whether you\'re being overcharged.',
    accent: 'text-brand-orange',
  },
  {
    number: '03',
    icon: Clock,
    title: 'Long, Uncertain Wait Times',
    description: 'Stranded on the roadside with no ETA. Hours can pass before help arrives, disrupting your schedule and leaving you vulnerable.',
    accent: 'text-brand-charcoal',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Zero Service Transparency',
    description: 'No visibility into the mechanic\'s credentials, past work, or what the repair actually entails. You approve blindly and hope for the best.',
    accent: 'text-brand-red',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal text-balance leading-tight">
            WHEN YOUR VEHICLE STOPS,<br />
            <span className="text-brand-red">YOUR DAY SHOULDN'T.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
            Roadside breakdowns turn into day-long ordeals. Here's why the current experience fails vehicle owners.
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-12">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-shrink-0 w-16 lg:w-20 text-center">
                <span className="text-3xl lg:text-4xl font-bold text-brand-charcoal/20 font-display">
                  {problem.number}
                </span>
              </div>

              <div className="flex-1 lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -left-4 lg:-left-6 top-2 w-1 h-24 bg-gradient-to-b ${problem.accent} rounded-full`} aria-hidden="true" />
                  <div className="pl-4 lg:pl-6 border-l-2 border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${problem.accent}/10`}>
                        <problem.icon className="w-6 h-6" style={{ color: problem.accent }} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-charcoal">{problem.title}</h3>
                    </div>
                    <p className="text-brand-muted leading-relaxed pl-9 lg:pl-15">{problem.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:w-1/2">
                <div className="bg-brand-offwhite rounded-2xl p-6 lg:p-8 border border-neutral-200">
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-5 h-5 text-brand-muted" aria-hidden="true" />
                    <span className="text-sm font-medium text-brand-charcoal/70 uppercase tracking-wider">
                      How TORQ Helps
                    </span>
                  </div>
                  <p className="text-brand-charcoal/80 leading-relaxed">
                    {index === 0 && 'Verified mechanic network with ratings, reviews, and background checks.'}
                    {index === 1 && 'Transparent pricing estimates before you commit. No surprise charges.'}
                    {index === 2 && 'Real-time mechanic availability and location-based dispatch for faster response.'}
                    {index === 3 && 'Mechanic profiles with certifications, specializations, and service history.'}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}