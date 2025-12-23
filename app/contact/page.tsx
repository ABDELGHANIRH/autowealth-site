"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  Calendar,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "support@autowealthai.com",
      link: `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "support@autowealthai.com"}`,
      description: "We respond within 24 hours",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "Chat with us on WhatsApp",
      link: `https://wa.me/+212762489130`,
      description: "Available for quick questions",
      color: "bg-green-500",
    },
    {
      icon: Calendar,
      title: "Book a Call",
      content: "Schedule a consultation",
      link: "https://calendly.com/free-consulting-session/15min",
      description: "15-30 minutes strategy session",
      color: "bg-purple-500",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you implement automation solutions?",
      answer:
        "Most basic automations can be implemented within 1-2 weeks or less. Complex enterprise solutions typically take 4-8 weeks depending on requirements.",
    },
    {
      question: "What is the typical ROI on automation projects?",
      answer:
        "Our clients typically see 200-400% ROI within the first 6 months, with most projects paying for themselves within 3 months.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support packages including monitoring, updates, and optimization to ensure your automations run smoothly.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in integrating with popular business tools like CRMs, ERPs, marketing platforms, and custom systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 bg-gradient-to-br from-primary via-blue-900 to-blue-950 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Open for new projects</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Transform Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Ready to free up time and grow your revenue with AI automation?
              Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <section className="relative z-20 -mt-20 mb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.title === "WhatsApp" || info.title === "Book a Call" ? "_blank" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-primary dark:text-blue-400 font-medium mb-2 group-hover:underline">
                  {info.content}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right Column: Info & Promise */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Guarantee Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Response Guarantee
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Time is money. We respect yours. Here is what you can expect when you reach out:
                </p>
                <ul className="space-y-4">
                  {[
                    "Response within 2 hours (Business Hours)",
                    "Free consultation booked within 24 hours",
                    "Custom proposal delivered within 48 hours"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectations Card */}
              <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">What to Expect</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  During your free 15-minute consultation, we won't sell you. We will:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Analyze your current workflow bottlenecks",
                    "Identify high-ROI automation opportunities",
                    "Provide a rough implementation roadmap"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      <span className="text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://calendly.com/free-consulting-session/15min"
                  className="w-full bg-white text-primary font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent to-blue-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Don't Let Manual Tasks Hold You Back
            </h2>
            <p className="text-xl text-blue-50 mb-8 relative z-10">
              Join businesses already saving time and scaling with AI automation. 
              Your free consultation is just one click away.
            </p>
            <Link
              href="https://calendly.com/free-consulting-session/15min"
              className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg relative z-10"
            >
              Book Your Free Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}