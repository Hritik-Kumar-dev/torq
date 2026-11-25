import { motion } from 'framer-motion';
import { MapPin, Navigation, Building2, ArrowRight } from 'lucide-react';

const cities = [
  { name: 'Azamgarh', status: 'Active', color: 'text-brand-red' },
  { name: 'Varanasi', status: 'Coming Soon', color: 'text-brand-orange' },
  { name: 'Allahabad', status: 'Planned', color: 'text-brand-muted' },
  { name: 'Gorakhpur', status: 'Planned', color: 'text-brand-muted' },
  { name: 'Lucknow', status: 'Planned', color: 'text-brand-muted' },
  { name: 'Kanpur', status: 'Planned', color: 'text-brand-muted' },
];

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
            LOCATION
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal text-balance leading-tight">
            STARTING LOCAL.<br />
            BUILT TO GO<br />
            <span className="text-brand-red">FURTHER.</span>
          </h2>
          <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
            TORQ launches in Azamgarh, Uttar Pradesh — our home base. We're building a dense, reliable network block by block before expanding.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-xl bg-brand-offwhite border border-neutral-200 relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                aria-label="Stylized map of Uttar Pradesh showing Azamgarh as the starting hub with connections to nearby cities"
              >
                <defs>
                  <linearGradient id="mapRoad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D92727" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F28C28" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                <path
                  d="M100 350 Q150 300 200 320 Q250 340 300 300"
                  stroke="url(#mapRoad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="10 8"
                >
                  <animate attributeName="strokeDashoffset" values="0;36" dur="3s" repeatCount="indefinite" />
                </path>

                <path
                  d="M100 350 Q80 250 120 180 Q160 110 220 150"
                  stroke="url(#mapRoad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="8 6"
                  opacity="0.6"
                >
                  <animate attributeName="strokeDashoffset" values="0;28" dur="2.5s" repeatCount="indefinite" />
                </path>

                <path
                  d="M300 300 Q320 220 280 160 Q240 100 200 80"
                  stroke="url(#mapRoad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="8 6"
                  opacity="0.6"
                >
                  <animate attributeName="strokeDashoffset" values="0;28" dur="2.5s" repeatCount="indefinite" />
                </path>

                <circle cx="200" cy="200" r="8" fill="#D92727">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="18" fill="none" stroke="#D92727" strokeWidth="1.5" opacity="0.4">
                  <animate attributeName="r" values="18;28;18" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                </circle>

                <circle cx="120" cy="180" r="5" fill="#F28C28" opacity="0.7" />
                <circle cx="220" cy="150" r="5" fill="#F28C28" opacity="0.7" />
                <circle cx="280" cy="100" r="5" fill="#9CA3AF" opacity="0.5" />
                <circle cx="320" cy="280" r="5" fill="#9CA3AF" opacity="0.5" />
                <circle cx="100" cy="350" r="5" fill="#9CA3AF" opacity="0.5" />
                <circle cx="160" cy="320" r="5" fill="#9CA3AF" opacity="0.5" />

                <text x="200" y="235" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#D92727">AZAMGARH</text>
                <text x="120" y="170" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#F28C28">Varanasi</text>
                <text x="220" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#F28C28">Allahabad</text>
                <text x="280" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Lucknow</text>
                <text x="320" y="290" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Kanpur</text>
                <text x="100" y="365" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Gorakhpur</text>
                <text x="160" y="335" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Mau</text>
              </svg>

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-neutral-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-charcoal text-sm">Launch Hub</p>
                    <p className="text-xs text-brand-muted">Azamgarh, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-brand-offwhite rounded-lg">
                    <p className="font-bold text-brand-charcoal">50+</p>
                    <p className="text-brand-muted">Mechanics</p>
                  </div>
                  <div className="text-center p-2 bg-brand-offwhite rounded-lg">
                    <p className="font-bold text-brand-charcoal">15km</p>
                    <p className="text-brand-muted">Radius</p>
                  </div>
                  <div className="text-center p-2 bg-brand-offwhite rounded-lg">
                    <p className="font-bold text-brand-charcoal">24/7</p>
                    <p className="text-brand-muted">Dispatch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center justify-between p-4 bg-brand-offwhite rounded-lg hover:bg-brand-offwhite/80 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${city.status === 'Active' ? 'bg-brand-red/10' : city.status === 'Coming Soon' ? 'bg-brand-orange/10' : 'bg-neutral-100'}`}>
                      {city.status === 'Active' && <MapPin className="w-5 h-5 text-brand-red" aria-hidden="true" />}
                      {city.status === 'Coming Soon' && <Navigation className="w-5 h-5 text-brand-orange" aria-hidden="true" />}
                      {city.status === 'Planned' && <Building2 className="w-5 h-5 text-brand-muted" aria-hidden="true" />}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal">{city.name}</p>
                      <p className="text-sm text-brand-muted">{index === 0 ? 'Launch city' : index === 1 ? 'Phase 2 expansion' : 'Future roadmap'}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${city.status === 'Active' ? 'bg-brand-red/10 text-brand-red' : city.status === 'Coming Soon' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-neutral-100 text-brand-muted'}`}>
                    {city.status}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-charcoal rounded-xl p-6 lg:p-8 text-white">
              <h3 className="font-heading text-xl lg:text-2xl font-bold mb-4">
                Want TORQ in your city?
              </h3>
              <p className="text-white/70 mb-5 max-w-md">
                We prioritize expansion based on demand. Tell us where you need roadside assistance most.
              </p>
              <a
                href="#assistance"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-brand-charcoal bg-white hover:bg-white/90 transition-colors rounded-md"
              >
                Request Your City
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}