"use client";

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@autowealthai.com',
      link: `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@autowealthai.com'}`,
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      link: `https://wa.me/+212762489130`,
      description: 'Available for quick questions',
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      content: 'Schedule a free consultation',
      link: "https://calendly.com/abdelghani-rahmani-w/15min",
      description: '15-30 minutes strategy session',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you implement automation solutions?',
      answer: 'Most basic automations can be implemented within 1-2 weeks or less. Complex enterprise solutions typically take 4-8 weeks depending on requirements.',
    },
    {
      question: 'What is the typical ROI on automation projects?',
      answer: 'Our clients typically see 200-400% ROI within the first 6 months, with most projects paying for themselves within 3 months.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, updates, and optimization to ensure your automations run smoothly.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in integrating with popular business tools like CRMs, ERPs, marketing platforms, and custom systems.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding  bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-6xl pt-4 lg:text-5xl font-bold mb-6">
              Let's Transform Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 ">
              Ready to free up time and grow your revenue with AI automation? 
              <br /> Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-7 md:py-7 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {info.description}
                </p>
                <Link
                  href={info.link}
                  className="text-accent hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {info.content}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Response Promise */}
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    Quick Response Guarantee
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We understand that time is money in business. That's why we guarantee:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Response within 2 hours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Free consultation within 24 hours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Custom proposal within 48 hours</span>
                  </li>
                </ul>
              </div>

              {/* What to Expect */}
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    What to Expect
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  During your free consultation, we'll:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Analyze your current workflows</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Identify automation opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Provide a custom ROI estimate</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Create an implementation roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Direct Booking CTA */}
              <div className="card p-6 bg-gradient-to-r from-accent to-blue-600 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Skip the back-and-forth and book a call directly. 
                  Get a personalized automation strategy in 15 minutes.
                </p>
                <Link
                  href="https://calendly.com/abdelghani-rahmani-w/15min"
                  className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
                >
                  <span>Book Free Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our AI automation services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-3">
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
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't Let Manual Tasks Hold You Back
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join 168+ million businesses already saving time and scaling with AI automation. 
              Your free consultation is just one click away.
            </p>
            <Link
              href="https://calendly.com/abdelghani-rahmani-w/15min"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Free Call Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
