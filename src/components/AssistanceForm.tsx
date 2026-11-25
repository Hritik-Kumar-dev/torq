import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, Truck, Settings, Loader2, CheckCircle, AlertCircle, MapPin, Phone, Wrench, ArrowRight } from 'lucide-react';

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
    <section id="assistance" className="relative -mt-10 lg:-mt-14 z-20">
      <div className="container-custom">
        <motion.div
          className="bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="bg-brand-red p-6 lg:p-8 min-w-[280px] flex items-start justify-center">
              <div className="max-w-xs text-center lg:text-left">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <Wrench className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-2">
                  Need help on the road?
                </h3>
                <p className="text-white/80 text-sm lg:text-base">
                  Tell us what's happening. We'll help you find the right assistance.
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex-1 p-6 lg:p-8 flex items-center justify-center"
                >
                  <div className="text-center max-w-md">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-brand-red" aria-hidden="true" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Request Submitted</h4>
                    <p className="text-brand-muted mb-6">
                      This is a demo flow. In the full product, we'll connect you with nearby verified mechanics.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-md"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex-1 p-4 lg:p-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    <div className="lg:col-span-1">
                      <label htmlFor="vehicleType" className="block text-xs font-semibold text-brand-charcoal/60 uppercase tracking-wider mb-2">
                        Vehicle Type
                      </label>
                      <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Vehicle type">
                        {vehicleTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`relative cursor-pointer transition-all duration-200 ${
                              formData.vehicleType === type.value
                                ? 'ring-2 ring-brand-red ring-offset-2'
                                : 'hover:ring-1 hover:ring-brand-red/30'
                            } rounded-lg border border-neutral-200 overflow-hidden`}
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
                            <div className="p-3 text-center">
                              <type.icon className="w-5 h-5 mx-auto mb-1.5 text-brand-charcoal/60" aria-hidden="true" />
                              <span className="text-xs font-medium text-brand-charcoal">{type.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.vehicleType && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.vehicleType}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-1">
                      <label htmlFor="problemType" className="block text-xs font-semibold text-brand-charcoal/60 uppercase tracking-wider mb-2">
                        Problem Type
                      </label>
                      <select
                        id="problemType"
                        value={formData.problemType}
                        onChange={(e) => handleChange('problemType', e.target.value)}
                        className="w-full px-3 py-2.5 text-sm text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23777777%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E')] bg-no-repeat bg-right-3 bg-center pr-10"
                        aria-invalid={errors.problemType ? 'true' : 'false'}
                        aria-describedby={errors.problemType ? 'problem-error' : undefined}
                      >
                        <option value="">Select the issue</option>
                        {problemTypes.map((problem) => (
                          <option key={problem.value} value={problem.value}>{problem.label}</option>
                        ))}
                      </select>
                      {errors.problemType && (
                        <p id="problem-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.problemType}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-1">
                      <label htmlFor="location" className="block text-xs font-semibold text-brand-charcoal/60 uppercase tracking-wider mb-2">
                        Your Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" aria-hidden="true" />
                        <input
                          type="text"
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleChange('location', e.target.value)}
                          placeholder="Address, landmark, or road"
                          className="w-full pl-10 pr-3 py-2.5 text-sm text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                          aria-invalid={errors.location ? 'true' : 'false'}
                          aria-describedby={errors.location ? 'location-error' : undefined}
                        />
                      </div>
                      {errors.location && (
                        <p id="location-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.location}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-1 flex items-end">
                      <label htmlFor="phone" className="block text-xs font-semibold text-brand-charcoal/60 uppercase tracking-wider mb-2 w-full">
                        Phone Number
                      </label>
                      <div className="relative w-full">
                        <Phone className="absolute left-3 top-[34px] w-4 h-4 text-brand-muted" aria-hidden="true" />
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="10-digit mobile"
                          maxLength={10}
                          className="w-full pl-10 pr-3 py-2.5 text-sm text-brand-charcoal bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                          aria-invalid={errors.phone ? 'true' : 'false'}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                      </div>
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-6 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="group flex items-center gap-2 px-8 py-3 text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-md"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Finding Help...
                        </>
                      ) : (
                        <>
                          REQUEST ASSISTANCE
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-xs text-brand-muted mt-3">
                    This is a frontend demo. No real mechanics will be dispatched.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}