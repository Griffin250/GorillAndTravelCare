import tanzaniaImg from "@/assets/destinations/tanzania.jpg";
import kenyaImg from "@/assets/destinations/kenya.jpg";
import victoriaFallsImg from "@/assets/destinations/victoria-falls.jpg";
import southAfricaImg from "@/assets/destinations/south-africa.jpg";
import egyptImg from "@/assets/destinations/egypt.jpg";
import malawiImg from "@/assets/destinations/malawi.jpg";
import gorillaImg from "@/assets/destinations/gorilla-trekking.jpg";
import moroccoImg from "@/assets/destinations/morocco.jpg";
import ethiopiaImg from "@/assets/destinations/ethiopia.jpg";

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  story: string;
  highlights: string[];
  bestTime: string;
  duration: string;
}

export const destinations: Destination[] = [
  {
    slug: "uganda",
    name: "Uganda",
    tagline: "The Pearl of Africa",
    image: gorillaImg,
    story: "Our home, our pride. Trek through Bwindi's misty forests to meet mountain gorillas face-to-face, raft the mighty Nile at its source in Jinja, and spot tree-climbing lions in Queen Elizabeth National Park. Uganda offers unmatched primate safaris, stunning crater lakes, and the warmest people on the continent. This is where your African journey begins.",
    highlights: ["Gorilla Trekking in Bwindi", "Nile Rafting in Jinja", "Queen Elizabeth National Park", "Murchison Falls", "Kibale Chimpanzee Tracking"],
    bestTime: "June – September & December – February",
    duration: "5–14 days",
  },
  {
    slug: "kenya",
    name: "Kenya",
    tagline: "Safari Heartland",
    image: kenyaImg,
    story: "The birthplace of safari. Watch lions stalk the golden plains of the Masai Mara, meet Maasai warriors under vast skies, and witness the Great Migration crossing the Mara River. Kenya remains the world's most iconic wildlife destination.",
    highlights: ["Masai Mara Great Migration", "Amboseli with Kilimanjaro Views", "Lake Nakuru Flamingos", "Samburu National Reserve", "Diani Beach"],
    bestTime: "July – October & January – March",
    duration: "5–12 days",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    tagline: "The Great Migration",
    image: tanzaniaImg,
    story: "Witness over two million wildebeest thundering across the Serengeti in the greatest wildlife spectacle on Earth. From the Ngorongoro Crater to the snow-capped peak of Kilimanjaro, Tanzania is Africa at its most breathtaking.",
    highlights: ["Serengeti National Park", "Ngorongoro Crater", "Mount Kilimanjaro", "Zanzibar Island", "Tarangire Elephant Herds"],
    bestTime: "June – October",
    duration: "7–14 days",
  },
  {
    slug: "zimbabwe",
    name: "Zimbabwe",
    tagline: "Land of the Brave",
    image: victoriaFallsImg,
    story: "Experience the thundering Victoria Falls, explore the ancient ruins of Great Zimbabwe, and enjoy world-class safari in Hwange National Park. Zimbabwe combines dramatic natural wonders with rich history and culture.",
    highlights: ["Victoria Falls", "Hwange National Park", "Great Zimbabwe Ruins", "Matobo Hills", "Mana Pools"],
    bestTime: "May – October",
    duration: "5–10 days",
  },
  {
    slug: "zambia",
    name: "Zambia",
    tagline: "The Real Africa",
    image: victoriaFallsImg,
    story: "Feel the spray of Victoria Falls from the Zambian side, glide past hippos on a Zambezi sunset cruise, and experience raw, untouched bush walking safaris in the legendary South Luangwa Valley.",
    highlights: ["Victoria Falls (Zambian Side)", "South Luangwa Walking Safaris", "Zambezi River Cruise", "Lower Zambezi Canoeing", "Kafue National Park"],
    bestTime: "June – October",
    duration: "5–10 days",
  },
  {
    slug: "malawi",
    name: "Malawi",
    tagline: "The Warm Heart",
    image: malawiImg,
    story: "Africa's best-kept secret. Kayak crystal-clear Lake Malawi, snorkel among colourful cichlid fish, and experience the warmest, most genuine hospitality anywhere on the continent. Pure, unspoiled magic.",
    highlights: ["Lake Malawi Snorkelling", "Liwonde National Park", "Mulanje Mountain", "Cape Maclear", "Nkhotakota Wildlife Reserve"],
    bestTime: "May – November",
    duration: "5–10 days",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    tagline: "Rainbow Nation",
    image: southAfricaImg,
    story: "From the Big Five in Kruger to the dramatic Cape winelands, South Africa offers extraordinary diversity. Explore vibrant Cape Town, drive the stunning Garden Route, and taste world-class cuisine.",
    highlights: ["Kruger National Park", "Cape Town & Table Mountain", "Garden Route", "Cape Winelands", "Drakensberg Mountains"],
    bestTime: "May – September (safari) / October – March (Cape)",
    duration: "7–14 days",
  },
  {
    slug: "eswatini",
    name: "Eswatini",
    tagline: "Kingdom of Culture",
    image: southAfricaImg,
    story: "Discover Africa's last absolute monarchy—a tiny kingdom bursting with vibrant culture, wildlife reserves, and the spectacular Umhlanga Reed Dance. A hidden gem perfect for cultural immersion.",
    highlights: ["Umhlanga Reed Dance", "Mlilwane Wildlife Sanctuary", "Mantenga Cultural Village", "Sibebe Rock", "Hlane Royal National Park"],
    bestTime: "May – September",
    duration: "3–5 days",
  },
  {
    slug: "namibia",
    name: "Namibia",
    tagline: "Land of Contrasts",
    image: southAfricaImg,
    story: "Explore the towering red dunes of Sossusvlei, track desert-adapted elephants, and witness the eerie Skeleton Coast. Namibia's stark, surreal landscapes are unlike anywhere else on Earth.",
    highlights: ["Sossusvlei Dunes", "Skeleton Coast", "Etosha National Park", "Deadvlei", "Fish River Canyon"],
    bestTime: "May – October",
    duration: "7–14 days",
  },
  {
    slug: "cameroon",
    name: "Cameroon",
    tagline: "Africa in Miniature",
    image: ethiopiaImg,
    story: "Rainforests, savannahs, mountains, and beaches—all in one country. Cameroon is Africa in miniature, offering incredible biodiversity, vibrant markets, and rich cultural traditions.",
    highlights: ["Mount Cameroon", "Waza National Park", "Limbe Botanical Gardens", "Bamenda Highlands", "Kribi Beaches"],
    bestTime: "November – February",
    duration: "7–12 days",
  },
  {
    slug: "egypt",
    name: "Egypt",
    tagline: "Land of Pharaohs",
    image: egyptImg,
    story: "Stand before the Great Pyramids of Giza, cruise the timeless Nile past ancient temples, and unlock the mysteries of a 5,000-year-old civilization that still captivates the world.",
    highlights: ["Pyramids of Giza", "Nile River Cruise", "Valley of the Kings", "Abu Simbel", "Luxor Temple"],
    bestTime: "October – April",
    duration: "7–12 days",
  },
  {
    slug: "india",
    name: "India",
    tagline: "Land of Wonders",
    image: moroccoImg,
    story: "From the Taj Mahal to the backwaters of Kerala, India is a kaleidoscope of colours, flavours, and spiritual depth. Experience royal palaces, tiger safaris, and ancient temples.",
    highlights: ["Taj Mahal", "Kerala Backwaters", "Ranthambore Tiger Safari", "Rajasthan Palaces", "Varanasi Ghats"],
    bestTime: "October – March",
    duration: "7–14 days",
  },
  {
    slug: "dubai",
    name: "Dubai",
    tagline: "City of Gold",
    image: egyptImg,
    story: "A dazzling fusion of ultra-modern architecture and Arabian heritage. Shop world-class malls, dine above the clouds, cruise the desert dunes, and experience luxury at its finest.",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah", "Gold Souk"],
    bestTime: "November – March",
    duration: "3–7 days",
  },
  {
    slug: "israel-rome-vatican",
    name: "Israel & Rome/Vatican",
    tagline: "Sacred Journeys",
    image: moroccoImg,
    story: "Walk where history was made. Visit Jerusalem's holy sites, float in the Dead Sea, explore the ancient streets of Rome, and stand in awe of St. Peter's Basilica in Vatican City. The ultimate pilgrimage experience.",
    highlights: ["Jerusalem Old City", "Dead Sea", "Bethlehem", "St. Peter's Basilica", "Colosseum & Roman Forum"],
    bestTime: "March – May & September – November",
    duration: "7–14 days",
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);
