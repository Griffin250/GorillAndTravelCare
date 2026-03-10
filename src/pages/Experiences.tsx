import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { experiences } from "@/data/experiences";

const Experiences = () => {
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
            What We Do
          </p>
          <h1 className="text-hero text-charcoal-foreground mb-6">
            Travel <span className="text-primary italic">Experiences</span>
          </h1>
          <p className="text-body-elegant text-charcoal-foreground/70 max-w-2xl mx-auto">
            From luxury safaris to spiritual pilgrimages, gorilla tracking to business travel—discover
            every way we craft unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding bg-secondary" ref={ref}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <Link
                  to={`/experiences/${experience.slug}`}
                  className="group flex gap-6 p-6 bg-background border border-border rounded-sm hover:border-primary/30 hover:shadow-md transition-all duration-500"
                >
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                    <experience.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {experience.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <span className="uppercase tracking-wider">Learn More</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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

export default Experiences;
