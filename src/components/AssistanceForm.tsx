import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, Truck, Settings, Loader2, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react';

const vehicleTypes = [
  { value: 'car', label: 'Car', icon: Car },
  { value: 'bike', label: 'Bike', icon: Bike },
  { value: 'suv', label: 'SUV', icon: Truck },
  { value: 'other', label: 'Other', icon: Settings },
];

const problemTypes = [
  { value: 'flat-tyre', label: 'Flat Tyre' },
  { value: 'battery', label: 'Battery Issue' },
  { value: 'engine', label: 'Engine Trouble' },
  { value: 'fuel', label: 'Fuel Emergency' },
  { value: 'towing', label: 'Towing' },
  { value: 'other', label: 'Other' },
];

export default function AssistanceForm() {
  const [formData, setFormData] = useState({
    vehicleType: '',
    problemType: '',
    location: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.vehicleType) newErrors.vehicleType = 'Please select your vehicle type';
    if (!formData.problemType) newErrors.problemType = 'Please select the problem';
    if (!formData.location.trim()) newErrors.location = 'Please enter your location';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormData({ vehicleType: '', problemType: '', location: '', phone: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <section id="assistance" className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider bg-brand-red/10 rounded-full mb-4">
              QUICK ASSISTANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-charcoal text-balance">
              Need help on the road?
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
              Tell us what's happening. We'll help you find the right assistance.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-neutral-200"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-brand-red" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Request Submitted</h3>
                <p className="text-brand-muted mb-6">
                  This is a demo flow. In the full product, we'll connect you with nearby verified mechanics.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-neutral-200 space-y-6"
                noValidate
              >
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-brand-charcoal mb-3">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Vehicle type">
                    {vehicleTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`relative cursor-pointer transition-all duration-200 ${
                          formData.vehicleType === type.value
                            ? 'ring-2 ring-brand-red ring-offset-2'
                            : 'hover:ring-1 hover:ring-brand-red/30'
                        } rounded-xl border border-neutral-200 overflow-hidden`}
                      >
                        <input
                          type="radio"
                          name="vehicleType"
                          value={type.value}
                          checked={formData.vehicleType === type.value}
                          onChange={() => handleChange('vehicleType', type.value)}
                          className="sr-only"
                          aria-label={type.label}
                        />
                        <div className="p-4 text-center">
                          <type.icon className="w-6 h-6 mx-auto mb-2 text-brand-charcoal/60" aria-hidden="true" />
                          <span className="text-sm font-medium text-brand-charcoal">{type.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.vehicleType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.vehicleType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="problemType" className="block text-sm font-medium text-brand-charcoal mb-3">
                    What's the Problem?
                  </label>
                  <select
                    id="problemType"
                    value={formData.problemType}
                    onChange={(e) => handleChange('problemType', e.target.value)}
                    className="w-full px-4 py-3 text-base text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23777777%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E')] bg-no-repeat bg-right-4 bg-center"
                    aria-invalid={errors.problemType ? 'true' : 'false'}
                    aria-describedby={errors.problemType ? 'problem-error' : undefined}
                  >
                    <option value="">Select the issue</option>
                    {problemTypes.map((problem) => (
                      <option key={problem.value} value={problem.value}>{problem.label}</option>
                    ))}
                  </select>
                  {errors.problemType && (
                    <p id="problem-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.problemType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-brand-charcoal mb-3">
                    Your Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" aria-hidden="true" />
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="Enter address, landmark, or road name"
                      className="w-full pl-12 pr-4 py-3 text-base text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                      aria-invalid={errors.location ? 'true' : 'false'}
                      aria-describedby={errors.location ? 'location-error' : undefined}
                    />
                  </div>
                  {errors.location && (
                    <p id="location-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.location}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-brand-muted">We use this to find mechanics near you</p>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" aria-hidden="true" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-3 text-base text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full py-4 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Finding Help...
                    </>
                  ) : (
                    'Request Assistance'
                  )}
                </button>

                <p className="text-center text-xs text-brand-muted">
                  This is a frontend demo. No real mechanics will be dispatched.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}