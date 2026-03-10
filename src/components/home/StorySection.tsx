import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background african-pattern" id="about">
      <div className="container-luxury">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Accent */}
            <div className="flex justify-center mb-6">
              <div className="accent-line" />
            </div>

            {/* Tagline */}
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              Our Story
            </p>

            {/* Title */}
            <h2 className="text-section-title text-foreground mb-8">
              Born in Uganda.
              <br />
              <span className="text-primary italic">Connected to All of Africa.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Story Text */}
            <p className="text-body-elegant text-muted-foreground mb-6 leading-relaxed">
              Gorilland TravelCare Uganda is a proud Ugandan-based intra-African tour company. 
              We sell Uganda to the finest detail—and then connect you to Africa's most iconic 
              signature attractions. Our trips can cover multiple countries, letting you experience 
              the continent's greatest wonders in a single journey.
            </p>
            <p className="text-body-elegant text-muted-foreground mb-10 leading-relaxed">
              Authenticity is our identity and value is what matters to our clients. 
              From the misty mountains where gorillas dwell to the Serengeti plains, 
              from Victoria Falls to the pyramids of Egypt—we are your trusted gateway 
              to Africa and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "17", label: "Destinations" },
                { number: "500+", label: "Journeys Crafted" },
                { number: "100%", label: "Tailor-Made" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
