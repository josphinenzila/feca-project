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
      title: "Building Peaceful Communities",
      subtitle: "Through Civic Action",
      description:
        "Empowering marginalized voices to ignite civic transformation through inclusive governance, digital democracy, and sustainable livelihoods across Kenya and beyond.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stats: [
        { number: "50,000+", label: "People Reached", icon: "👥" },
        { number: "25+", label: "Communities", icon: "🌍" },
        { number: "100+", label: "Active Projects", icon: "💡" },
      ],
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
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stats: [
        { number: "15+", label: "Civic Labs", icon: "🗳️" },
        { number: "10K+", label: "Digital Users", icon: "📱" },
        { number: "500+", label: "Youth Ambassadors", icon: "👨‍💼" },
      ],
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
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stats: [
        { number: "200+", label: "Peace Dialogues", icon: "🕊️" },
        { number: "50K+", label: "Trees Planted", icon: "🌱" },
        { number: "30+", label: "Mediators Trained", icon: "🤝" },
      ],
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
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stats: [
        { number: "1000+", label: "Skills Trained", icon: "💼" },
        { number: "150+", label: "Startups Supported", icon: "🚀" },
        { number: "60%", label: "Women Leaders", icon: "👩‍💼" },
      ],
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

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header Badge */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-gray-800 text-xs tracking-wide">
                Peace. Participation. Progress.
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Category */}
            <div
              className={`inline-block px-3 py-1 bg-${currentSlideData.primaryColor}-500/20 backdrop-blur-sm border border-${currentSlideData.primaryColor}-300/30 text-${currentSlideData.primaryColor}-200 rounded-full text-xs font-semibold mb-4 transition-all duration-700`}
            >
              {currentSlideData.category}
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight transition-all duration-700">
              <span className="block">{currentSlideData.title}</span>
              <span
                className={`block text-${currentSlideData.primaryColor}-300 transition-colors duration-700`}
              >
                {currentSlideData.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 transition-all duration-700">
              {currentSlideData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                size="md"
                className="transform hover:scale-105 transition-transform"
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
                className="transform hover:scale-105 transition-transform"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {currentSlideData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? `w-10 bg-${currentSlideData.primaryColor}-400`
                      : "w-6 bg-white/40 hover:bg-white/60"
                  }`}
                />
                {index === currentSlide && (
                  <div
                    className={`absolute top-0 left-0 h-1 bg-${currentSlideData.primaryColor}-200 rounded-full transition-all duration-7000 ease-linear`}
                    style={{ width: isAutoPlaying ? "100%" : "0%" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
          >
            {isAutoPlaying ? (
              <svg
                className="w-4 h-4 text-white"
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
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
