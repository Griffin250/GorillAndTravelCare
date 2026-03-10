import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="section-padding bg-forest" id="plan">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
                Start Your Journey
              </p>
              <h2 className="text-section-title text-forest-foreground mb-6">
                Ready to Experience
                <br />
                <span className="text-primary italic">Africa & Beyond?</span>
              </h2>
              <p className="text-body-elegant text-forest-foreground/80 mb-8">
                Tell us about your dream adventure. Our travel designers 
                will craft a bespoke itinerary tailored to your interests, timeline, 
                and budget—spanning one country or many.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                "No Obligation Inquiry",
                "Expert Consultation",
                "Multi-Country Itineraries",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-forest-foreground/70">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-forest-foreground/5 backdrop-blur-sm border border-forest-foreground/10 rounded-sm p-8"
            >
              <h3 className="font-display text-2xl text-forest-foreground mb-6">
                Request a Custom Itinerary
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />

                <select
                  required
                  className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-charcoal">
                    Country / Region of Interest
                  </option>
                  <option value="uganda" className="text-charcoal">Uganda</option>
                  <option value="kenya" className="text-charcoal">Kenya</option>
                  <option value="tanzania" className="text-charcoal">Tanzania</option>
                  <option value="zimbabwe" className="text-charcoal">Zimbabwe</option>
                  <option value="zambia" className="text-charcoal">Zambia</option>
                  <option value="malawi" className="text-charcoal">Malawi</option>
                  <option value="south-africa" className="text-charcoal">South Africa</option>
                  <option value="eswatini" className="text-charcoal">Eswatini</option>
                  <option value="namibia" className="text-charcoal">Namibia</option>
                  <option value="cameroon" className="text-charcoal">Cameroon</option>
                  <option value="egypt" className="text-charcoal">Egypt</option>
                  <option value="india" className="text-charcoal">India</option>
                  <option value="dubai" className="text-charcoal">Dubai</option>
                  <option value="israel-rome" className="text-charcoal">Israel & Rome/Vatican</option>
                  <option value="multiple" className="text-charcoal">Multiple Countries</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Travel Dates"
                    className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Number of Travelers"
                    className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Tell us about your dream adventure..."
                  rows={4}
                  className="w-full px-4 py-3 bg-forest-foreground/5 border border-forest-foreground/20 rounded-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />

                <motion.button
                  type="submit"
                  className="w-full btn-luxury-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Thank You!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Start Planning My Journey
                    </>
                  )}
                </motion.button>
              </div>

              <p className="text-xs text-forest-foreground/50 mt-4 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
