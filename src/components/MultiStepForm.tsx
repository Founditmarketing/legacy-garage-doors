"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, Home, Settings, AlertTriangle, ArrowRight, ArrowLeft, Check, Upload } from "lucide-react";

const issueTypes = [
  { id: "install", label: "New Installation", icon: Home, desc: "New door or opener" },
  { id: "repair", label: "Repair Needed", icon: Wrench, desc: "Something's broken" },
  { id: "maintenance", label: "Maintenance", icon: Settings, desc: "Tune-up & inspection" },
  { id: "emergency", label: "Emergency", icon: AlertTriangle, desc: "Urgent — need help now" },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    issueType: "",
    zipCode: "",
    description: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const canAdvance = () => {
    if (step === 1) return formData.issueType !== "";
    if (step === 2) return formData.zipCode.length >= 5;
    if (step === 3) return true; // description optional
    if (step === 4) return formData.name && formData.phone;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
        >
          <Check size={36} className="text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-3">Request Received!</h3>
        <p className="text-white/50 text-[15px] max-w-md mx-auto">
          We&apos;ll reach out within 30 minutes during business hours. For emergencies, call{" "}
          <a href="tel:6019135975" className="text-[var(--color-orange)] font-medium">601-913-5975</a> now.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="h-1 bg-white/[0.06] rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-[var(--color-orange)] rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-xs text-white/30 mb-6 tracking-wide uppercase font-semibold">
        Step {step} of {totalSteps}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 1: Issue Type */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">What do you need help with?</h3>
              <p className="text-white/40 text-sm mb-6">Select the type of service you need.</p>
              <div className="grid grid-cols-2 gap-3">
                {issueTypes.map((t) => {
                  const Icon = t.icon;
                  const isSelected = formData.issueType === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setFormData({ ...formData, issueType: t.id })}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                        isSelected
                          ? "bg-[var(--color-orange)]/10 border-[var(--color-orange)]/30 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/60 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <Icon size={22} className={isSelected ? "text-[var(--color-orange)]" : ""} />
                      <div className="mt-3 text-sm font-medium">{t.label}</div>
                      <div className="text-xs text-white/30 mt-1">{t.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Zip Code */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">What&apos;s your zip code?</h3>
              <p className="text-white/40 text-sm mb-6">We&apos;ll confirm we service your area.</p>
              <input
                type="text"
                maxLength={5}
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, "") })}
                placeholder="e.g. 39401"
                className="input-industrial text-2xl tracking-widest text-center max-w-[200px]"
                autoFocus
              />
              <p className="text-xs text-white/20 mt-4">Serving Hattiesburg, Petal, Purvis, Laurel, and surrounding areas.</p>
            </div>
          )}

          {/* Step 3: Description */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Describe the issue</h3>
              <p className="text-white/40 text-sm mb-6">Optional — helps us prepare the right parts.</p>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="e.g., My garage door won't open, one spring broke, making loud noises..."
                rows={4}
                className="input-industrial resize-none"
              />
              <button className="mt-4 flex items-center gap-2 text-sm text-white/30 hover:text-white/50 transition-colors">
                <Upload size={14} /> Attach a photo (optional)
              </button>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">How do we reach you?</h3>
              <p className="text-white/40 text-sm mb-6">We&apos;ll call or text within 30 minutes.</p>
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="input-industrial"
                  autoFocus
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone number"
                  className="input-industrial"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email (optional)"
                  className="input-industrial"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.04]">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </button>
        ) : (
          <div />
        )}
        {step < totalSteps ? (
          <button
            onClick={() => canAdvance() && setStep(step + 1)}
            className={`btn-primary !text-sm ${!canAdvance() ? "opacity-30 pointer-events-none" : ""}`}
          >
            Continue <ArrowRight size={14} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className={`btn-primary !text-sm ${!canAdvance() ? "opacity-30 pointer-events-none" : ""}`}
          >
            Submit Request <Check size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
