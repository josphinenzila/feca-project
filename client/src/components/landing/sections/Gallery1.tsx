"use client";
import React, { useState } from "react";
import Image from "next/image";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      image: "/gallery/01.jpeg",
      title: "Community Peace Dialogue",
      description:
        "Building bridges between communities through meaningful conversation",
    },
    {
      id: 2,
      image: "/gallery/02.jpeg",
      title: "Youth Tech Workshop",
      description: "Empowering young minds with digital skills and innovation",
    },

    {
      id: 6,
      image: "/gallery/06.jpg",
      title: "Youth Leadership Summit",
      description: "Developing the next generation of community leaders",
    },
    {
      id: 7,
      image: "/gallery/07.jpeg",
      title: "Conflict Mediation",
      description: "Training local mediators for peaceful conflict resolution",
    },
    {
      id: 8,
      image: "/gallery/08.jpeg",
      title: "Innovation Hub",
      description:
        "Creating solutions for local challenges through collaboration",
    },
    {
      id: 9,
      image: "/gallery/09.jpeg",
      title: "Community Assembly",
      description:
        "Democratic participation in local governance and decision-making",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work in <span className="text-emerald-600">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the impact we&apos;re making across communities in Kenya
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-white border border-gray-100"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={2340}
                height={2340}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                <div className="bg-white/20 backdrop-blur-sm p-2 border border-white/30">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              50,000+
            </div>
            <div className="text-gray-600 font-medium">People Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Communities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Years of Impact</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Explore All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.image === selectedImage
                );
                const prevIndex =
                  currentIndex > 0
                    ? currentIndex - 1
                    : galleryImages.length - 1;
                setSelectedImage(galleryImages[prevIndex].image);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:text-emerald-400 transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.image === selectedImage
                );
                const nextIndex =
                  currentIndex < galleryImages.length - 1
                    ? currentIndex + 1
                    : 0;
                setSelectedImage(galleryImages[nextIndex].image);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:text-emerald-400 transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Full Size Image */}
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={2340}
              height={1560}
              className="w-full h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
