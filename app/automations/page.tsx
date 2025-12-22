"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Download,
  X,
  Bot,
  FileJson,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import Link from "next/link";

// --- Mock Data for Automations ---
const automations = [
  {
    id: 1,
    title: "Google Maps Lead Scraper",
    shortDescription: "Extract business emails from G-Maps automatically.",
    image: "/automation/Google Maps Scraper.png", // Replace with your actual image paths
    category: "Lead Gen",
    downloadUrl: "/automation/Google_Maps_Scraper.json", // Replace with your actual file paths
    instructions: [
      "Add your Google Gemini API Key and Google Sheets credentials in the n8n credential settings.",
      "Open the 'Edit Fields' node to define your Target City (e.g., 'London') and Business Niche.",
      "Create a blank Google Sheet with headers 'Name' and 'Email', then link it in the 'Append to Sheet' node.",
      "Execute the workflow to generate local search queries, scrape results, and save verified emails."
    ]
  },
  {
    id: 2,
    title: "Google Sheets List Validator",
    shortDescription: "Cross-reference two Google Sheets to filter valid emails or any Data and sync matches.",
    image: "/automation/Data validator.png", // Ensure you have an image with this name
    category: "Data validator",
    downloadUrl: "/automation/Data validator.json", // Ensure the file is named this in your public folder
    instructions: [
      "Connect your Google Sheets credentials in the n8n credential settings.",
      "Configure the 'Original' node to select your input sheet (e.g., list of validated emails).",
      "Set the 'Get row(s)' node to select the master list you want to check against.",
      "Configure the 'Append or update' node to select the destination sheet where matches will be saved.",
      "Run the workflow to automatically filter and sync contacts that appear in both lists."
    ]
  },
  {
    id: 3,
    title: "All-in-One Lead Scraper",
    shortDescription: "A universal scraper that extracts data from Google Maps, Websites, and Social Media in one flow.",
    image: "/automation/All in One Scraper.png", // Ensure you have an image with this name
    category: "Growth Hacking",
    downloadUrl: "/automation/All in One Scraper.json", // Matches your uploaded filename
    instructions: [
      "Import the JSON file and set up your Google Sheets credentials.",
      "Open the 'Edit Fields' (or Set) node to define your target industry and location.",
      "If using AI features, add your OpenAI or Google Gemini API key in the credentials.",
      "Run the workflow to scrape Maps, visit websites for emails, and aggregate data into your sheet."
    ]
  },
  {
    id: 4,
    title: "Bulk Cold Email Sender",
    shortDescription: "Automate personalized cold outreach with built-in delays and Google Sheets integration.",
    image: "/automation/Email sender.png", // Ensure you have an image with this name
    category: "Marketing",
    downloadUrl: "/automation/Email_Sender.json", // Matches your uploaded filename
    instructions: [
      "Add your Gmail or SMTP credentials to the email sending node.",
      "Connect the Google Sheets node to your leads list (ensure you have an 'Email' column).",
      "Open the Email node to customize your Subject line and Body using dynamic fields like {{ $json.Name }}.",
      "Adjust the 'Wait' node to set a safe sending delay (e.g., 45-60 seconds) to prevent spam flagging."
    ]
  },
  {
    id: 5,
    title: "Twitter/X Auto-Poster",
    shortDescription: "Automatically schedule and publish tweets or threads directly from your content calendar.",
    image: "/automation/Twitter_automation.png", // Ensure you have an image with this name
    category: "Social Media",
    downloadUrl: "/automation/Twitter.json", // Matches your uploaded filename
    instructions: [
      "Connect your X (Twitter) Developer App credentials in the n8n credential settings.",
      "Set up your trigger (e.g., a Schedule node or a 'New Row' trigger from Google Sheets/Notion).",
      "Map your content columns (text and media URLs) to the Twitter node's input fields.",
      "Run a test execution to verify the tweet appears on your timeline, then activate the workflow."
    ]
  },
  {
    id: 6,
    title: "Email Account Warm-Up",
    shortDescription: "Build domain reputation automatically by simulating natural email traffic and engagement.",
    image: "/automation/warm-up.png", // Ensure you have an image with this name
    category: "Deliverability",
    downloadUrl: "/automation/warm-up.json", // Matches your uploaded filename
    instructions: [
      "Connect your SMTP and IMAP credentials for the account you need to warm up.",
      "Input a list of safe 'seed' email addresses (recipient accounts) in the Set node.",
      "Configure the AI node or text generator to create unique, natural-sounding email bodies.",
      "Set the Schedule trigger (e.g., daily) and slowly increase the batch size limit over time."
    ]
  },
  {
    id: 7,
    title: "YouTube Content Repurposer",
    shortDescription: "Turn any YouTube video into a blog post, newsletter, or summary using AI.",
    image: "/automation/Youtube_Automation.png", // Ensure you have an image with this name
    category: "Content Creation",
    downloadUrl: "/automation/youtube.json", // Matches your uploaded filename
    instructions: [
      "Add your YouTube Data API credentials in n8n settings.",
      "Input the Video ID or Channel ID you want to process in the Trigger node.",
      "Connect your OpenAI or Gemini credentials to the AI Agent node for summarization.",
      "Run the workflow to generate a structured summary, blog post, or tweet thread from the video transcript."
    ]
  },
];

