import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Enterprise Suite',
    description: 'All-in-one business management platform',
    features: ['Resource Planning', 'Analytics Dashboard', 'Team Collaboration'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80',
    url: 'https://softglitch.com/enterprise-suite'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure services',
    features: ['Auto Scaling', 'Data Security', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80',
    url: 'https://softglitch.com/cloud-solutions'
  },
  {
    title: 'CrecheSpots',
    description: 'Find nearby creches and childcare centers with ease',
    features: ['Real-time Availability', 'Parent Reviews', 'Virtual Tours', 'Instant Booking'],
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    url: 'https://crechespots.softglitch.com'
  },
  {
    title: 'Commiploy',
    description: 'Community-driven platform for hiring local talent for odd jobs',
    features: ['Verified Professionals', 'Secure Payments', 'Real-time Tracking', 'Rating System'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80',
    url: 'https://commiploy.softglitch.com'
  },
  {
    title: 'KhosiKasi',
    description: 'Empowering entrepreneurs through education and resources',
    features: ['Online Courses', 'Mentorship Programs', 'Business Tools', 'Networking Events'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80',
    url: 'https://khosikasi.softglitch.com'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-xl text-gray-600">Innovative solutions that drive results</p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}