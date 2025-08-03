"use client";
import React, { useState } from "react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Community Peace Dialogue",
      description:
        "Building bridges between communities through meaningful conversation",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Youth Tech Workshop",
      description: "Empowering young minds with digital skills and innovation",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Environmental Action",
      description: "Planting seeds for a sustainable and greener future",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Women's Empowerment",
      description:
        "Supporting women entrepreneurs in building thriving businesses",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Civic Education",
      description:
        "Teaching constitutional rights and democratic participation",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Youth Leadership Summit",
      description: "Developing the next generation of community leaders",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Conflict Mediation",
      description: "Training local mediators for peaceful conflict resolution",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Innovation Hub",
      description:
        "Creating solutions for local challenges through collaboration",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Community Assembly",
      description:
        "Democratic participation in local governance and decision-making",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Agricultural Training",
      description: "Sustainable farming practices for food security",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Digital Literacy",
      description: "Bridging the digital divide in rural communities",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Community Celebration",
      description: "Celebrating achievements and strengthening community bonds",
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
            Discover the impact we're making across communities in Kenya
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
              <img
                src={item.image}
                alt={item.title}
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
            <img
              src={selectedImage}
              alt="Gallery image"
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
