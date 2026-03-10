import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass, TreePine, Heart, Mountain, Landmark, Users,
  Briefcase, Plane, Crown, Globe, Footprints, Palmtree, Stethoscope, Trophy
} from "lucide-react";

const experiences = [
  {
    icon: Crown,
    title: "Luxury Safaris",
    description: "World-class lodges and exclusive wildlife experiences across Africa's finest reserves.",
  },
  {
    icon: Footprints,
    title: "Gorilla & Chimpanzee Tracking",
    description: "Encounter mountain gorillas and chimpanzees in Uganda's misty forests—our signature experience.",
  },
  {
    icon: TreePine,
    title: "Nature Tours",
    description: "Immerse yourself in Africa's breathtaking landscapes, from rainforests to savannahs.",
  },
  {
    icon: Users,
    title: "Cultural Tours",
    description: "Connect with vibrant communities and experience authentic African traditions and heritage.",
  },
  {
    icon: Briefcase,
    title: "MICE",
    description: "Meetings, Incentives, Conferences & Exhibitions—seamlessly organized in stunning African settings.",
  },
  {
    icon: Landmark,
    title: "Pilgrim Tours",
    description: "Spiritual journeys to sacred sites including Israel, Rome, Vatican and beyond.",
  },
  {
    icon: Heart,
    title: "Holidays & Honeymoons",
    description: "Romantic escapes and family holidays crafted to create unforgettable memories.",
  },
  {
    icon: Mountain,
    title: "Mountaineering",
    description: "Summit the Rwenzoris, Kilimanjaro, Mount Kenya and other iconic African peaks.",
  },
  {
    icon: Palmtree,
    title: "Bush to Beach",
    description: "Combine thrilling safari adventures with relaxing tropical beach getaways.",
  },
  {
    icon: Stethoscope,
    title: "Medical Tours",
    description: "Health and wellness travel with access to world-class medical facilities.",
  },
  {
    icon: Plane,
    title: "VIP & Business Travel",
    description: "Premium travel arrangements for executives and VIPs with white-glove service.",
  },
  {
    icon: Trophy,
    title: "Sports Tourism",
    description: "Attend major sporting events or enjoy adventure sports across the continent.",
  },
  {
    icon: Globe,
    title: "Incentive Travel",
    description: "Reward your team with unforgettable African incentive trips that inspire and motivate.",
  },
  {
    icon: Compass,
    title: "Multi-Country Adventures",
    description: "See Africa's signature attractions across multiple countries in a single epic journey.",
  },
];

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
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group p-6 bg-charcoal-foreground/5 border border-charcoal-foreground/10 rounded-sm hover:bg-charcoal-foreground/10 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-4">
                <experience.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-charcoal-foreground mb-2">
                {experience.title}
              </h3>
              <p className="text-sm text-charcoal-foreground/60 leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
