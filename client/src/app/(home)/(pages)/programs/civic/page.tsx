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
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
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

const CedipPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                CEDIP Program
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Civic Engagement &
                <span className="block text-blue-300">
                  Democratic Innovation
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Re-imagining governance through digital tools, youth-led
                movements, and inclusive participation for transparent and
                accountable democracy that serves everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="transform hover:scale-105">
                  Join CEDIP Program
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
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Youth civic engagement"
                className="w-full h-96 object-cover shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CEDIP <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our civic engagement and democratic
              innovation initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "15+",
                label: "Civic Labs Established",
                description: "Youth-led innovation hubs",
                icon: "🏢",
              },
              {
                number: "10,000+",
                label: "Digital Democracy Users",
                description: "Active platform participants",
                icon: "📱",
              },
              {
                number: "500+",
                label: "Youth Ambassadors",
                description: "Trained civic leaders",
                icon: "👨‍💼",
              },
              {
                number: "50+",
                label: "Policy Contributions",
                description: "Government process inputs",
                icon: "📊",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
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
                CEDIP transforms how citizens engage with democratic processes
                through innovative digital platforms and youth-led initiatives.
                We bridge the gap between government institutions and
                communities by creating accessible pathways for civic
                participation and accountability.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "Increase civic literacy and awareness of constitutional rights",
                  "Strengthen youth and marginalized group participation in governance",
                  "Promote transparency and citizen-led accountability",
                  "Scale-up digital tools for inclusive decision-making",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
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
                    icon: "🔧",
                    title: "Technology-Enabled",
                    description:
                      "Leveraging digital platforms and mobile technology to increase civic participation",
                  },
                  {
                    icon: "👥",
                    title: "Youth-Led",
                    description:
                      "Empowering young people to lead democratic innovation and civic engagement",
                  },
                  {
                    icon: "🌍",
                    title: "Community-Centered",
                    description:
                      "Building solutions that respond to specific community needs and contexts",
                  },
                ].map((approach, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
              Flagship <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three major initiatives driving civic engagement and democratic
              innovation across Kenya
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Civic Labs Kenya",
                description:
                  "Youth-led hubs for policy co-creation, civic tech, and democratic innovation across 15 counties.",
                features: [
                  "Co-working spaces",
                  "Policy workshops",
                  "Mentorship programs",
                  "Digital tools",
                ],
                impact: "15+ labs serving 5,000+ young people annually",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Digital Democracy Toolkit",
                description:
                  "Open-source digital platforms enabling citizens to participate in governance processes transparently.",
                features: [
                  "Budget tracking tools",
                  "Citizen feedback platforms",
                  "Election monitoring",
                  "Open data portals",
                ],
                impact: "10,000+ active users, 50+ government adoptions",
                image:
                  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Constitutional Literacy Campaign",
                description:
                  "Multimedia outreach program educating citizens about their constitutional rights and civic responsibilities.",
                features: [
                  "Community workshops",
                  "Radio/TV programs",
                  "Mobile apps",
                  "School outreach",
                ],
                impact: "50,000+ citizens reached, 200+ communities",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-blue-800">
                      Impact:
                    </div>
                    <div className="text-sm text-blue-700">
                      {project.impact}
                    </div>
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
              How to <span className="text-blue-600">Participate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to get involved in CEDIP's civic engagement and
              democratic innovation work
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Civic Fellowship",
                duration: "6 months",
                commitment: "Part-time",
                description:
                  "Intensive training in civic leadership, digital advocacy, and community organizing.",
                requirements: [
                  "Age 18-35",
                  "High school completion",
                  "Community engagement interest",
                ],
                benefits: [
                  "Stipend provided",
                  "Certificate awarded",
                  "Mentorship program",
                  "Job placement support",
                ],
              },
              {
                title: "Community Digital Champions",
                duration: "3 months",
                commitment: "Flexible",
                description:
                  "Train as a digital literacy educator and civic technology advocate in your community.",
                requirements: [
                  "Basic digital skills",
                  "Community connections",
                  "Commitment to training others",
                ],
                benefits: [
                  "Training materials",
                  "Ongoing support",
                  "Recognition certificate",
                  "Networking opportunities",
                ],
              },
              {
                title: "Civic Lab Membership",
                duration: "Ongoing",
                commitment: "Flexible",
                description:
                  "Access to co-working space, resources, and community of civic innovators.",
                requirements: [
                  "Civic project or interest",
                  "Collaboration mindset",
                  "Basic computer skills",
                ],
                benefits: [
                  "Free workspace",
                  "Mentorship access",
                  "Tool sharing",
                  "Event invitations",
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
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Democracy?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join CEDIP and be part of the movement creating more inclusive,
            transparent, and responsive governance systems across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              Join CEDIP Program
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
              className="border-white text-white hover:bg-white hover:text-blue-600"
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

export default CedipPage;
