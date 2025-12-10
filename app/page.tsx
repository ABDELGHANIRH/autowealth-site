"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CaseStudy from "@/components/CaseStudy";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Zap,
  Clock,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: Users,
      title: "Lead Generation Automation",
      description:
        "Automatically capture, nurture, and convert leads with AI-powered systems that work 24/7 to grow your customer base.",
      ctaText: "Learn More",
      ctaLink: "/services",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Appointment System",
      description:
        "Streamline your booking process with intelligent WhatsApp automation that schedules appointments and sends reminders.",
      ctaText: "Learn More",
      ctaLink: "/services",
    },
    {
      icon: TrendingUp,
      title: "AI Customer Follow-ups",
      description:
        "Never miss a follow-up opportunity with AI systems that automatically engage customers at the perfect moment.",
      ctaText: "Learn More",
      ctaLink: "/services",
    },
  ];

  const howItWorks = [
    {
      icon: Zap,
      title: "Analyze",
      description:
        "We analyze your current workflows and identify automation opportunities.",
    },
    {
      icon: Target,
      title: "Design",
      description:
        "Custom AI solutions designed specifically for your business needs.",
    },
    {
      icon: Clock,
      title: "Implement",
      description:
        "Quick deployment with minimal disruption to your operations.",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description:
        "Continuous optimization and scaling as your business grows.",
    },
  ];

  const caseStudies = [
    {
      image: "/case1.jpg",
      title: "E-commerce Revenue Boost",
      blogUrl: "/e_commerce",
      description:
        "Implemented AI-driven abandoned cart recovery system for an online retailer.",
      results: [
        "23-27% increase in recovered sales",
        "40-50% reduction in manual follow-ups",
        "$100K+ additional monthly revenue",
      ],
    },

    {
      image: "/case2.jpg",
      title: "Cleaning Service Revenue Boost",
      blogUrl: "/cleaning_service",
      description:
        "Deployed AI-powered scheduling and reminders for a cleaning company, cutting no-shows and saving time.",
      results: [
        "70-80% reduction in no-shows",
        "50-60% less time spent on scheduling",
        "30-40% increase in client satisfaction",
      ],
    },
    {
      image: "/case3.jpg",
      title: "Dental Clinic Revenue Boost",
      blogUrl: "/dental_clinic",
      description:
        "Deployed AI-driven scheduling and reminders, cutting no-shows and speeding up bookings.",
      results: [
        "30% reduction in no-shows",
        "50% faster scheduling",
        "150-200% ROI in 6 months",
      ],
    },
  ];

  return (
    <>
      <Hero />

      {/* Services Preview Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Our AI Automation Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transform your business with intelligent automation solutions that
              work around the clock.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.2} />
            ))}
          </div>

          {/* Button to Services Page */}
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              More Services
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our proven 4-step process to automate your business and accelerate
              growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real results from businesses that transformed with AI automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy key={index} {...study} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already saving time and scaling with
              AI automation.
            </p>
            <Link
              href="https://calendly.com/free-consulting-session/15min"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
