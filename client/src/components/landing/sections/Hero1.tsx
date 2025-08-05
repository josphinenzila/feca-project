"use client";
import React, { useState, useEffect } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
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
      "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500",
    outline:
      "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-emerald-500",
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
      title: "Building Peaceful Communities Through Civic Action",
      subtitle: "Empowering marginalized voices to ignite civic transformation",
      description:
        "FECA champions inclusive governance, digital democracy, and sustainable livelihoods across Kenya and beyond. We believe in the power of community-driven change.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "emerald",
      secondaryColor: "blue",
      features: [
        "Community Empowerment",
        "Inclusive Governance",
        "Sustainable Development",
        "Digital Democracy",
      ],
    },
    {
      id: 2,
      category: "CEDIP Program",
      title: "Civic Engagement & Democratic Innovation",
      subtitle: "Re-imagining governance through digital tools",
      description:
        "Youth-led movements, inclusive participation, and cutting-edge civic technology for transparent and accountable governance that serves everyone.",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "blue",
      secondaryColor: "indigo",
      features: [
        "Civic Labs Kenya",
        "Digital Democracy Toolkit",
        "Constitutional Literacy",
        "Youth Leadership",
      ],
    },
    {
      id: 3,
      category: "PASCOR Program",
      title: "Peace Action & Community Resilience",
      subtitle: "Strengthening harmony through environmental stewardship",
      description:
        "Community-led dialogue, climate adaptation, and conflict prevention through grassroots environmental action and peacebuilding initiatives.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "green",
      secondaryColor: "emerald",
      features: [
        "Peace Circles",
        "Eco-Action Network",
        "Resilience Hubs",
        "Climate Education",
      ],
    },
    {
      id: 4,
      category: "Economic Program",
      title: "Inclusive Economies & Future Readiness",
      subtitle: "Creating pathways for economic empowerment",
      description:
        "Digital skills training, entrepreneurship incubation, and sustainable livelihoods for vulnerable groups and innovative youth enterprises.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "orange",
      secondaryColor: "red",
      features: [
        "Future Work Academy",
        "Inclusive Finance Lab",
        "Youth Enterprise Challenge",
        "Digital Skills Training",
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

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
    <section className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 h-full">
        {/* Header Section */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800 text-sm">
                Peace. Participation. Progress.
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            {/* Card Slider Container */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 min-h-[600px]">
                          {/* Image Side */}
                          <div className="relative order-2 lg:order-1">
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url('${slide.image}')`,
                              }}
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t from-${slide.primaryColor}-900/30 to-transparent`}
                            />

                            {/* Image Overlay Content */}
                            <div className="absolute bottom-8 left-8 right-8">
                              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                                <div className="grid grid-cols-2 gap-4">
                                  {slide.features.map((feature, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center space-x-2"
                                    >
                                      <div
                                        className={`w-2 h-2 bg-${slide.primaryColor}-500 rounded-full`}
                                      ></div>
                                      <span className="text-sm font-medium text-gray-700">
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Side */}
                          <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                            <div className="space-y-6">
                              <div>
                                <div
                                  className={`inline-block px-4 py-2 bg-${slide.primaryColor}-100 text-${slide.primaryColor}-800 rounded-full text-sm font-semibold mb-4`}
                                >
                                  {slide.category}
                                </div>
                                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                  {slide.title}
                                </h1>
                                <p
                                  className={`text-xl text-${slide.primaryColor}-600 font-medium mb-4`}
                                >
                                  {slide.subtitle}
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                  {slide.description}
                                </p>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                  size="lg"
                                  className="transform hover:scale-105"
                                >
                                  Explore Program
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
                                </Button>
                                <Button
                                  variant="outline"
                                  size="lg"
                                  className="transform hover:scale-105"
                                >
                                  Learn More
                                </Button>
                              </div>

                              {/* Progress Indicator */}
                              <div className="pt-6">
                                <div className="flex justify-between items-center mb-3">
                                  <span className="text-sm font-medium text-gray-600">
                                    {currentSlide + 1} of {slides.length}{" "}
                                    Programs
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {isAutoPlaying ? "Auto-playing" : "Paused"}
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`bg-${slide.primaryColor}-500 h-2 rounded-full transition-all duration-6000 ease-linear`}
                                    style={{
                                      width: isAutoPlaying
                                        ? "100%"
                                        : `${
                                            ((currentSlide + 1) /
                                              slides.length) *
                                            100
                                          }%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
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
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? `w-8 h-3 bg-${currentSlideData.primaryColor}-500 rounded-full`
                      : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
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
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
            >
              {isAutoPlaying ? (
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
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
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
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
      </div>
    </section>
  );
};

export default HeroSlider;
