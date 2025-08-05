"use client";
import React from "react";
import Image from "next/image";

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
    primary: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    outline:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500",
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

const PascorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                PASCOR Program
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Peace Action, Sustainability &
                <span className="block text-emerald-300">
                  Community Resilience
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Strengthening social harmony and environmental stewardship
                through community-led dialogue, climate adaptation, and conflict
                prevention initiatives that build lasting peace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="transform hover:scale-105">
                  Join PASCOR Program
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
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Community environmental work"
                width={1000}
                height={384}
                className="w-full h-96 object-cover shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PASCOR <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our peace building and environmental
              sustainability initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "200+",
                label: "Peace Dialogues Facilitated",
                description: "Bringing communities together",
                icon: "🕊️",
              },
              {
                number: "50,000+",
                label: "Trees Planted",
                description: "Climate action initiatives",
                icon: "🌱",
              },
              {
                number: "30+",
                label: "Mediators Trained",
                description: "Community conflict resolution",
                icon: "🤝",
              },
              {
                number: "15+",
                label: "Resilience Hubs",
                description: "Disaster preparedness centers",
                icon: "🛡️",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-green-50 hover:bg-green-100 transition-colors duration-300 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">
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
                PASCOR integrates peacebuilding with environmental
                sustainability, recognizing that community resilience requires
                both social harmony and ecological health. Our approach
                addresses root causes of conflict while building adaptive
                capacity for climate challenges.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "Reduce communal tensions and promote peaceful coexistence",
                  "Build climate resilience through grassroots environmental action",
                  "Integrate peacebuilding with sustainable development",
                  "Empower communities to respond to ecological and social shocks",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
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
                    icon: "🌍",
                    title: "Holistic Integration",
                    description:
                      "Combining peace building with environmental conservation for sustainable solutions",
                  },
                  {
                    icon: "👥",
                    title: "Community-Led",
                    description:
                      "Empowering local communities to design and implement their own peace and resilience solutions",
                  },
                  {
                    icon: "🔄",
                    title: "Adaptive Management",
                    description:
                      "Flexible programming that responds to changing conflict dynamics and climate conditions",
                  },
                ].map((approach, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
              Flagship <span className="text-green-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three major initiatives driving peace, sustainability, and
              community resilience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Peace Circles & Mediation Forums",
                description:
                  "Community-led dialogue platforms in conflict-prone areas that bring together diverse groups for peaceful resolution.",
                features: [
                  "Inter-ethnic dialogue",
                  "Conflict mediation",
                  "Early warning systems",
                  "Peace committees",
                ],
                impact: "200+ peace dialogues, 70% reduction in conflicts",
                image:
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Eco-Action Network",
                description:
                  "Youth-driven climate adaptation and conservation initiatives that protect the environment while building community bonds.",
                features: [
                  "Tree planting drives",
                  "Clean energy projects",
                  "Water conservation",
                  "Climate education",
                ],
                impact: "50,000+ trees planted, 25 communities involved",
                image:
                  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Resilience Hubs",
                description:
                  "Local centers for disaster preparedness, trauma support, and ecological education that strengthen community capacity.",
                features: [
                  "Emergency preparedness",
                  "Trauma counseling",
                  "Resource sharing",
                  "Skills training",
                ],
                impact: "15+ hubs established, 5,000+ people trained",
                image:
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={2340}
                  height={192}
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
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-green-800">
                      Impact:
                    </div>
                    <div className="text-sm text-green-700">
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
              Success <span className="text-green-600">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformation from conflict to collaboration in Nakuru
              County
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  From Conflict to Collaboration
                </h3>
                <p className="text-green-600 font-semibold mb-6">
                  Nakuru County - Karagita Community
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">
                      The Karagita community was experiencing severe ethnic
                      tensions between Kikuyu and Kalenjin groups, particularly
                      around land disputes and resource allocation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">
                      PASCOR established Peace Circles bringing together 50
                      community leaders from both groups for 12 months of
                      facilitated dialogue, mediation training, and joint
                      environmental projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Outcome:
                    </h4>
                    <p className="text-gray-600">
                      70% reduction in reported conflicts, establishment of a
                      permanent peace committee with rotating leadership, and
                      joint community development projects launched.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "50 community mediators trained",
                      "Joint environmental restoration project",
                      "Shared community resource management plan",
                      "Youth peace ambassadors program established",
                    ].map((achievement, index) => (
                      <li
                        key={index}
                        className="text-green-700 flex items-start"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    &ldquo;FECA didn&apos;t just give us money; they gave us the
                    knowledge and confidence to build our own businesses. Now I
                    employ 8 other women and we&apos;re expanding to neighboring
                    counties.&rdquo;
                  </blockquote>
                  <div className="font-semibold text-gray-900">
                    Mary Wanjiku
                  </div>
                  <div className="text-gray-600">
                    Community Leader, Karagita
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-green-600">Participate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get involved in peace building and environmental
              sustainability work
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Peace Mediator Training",
                duration: "3 months",
                commitment: "Part-time",
                description:
                  "Comprehensive training in conflict resolution, mediation techniques, and community peace building.",
                requirements: [
                  "Community leadership role",
                  "Conflict resolution interest",
                  "Local language fluency",
                ],
                benefits: [
                  "Certification",
                  "Ongoing mentorship",
                  "Resource toolkit",
                  "Network access",
                ],
              },
              {
                title: "Eco-Action Volunteer",
                duration: "Ongoing",
                commitment: "Flexible",
                description:
                  "Join environmental conservation projects, tree planting drives, and climate education programs.",
                requirements: [
                  "Environmental passion",
                  "Physical fitness",
                  "Team collaboration",
                ],
                benefits: [
                  "Training provided",
                  "Transportation covered",
                  "Recognition events",
                  "Skill development",
                ],
              },
              {
                title: "Resilience Hub Coordinator",
                duration: "12 months",
                commitment: "Part-time",
                description:
                  "Lead local resilience hub activities including emergency preparedness and community education.",
                requirements: [
                  "Leadership experience",
                  "Community connections",
                  "Emergency response interest",
                ],
                benefits: [
                  "Monthly stipend",
                  "Comprehensive training",
                  "Leadership development",
                  "Career advancement",
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
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build Peace, Protect Our Planet
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join PASCOR in creating resilient communities where people and
            nature thrive together in harmony and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-50"
            >
              Join PASCOR Program
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
              className="border-white text-white hover:bg-white hover:text-green-600"
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

export default PascorPage;
