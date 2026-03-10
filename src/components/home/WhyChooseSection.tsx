import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Sparkles, Shield, Heart, Phone } from "lucide-react";
import tanzaniaImg from "@/assets/destinations/tanzania.jpg";

const reasons = [
  {
    icon: MapPin,
    title: "Ugandan Local Experts",
    description: "We are Africans sharing our home—not distant operators selling packages.",
  },
  {
    icon: Sparkles,
    title: "Authenticity First",
    description: "Every experience is real, local, and deeply connected to the places we take you.",
  },
  {
    icon: Shield,
    title: "Value That Matters",
    description: "Premium experiences at honest prices—value is at the core of everything we do.",
  },
  {
    icon: Heart,
    title: "100% Tailor-Made",
    description: "Every journey is designed around your dreams, pace, and preferences.",
  },
  {
    icon: Phone,
    title: "White-Glove Service",
    description: "24/7 support and personal attention throughout your adventure.",
  },
];

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={tanzaniaImg}
                alt="African Safari Experience"
                className="w-full h-[500px] lg:h-[600px] object-cover animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-sm shadow-lg max-w-[200px]">
              <p className="font-display text-4xl mb-2">500+</p>
              <p className="text-sm uppercase tracking-wider opacity-90">
                Happy Travelers
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="accent-line mb-6" />
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
                Why Choose Us
              </p>
              <h2 className="text-section-title text-foreground mb-6">
                The Gorilland <span className="text-primary italic">Difference</span>
              </h2>
              <p className="text-body-elegant text-muted-foreground mb-8">
                We don't just plan trips—we craft transformative experiences rooted 
                in authenticity, local knowledge, and genuine value for our clients.
              </p>
            </div>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
