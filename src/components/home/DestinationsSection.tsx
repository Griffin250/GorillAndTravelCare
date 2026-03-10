import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations, type Destination } from "@/data/destinations";

export const DestinationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section className="section-padding bg-secondary" id="destinations">
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
            Destinations
          </p>
          <h2 className="text-section-title text-foreground mb-6">
            Uganda & <span className="text-primary italic">Africa's Finest</span>
          </h2>
          <p className="text-body-elegant text-muted-foreground max-w-2xl mx-auto">
            Starting from Uganda, explore Africa's most iconic attractions—and beyond.
            Our trips can span multiple countries for the ultimate experience.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="destination-card group"
              onClick={() => setSelectedDestination(destination)}
            >
              <img src={destination.image} alt={destination.name} loading="lazy" />
              <div className="destination-card-overlay" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  {destination.tagline}
                </p>
                <h3 className="font-display text-2xl text-primary-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-sm text-primary-foreground/70 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {destination.story.slice(0, 80)}…
                </p>
                <div className="flex items-center gap-2 text-primary-foreground/80 group-hover:text-primary transition-colors">
                  <span className="text-sm uppercase tracking-wider">Read Story</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/destinations" className="btn-luxury-dark">
            View All Destinations
          </Link>
        </motion.div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full bg-background rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-72">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                    {selectedDestination.tagline}
                  </p>
                  <h3 className="font-display text-3xl text-white">
                    {selectedDestination.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-body-elegant text-muted-foreground leading-relaxed mb-6">
                  {selectedDestination.story}
                </p>
                <Link
                  to={`/destinations/${selectedDestination.slug}`}
                  className="btn-luxury-primary w-full text-center"
                  onClick={() => setSelectedDestination(null)}
                >
                  Explore {selectedDestination.name} Journeys
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
