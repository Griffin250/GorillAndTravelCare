import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal">
        <div className="container-luxury text-center">
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Where We Go
          </p>
          <h1 className="text-hero text-charcoal-foreground mb-6">
            Our <span className="text-primary italic">Destinations</span>
          </h1>
          <p className="text-body-elegant text-charcoal-foreground/70 max-w-2xl mx-auto">
            From the heart of Uganda to the world's most extraordinary places—explore every destination we call home.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-secondary" ref={ref}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="destination-card group block"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                  />
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
                      <span className="text-sm uppercase tracking-wider">Explore</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