export default function AutomationsLibrary() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Cpu className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">n8n Workflow Library</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automate Faster with <span className="text-accent">Pre-Built</span> Workflows
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Download our battle-tested JSON templates. Import them into your n8n instance and start saving time immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding container mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation) => (
            <motion.div
              key={automation.id}
              layoutId={`card-${automation.id}`}
              onClick={() => setSelectedId(automation.id)}
              className="group bg-white dark:bg-gray-900 rounded-3xl shadow-lg cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Card Image */}
              <motion.div 
                layoutId={`image-${automation.id}`}
                className="relative h-48 w-full bg-gray-200"
              >
                {/* Fallback color if image missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-gray-400">
                    <FileJson className="w-12 h-12 opacity-50"/>
                </div>
                <Image
                  src={automation.image}
                  alt={automation.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                  {automation.category}
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6">
                <motion.h3 
                  layoutId={`title-${automation.id}`}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {automation.title}
                </motion.h3>
                <motion.p 
                  layoutId={`desc-${automation.id}`}
                  className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2"
                >
                  {automation.shortDescription}
                </motion.p>
                
                <div className="mt-4 flex items-center text-primary dark:text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Expanded Card */}
            {automations
              .filter((item) => item.id === selectedId)
              .map((automation) => (
                <motion.div
                  layoutId={`card-${automation.id}`}
                  key={automation.id}
                  className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                >
                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                    }}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Expanded Image */}
                  <motion.div 
                    layoutId={`image-${automation.id}`}
                    className="relative h-64 w-full shrink-0"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-gray-400">
                        <FileJson className="w-16 h-16 opacity-50"/>
                     </div>
                    <Image
                      src={automation.image}
                      alt={automation.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                        <motion.h2 
                        layoutId={`title-${automation.id}`}
                        className="text-3xl font-bold text-white mb-2"
                        >
                        {automation.title}
                        </motion.h2>
                        <motion.p 
                         layoutId={`desc-${automation.id}`}
                         className="text-gray-200 text-lg"
                        >
                        {automation.shortDescription}
                        </motion.p>
                    </div>
                  </motion.div>

                  {/* Scrollable Content Area */}
                  <div className="p-8 overflow-y-auto">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                            <Bot className="w-5 h-5 text-accent" />
                            How to make it work
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                            <ul className="space-y-4">
                                {automation.instructions.map((step, idx) => (
                                    <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center text-xs font-bold mt-0.5">
                                            {idx + 1}
                                        </div>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <a 
                            href={automation.downloadUrl}
                            download
                            className="btn-primary flex-1 flex items-center justify-center gap-2 py-4 text-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Download className="w-5 h-5" />
                            Download JSON
                        </a>
                        <Link 
                            href="/contact"
                            className="px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 font-semibold text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-accent dark:hover:text-accent transition-colors text-center"
                        >
                            Need help setting up?
                        </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}