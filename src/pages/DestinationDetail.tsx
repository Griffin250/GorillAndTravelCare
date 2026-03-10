import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDestinationBySlug, destinations } from "@/data/destinations";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || "");

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-secondary">
          <div className="text-center">
            <h1 className="text-section-title text-foreground mb-4">Destination Not Found</h1>
            <Link to="/destinations" className="btn-luxury-primary">View All Destinations</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get 3 related destinations (excluding current)
  const related = destinations.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-12 md:pb-16">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="uppercase tracking-wider">All Destinations</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-medium">
                {destination.tagline}
              </p>
              <h1 className="text-hero text-primary-foreground">{destination.name}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="accent-line mb-8" />
              <h2 className="text-section-title text-foreground mb-6">
                Discover {destination.name}
              </h2>
              <p className="text-body-elegant text-muted-foreground leading-relaxed mb-10">
                {destination.story}
              </p>

              <h3 className="font-display text-2xl text-foreground mb-6">Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              <a href="#plan" className="btn-luxury-primary">
                Plan Your {destination.name} Trip
              </a>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-secondary rounded-sm p-8 space-y-6 sticky top-28">
                <h3 className="font-display text-xl text-foreground">Quick Facts</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Destination</p>
                      <p className="text-sm text-muted-foreground">{destination.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Best Time to Visit</p>
                      <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Suggested Duration</p>
                      <p className="text-sm text-muted-foreground">{destination.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <a href="#plan" className="btn-luxury-dark w-full text-center">
                    Inquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="accent-line" />
            </div>
            <h2 className="text-section-title text-foreground">
              More <span className="text-primary italic">Destinations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="destination-card group block"
              >
                <img src={d.image} alt={d.name} loading="lazy" />
                <div className="destination-card-overlay" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{d.tagline}</p>
                  <h3 className="font-display text-2xl text-primary-foreground">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
