"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Bot,
  MessageCircle,
  Brain,
  Workflow,
  Database,
  Mail,
  Calendar,
  TrendingUp,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Bot,
      Image: "/Processing_Bot.png",
      title: "AI Process Automation",
      description:
        "Comprehensive automation of business processes using advanced AI and machine learning. Reduce manual work by up to 80% while improving accuracy and speed.",
      features: [
        "Intelligent workflow automation",
        "Document processing with OCR",
        "Data extraction and analysis",
        "Rule-based decision making",
        "Integration with existing systems",
        "Real-time monitoring and alerts",
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
    },
    {
      Image: "/whatsapp_Bot.png",
      icon: MessageCircle,
      title: "WhatsApp & Chatbot Automation",
      description:
        "Transform your customer communication with intelligent chatbots and WhatsApp automation. Provide 24/7 support and instant responses.",
      features: [
        "AI-powered chatbot development",
        "WhatsApp Business API integration",
        "Automated appointment booking",
        "Customer support automation",
        "Multi-language support",
        "Analytics and performance tracking",
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
    },
    {
      Image: "/Consulting_Bot.png",
      icon: Brain,
      title: "AI Consulting & Strategy",
      description:
        "Expert guidance on implementing AI solutions that align with your business goals. From strategy to execution, we help you leverage AI effectively.",
      features: [
        "AI readiness assessment",
        "Custom AI strategy development",
        "Technology stack recommendations",
        "Implementation roadmaps",
        "Team training and support",
        "Performance optimization",
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
    },
  ];

  const additionalServices = [
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Streamline your business processes for maximum efficiency.",
    },
    {
      icon: Database,
      title: "Data Integration",
      description:
        "Connect and synchronize data across all your business tools.",
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Automated email campaigns and follow-up sequences.",
    },
    {
      icon: Calendar,
      title: "Scheduling Systems",
      description:
        "Smart scheduling solutions that eliminate back-and-forth emails.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Real-time insights and reporting on your automation performance.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Ensure your automations meet all security and compliance requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform your business with intelligent automation solutions that
              save time, reduce costs, and accelerate growth.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Start Your Automation Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Some of Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed to transform your
              business operations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.ctaLink} className="btn-primary">
                    {service.ctaText}
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative bg-gradient-to-br from-accent/20 to-blue-600/20 dark:from-accent/10 dark:to-blue-600/10 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                    <img
                      src={service.Image}
                      alt="Service Image"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complementary solutions to enhance your automation ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how AI automation can save you
              time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
