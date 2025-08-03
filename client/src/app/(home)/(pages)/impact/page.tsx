"use client";
import React, { useState, useEffect } from "react";

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

const CountUpNumber: React.FC<{ end: number; duration?: number }> = ({
  end,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(startCount + (end - startCount) * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const ImpactPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const [selectedYear, setSelectedYear] = useState("2024");

  const impactStats = [
    {
      category: "People & Communities",
      stats: [
        {
          number: 50000,
          label: "Lives Directly Impacted",
          description: "Individuals who participated in our programs",
          icon: "👥",
          color: "emerald",
        },
        {
          number: 25,
          label: "Communities Served",
          description: "Across 15 counties in Kenya",
          icon: "🌍",
          color: "blue",
        },
        {
          number: 500,
          label: "Community Leaders Trained",
          description: "In peace building, civic engagement, and leadership",
          icon: "👨‍💼",
          color: "purple",
        },
        {
          number: 200,
          label: "Peace Dialogues Facilitated",
          description: "Bringing together diverse community groups",
          icon: "🕊️",
          color: "green",
        },
      ],
    },
    {
      category: "Civic Engagement",
      stats: [
        {
          number: 15,
          label: "Civic Innovation Labs",
          description: "Youth-led hubs for democratic innovation",
          icon: "🏢",
          color: "blue",
        },
        {
          number: 10000,
          label: "Digital Democracy Users",
          description: "Engaged through our online platforms",
          icon: "📱",
          color: "indigo",
        },
        {
          number: 500,
          label: "Youth Ambassadors",
          description: "Trained in civic leadership and advocacy",
          icon: "🎯",
          color: "emerald",
        },
        {
          number: 50,
          label: "Policy Inputs",
          description: "Contributed to government processes",
          icon: "📊",
          color: "orange",
        },
      ],
    },
    {
      category: "Environment & Peace",
      stats: [
        {
          number: 50000,
          label: "Trees Planted",
          description: "As part of climate action initiatives",
          icon: "🌱",
          color: "green",
        },
        {
          number: 30,
          label: "Mediators Trained",
          description: "For community conflict resolution",
          icon: "🤝",
          color: "emerald",
        },
        {
          number: 15,
          label: "Resilience Hubs",
          description: "Established for disaster preparedness",
          icon: "🛡️",
          color: "blue",
        },
        {
          number: 100,
          label: "Climate Workshops",
          description: "Conducted across communities",
          icon: "🌍",
          color: "teal",
        },
      ],
    },
    {
      category: "Economic Empowerment",
      stats: [
        {
          number: 1000,
          label: "People Skilled",
          description: "In digital literacy and entrepreneurship",
          icon: "💼",
          color: "orange",
        },
        {
          number: 150,
          label: "Startups Supported",
          description: "Through incubation and mentorship",
          icon: "🚀",
          color: "red",
        },
        {
          number: 60,
          label: "Women Entrepreneurs",
          description: "Percentage of program beneficiaries",
          icon: "👩‍💼",
          color: "pink",
        },
        {
          number: 2000000,
          label: "Capital Facilitated",
          description: "USD in microfinance and loans",
          icon: "💰",
          color: "yellow",
        },
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "From Conflict to Collaboration",
      subtitle: "Nakuru Peace Dialogue Success",
      location: "Nakuru County",
      program: "PASCOR",
      impact: "Reduced ethnic tensions by 70%",
      description:
        "Through FECA's Peace Circles initiative, the Karagita community in Nakuru transformed from a conflict-prone area to a model of inter-ethnic collaboration.",
      fullStory:
        "In 2022, Karagita was experiencing severe ethnic tensions between Kikuyu and Kalenjin communities, particularly around land disputes. FECA established a Peace Circle that brought together 50 community leaders from both groups. Through 12 months of facilitated dialogue, mediation training, and joint environmental projects, the community developed a conflict resolution framework that has prevented major incidents and created lasting partnerships.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      outcomes: [
        "70% reduction in reported ethnic conflicts",
        "Joint community development projects launched",
        "50 trained community mediators",
        "Peace committee established with rotating leadership",
      ],
      testimonial: {
        quote:
          "FECA didn't just bring peace to our community; they taught us how to maintain it ourselves.",
        author: "Mary Wanjiku",
        role: "Community Leader, Karagita",
      },
    },
    {
      id: 2,
      title: "Digital Democracy in Action",
      subtitle: "Youth-Led Budget Transparency",
      location: "Nairobi County",
      program: "CEDIP",
      impact: "100% budget transparency achieved",
      description:
        "Young civic leaders in Mathare used FECA's digital tools to track county budget allocation, leading to full transparency in local government spending.",
      fullStory:
        "In Mathare, one of Nairobi's largest informal settlements, residents had no visibility into how county government allocated resources to their area. FECA's Civic Lab trained 30 young people in digital advocacy and budget tracking. Using open-source tools, they created a community dashboard that monitored budget allocations, tracked project implementation, and provided a platform for citizen feedback.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      outcomes: [
        "Real-time budget tracking system implemented",
        "3 incomplete projects completed after citizen pressure",
        "Monthly public budget meetings established",
        "Youth engagement in governance increased by 400%",
      ],
      testimonial: {
        quote:
          "We went from having no voice to being the loudest advocates for our community's needs.",
        author: "James Kiprotich",
        role: "Youth Leader, Mathare Civic Lab",
      },
    },
    {
      id: 3,
      title: "Women's Economic Revolution",
      subtitle: "Kisumu Microenterprise Success",
      location: "Kisumu County",
      program: "IEFRP",
      impact: "300% income increase for participants",
      description:
        "Through FECA's Inclusive Finance Lab, 200 women in Kisumu launched successful microenterprises, tripling their household incomes within 18 months.",
      fullStory:
        "In the fishing communities around Lake Victoria, women traditionally had limited economic opportunities. FECA's Future Work Academy provided digital skills training, business development support, and access to microfinance. The program focused on value-addition to fish products, mobile money services, and e-commerce platforms.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      outcomes: [
        "200 women-led enterprises launched",
        "Average income increased from $50 to $150/month",
        "85% loan repayment rate achieved",
        "15 cooperative groups formed",
      ],
      testimonial: {
        quote:
          "FECA didn't just give us money; they gave us the knowledge and confidence to build our own businesses.",
        author: "Grace Akinyi",
        role: "Entrepreneur, Kisumu Women's Cooperative",
      },
    },
  ];

  const yearlyProgress = {
    "2019": { communities: 5, projects: 12, people: 2000, budget: 50000 },
    "2020": { communities: 8, projects: 25, people: 5000, budget: 120000 },
    "2021": { communities: 12, projects: 45, people: 15000, budget: 250000 },
    "2022": { communities: 18, projects: 75, people: 28000, budget: 400000 },
    "2023": { communities: 22, projects: 120, people: 42000, budget: 650000 },
    "2024": { communities: 25, projects: 150, people: 50000, budget: 850000 },
  };

  const currentStory = successStories[selectedStory];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Our Impact
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Transforming Lives,
            <span className="block text-emerald-300">Building Futures</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Since 2019, FECA has created measurable, lasting change across Kenya
            through community-driven programs that address civic engagement,
            peacebuilding, and economic empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-50"
            >
              Download Impact Report
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
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              View All Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impact by <span className="text-emerald-600">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes across all our program areas demonstrate the
              tangible difference FECA makes in communities
            </p>
          </div>

          {impactStats.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 bg-${stat.color}-50 hover:bg-${stat.color}-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div
                      className={`text-3xl lg:text-4xl font-bold text-${stat.color}-600 mb-2`}
                    >
                      {stat.number > 999 ? (
                        <>
                          <CountUpNumber end={stat.number} />
                          {stat.label.includes("Capital")
                            ? ""
                            : stat.number > 999999
                            ? "M"
                            : stat.number > 999
                            ? "K"
                            : ""}
                          {stat.label.includes("Capital") ? " USD" : ""}
                          {stat.label.includes("Women")
                            ? "%"
                            : stat.number < 100 &&
                              !stat.label.includes("Capital")
                            ? "+"
                            : stat.number >= 100 &&
                              !stat.label.includes("Capital")
                            ? "+"
                            : ""}
                        </>
                      ) : (
                        <>
                          <CountUpNumber end={stat.number} />
                          {stat.label.includes("Women") ? "%" : "+"}
                        </>
                      )}
                    </div>
                    <div className="font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Over Time */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Growth Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track our organizational growth and expanding impact from 2019 to
              2024
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <div className="flex space-x-2">
                {Object.keys(yearlyProgress).map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
                      selectedYear === year
                        ? "bg-emerald-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Growth Stats for Selected Year */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                key: "communities",
                label: "Communities Served",
                icon: "🌍",
                color: "emerald",
              },
              {
                key: "projects",
                label: "Active Projects",
                icon: "📊",
                color: "blue",
              },
              {
                key: "people",
                label: "People Impacted",
                icon: "👥",
                color: "purple",
              },
              {
                key: "budget",
                label: "Annual Budget (USD)",
                icon: "💰",
                color: "orange",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div
                  className={`text-3xl font-bold text-${metric.color}-600 mb-2`}
                >
                  <CountUpNumber
                    end={
                      yearlyProgress[
                        selectedYear as keyof typeof yearlyProgress
                      ][metric.key as keyof (typeof yearlyProgress)["2024"]]
                    }
                  />
                  {metric.key === "budget" && "K"}
                </div>
                <div className="font-semibold text-gray-900">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  in {selectedYear}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-emerald-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation from the communities we serve
            </p>
          </div>

          {/* Story Navigation */}
          <div className="flex justify-center mb-12">
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
              {successStories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(index)}
                  className={`text-left p-4 transition-all duration-300 ${
                    selectedStory === index
                      ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <div className="font-bold text-sm mb-1">{story.program}</div>
                  <div
                    className={`font-semibold ${
                      selectedStory === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {story.title}
                  </div>
                  <div className="text-xs mt-1">{story.location}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                {currentStory.program} Program
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentStory.title}
              </h3>
              <p className="text-xl text-emerald-600 font-semibold mb-4">
                {currentStory.subtitle}
              </p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  {currentStory.location}
                </div>
                <div className="text-emerald-600 font-bold">
                  {currentStory.impact}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {currentStory.fullStory}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Key Outcomes:</h4>
                <ul className="space-y-2">
                  {currentStory.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 border-l-4 border-emerald-500">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{currentStory.testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {currentStory.testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {currentStory.testimonial.role}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={currentStory.image}
                alt={currentStory.title}
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contributing to{" "}
              <span className="text-emerald-600">Global Goals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work directly contributes to achieving the United Nations
              Sustainable Development Goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "No Poverty",
                description: "Economic empowerment programs",
                color: "red",
              },
              {
                number: "4",
                title: "Quality Education",
                description: "Civic education and digital literacy",
                color: "blue",
              },
              {
                number: "5",
                title: "Gender Equality",
                description: "Women's economic empowerment",
                color: "orange",
              },
              {
                number: "8",
                title: "Decent Work",
                description: "Skills training and entrepreneurship",
                color: "purple",
              },
              {
                number: "10",
                title: "Reduced Inequalities",
                description: "Inclusive governance programs",
                color: "pink",
              },
              {
                number: "11",
                title: "Sustainable Cities",
                description: "Community resilience initiatives",
                color: "yellow",
              },
              {
                number: "13",
                title: "Climate Action",
                description: "Environmental conservation projects",
                color: "green",
              },
              {
                number: "16",
                title: "Peace & Justice",
                description: "Peacebuilding and governance",
                color: "blue",
              },
            ].map((sdg, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 bg-${sdg.color}-100 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-${sdg.color}-600`}
                >
                  {sdg.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{sdg.title}</h3>
                <p className="text-sm text-gray-600">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Our Impact Story
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in creating measurable, lasting change in communities across
            Kenya. Together, we can build a more peaceful, prosperous, and just
            society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-50"
            >
              Support Our Work
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Volunteer Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
