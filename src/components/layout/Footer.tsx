import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  destinations: [
    "Uganda",
    "Kenya",
    "Tanzania",
    "Zimbabwe",
    "Zambia",
    "Malawi",
    "South Africa",
    "Eswatini",
    "Namibia",
    "Cameroon",
    "Egypt",
    "India",
    "Dubai",
    "Israel & Rome",
  ],
  products: [
    "Luxury Safaris",
    "Gorilla & Chimp Tracking",
    "MICE",
    "Pilgrim Tours",
    "Cultural Tours",
    "Bush to Beach",
    "VIP & Business Travel",
    "Sports Tourism",
  ],
  company: [
    "About Us",
    "Our Team",
    "Sustainability",
    "Contact",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl text-charcoal-foreground mb-4">
              Gorilland TravelCare Uganda
            </h3>
            <p className="text-sm text-charcoal-foreground/60 mb-6 leading-relaxed">
              Your Ugandan gateway to Africa's signature attractions. 
              Authenticity and value in every journey.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@gorillandtravelcare.com"
                className="flex items-center gap-3 text-sm text-charcoal-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                info@gorillandtravelcare.com
              </a>
              <a
                href="tel:+2567772642101"
                className="flex items-center gap-3 text-sm text-charcoal-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +2567772642101
              </a>
              <div className="flex items-center gap-3 text-sm text-charcoal-foreground/70">
                <MapPin size={16} />
                Kampala, Uganda
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-medium">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link}>
                  <a
                    href="#destinations"
                    className="text-sm text-charcoal-foreground/60 hover:text-charcoal-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-medium">
              Our Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href="#experiences"
                    className="text-sm text-charcoal-foreground/60 hover:text-charcoal-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#about"
                    className="text-sm text-charcoal-foreground/60 hover:text-charcoal-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-foreground/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-foreground/50">
            © {new Date().getFullYear()} Gorilland TravelCare Uganda. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-charcoal-foreground/50 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-charcoal-foreground/50 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-charcoal-foreground/50 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
