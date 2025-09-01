"use client";
import React, { useState } from "react";
import { Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  videoThumbnail: string;
  videoUrl: string;
  program: string;
}

const Testimonials: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Grace Wanjiku",
      role: "Community Leader",
      location: "Kibera, Nairobi",
      quote:
        "Through the Peace Circles program, our community has learned to resolve conflicts through dialogue rather than confrontation. The change has been remarkable.",
      videoThumbnail: "/testimonials/grace-thumb.jpg",
      videoUrl: "/testimonials/grace-testimonial.mp4",
      program: "Peace Action",
    },
    {
      id: 2,
      name: "David Kiprotich",
      role: "Young Entrepreneur",
      location: "Eldoret",
      quote:
        "The Future Work Academy equipped me with digital skills that transformed my small business. I now employ 5 people and serve customers nationwide.",
      videoThumbnail: "/testimonials/david-thumb.jpg",
      videoUrl: "/testimonials/david-testimonial.mp4",
      program: "Inclusive Economies",
    },
    {
      id: 3,
      name: "Amina Hassan",
      role: "Youth Activist",
      location: "Mombasa",
      quote:
        "Civic Labs Kenya gave me the tools to advocate for my community's needs. I successfully lobbied for improved healthcare services in our area.",
      videoThumbnail: "/testimonials/amina-thumb.jpg",
      videoUrl: "/testimonials/amina-testimonial.mp4",
      program: "Civic Engagement",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const playVideo = (testimonialId: number) => {
    setCurrentVideo(testimonialId);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stories of Change
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from community members whose lives have been
            transformed through our programs across Kenya.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer"
              onClick={() => playVideo(testimonial.id)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-video mb-4">
                {/* Video Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${testimonial.videoThumbnail}')`,
                    backgroundColor: "#1f2937", // Fallback color
                  }}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play
                      className="w-6 h-6 text-gray-900 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Program Badge */}
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.program}
                </div>
              </div>

              {/* Testimonial Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
