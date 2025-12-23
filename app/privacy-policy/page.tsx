"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Key,
  FileCode,
  Server,
  Database,
  Mail,
  ArrowLeft,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
 

  const policySections = [
    {
      icon: Key,
      title: "1. Data We Collect",
      content: [
        "Functional Data Only: We only collect the specific information required to execute your requested automations. This typically includes API Keys, Access Tokens, Webhook URLs, and service credentials.",
        "Input Data: We process the specific business data you provide for the workflow (e.g., rows from a Google Sheet, email content for drafting replies) solely for the purpose of running that specific automation.",
        "We DO NOT collect personal browsing history, IP addresses, or device fingerprints for marketing or tracking purposes.",
      ],
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: [
        "Automation Execution: Your credentials (API keys) are used strictly to authenticate the services you have asked us to connect (e.g., connecting your Gmail to OpenAI).",
        "Troubleshooting: We may use execution logs temporarily to fix bugs or optimize the workflow performance, but only with your consent.",
        "No Secondary Use: Your data is never used for training external models, marketing, or analytics unrelated to the direct function of your automation.",
      ],
    },
    {
      icon: Server,
      title: "3. Where Your Data Goes",
      content: [
        "Integrated Services: Data is transferred directly between the services you have connected (e.g., from your CRM to your Email Provider).",
        "We do not sell, trade, or share your data with third parties. Data transfer occurs strictly between the APIs required to make your specific workflow operate.",
      ],
    },
    {
      icon: Lock,
      title: "4. Security of Credentials",
      content: [
        "Encryption: API keys and sensitive credentials provided for automation setup are handled with strict confidentiality.",
        "Storage: We generally recommend that clients host their own automation instances (e.g., self-hosted n8n). In cases where we manage the hosting, credentials are encrypted at rest.",
      ],
    },
    {
      icon: XCircle,
      title: "5. What We Do Not Collect",
      content: [
        "No Tracking Cookies: We do not use cookies to track your behavior across the internet.",
        "No Location Data: We do not collect GPS or location data unless it is a specific variable required for a location-based automation you requested.",
        "No Third-Party Analytics: We do not share your interaction data with advertising networks.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              We believe in minimal data collection. We only use the information strictly necessary to make your automations work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {policySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary via-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have Questions about your data?
                </h2>
                <p className="text-gray-200 mb-8 max-w-xl mx-auto">
                  If you have concerns about how your API keys or data are handled within our automations, please contact us directly.
                </p>
                <a
                  href="mailto:support@autowealthai.com"
                  className="btn-primary bg-white text-primary hover:bg-gray-100 border-none px-8 py-3 inline-block"
                >
                  support@autowealthai.com
                </a>
              </div>
              {/* Decorative circle */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}