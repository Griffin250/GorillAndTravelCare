import {
  Compass, TreePine, Heart, Mountain, Landmark, Users,
  Briefcase, Plane, Crown, Globe, Footprints, Palmtree, Stethoscope, Trophy,
  type LucideIcon,
} from "lucide-react";

import gorillaImg from "@/assets/destinations/gorilla-trekking.jpg";
import kenyaImg from "@/assets/destinations/kenya.jpg";
import tanzaniaImg from "@/assets/destinations/tanzania.jpg";
import victoriaFallsImg from "@/assets/destinations/victoria-falls.jpg";
import southAfricaImg from "@/assets/destinations/south-africa.jpg";
import malawiImg from "@/assets/destinations/malawi.jpg";
import egyptImg from "@/assets/destinations/egypt.jpg";
import moroccoImg from "@/assets/destinations/morocco.jpg";
import ethiopiaImg from "@/assets/destinations/ethiopia.jpg";

export interface Experience {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  duration: string;
  destinations: string[];
}

export const experiences: Experience[] = [
  {
    slug: "luxury-safaris",
    icon: Crown,
    title: "Luxury Safaris",
    description: "World-class lodges and exclusive wildlife experiences across Africa's finest reserves.",
    longDescription: "Indulge in the pinnacle of African travel. Our luxury safaris combine exclusive game reserves, five-star lodges, private guides, and gourmet bush dining. From the vast Serengeti to the intimate Okavango Delta, every detail is curated for discerning travellers who demand the extraordinary.",
    image: kenyaImg,
    highlights: ["Private game drives", "Five-star bush lodges", "Gourmet bush dining", "Helicopter transfers", "Spa & wellness in the wild"],
    duration: "5–14 days",
    destinations: ["Kenya", "Tanzania", "South Africa", "Namibia"],
  },
  {
    slug: "gorilla-chimpanzee-tracking",
    icon: Footprints,
    title: "Gorilla & Chimpanzee Tracking",
    description: "Encounter mountain gorillas and chimpanzees in Uganda's misty forests—our signature experience.",
    longDescription: "Our signature experience. Trek through the ancient Bwindi Impenetrable Forest to sit just metres from a family of endangered mountain gorillas. Add chimpanzee tracking in Kibale Forest for the ultimate primate safari. These encounters are life-changing—raw, emotional, and unforgettable.",
    image: gorillaImg,
    highlights: ["Bwindi Gorilla Permits", "Kibale Chimpanzee Tracking", "Expert naturalist guides", "Forest lodge stays", "Community visits"],
    duration: "3–7 days",
    destinations: ["Uganda", "Rwanda"],
  },
  {
    slug: "nature-tours",
    icon: TreePine,
    title: "Nature Tours",
    description: "Immerse yourself in Africa's breathtaking landscapes, from rainforests to savannahs.",
    longDescription: "Africa's landscapes are staggeringly diverse. Explore mist-shrouded rainforests, golden savannahs stretching to the horizon, volcanic crater lakes, and dramatic rift valleys. Our nature tours are designed for those who want to be immersed in the wild beauty of the continent.",
    image: ethiopiaImg,
    highlights: ["Guided nature walks", "Bird watching", "Botanical gardens", "Crater lake visits", "Scenic drives"],
    duration: "5–10 days",
    destinations: ["Uganda", "Kenya", "Tanzania", "Malawi"],
  },
  {
    slug: "cultural-tours",
    icon: Users,
    title: "Cultural Tours",
    description: "Connect with vibrant communities and experience authentic African traditions and heritage.",
    longDescription: "Go beyond the wildlife. Meet the Batwa pygmies of Uganda, dance with Maasai warriors in Kenya, visit the Zulu heartlands of South Africa, and explore ancient Ethiopian rock-hewn churches. Our cultural tours create genuine human connections that enrich your journey.",
    image: moroccoImg,
    highlights: ["Community homestays", "Traditional ceremonies", "Local craft workshops", "Historical site visits", "Cultural performances"],
    duration: "5–12 days",
    destinations: ["Uganda", "Kenya", "Eswatini", "South Africa"],
  },
  {
    slug: "mice",
    icon: Briefcase,
    title: "MICE",
    description: "Meetings, Incentives, Conferences & Exhibitions—seamlessly organized in stunning African settings.",
    longDescription: "Transform your corporate events with the magic of Africa. We organize world-class conferences in Kampala, incentive trips to the Serengeti, team-building safaris, and exhibitions in Cape Town—all with impeccable logistics and unforgettable experiences woven in.",
    image: southAfricaImg,
    highlights: ["Venue sourcing & management", "Team-building activities", "Corporate safari packages", "Gala dinner planning", "Full logistics support"],
    duration: "3–7 days",
    destinations: ["Uganda", "Kenya", "South Africa", "Tanzania"],
  },
  {
    slug: "pilgrim-tours",
    icon: Landmark,
    title: "Pilgrim Tours",
    description: "Spiritual journeys to sacred sites including Israel, Rome, Vatican and beyond.",
    longDescription: "Walk in the footsteps of prophets and saints. Our pilgrim tours take you to Jerusalem's holy sites, Bethlehem, the Vatican, and Rome's ancient churches. Led by experienced spiritual guides, these journeys combine faith, history, and fellowship.",
    image: egyptImg,
    highlights: ["Jerusalem & Bethlehem", "Vatican City tour", "Dead Sea experience", "Roman Colosseum", "Spiritual group fellowship"],
    duration: "7–14 days",
    destinations: ["Israel & Rome/Vatican"],
  },
  {
    slug: "holidays-honeymoons",
    icon: Heart,
    title: "Holidays & Honeymoons",
    description: "Romantic escapes and family holidays crafted to create unforgettable memories.",
    longDescription: "Celebrate love and togetherness in Africa's most romantic settings. From private island retreats on Lake Malawi to sunset dhow cruises in Zanzibar, candlelit bush dinners under the stars, and luxury beach escapes—we create the perfect backdrop for your love story.",
    image: malawiImg,
    highlights: ["Private beach villas", "Sunset cruises", "Candlelit bush dinners", "Spa retreats", "Island getaways"],
    duration: "5–14 days",
    destinations: ["Malawi", "Tanzania", "Kenya", "South Africa"],
  },
  {
    slug: "mountaineering",
    icon: Mountain,
    title: "Mountaineering",
    description: "Summit the Rwenzoris, Kilimanjaro, Mount Kenya and other iconic African peaks.",
    longDescription: "Conquer Africa's greatest summits. Our expert mountain guides lead treks up the snow-capped Rwenzoris (Mountains of the Moon), the mighty Kilimanjaro, and the rugged peaks of Mount Kenya. Whether you're a seasoned climber or adventurous first-timer, we'll get you to the top.",
    image: tanzaniaImg,
    highlights: ["Kilimanjaro summit treks", "Rwenzori expeditions", "Mount Kenya climbing", "Acclimatization programs", "Porter & guide teams"],
    duration: "5–10 days",
    destinations: ["Tanzania", "Uganda", "Kenya"],
  },
  {
    slug: "bush-to-beach",
    icon: Palmtree,
    title: "Bush to Beach",
    description: "Combine thrilling safari adventures with relaxing tropical beach getaways.",
    longDescription: "The perfect combination. Start with heart-pounding game drives on the African savannah, then unwind on pristine Indian Ocean beaches. From Kenya's Masai Mara to Diani Beach, or Tanzania's Serengeti to Zanzibar—we seamlessly blend adventure and relaxation.",
    image: victoriaFallsImg,
    highlights: ["Safari + beach combos", "Zanzibar spice tours", "Diani Beach resorts", "Snorkelling & diving", "Dhow sunset sails"],
    duration: "7–14 days",
    destinations: ["Kenya", "Tanzania", "Malawi"],
  },
  {
    slug: "medical-tours",
    icon: Stethoscope,
    title: "Medical Tours",
    description: "Health and wellness travel with access to world-class medical facilities.",
    longDescription: "Combine world-class healthcare with the healing power of Africa. We arrange medical consultations, treatments, and wellness retreats at top facilities, paired with recovery stays at serene safari lodges and beach resorts.",
    image: southAfricaImg,
    highlights: ["Hospital & clinic coordination", "Recovery lodge stays", "Wellness retreats", "Medical visa assistance", "Aftercare planning"],
    duration: "5–14 days",
    destinations: ["South Africa", "India", "Dubai"],
  },
  {
    slug: "vip-business-travel",
    icon: Plane,
    title: "VIP & Business Travel",
    description: "Premium travel arrangements for executives and VIPs with white-glove service.",
    longDescription: "Travel like royalty. Our VIP services include private jet charters, luxury vehicle transfers, executive hotel bookings, and dedicated concierge support. Whether it's a business trip to Nairobi or a VIP safari, every detail is handled with precision.",
    image: egyptImg,
    highlights: ["Private jet charters", "Executive transfers", "VIP hotel suites", "24/7 concierge", "Fast-track airport services"],
    duration: "Custom",
    destinations: ["All destinations"],
  },
  {
    slug: "sports-tourism",
    icon: Trophy,
    title: "Sports Tourism",
    description: "Attend major sporting events or enjoy adventure sports across the continent.",
    longDescription: "From the Cape Town Marathon to East African athletic championships, white-water rafting on the Nile, and mountain biking in the Rwenzori foothills—Africa is an adventure sports paradise. We handle tickets, logistics, and accommodation.",
    image: gorillaImg,
    highlights: ["Event tickets & hospitality", "White-water rafting", "Mountain biking", "Marathon packages", "Golf safaris"],
    duration: "3–10 days",
    destinations: ["Uganda", "Kenya", "South Africa"],
  },
  {
    slug: "incentive-travel",
    icon: Globe,
    title: "Incentive Travel",
    description: "Reward your team with unforgettable African incentive trips that inspire and motivate.",
    longDescription: "Motivate and reward your top performers with once-in-a-lifetime African experiences. From exclusive gorilla encounters to private game reserves and luxury beach retreats, our incentive packages are designed to inspire loyalty and create lasting memories.",
    image: kenyaImg,
    highlights: ["Custom reward programs", "Exclusive experiences", "Team adventures", "Award ceremonies", "Branded events"],
    duration: "3–7 days",
    destinations: ["Uganda", "Kenya", "Tanzania", "South Africa"],
  },
  {
    slug: "multi-country-adventures",
    icon: Compass,
    title: "Multi-Country Adventures",
    description: "See Africa's signature attractions across multiple countries in a single epic journey.",
    longDescription: "Why visit one country when you can experience the best of several? Our multi-country itineraries combine Uganda's gorillas with Kenya's Masai Mara, Tanzania's Serengeti with Zanzibar's beaches, and South Africa's Cape with Victoria Falls. The ultimate African odyssey.",
    image: tanzaniaImg,
    highlights: ["Cross-border logistics", "Combined safari routes", "Multi-visa assistance", "Regional flight bookings", "Custom itineraries"],
    duration: "10–21 days",
    destinations: ["Multiple countries"],
  },
];

export const getExperienceBySlug = (slug: string) =>
  experiences.find((e) => e.slug === slug);
