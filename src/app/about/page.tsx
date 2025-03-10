// app/about/page.jsx
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At <span className='font-bold'>Foody</span>, we are passionate about delivering delicious, high-quality meals that bring people together. Our mission is to create unforgettable dining experiences by combining fresh ingredients, innovative recipes, and a commitment to excellence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Free Photo _ Crop plate with savory salad.jpeg"
              alt="Savory Salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Free Photo _ High angle bacon burger with salad and copy-space.jpeg"
              alt="Bacon Burger"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Premium Photo _ Front view burger with french fries.jpeg"
              alt="Burger with Fries"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded in 2025, <span className='font-bold'>Foody</span> started as a small family-owned restaurant with a big dream. Over the years, we’ve grown into a beloved destination for food lovers, known for our warm hospitality and mouthwatering dishes. Every meal we serve is a reflection of our dedication to quality and our love for bringing people together.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our team is made up of passionate chefs, friendly staff, and dedicated professionals who work tirelessly to ensure every visit is exceptional. We believe that great food starts with great people, and we’re proud of the talented individuals who make <span className='font-bold'>Foody</span> what it is today.
          </p>
        </div>
      </div>
    </div>
  );
}