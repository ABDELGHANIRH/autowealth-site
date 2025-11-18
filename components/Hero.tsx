"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[89vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="AI Automation Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 md:from-primary/80 md:via-primary/60 md:to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Automate Your Business with{" "}
              <span className="text-gradient bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help businesses streamline workflows and scale with AI
              automations. Save time, boost revenue, and focus on what matters
              most.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="https://calendly.com/abdelghani-rahmani-w/15min"
                className="bg-gradient-to-r from-accent to-blue-500 text-white font-semibold rounded-xl 
               px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl 
               shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
               hover:scale-105 transition-all duration-300 text-center"
              >
                Book a Free Call
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-8 lg:mb-0">
              <Image
                src="/hero.jpg"
                alt="AI Automation Illustration"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Elements - Hidden on mobile, visible on tablet+ */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden md:block absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="hidden md:block absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, visible on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}