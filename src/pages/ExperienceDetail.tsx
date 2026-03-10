import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getExperienceBySlug, experiences } from "@/data/experiences";

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = getExperienceBySlug(slug || "");

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-secondary">
          <div className="text-center">
            <h1 className="text-section-title text-foreground mb-4">Experience Not Found</h1>
            <Link to="/experiences" className="btn-luxury-primary">View All Experiences</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = experience.icon;
  const related = experiences.filter((e) => e.slug !== experience.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={experience.image}
          alt={experience.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-12 md:pb-16">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="uppercase tracking-wider">All Experiences</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/20 backdrop-blur-sm rounded-sm">
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground">
                  {experience.title}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="accent-line mb-8" />
              <h2 className="text-section-title text-foreground mb-6">
                About This Experience
              </h2>
              <p className="text-body-elegant text-muted-foreground leading-relaxed mb-10">
                {experience.longDescription}
              </p>

              <h3 className="font-display text-2xl text-foreground mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {experience.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>

              <a href="#plan" className="btn-luxury-primary">
                Inquire About {experience.title}
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
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duration</p>
                      <p className="text-sm text-muted-foreground">{experience.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Destinations</p>
                      <p className="text-sm text-muted-foreground">{experience.destinations.join(", ")}</p>
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

      {/* Related Experiences */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="accent-line" />
            </div>
            <h2 className="text-section-title text-charcoal-foreground">
              More <span className="text-primary italic">Experiences</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((e) => (
              <Link
                key={e.slug}
                to={`/experiences/${e.slug}`}
                className="group p-6 bg-charcoal-foreground/5 border border-charcoal-foreground/10 rounded-sm hover:bg-charcoal-foreground/10 hover:border-primary/30 transition-all duration-500"
              >
                <e.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-charcoal-foreground mb-2 group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <p className="text-sm text-charcoal-foreground/60 leading-relaxed">
                  {e.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperienceDetail;
