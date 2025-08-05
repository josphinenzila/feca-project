"use client";
import React, { useState, useEffect } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
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

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Building Peaceful Communities Through Civic Action",
      subtitle: "Empowering marginalized voices to ignite civic transformation",
      description:
        "FECA champions inclusive governance, digital democracy, and sustainable livelihoods across Kenya and beyond.",
      backgroundImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-emerald-900/50 to-blue-900/50",
      primaryColor: "emerald",
      secondaryColor: "blue",
      stats: [
        { icon: "👥", number: "50,000+", label: "People Reached" },
        { icon: "🌍", number: "25+", label: "Communities" },
        { icon: "💡", number: "100+", label: "Projects" },
        { icon: "❤️", number: "5+", label: "Years Impact" },
      ],
    },
    {
      id: 2,
      title: "Civic Engagement & Democratic Innovation",
      subtitle: "Re-imagining governance through digital tools",
      description:
        "Youth-led movements, inclusive participation, and cutting-edge civic technology for transparent and accountable governance.",
      backgroundImage:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-blue-900/50 to-purple-900/50",
      primaryColor: "blue",
      secondaryColor: "purple",
      stats: [
        { icon: "🗳️", number: "15+", label: "Civic Labs" },
        { icon: "📱", number: "10K+", label: "Digital Users" },
        { icon: "👨‍💼", number: "500+", label: "Youth Ambassadors" },
        { icon: "📊", number: "50+", label: "Policy Inputs" },
      ],
    },
    {
      id: 3,
      title: "Peace Action & Community Resilience",
      subtitle: "Strengthening harmony through environmental stewardship",
      description:
        "Community-led dialogue, climate adaptation, and conflict prevention through grassroots environmental action and peacebuilding.",
      backgroundImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-green-900/50 to-emerald-900/50",
      primaryColor: "green",
      secondaryColor: "emerald",
      stats: [
        { icon: "🕊️", number: "200+", label: "Peace Dialogues" },
        { icon: "🌱", number: "50K+", label: "Trees Planted" },
        { icon: "🤝", number: "30+", label: "Mediators Trained" },
        { icon: "🛡️", number: "15+", label: "Resilience Hubs" },
      ],
    },
    {
      id: 4,
      title: "Inclusive Economies & Future Readiness",
      subtitle: "Creating pathways for economic empowerment",
      description:
        "Digital skills training, entrepreneurship incubation, and sustainable livelihoods for vulnerable groups and youth innovation.",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-orange-900/50 to-red-900/50",
      primaryColor: "orange",
      secondaryColor: "red",
      stats: [
        { icon: "💼", number: "1000+", label: "Skills Trained" },
        { icon: "🚀", number: "150+", label: "Startups Supported" },
        { icon: "👩‍💼", number: "60%", label: "Women Entrepreneurs" },
        { icon: "💰", number: "$2M+", label: "Capital Facilitated" },
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="transition-all duration-1000 ease-in-out relative overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${currentSlideData.backgroundImage}')`,
        }}
      />

      {/* Gradient Overlay - Lighter for more image visibility */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000 ease-in-out`}
      />

      {/* Additional Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-lg">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Peace. Participation. Progress.
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                <span className="block mb-1">
                  {currentSlideData.title.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className={`text-${currentSlideData.primaryColor}-300`}>
                  {currentSlideData.title.split(" ").slice(2, 4).join(" ")}
                </span>{" "}
                <span className={`text-${currentSlideData.secondaryColor}-300`}>
                  {currentSlideData.title.split(" ").slice(4).join(" ")}
                </span>
              </h1>

              <p className="text-lg text-gray-100 leading-relaxed font-medium drop-shadow-lg">
                {currentSlideData.subtitle}
              </p>

              <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                {currentSlideData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="md" className="transform hover:scale-105">
                Get Involved
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
                variant="outline"
                size="md"
                className="transform hover:scale-105 bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats/Visual Side */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {currentSlideData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center transform transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-${currentSlideData.primaryColor}-100 rounded-xl flex items-center justify-center mx-auto mb-2 text-xl`}
                    >
                      {stat.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {stat.number}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Our Impact
                  </span>
                  <span className="text-xs text-gray-500">
                    {currentSlide + 1} of {slides.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`bg-${currentSlideData.primaryColor}-500 h-1.5 rounded-full transition-all duration-5000 ease-linear`}
                    style={{ width: isAutoPlaying ? "100%" : "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 group"
          >
            <svg
              className="w-4 h-4 text-gray-600 group-hover:text-gray-900"
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
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-${currentSlideData.primaryColor}-400 scale-125`
                    : "bg-white/70 hover:bg-white/90"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 group"
          >
            <svg
              className="w-4 h-4 text-gray-600 group-hover:text-gray-900"
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
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs text-gray-600 hover:bg-white/90 transition-all duration-200"
          >
            {isAutoPlaying ? (
              <>
                <svg
                  className="w-3 h-3"
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
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3 h-3"
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
                <span>Auto-play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
