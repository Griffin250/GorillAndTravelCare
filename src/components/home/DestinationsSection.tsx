import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

// Import destination images
import tanzaniaImg from "@/assets/destinations/tanzania.jpg";
import kenyaImg from "@/assets/destinations/kenya.jpg";
import victoriaFallsImg from "@/assets/destinations/victoria-falls.jpg";
import southAfricaImg from "@/assets/destinations/south-africa.jpg";
import egyptImg from "@/assets/destinations/egypt.jpg";
import malawiImg from "@/assets/destinations/malawi.jpg";
import gorillaImg from "@/assets/destinations/gorilla-trekking.jpg";
import moroccoImg from "@/assets/destinations/morocco.jpg";
import ethiopiaImg from "@/assets/destinations/ethiopia.jpg";

const destinations = [
  {
    name: "Uganda",
    tagline: "The Pearl of Africa",
    image: gorillaImg,
    story: "Our home, our pride. Trek through Bwindi's misty forests to meet mountain gorillas face-to-face, raft the mighty Nile at its source in Jinja, and spot tree-climbing lions in Queen Elizabeth National Park. Uganda offers unmatched primate safaris, stunning crater lakes, and the warmest people on the continent. This is where your African journey begins.",
  },
  {
    name: "Kenya",
    tagline: "Safari Heartland",
    image: kenyaImg,
    story: "The birthplace of safari. Watch lions stalk the golden plains of the Masai Mara, meet Maasai warriors under vast skies, and witness the Great Migration crossing the Mara River. Kenya remains the world's most iconic wildlife destination.",
  },
  {
    name: "Tanzania",
    tagline: "The Great Migration",
    image: tanzaniaImg,
    story: "Witness over two million wildebeest thundering across the Serengeti in the greatest wildlife spectacle on Earth. From the Ngorongoro Crater to the snow-capped peak of Kilimanjaro, Tanzania is Africa at its most breathtaking.",
  },
  {
    name: "Zimbabwe",
    tagline: "Land of the Brave",
    image: victoriaFallsImg,
    story: "Experience the thundering Victoria Falls, explore the ancient ruins of Great Zimbabwe, and enjoy world-class safari in Hwange National Park. Zimbabwe combines dramatic natural wonders with rich history and culture.",
  },
  {
    name: "Zambia",
    tagline: "The Real Africa",
    image: victoriaFallsImg,
    story: "Feel the spray of Victoria Falls from the Zambian side, glide past hippos on a Zambezi sunset cruise, and experience raw, untouched bush walking safaris in the legendary South Luangwa Valley.",
  },
  {
    name: "Malawi",
    tagline: "The Warm Heart",
    image: malawiImg,
    story: "Africa's best-kept secret. Kayak crystal-clear Lake Malawi, snorkel among colourful cichlid fish, and experience the warmest, most genuine hospitality anywhere on the continent. Pure, unspoiled magic.",
  },
  {
    name: "South Africa",
    tagline: "Rainbow Nation",
    image: southAfricaImg,
    story: "From the Big Five in Kruger to the dramatic Cape winelands, South Africa offers extraordinary diversity. Explore vibrant Cape Town, drive the stunning Garden Route, and taste world-class cuisine.",
  },
  {
    name: "Eswatini",
    tagline: "Kingdom of Culture",
    image: southAfricaImg,
    story: "Discover Africa's last absolute monarchy—a tiny kingdom bursting with vibrant culture, wildlife reserves, and the spectacular Umhlanga Reed Dance. A hidden gem perfect for cultural immersion.",
  },
  {
    name: "Namibia",
    tagline: "Land of Contrasts",
    image: southAfricaImg,
    story: "Explore the towering red dunes of Sossusvlei, track desert-adapted elephants, and witness the eerie Skeleton Coast. Namibia's stark, surreal landscapes are unlike anywhere else on Earth.",
  },
  {
    name: "Cameroon",
    tagline: "Africa in Miniature",
    image: ethiopiaImg,
    story: "Rainforests, savannahs, mountains, and beaches—all in one country. Cameroon is Africa in miniature, offering incredible biodiversity, vibrant markets, and rich cultural traditions.",
  },
  {
    name: "Egypt",
    tagline: "Land of Pharaohs",
    image: egyptImg,
    story: "Stand before the Great Pyramids of Giza, cruise the timeless Nile past ancient temples, and unlock the mysteries of a 5,000-year-old civilization that still captivates the world.",
  },
  {
    name: "India",
    tagline: "Land of Wonders",
    image: moroccoImg,
    story: "From the Taj Mahal to the backwaters of Kerala, India is a kaleidoscope of colours, flavours, and spiritual depth. Experience royal palaces, tiger safaris, and ancient temples.",
  },
  {
    name: "Dubai",
    tagline: "City of Gold",
    image: egyptImg,
    story: "A dazzling fusion of ultra-modern architecture and Arabian heritage. Shop world-class malls, dine above the clouds, cruise the desert dunes, and experience luxury at its finest.",
  },
  {
    name: "Israel & Rome/Vatican",
    tagline: "Sacred Journeys",
    image: moroccoImg,
    story: "Walk where history was made. Visit Jerusalem's holy sites, float in the Dead Sea, explore the ancient streets of Rome, and stand in awe of St. Peter's Basilica in Vatican City. The ultimate pilgrimage experience.",
  },
];

export const DestinationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

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
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="destination-card group"
              onClick={() => setSelectedDestination(destination)}
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
          <a href="#plan" className="btn-luxury-dark">
            Plan a Multi-Country Trip
          </a>
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
              {/* Modal Image */}
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

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <p className="text-body-elegant text-muted-foreground leading-relaxed mb-6">
                  {selectedDestination.story}
                </p>
                <a
                  href="#plan"
                  className="btn-luxury-primary w-full text-center"
                  onClick={() => setSelectedDestination(null)}
                >
                  Explore {selectedDestination.name} Journeys
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
