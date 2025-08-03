"use client";
import React, { useState } from "react";

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
      "bg-orange-600 hover:bg-orange-700 text-white focus:ring-orange-500",
    outline:
      "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:ring-orange-500",
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

const IefrpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                IEFRP Program
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Inclusive Economies &
                <span className="block text-orange-300">Future Readiness</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Creating pathways for economic empowerment through digital
                skills training, entrepreneurship incubation, and sustainable
                livelihoods for vulnerable groups and innovative youth
                enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="transform hover:scale-105">
                  Join IEFRP Program
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
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Economic empowerment training"
                className="w-full h-96 object-cover shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IEFRP <span className="text-orange-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our economic empowerment and future
              readiness initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1,000+",
                label: "People Skilled",
                description: "Digital literacy & entrepreneurship",
                icon: "💼",
              },
              {
                number: "150+",
                label: "Startups Supported",
                description: "Through incubation programs",
                icon: "🚀",
              },
              {
                number: "60%",
                label: "Women Entrepreneurs",
                description: "Female program beneficiaries",
                icon: "👩‍💼",
              },
              {
                number: "$2M+",
                label: "Capital Facilitated",
                description: "Microfinance and investments",
                icon: "💰",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-orange-50 hover:bg-orange-100 transition-colors duration-300 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                IEFRP prepares communities for the future economy by building
                digital literacy, entrepreneurial capacity, and inclusive
                financial systems. We focus on creating opportunities for
                marginalized groups while fostering innovation-driven economic
                growth.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "Expand access to income-generating opportunities for vulnerable groups",
                  "Promote digital inclusion and future-of-work readiness",
                  "Strengthen financial literacy and cooperative economic models",
                  "Foster youth-led innovation and entrepreneurship",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our Approach
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "🎯",
                    title: "Market-Driven Skills",
                    description:
                      "Training programs aligned with current and future market demands and opportunities",
                  },
                  {
                    icon: "🤝",
                    title: "Inclusive Design",
                    description:
                      "Prioritizing women, youth, and marginalized communities in all economic empowerment initiatives",
                  },
                  {
                    icon: "🔄",
                    title: "Sustainable Models",
                    description:
                      "Building long-term economic resilience through cooperative structures and local ownership",
                  },
                ].map((approach, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">{approach.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {approach.title}
                      </h4>
                      <p className="text-gray-600">{approach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flagship <span className="text-orange-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three major initiatives driving economic empowerment and future
              readiness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Future Work Academy",
                description:
                  "Comprehensive vocational training, digital upskilling, and entrepreneurship incubator preparing youth for tomorrow's economy.",
                features: [
                  "Coding bootcamps",
                  "Digital marketing",
                  "Green jobs training",
                  "Business incubation",
                ],
                impact: "1,000+ people trained, 80% job placement rate",
                image:
                  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Inclusive Finance Lab",
                description:
                  "Microfinance, savings groups, and cooperative enterprise support providing accessible financial services to underserved communities.",
                features: [
                  "Microloans",
                  "Savings groups",
                  "Financial literacy",
                  "Cooperative development",
                ],
                impact: "$2M+ capital facilitated, 85% repayment rate",
                image:
                  "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Youth Enterprise Challenge",
                description:
                  "Innovation competitions and comprehensive mentorship programs for young entrepreneurs with scalable business ideas.",
                features: [
                  "Business competitions",
                  "Mentorship programs",
                  "Seed funding",
                  "Market linkages",
                ],
                impact: "150+ startups supported, 60% still operating",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-orange-800">
                      Impact:
                    </div>
                    <div className="text-sm text-orange-700">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-orange-600">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Women's economic transformation in Kisumu County
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Women's Economic Revolution
                </h3>
                <p className="text-orange-600 font-semibold mb-6">
                  Kisumu County - Lake Victoria Fishing Communities
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">
                      Women in the fishing communities around Lake Victoria had
                      limited economic opportunities, relying mainly on
                      small-scale fish trading with minimal value addition.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">
                      IEFRP's Future Work Academy provided digital skills
                      training, business development support, and access to
                      microfinance. Focus areas included fish value-addition,
                      mobile money services, and e-commerce platforms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Outcome:
                    </h4>
                    <p className="text-gray-600">
                      200 women launched successful microenterprises, tripling
                      their household incomes within 18 months. Average monthly
                      income increased from $50 to $150, with 85% loan repayment
                      rate achieved.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "15 cooperative groups formed",
                      "300% average income increase",
                      "Digital payment systems adopted",
                      "Regional market access established",
                    ].map((achievement, index) => (
                      <li
                        key={index}
                        className="text-orange-700 flex items-start"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "FECA didn't just give us money; they gave us the knowledge
                    and confidence to build our own businesses. Now I employ 8
                    other women and we're expanding to neighboring counties."
                  </blockquote>
                  <div className="font-semibold text-gray-900">
                    Grace Akinyi
                  </div>
                  <div className="text-gray-600">
                    Entrepreneur, Kisumu Women's Cooperative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Training <span className="text-orange-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skills development programs designed for the future
              economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Digital Skills",
                description:
                  "Coding, web development, digital marketing, and data analysis",
                duration: "3-6 months",
                icon: "💻",
                skills: [
                  "HTML/CSS",
                  "JavaScript",
                  "Digital Marketing",
                  "Data Analysis",
                ],
              },
              {
                title: "Financial Literacy",
                description:
                  "Personal finance, business accounting, investment basics, and cooperative management",
                duration: "2 months",
                icon: "📊",
                skills: [
                  "Budgeting",
                  "Business Finance",
                  "Investment",
                  "Cooperatives",
                ],
              },
              {
                title: "Entrepreneurship",
                description:
                  "Business planning, market research, customer acquisition, and scaling strategies",
                duration: "4 months",
                icon: "🚀",
                skills: [
                  "Business Planning",
                  "Market Research",
                  "Sales",
                  "Growth Strategy",
                ],
              },
              {
                title: "Green Jobs",
                description:
                  "Renewable energy, sustainable agriculture, waste management, and eco-tourism",
                duration: "3 months",
                icon: "🌱",
                skills: [
                  "Solar Installation",
                  "Organic Farming",
                  "Waste Management",
                  "Eco-tourism",
                ],
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {program.description}
                </p>
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                    {program.duration}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Skills Covered:
                  </h4>
                  <div className="space-y-1">
                    {program.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-orange-600">Participate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to economic empowerment and future readiness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skills Training Student",
                duration: "3-6 months",
                commitment: "Part-time",
                description:
                  "Enroll in comprehensive digital skills, financial literacy, or entrepreneurship training programs.",
                requirements: [
                  "Basic literacy",
                  "Commitment to learning",
                  "Access to training location",
                ],
                benefits: [
                  "Free training",
                  "Certification",
                  "Job placement support",
                  "Networking opportunities",
                ],
              },
              {
                title: "Startup Entrepreneur",
                duration: "12-18 months",
                commitment: "Full-time",
                description:
                  "Launch your business with comprehensive incubation support including mentorship and funding.",
                requirements: [
                  "Business idea",
                  "Market research",
                  "Commitment to growth",
                ],
                benefits: [
                  "Seed funding",
                  "Mentorship",
                  "Office space",
                  "Market linkages",
                ],
              },
              {
                title: "Cooperative Member",
                duration: "Ongoing",
                commitment: "Flexible",
                description:
                  "Join or form savings and credit cooperatives with financial services and group support.",
                requirements: [
                  "Small initial savings",
                  "Group participation",
                  "Regular meetings",
                ],
                benefits: [
                  "Microloans",
                  "Savings services",
                  "Business support",
                  "Group solidarity",
                ],
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Duration: {option.duration}</span>
                  <span>Commitment: {option.commitment}</span>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {option.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">
                  Apply Now
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Application <span className="text-orange-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our economic empowerment programs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Complete online application form with your background and program interest",
                icon: "📝",
              },
              {
                step: "2",
                title: "Assessment & Interview",
                description:
                  "Participate in skills assessment and interview with program coordinators",
                icon: "💬",
              },
              {
                step: "3",
                title: "Program Matching",
                description:
                  "Get matched with the most suitable program based on your goals and skills",
                icon: "🎯",
              },
              {
                step: "4",
                title: "Start Learning",
                description:
                  "Begin your training journey with comprehensive support and mentorship",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build Your Economic Future Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join IEFRP and gain the skills, resources, and support you need to
            create sustainable income and build a prosperous future for yourself
            and your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50"
            >
              Start Your Application
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
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Contact Program Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IefrpPage;
