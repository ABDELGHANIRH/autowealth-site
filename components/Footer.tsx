'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AW</span>
              </div>
              <span className="text-xl font-bold text-primary dark:text-white">AutoWealthAI</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Automate. Grow. Prosper. We help businesses streamline workflows and scale with AI automations.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@autowealthai.com'}`}
                className="hover:text-accent transition-colors duration-300"
              >
                {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@autowealthai.com'}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/automations" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300">
                  automations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <a 
                  href="https://wa.me/+212762489130"
                  className="hover:text-accent transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Global Services</span>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/contact"
                className="btn-primary text-sm px-4 py-2"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} AutoWealthAI. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}