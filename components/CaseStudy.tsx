'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  image: string;
  title: string;
  description: string;
  results: string[];
  blogUrl: string;
  delay?: number;
}

export default function CaseStudy({
  image,
  title,
  description,
  results,
  blogUrl,
  delay = 0,
}: CaseStudyProps) {
  return (
    <div className="card overflow-hidden group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
          {description}
        </p>

        {/* Results */}
        <div className="space-y-2 mb-6">
          <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Results</h4>
          {results.map((result, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{result}</span>
            </div>
          ))}
        </div>

        {/* Blog Button */}
        <Link
          href={blogUrl}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group/btn"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}