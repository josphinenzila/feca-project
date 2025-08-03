"use client";
import React, { useState } from "react";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

const AboutPage: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);

  const coreValues = [
    {
      letter: "F",
      name: "Fidelity",
      description:
        "We remain deeply committed to inclusive practices that honor every voice and lived experience. Our fidelity extends to our communities, partners, and the principles of justice and equality that guide our work.",
      icon: "🤝",
      color: "emerald",
      examples: [
        "Maintaining long-term relationships with community partners",
        "Honoring commitments made to beneficiaries",
        "Consistent application of inclusive practices",
      ],
    },
    {
      letter: "E",
      name: "Equity",
      description:
        "We champion inclusive opportunities and empower marginalized communities to lead transformative change. Equity means ensuring fair access to resources, opportunities, and decision-making processes for all community members.",
      icon: "⚖️",
      color: "blue",
      examples: [
        "Prioritizing marginalized voices in program design",
        "Ensuring equal representation in leadership roles",
        "Addressing systemic barriers to participation",
      ],
    },
    {
      letter: "C",
      name: "Collaboration",
      description:
        "We foster unity, dialogue, and synergy building for peaceful and resilient societies. True collaboration means working with, not for, communities to co-create solutions that are sustainable and locally owned.",
      icon: "🌟",
      color: "purple",
      examples: [
        "Multi-stakeholder partnerships across sectors",
        "Community-led program development",
        "Cross-cultural dialogue and understanding",
      ],
    },
    {
      letter: "A",
      name: "Accountability",
      description:
        "We promote transparent governance and amplify grassroots voices to hold institutions accountable. We practice what we preach by maintaining high standards of transparency in our own operations and governance.",
      icon: "🎯",
      color: "orange",
      examples: [
        "Public reporting of program outcomes and finances",
        "Community feedback mechanisms",
        "Regular third-party evaluations",
      ],
    },
    {
      letter: "S",
      name: "Sustainability",
      description:
        "We are committed to climate-conscious actions and responsible resource management for future generations. Sustainability encompasses environmental, social, and economic dimensions of all our work.",
      icon: "🌱",
      color: "green",
      examples: [
        "Climate-resilient program design",
        "Local capacity building for long-term impact",
        "Environmentally conscious operations",
      ],
    },
  ];

  const impactStats = [
    {
      number: "50,000+",
      label: "Lives Directly Impacted",
      description: "Individuals who have participated in our programs",
    },
    {
      number: "25+",
      label: "Communities Served",
      description: "Across 15 counties in Kenya",
    },
    {
      number: "150+",
      label: "Active Projects",
      description: "Currently running across all program areas",
    },
    {
      number: "500+",
      label: "Community Leaders Trained",
      description: "In peace building, civic engagement, and leadership",
    },
    {
      number: "15",
      label: "Civic Innovation Labs",
      description: "Youth-led hubs for democratic innovation",
    },
    {
      number: "200+",
      label: "Peace Dialogues Facilitated",
      description: "Bringing together diverse community groups",
    },
    {
      number: "50,000+",
      label: "Trees Planted",
      description: "As part of climate action initiatives",
    },
    {
      number: "1,000+",
      label: "Youth Skilled in Digital Literacy",
      description: "Preparing for the future economy",
    },
  ];

  const partnerships = [
    {
      category: "Government Partners",
      organizations: [
        "Ministry of Interior & National Security",
        "National Cohesion & Integration Commission",
        "Kenya National Commission on Human Rights",
        "County Governments of Nakuru, Meru, and Turkana",
      ],
    },
    {
      category: "Civil Society",
      organizations: [
        "Kenya Human Rights Commission",
        "Ushahidi",
        "iHub",
        "Kenya Community Development Foundation",
      ],
    },
    {
      category: "International Partners",
      organizations: [
        "UNDP Kenya",
        "USAID",
        "GIZ",
        "Open Government Partnership",
      ],
    },
    {
      category: "Academic Institutions",
      organizations: [
        "University of Nairobi",
        "Strathmore University",
        "Kenya Institute for Public Policy Research",
      ],
    },
  ];

  const approaches = [
    {
      title: "Community-Centered Design",
      description:
        "Every program begins with extensive community consultation. We believe that those closest to the problems are closest to the solutions.",
      icon: "👥",
      details: [
        "Participatory needs assessments",
        "Community-led solution design",
        "Local ownership and leadership development",
      ],
    },
    {
      title: "Evidence-Based Programming",
      description:
        "Our interventions are grounded in research, data, and proven methodologies, adapted to local contexts and needs.",
      icon: "📊",
      details: [
        "Baseline studies and impact assessments",
        "Continuous monitoring and evaluation",
        "Adaptive programming based on feedback",
      ],
    },
    {
      title: "Systems Thinking",
      description:
        "We address root causes rather than symptoms, understanding that sustainable change requires systemic transformation.",
      icon: "🔄",
      details: [
        "Multi-level interventions (individual, community, institutional)",
        "Cross-sector partnerships and collaboration",
        "Long-term perspective on change processes",
      ],
    },
    {
      title: "Innovation and Technology",
      description:
        "We leverage appropriate technology and innovative approaches to scale impact and improve program effectiveness.",
      icon: "💡",
      details: [
        "Digital platforms for civic engagement",
        "Mobile technology for remote communities",
        "Open-source tools and knowledge sharing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-800 text-white overflow-hidden">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About FECA
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Communities,
                <br />
                <span className="text-emerald-300">Building Peace</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Since 2019, the Forum for Empowerment and Community Awareness
                has been at the forefront of grassroots transformation,
                championing inclusive governance, digital democracy, and
                sustainable development across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Our Impact Report
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold transition-colors">
                  Watch Our Story
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Community gathering"
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
              <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The Forum for Empowerment and Community Awareness (FECA) is a
                  leading grassroots organization committed to building
                  resilient, peaceful, and informed communities. We champion
                  inclusive governance, digital democracy, and sustainable
                  livelihoods by empowering marginalized voices to ignite civic
                  transformation.
                </p>
                <p>
                  Through innovation, climate action, and collaborative
                  leadership, FECA responds to the complex challenges facing
                  today's youth and local communities. Our programs foster
                  community cohesion, counter violent extremist ideologies, and
                  elevate local solutions for global impact.
                </p>
                <p>
                  FECA stands as a model organization advancing equity,
                  accountability, and future-ready development across Kenya and
                  beyond. We believe that sustainable change comes from within
                  communities themselves, and our role is to facilitate,
                  support, and amplify the voices of those working for positive
                  transformation.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Founded</div>
                    <div className="text-gray-600">2019</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Headquarters
                    </div>
                    <div className="text-gray-600">Nairobi, Kenya</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Focus Areas
                    </div>
                    <div className="text-gray-600">
                      Civic Engagement, Peace Building, Climate Action, Economic
                      Empowerment
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Geographic Reach
                    </div>
                    <div className="text-gray-600">
                      15 counties across Kenya
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Team Size</div>
                    <div className="text-gray-600">
                      45+ staff and 200+ volunteers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Tagline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A peaceful and empowered society shaped by inclusive voices and
                civic action.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a model in civic empowerment and inclusive leadership,
                advancing democratic innovation, climate resilience for cohesive
                and sustainable communities.
              </p>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Tagline
              </h3>
              <p className="text-2xl font-bold text-emerald-600 leading-relaxed">
                "Peace. Participation. Progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in sustainable, community-driven change that addresses
              root causes and builds lasting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center text-2xl mr-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {approach.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {approach.description}
                </p>
                <ul className="space-y-2">
                  {approach.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Interactive FECAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FECA represents more than our name - each letter embodies a
              fundamental principle that guides our work and defines our
              character
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* FECA Letters */}
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <div className="flex space-x-4">
                  {coreValues.map((value, index) => (
                    <button
                      key={value.letter}
                      onClick={() => setActiveValue(index)}
                      className={`w-20 h-20 text-3xl font-bold transition-all duration-300 transform hover:scale-110 ${
                        activeValue === index
                          ? `bg-${value.color}-600 text-white shadow-2xl scale-110`
                          : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
                      }`}
                    >
                      {value.letter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="bg-white p-6 shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  How we practice {coreValues[activeValue].name}:
                </h4>
                <ul className="space-y-3">
                  {coreValues[activeValue].examples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`w-2 h-2 bg-${coreValues[activeValue].color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 bg-${coreValues[activeValue].color}-100 flex items-center justify-center text-2xl`}
                >
                  {coreValues[activeValue].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {coreValues[activeValue].name}
                  </h3>
                  <div
                    className={`w-20 h-1 bg-${coreValues[activeValue].color}-500 mt-2`}
                  ></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {coreValues[activeValue].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Impact by <span className="text-emerald-600">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable change across communities, demonstrating our commitment
              to transparency and accountability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
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

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaboration is at the heart of our work. We partner with diverse
              organizations to amplify our impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.organizations.map((org, orgIndex) => (
                    <li key={orgIndex} className="text-gray-600 text-sm">
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're an individual, organization, or institution, there
            are many ways to support our mission of building peaceful, empowered
            communities. Join us in creating lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Become a Partner
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
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold transition-colors duration-200">
              Volunteer With Us
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold transition-colors duration-200">
              Support Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default AboutPage;
