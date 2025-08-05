"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LandingPageHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-800 text-white overflow-hidden h-screen flex items-center">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Dynamic Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-6">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Peace. Participation. Progress.
            </div>

            {/* Enhanced Heading with Animation */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block animate-fade-in-up">Building</span>
                <span className="block animate-fade-in-up animation-delay-200">
                  <span className="text-emerald-300">Peaceful</span> Communities
                </span>
                <span className="block animate-fade-in-up animation-delay-400">
                  Through <span className="text-blue-300">Civic Action</span>
                </span>
              </h1>

              {/* Animated Underline */}
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 animate-expand-width"></div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed animate-fade-in-up animation-delay-600 max-w-2xl">
              FECA empowers marginalized voices to ignite civic transformation
              through{" "}
              <span className="text-emerald-300 font-semibold">
                inclusive governance
              </span>
              ,{" "}
              <span className="text-emerald-300 font-semibold">
                digital democracy
              </span>
              , and{" "}
              <span className="text-emerald-300 font-semibold">
                sustainable livelihoods
              </span>{" "}
              across Kenya and beyond.
            </p>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-6 animate-fade-in-up animation-delay-800">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">
                  50K+
                </div>
                <div className="text-xs lg:text-sm text-blue-200">
                  People Reached
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">
                  25+
                </div>
                <div className="text-xs lg:text-sm text-blue-200">
                  Communities
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">
                  100+
                </div>
                <div className="text-xs lg:text-sm text-blue-200">Projects</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-1000">
              <button className="group inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                <svg
                  className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300"
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
                Get Involved
              </button>

              <button className="group inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 animate-fade-in-up animation-delay-1200">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm text-blue-200">
                  Registered NGO
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm text-blue-200">
                  5+ Years Impact
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side - Image Gallery */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                {backgroundImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Community work ${index + 1}`}
                    width={1000}
                    height={600}
                    className={`w-full h-80 lg:h-96 object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  />
                ))}

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {backgroundImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>

                {/* Floating Info Card */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                      F
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">
                        Forum for Empowerment
                      </div>
                      <div className="text-xs text-gray-600">
                        Community Awareness
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-400/20 backdrop-blur-sm border border-emerald-300/30 transform rotate-45"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-blue-400/20 backdrop-blur-sm border border-blue-300/30 transform rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-1 text-white/70">
            <span className="text-xs font-medium">Explore More</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-expand-width {
          animation: expand-width 1.2s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
};

export default LandingPageHero;
