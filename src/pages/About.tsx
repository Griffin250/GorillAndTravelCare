import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Heart, Globe, Users, Award, Compass } from "lucide-react";
import gorillaImg from "@/assets/destinations/gorilla-trekking.jpg";
import kenyaImg from "@/assets/destinations/kenya.jpg";
import tanzaniaImg from "@/assets/destinations/tanzania.jpg";

const values = [
  {
    icon: Shield,
    title: "Authenticity",
    description: "We are rooted in Uganda and deeply connected to every community we visit. Every experience is genuine.",
  },
  {
    icon: Heart,
    title: "Value",
    description: "We deliver exceptional quality at fair prices. No hidden costs, no compromises—just real value.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    description: "Starting from Uganda, we connect you to the best of Africa and beyond in seamless multi-country journeys.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "Every trip is tailor-made. We listen, we plan, and we deliver experiences that match your dreams.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "15+ years of crafting journeys means deep expertise, trusted partnerships, and flawless execution.",
  },
  {
    icon: Compass,
    title: "Responsible Travel",
    description: "We support conservation, empower local communities, and ensure tourism benefits the places we love.",
  },
];

const team = [
  {
    name: "The Founders",
    role: "Leadership",
    image: gorillaImg,
    bio: "With a deep love for Uganda and over 15 years in African travel, our founders built Gorilland TravelCare to share Africa's magic with the world.",
  },
  {
    name: "Safari Experts",
    role: "Operations & Guides",
    image: kenyaImg,
    bio: "Our experienced guides and operations team ensure every safari, trek, and tour runs seamlessly—with local knowledge you won't find anywhere else.",
  },
  {
    name: "Travel Designers",
    role: "Planning & Concierge",
    image: tanzaniaImg,
    bio: "Our travel designers craft bespoke itineraries, handle every detail, and are available around the clock to make your journey effortless.",
  },
];

const About = () => {
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-50px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal">
        <div className="container-luxury text-center">
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Who We Are
          </p>
          <h1 className="text-hero text-charcoal-foreground mb-6">
            Our <span className="text-primary italic">Story</span>
          </h1>
          <p className="text-body-elegant text-charcoal-foreground/70 max-w-2xl mx-auto">
            Born in the heart of Uganda, driven by a passion to share Africa's wonders with the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background african-pattern">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={gorillaImg}
                  alt="Gorilla trekking in Uganda"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-sm hidden md:block">
                  <p className="font-display text-3xl font-medium">15+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="accent-line mb-8" />
              <h2 className="text-section-title text-foreground mb-6">
                Born in Uganda.{" "}
                <span className="text-primary italic">Connected to All of Africa.</span>
              </h2>
              <p className="text-body-elegant text-muted-foreground leading-relaxed mb-6">
                Gorilland TravelCare Uganda is a proud Ugandan-based intra-African tour company.
                We sell Uganda to the finest detail—and then connect you to Africa's most iconic
                signature attractions. Our trips can cover multiple countries, letting you experience
                the continent's greatest wonders in a single journey.
              </p>
              <p className="text-body-elegant text-muted-foreground leading-relaxed mb-8">
                Authenticity is our identity and value is what matters to our clients.
                From the misty mountains where gorillas dwell to the Serengeti plains,
                from Victoria Falls to the pyramids of Egypt—we are your trusted gateway
                to Africa and beyond.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
                {[
                  { number: "15+", label: "Years" },
                  { number: "17", label: "Destinations" },
                  { number: "500+", label: "Journeys" },
                  { number: "100%", label: "Tailor-Made" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl text-primary mb-1">{stat.number}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary" ref={valuesRef}>
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="accent-line" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              What Drives Us
            </p>
            <h2 className="text-section-title text-foreground mb-6">
              Our <span className="text-primary italic">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-background border border-border rounded-sm hover:border-primary/30 hover:shadow-md transition-all duration-500"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background" ref={teamRef}>
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="accent-line" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              The People Behind the Journeys
            </p>
            <h2 className="text-section-title text-foreground mb-6">
              Our <span className="text-primary italic">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{member.role}</p>
                    <h3 className="font-display text-xl text-white">{member.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section-title text-charcoal-foreground mb-6">
              Ready to Start Your <span className="text-primary italic">Journey?</span>
            </h2>
            <p className="text-body-elegant text-charcoal-foreground/70 max-w-xl mx-auto mb-10">
              Let us craft a tailor-made African adventure just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations" className="btn-luxury-primary">
                Explore Destinations
              </Link>
              <Link to="/experiences" className="btn-luxury-outline">
                View Experiences
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
