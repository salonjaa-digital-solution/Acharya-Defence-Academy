"use client";

import React from 'react';
import Image from 'next/image';
import MasonryGrid from '@/components/ui/masonry-grid';
import { galleryItems, type GalleryImageItem } from '@/assets/gallary';

export { galleryItems, type GalleryImageItem };

const MasonryGridDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Cadet Life &amp; Training Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            Moments of discipline, physical conditioning, and academic excellence at Acharya Defence Academy
          </p>
        </div>

        <MasonryGrid
          items={galleryItems}
          // Responsive columns controlled by Tailwind classes
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
          gap="1rem"
          renderItem={(item, index) => (
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
              <Image
                src={item.src}
                alt={item.alt || `Gallery item ${item.id}`}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                priority={index < 8}
                placeholder="blur"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MasonryGridDemo;
