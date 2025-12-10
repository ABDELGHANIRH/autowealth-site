'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  ctaText = 'Learn More',
  ctaLink = '/services',
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="card p-8 text-center group"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>


    </motion.div>
  );
}