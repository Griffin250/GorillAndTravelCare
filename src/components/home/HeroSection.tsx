import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          {/* Accent Line */}
          <div className="flex justify-center mb-8">
            <div className="accent-line-wide bg-primary" />
          </div>

          {/* Headline */}
          <h1 className="text-hero text-primary-foreground mb-6">
            Uganda First.
            <br />
            <span className="text-primary italic">Africa Beyond.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-subtitle text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Your Ugandan Gateway to Africa's Signature Attractions
          </p>
          <p className="text-lg text-primary-foreground/70 mb-12 max-w-xl mx-auto">
            See the best of multiple countries in a single trip — crafted with authenticity &amp; value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#plan"
              className="btn-luxury-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan Your Journey
            </motion.a>
            <motion.a
              href="#destinations"
              className="btn-luxury-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Destinations
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
              Scroll to Discover
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
