"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About AutoWealthAI – Experts in Business Automation",
  description:
    "Learn more about AutoWealthAI, our mission, and how we help businesses automate operations using AI and smart workflows.",
  openGraph: {
    title: "About AutoWealthAI",
    description:
      "Who we are and why we build automation solutions that help businesses grow.",
    url: "https://autowealthai.com/about",
    siteName: "AutoWealthAI",
  },
};


export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable ROI and tangible business outcomes for every automation project.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description:
        "Your success is our priority. We build solutions that truly solve your business challenges.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying at the forefront of AI technology to bring you cutting-edge automation solutions.",
    },
  ];

  const stats = [
    {
      number: "168 million+",
      label: "Businesses Automated",
      icon: Users,
    },
    {
      number: "60 to 800+ ",
      label: "hours monthly saved depending on company size",
      icon: TrendingUp,
    },
    {
      number: "87.2%",
      label: " of customers rate AI interactions positively",
      icon: Award,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: CheckCircle,
    },
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Passionate automation engineer with 10+ years of experience helping businesses scale through AI.",
      avatar: "/founder.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Head of AI Development",
      bio: "Machine learning expert specializing in natural language processing and conversational AI.",
      avatar: "/founder.jpg",
    },
    {
      name: "Michael Torres",
      role: "Automation Consultant",
      bio: "Business process optimization specialist with a track record of delivering 200%+ ROI for clients.",
      avatar: "/founder.jpg",
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
              About AutoWealthAI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Founded by passionate automation engineers helping businesses use
              AI to scale profits and streamline operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                AutoWealthAI was created from a passion for making AI accessible
                and practical for businesses of all kinds.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The goal has always been to simplify work, reduce repetitive
                tasks, and let businesses focus on what truly matters.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Today, it helps companies save hundreds of hours each month and
                operate more efficiently through intelligent automation.
              </p>

              <Link href="/contact" className="btn-primary">
                Work With Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="AutoWealthAI Founder"
                  fill
                  className="object-cover object-[center_10%]" // 👈 moves the image down
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We believe every business deserves access to powerful automation
              tools that drive growth and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              The Impact of AI on Businesses
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for themselves - real results from real
              businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to helping your business
              succeed with AI automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Ready to Join Our Case Studies?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar
              results with AI automation.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
