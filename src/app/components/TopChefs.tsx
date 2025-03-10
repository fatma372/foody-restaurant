// components/TopChefs.jsx
import React from 'react';
import Image from 'next/image';

export default function TopChefs() {
  const chefs = [
    {
      id: 1,
      name: 'Chef John Doe',
      role: 'Head Chef',
      image: '/chef1.jpeg', 
      bio: 'With over 15 years of experience, Chef John specializes in modern European cuisine.',
    },
    {
      id: 2,
      name: 'Chef Jane Smith',
      role: 'Pastry Chef',
      image: '/chef2.jpeg', 
      bio: 'Chef Jane is renowned for her exquisite desserts and creative pastry designs.',
    },
    {
      id: 3,
      name: 'Chef Mike Johnson',
      role: 'Sous Chef',
      image: '/chef3.jpeg',
      bio: 'A master of Asian fusion, Chef Mike brings bold flavors to every dish.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-8 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet Our Top Chefs</h2>
        <p className="text-center text-gray-600 mb-12">
          Our talented chefs bring passion, creativity, and expertise to every dish. Get to know the masterminds behind our menu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center justify-center">
          {chefs.map((chef) => (
            <div key={chef.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-54">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover p-1 rounded-md"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{chef.name}</h3>
                <p className="text-lg text-amber-600 mb-2">{chef.role}</p>
                <p className="text-gray-600">{chef.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}