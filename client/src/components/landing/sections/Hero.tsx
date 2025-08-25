"use client";
import React, { useState, useEffect } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 shadow-lg",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white/50",
    glass:
      "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 focus:ring-white/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      category: "Our Mission",
      title: "Peaceful Communities",
      subtitle: "Through Civic Action",
      description:
        "Empowering marginalized voices to ignite civic transformation through inclusive governance, digital democracy, and sustainable livelihoods across Kenya and beyond.",
      image: "/hero/hero1.jpeg",
      primaryColor: "emerald",
      accent: "blue",
    },
    {
      id: 2,
      category: "CEDIP Program",
      title: "Civic Engagement",
      subtitle: "& Democratic Innovation",
      description:
        "Re-imagining governance through digital tools, youth-led movements, and inclusive participation for transparent and accountable democracy that serves everyone.",
      image: "/hero/hero2.jpeg",
      primaryColor: "blue",
      accent: "indigo",
    },
    {
      id: 3,
      category: "PASCOR Program",
      title: "Peace Action",
      subtitle: "& Community Resilience",
      description:
        "Strengthening social harmony through environmental stewardship, community-led dialogue, climate adaptation, and conflict prevention initiatives.",
      image: "/hero/hero3.jpeg",
      primaryColor: "green",
      accent: "emerald",
    },
    {
      id: 4,
      category: "Economic Program",
      title: "Inclusive Economies",
      subtitle: "& Future Readiness",
      description:
        "Creating pathways for economic empowerment through digital skills training, entrepreneurship incubation, and sustainable livelihoods for vulnerable groups.",
      image: "/hero/hero1.jpeg",
      primaryColor: "orange",
      accent: "red",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-${currentSlideData.primaryColor}-900/60 transition-all duration-1000`}
      />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 pb-24 sm:pb-16">
          <div className="text-center max-w-4xl mx-auto w-full">
            {/* Category */}
            <div
              className={`inline-block px-3 py-1.5 bg-${currentSlideData.primaryColor}-500/20 backdrop-blur-sm border border-${currentSlideData.primaryColor}-300/30 text-${currentSlideData.primaryColor}-200 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 transition-all duration-700 transform hover:scale-105`}
            >
              {currentSlideData.category}
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight transition-all duration-700">
              <span className="block">{currentSlideData.title}</span>
              <span
                className={`block text-${currentSlideData.primaryColor}-300 transition-colors duration-700`}
              >
                {currentSlideData.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 transition-all duration-700">
              {currentSlideData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
              <Button
                size="md"
                className="transform hover:scale-105 transition-transform shadow-xl w-full sm:w-auto"
              >
                Explore Program
                <svg
                  className="w-4 h-4 ml-2"
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
              </Button>
              <Button
                variant="glass"
                size="md"
                className="transform hover:scale-105 transition-transform w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Dot Navigation */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="group relative p-1"
              aria-label={`Go to slide ${index + 1}: ${slide.category}`}
            >
              {/* Outer Ring */}
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? `border-${currentSlideData.primaryColor}-400 bg-${currentSlideData.primaryColor}-400/20`
                    : "border-white/40 hover:border-white/80"
                }`}
              >
                {/* Inner Dot */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? `w-2 h-2 bg-${currentSlideData.primaryColor}-400`
                      : "w-1 h-1 bg-white/60 group-hover:bg-white/90 group-hover:w-1.5 group-hover:h-1.5"
                  }`}
                />
              </div>

              {/* Progress Ring for Active Slide */}
              {index === currentSlide && isAutoPlaying && (
                <div className="absolute inset-0">
                  <svg
                    className="w-4 h-4 transform -rotate-90"
                    viewBox="0 0 16 16"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      fill="none"
                      stroke={`rgb(52 211 153)`} // emerald-400
                      strokeWidth="1"
                      strokeDasharray="37.7"
                      strokeDashoffset="37.7"
                      className="animate-[progress_7s_linear_infinite]"
                    />
                  </svg>
                </div>
              )}

              {/* Tooltip */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
                  {slide.category}
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/80 rotate-45"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20">
        <div className="flex items-center space-x-4">
          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 group"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            stroke-dashoffset: 37.7;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
