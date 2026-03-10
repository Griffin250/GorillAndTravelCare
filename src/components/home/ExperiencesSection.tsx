import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";

export const ExperiencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-charcoal" id="experiences">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Our Products
          </p>
          <h2 className="text-section-title text-charcoal-foreground mb-6">
            Travel Experiences <span className="text-primary italic">For Everyone</span>
          </h2>
          <p className="text-body-elegant text-charcoal-foreground/70 max-w-2xl mx-auto">
            From luxury safaris to business travel, gorilla tracking to pilgrim tours—we
            craft journeys that match your purpose and passion.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                to={`/experiences/${experience.slug}`}
                className="group block p-6 bg-charcoal-foreground/5 border border-charcoal-foreground/10 rounded-sm hover:bg-charcoal-foreground/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-4">
                  <experience.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-charcoal-foreground mb-2 group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                <p className="text-sm text-charcoal-foreground/60 leading-relaxed">
                  {experience.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/experiences" className="btn-luxury-outline">
            View All Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
