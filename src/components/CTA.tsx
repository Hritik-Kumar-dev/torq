import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-orange/5" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D92727%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H0v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H0v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />

      <div className="container-custom relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">EARLY ACCESS</span>
          </div>

          <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-white text-balance leading-tight mb-6">
            READY WHEN<br />
            <span className="text-brand-red">YOU NEED US MOST.</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of drivers who trust TORQ for reliable roadside assistance.
            Starting in Azamgarh, expanding across UP.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-charcoal bg-white hover:bg-white/90 transition-colors rounded-md"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-colors rounded-md"
            >
              See All Features
            </a>
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-red" aria-hidden="true" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-orange" aria-hidden="true" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white/30" aria-hidden="true" />
              <span>24/7 support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}