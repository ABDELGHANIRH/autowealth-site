"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CleaningServiceAICaseStudy() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              How AI Is Boosting Cleaning Service Revenue in 2025
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The cleaning services industry is rapidly evolving, and businesses that rely on manual scheduling, 
              repetitive tasks, and outdated systems are struggling to stay profitable. In 2025, AI integration has 
              become a key factor separating high-performing cleaning companies from those stuck in inefficiency.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              By automating scheduling, optimizing routes, and enhancing quality control, AI helps cleaning 
              businesses cut costs, reduce no-shows, and increase revenue by up to 45%.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              The Biggest Challenges Cleaning Companies Face
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Time-Intensive Scheduling
                </h3>
                <p>
                  Manual scheduling and rescheduling cause missed appointments and poor customer satisfaction, 
                  consuming valuable administrative time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Labor-Heavy Operations
                </h3>
                <p>
                  Physically demanding work increases fatigue, employee turnover, and operating costs, 
                  making it difficult to maintain consistent service quality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Inefficient Route Planning
                </h3>
                <p>
                  Poor route planning leads to wasted fuel, longer travel times, and lower daily productivity, 
                  reducing the number of jobs completed each day.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Inconsistent Service Quality
                </h3>
                <p>
                  Variable service quality results in customer complaints and lost clients, damaging 
                  business reputation and reducing recurring revenue.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Manual Quality Checks
                </h3>
                <p>
                  Time-consuming manual inspections fail to deliver real-time insights and consistent 
                  quality assurance across all jobs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How AI Solves These Problems
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Smart Scheduling
                </h3>
                <p>
                  AI automates bookings, sends reminders, and adjusts schedules dynamically, 
                  reducing no-shows by up to 40% and saving hours in coordination.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Route Optimization
                </h3>
                <p>
                  AI calculates the most efficient cleaning routes, cutting fuel and travel costs 
                  while increasing the number of completed jobs per day.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Automated Communication
                </h3>
                <p>
                  AI tools send personalized reminders, gather feedback, and request reviews automatically, 
                  building stronger client relationships without manual effort.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Quality Management
                </h3>
                <p>
                  Smart systems analyze feedback, photos, and sensor data to maintain consistent cleaning 
                  quality and detect service issues early.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Robotic Cleaning
                </h3>
                <p>
                  AI-powered vacuums and scrubbers handle routine tasks, allowing workers to focus on 
                  complex or higher-value cleaning jobs.
                </p>
              </div>

              <p className="mt-4">
                <strong>Source: </strong>
                <Link
                  href="https://zenift.ai"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  ZeniftAI
                </Link>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Real Examples: Top Cleaning Companies Using AI
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  ISS
                </h3>
                <p>
                  Uses AI robots and smart scheduling to automate large-scale cleaning, improving efficiency and consistency.{' '}
                  <Link href="https://newzealand.ai" target="_blank" className="text-blue-600 hover:underline">NewZealand.AI</Link>
                  ,{' '}
                  <Link href="https://newo.ai" target="_blank" className="text-blue-600 hover:underline">Newo.AI</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Sodexo
                </h3>
                <p>
                  Implements AI-powered operational monitoring and predictive maintenance across facilities worldwide.{' '}
                  <Link href="https://expertmarketresearch.com" target="_blank" className="text-blue-600 hover:underline">ExpertMarketResearch</Link>
                  ,{' '}
                  <Link href="https://newo.ai" target="_blank" className="text-blue-600 hover:underline">Newo.AI</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Hilton Hotels
                </h3>
                <p>
                  Uses robotic vacuums and AI automation to reduce labor costs and maintain hygiene consistency.{' '}
                  <Link href="https://interclean.com" target="_blank" className="text-blue-600 hover:underline">Interclean Show</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Marriott International
                </h3>
                <p>
                  Leverages AI sensors and analytics to monitor cleanliness standards and optimize housekeeping workflows.{' '}
                  <Link href="https://interclean.com" target="_blank" className="text-blue-600 hover:underline">Interclean Show</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  BES Cleaning
                </h3>
                <p>
                  Uses autonomous floor sweepers to reduce fatigue, improve quality, and enhance client retention.{' '}
                  <Link href="https://newzealand.ai" target="_blank" className="text-blue-600 hover:underline">NewZealand.AI</Link>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              The Revenue Impact of AI
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <p>
                  According to{' '}
                  <Link href="https://newzealand.ai" target="_blank" className="text-blue-600 hover:underline">
                    NewZealand.AI
                  </Link>
                  , businesses adopting AI cleaning technologies experience ROI within 12 to 18 months, 
                  thanks to productivity gains of up to 30%.
                </p>
              </div>

              <div>
                <p>
                  Meanwhile,{' '}
                  <Link href="https://zenift.ai" target="_blank" className="text-blue-600 hover:underline">
                    ZeniftAI
                  </Link>
                  {' '}reports that AI automation can:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Reduce scheduling time by 77%</li>
                  <li>Eliminate up to 40% of no-shows</li>
                  <li>Boost annual revenue by 30 to 45%</li>
                </ul>
              </div>

              <p>
                By using data-driven automation, cleaning companies can scale faster, serve more clients, 
                and operate more efficiently than ever before.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Final Takeaway
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The cleaning industry is shifting from labor-intensive operations to smart, automated, and profitable systems.
              AI allows businesses to save time through automation, reduce costs with optimized routes, maintain consistent 
              service quality, and increase customer satisfaction and retention.
            </p>
          </section>
        </motion.article>
      </div>
    </section>
  );
}