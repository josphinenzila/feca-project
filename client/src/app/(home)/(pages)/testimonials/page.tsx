"use client";
import React, { useState, useRef, useEffect } from "react";

import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

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

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  duration: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  title,
  duration,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * totalDuration;
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center text-white transition-colors"
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6 ml-1"
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

        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>
          <div
            className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-2 bg-emerald-600 rounded-full transition-all duration-100"
              style={{
                width: `${
                  totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0
                }%`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
  duration: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnail,
  title,
  duration,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        className="w-full h-64 object-cover rounded-lg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        controls={showControls}
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 text-emerald-600 ml-1"
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
          </button>
        </div>
      )}

      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
        {duration}
      </div>

      <div className="mt-3">
        <h4 className="font-medium text-gray-900">{title}</h4>
      </div>
    </div>
  );
};

const TestimonialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Mary Wanjiku",
      role: "Community Leader",
      location: "Nakuru County",
      program: "PASCOR",
      category: "community",
      type: "video",
      content:
        "FECA transformed our community from one torn by conflict to a beacon of unity. Through their Peace Circles program, we learned to resolve disputes through dialogue rather than violence. Today, our children play together regardless of their ethnic background.",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "2:45",
      impact: "Led to 70% reduction in community conflicts",
      date: "March 2024",
    },
    {
      id: 2,
      name: "James Kiprotich",
      role: "Youth Ambassador",
      location: "Nairobi County",
      program: "CEDIP",
      category: "youth",
      type: "audio",
      content:
        "Before FECA's Civic Labs program, I had no idea how local government worked or how I could make my voice heard. Now I'm leading budget tracking initiatives in Mathare and teaching other young people about their civic rights.",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      duration: "3:20",
      impact: "Trained 200+ youth in digital advocacy",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Grace Akinyi",
      role: "Entrepreneur",
      location: "Kisumu County",
      program: "IEFRP",
      category: "women",
      type: "video",
      content:
        "FECA's Future Work Academy changed my life completely. I went from selling fish by the roadside to running a thriving fish processing business with 15 employees. They didn't just give us money - they gave us knowledge and confidence.",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "4:15",
      impact: "300% increase in monthly income",
      date: "January 2024",
    },
    {
      id: 4,
      name: "Dr. Samuel Mutua",
      role: "County Commissioner",
      location: "Meru County",
      program: "Partnership",
      category: "government",
      type: "audio",
      content:
        "FECA has been an invaluable partner in our county's development initiatives. Their evidence-based approach and community engagement methods have significantly improved our project success rates and citizen satisfaction.",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      duration: "2:50",
      impact: "40% improvement in project delivery",
      date: "April 2024",
    },
    {
      id: 5,
      name: "Sarah Njeri",
      role: "Peace Mediator",
      location: "Turkana County",
      program: "PASCOR",
      category: "community",
      type: "video",
      content:
        "As a trained mediator through FECA's program, I've helped resolve over 50 conflicts in our community. The skills I learned have not only made me a better leader but have also brought lasting peace to areas that were once hotspots of violence.",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "3:35",
      impact: "50+ conflicts successfully mediated",
      date: "March 2024",
    },
    {
      id: 6,
      name: "Michael Ochieng",
      role: "Digital Skills Graduate",
      location: "Eldoret",
      program: "IEFRP",
      category: "youth",
      type: "audio",
      content:
        "Thanks to FECA's digital literacy program, I now work as a freelance web developer earning more than I ever imagined possible. They opened my eyes to opportunities in the digital economy that I never knew existed.",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      duration: "2:30",
      impact: "500% increase in earning potential",
      date: "February 2024",
    },
    {
      id: 7,
      name: "Hon. Alice Wambui",
      role: "Member of Parliament",
      location: "National Assembly",
      program: "Partnership",
      category: "government",
      type: "video",
      content:
        "FECA's constitutional literacy campaigns have empowered citizens in my constituency to engage more meaningfully with governance processes. Their work is essential for strengthening Kenya's democracy.",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "3:10",
      impact: "50,000+ citizens educated on rights",
      date: "May 2024",
    },
    {
      id: 8,
      name: "Rebecca Muthoni",
      role: "Women's Group Leader",
      location: "Nyeri County",
      program: "IEFRP",
      category: "women",
      type: "audio",
      content:
        "Our women's cooperative has grown from 20 to 200 members thanks to FECA's support. We now operate a successful savings and loan scheme that has helped dozens of women start their own businesses.",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      duration: "4:00",
      impact: "1000% growth in membership",
      date: "April 2024",
    },
  ];

  const categories = [
    { id: "all", name: "All Testimonials", count: testimonials.length },
    {
      id: "community",
      name: "Community Leaders",
      count: testimonials.filter((t) => t.category === "community").length,
    },
    {
      id: "youth",
      name: "Youth",
      count: testimonials.filter((t) => t.category === "youth").length,
    },
    {
      id: "women",
      name: "Women",
      count: testimonials.filter((t) => t.category === "women").length,
    },
    {
      id: "government",
      name: "Government Partners",
      count: testimonials.filter((t) => t.category === "government").length,
    },
  ];

  const mediaTypes = [
    { id: "all", name: "All Media", icon: "🎬" },
    { id: "video", name: "Video", icon: "📹" },
    { id: "audio", name: "Audio", icon: "🎙️" },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const categoryMatch =
      selectedCategory === "all" || testimonial.category === selectedCategory;
    const mediaMatch =
      selectedMedia === "all" || testimonial.type === selectedMedia;
    return categoryMatch && mediaMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Community Voices
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Hear from the
            <span className="block text-emerald-300">Communities We Serve</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Real voices sharing authentic stories of transformation, growth, and
            hope. Listen to and watch firsthand accounts of FECA's impact across
            Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-50"
            >
              Share Your Story
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Download Stories Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filter by Community
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                  }`}
                >
                  {category.name}
                  <span
                    className={`ml-2 text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-emerald-500 text-emerald-100"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Media Type Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Media Type
            </h3>
            <div className="flex gap-3">
              {mediaTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedMedia(type.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedMedia === type.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-blue-50 shadow-md border border-gray-200"
                  }`}
                >
                  <span className="mr-2 text-lg">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stories of{" "}
              <span className="text-emerald-600">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredTestimonials.length} testimonial
              {filteredTestimonials.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
              >
                {/* Media Section */}
                <div className="p-6 pb-4">
                  {testimonial.type === "video" ? (
                    <VideoPlayer
                      videoUrl={testimonial.videoUrl!}
                      thumbnail={testimonial.thumbnail!}
                      title={`${testimonial.name} - ${testimonial.role}`}
                      duration={testimonial.duration}
                    />
                  ) : (
                    <AudioPlayer
                      audioUrl={testimonial.audioUrl!}
                      title={`${testimonial.name} - ${testimonial.role}`}
                      duration={testimonial.duration}
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        testimonial.program === "CEDIP"
                          ? "bg-blue-100 text-blue-800"
                          : testimonial.program === "PASCOR"
                          ? "bg-green-100 text-green-800"
                          : testimonial.program === "IEFRP"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {testimonial.program}
                    </div>
                  </div>

                  <blockquote className="text-gray-600 leading-relaxed mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {testimonial.location}
                    </div>
                    <div className="flex items-center text-gray-500">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      {testimonial.impact}
                    </div>
                    <div className="flex items-center text-gray-500">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No testimonials found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more stories
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Collective <span className="text-emerald-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These voices represent thousands of community members whose lives
              have been transformed through FECA's programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50,000+",
                label: "Lives Transformed",
                icon: "👥",
                color: "emerald",
              },
              {
                number: "200+",
                label: "Video Testimonials",
                icon: "📹",
                color: "blue",
              },
              {
                number: "150+",
                label: "Audio Stories",
                icon: "🎙️",
                color: "purple",
              },
              {
                number: "25+",
                label: "Communities Represented",
                icon: "🌍",
                color: "orange",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-${stat.color}-50 hover:bg-${stat.color}-100 transition-colors duration-300 rounded-xl shadow-lg`}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div
                  className={`text-3xl font-bold text-${stat.color}-600 mb-2`}
                >
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your FECA Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have you been impacted by FECA's work? We'd love to hear your story
            and share it with others who might benefit from our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-50"
            >
              Record Video Testimonial
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Submit Audio Story
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Written Testimonial
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Submit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-emerald-600">Submit</span> Your Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to share your experience with FECA's
              programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                1️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Your Format
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select whether you'd like to share a video testimonial (2-5
                minutes), audio recording (2-4 minutes), or written story
                (200-500 words).
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                2️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tell Your Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share how FECA's programs impacted your life, your community, or
                your work. Be authentic and specific about the changes you've
                experienced.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                3️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Share & Inspire
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your testimonial through our secure portal. After review,
                your story will inspire others and help grow our community
                impact.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-emerald-600"
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
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                  Submission Guidelines
                </h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ensure good audio/video quality for multimedia submissions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include your name, location, and which FECA program you
                    participated in
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Be specific about the impact and changes you've experienced
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All submissions are reviewed before publication to ensure
                    quality and authenticity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default TestimonialsPage;
