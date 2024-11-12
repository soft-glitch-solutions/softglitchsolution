import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  url: string;
}

export default function ProductCard({ title, description, features, image, url }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}