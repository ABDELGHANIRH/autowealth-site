'use client';

import { posts } from "@/lib/posts";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Blog – AI Automation Insights for Modern Businesses | AutoWealthAI",
  description:
    "Explore expert articles on AI automation for dental clinics, cleaning services, and e-commerce stores. Learn how to reduce no-shows, increase bookings, and boost revenue.",
  openGraph: {
    title: "Blog – AI Automation Insights | AutoWealthAI",
    description:
      "Discover how AI automation can transform your business operations with our expert insights and case studies.",
    url: "https://autowealthai.com/blog",
    siteName: "AutoWealthAI",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              AI automation insights for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6 border-l-4 border-transparent hover:border-accent hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                    <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-white group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}