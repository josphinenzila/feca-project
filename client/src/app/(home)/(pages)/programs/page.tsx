"use client";
import React, { useState } from "react";
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

const ProgramsPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const programs = [
    {
      id: 1,
      acronym: "CEDIP",
      title: "Civic Engagement & Democratic Innovation Program",
      subtitle: "Re-imagining governance through digital tools",
      description:
        "Youth-led movements, inclusive participation, and cutting-edge civic technology for transparent and accountable governance that serves everyone.",
      fullDescription:
        "CEDIP transforms how citizens engage with democratic processes through innovative digital platforms and youth-led initiatives. We bridge the gap between government institutions and communities by creating accessible pathways for civic participation and accountability.",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "blue",
      secondaryColor: "indigo",
      icon: "🗳️",
      objectives: [
        "Increase civic literacy and awareness of constitutional rights",
        "Strengthen youth and marginalized group participation in governance",
        "Promote transparency and citizen-led accountability",
        "Scale-up digital tools for inclusive decision-making",
      ],
      flagshipProjects: [
        {
          name: "Civic Labs Kenya",
          description:
            "Youth-led hubs for policy co-creation, civic tech, and democratic innovation",
          impact: "15+ labs established across Kenya",
        },
        {
          name: "Digital Democracy Toolkit",
          description:
            "Open-source tools for civic education, e-participation, and accountability",
          impact: "10,000+ users engaged",
        },
        {
          name: "Constitutional Literacy Campaign",
          description:
            "Multimedia outreach to demystify rights and governance structures",
          impact: "50,000+ citizens educated",
        },
      ],
      keyActivities: [
        "Host civic hackathons and policy design sprints",
        "Launch interactive platforms for budget tracking and public feedback",
        "Train youth ambassadors in civic leadership and digital advocacy",
        "Run media campaigns on governance, elections, and citizen rights",
      ],
      stats: [
        { number: "15+", label: "Civic Labs", icon: "🏢" },
        { number: "10K+", label: "Digital Users", icon: "📱" },
        { number: "500+", label: "Youth Ambassadors", icon: "👨‍💼" },
        { number: "50+", label: "Policy Inputs", icon: "📊" },
      ],
    },
    {
      id: 2,
      acronym: "PASCOR",
      title: "Peace Action, Sustainability & Community Resilience",
      subtitle: "Strengthening harmony through environmental stewardship",
      description:
        "Community-led dialogue, climate adaptation, and conflict prevention through grassroots environmental action and peacebuilding initiatives.",
      fullDescription:
        "PASCOR integrates peacebuilding with environmental sustainability, recognizing that community resilience requires both social harmony and ecological health. Our approach addresses root causes of conflict while building adaptive capacity for climate challenges.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "green",
      secondaryColor: "emerald",
      icon: "🕊️",
      objectives: [
        "Reduce communal tensions and promote peaceful coexistence",
        "Build climate resilience through grassroots environmental action",
        "Integrate peacebuilding with sustainable development",
        "Empower communities to respond to ecological and social shocks",
      ],
      flagshipProjects: [
        {
          name: "Peace Circles & Mediation Forums",
          description:
            "Community-led dialogue platforms in conflict-prone areas",
          impact: "200+ peace dialogues facilitated",
        },
        {
          name: "Eco-Action Network",
          description:
            "Youth-driven climate adaptation and conservation initiatives",
          impact: "50,000+ trees planted",
        },
        {
          name: "Resilience Hubs",
          description:
            "Local centers for disaster preparedness, trauma support, and ecological education",
          impact: "15+ hubs established",
        },
      ],
      keyActivities: [
        "Facilitate inter-ethnic and interfaith dialogue sessions",
        "Train local mediators and early warning responders",
        "Organize tree planting, clean-up drives, and climate education workshops",
        "Develop community-based resilience plans and emergency protocols",
        "Prevent violent extremism through inclusive civic identity building",
      ],
      stats: [
        { number: "200+", label: "Peace Dialogues", icon: "🕊️" },
        { number: "50K+", label: "Trees Planted", icon: "🌱" },
        { number: "30+", label: "Mediators Trained", icon: "🤝" },
        { number: "15+", label: "Resilience Hubs", icon: "🛡️" },
      ],
    },
    {
      id: 3,
      acronym: "IEFRP",
      title: "Inclusive Economies & Future Readiness Program",
      subtitle: "Creating pathways for economic empowerment",
      description:
        "Digital skills training, entrepreneurship incubation, and sustainable livelihoods for vulnerable groups and innovative youth enterprises.",
      fullDescription:
        "IEFRP prepares communities for the future economy by building digital literacy, entrepreneurial capacity, and inclusive financial systems. We focus on creating opportunities for marginalized groups while fostering innovation-driven economic growth.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      primaryColor: "orange",
      secondaryColor: "yellow",
      icon: "💼",
      objectives: [
        "Expand access to income-generating opportunities for vulnerable groups",
        "Promote digital inclusion and future-of-work readiness",
        "Strengthen financial literacy and cooperative economic models",
        "Foster youth-led innovation and entrepreneurship",
      ],
      flagshipProjects: [
        {
          name: "Future Work Academy",
          description:
            "Vocational training, digital upskilling, and entrepreneurship incubator",
          impact: "1,000+ skills trained",
        },
        {
          name: "Inclusive Finance Lab",
          description:
            "Microfinance, savings groups, and cooperative enterprise support",
          impact: "$2M+ capital facilitated",
        },
        {
          name: "Youth Enterprise Challenge",
          description:
            "Innovation competitions and mentorship for young entrepreneurs",
          impact: "150+ startups supported",
        },
      ],
      keyActivities: [
        "Deliver trainings in coding, digital marketing, and green jobs",
        "Facilitate access to startup capital and microloans",
        "Host business pitch events and mentorship clinics",
        "Support women and persons with disabilities in enterprise development",
      ],
      stats: [
        { number: "1000+", label: "Skills Trained", icon: "💼" },
        { number: "150+", label: "Startups Supported", icon: "🚀" },
        { number: "60%", label: "Women Entrepreneurs", icon: "👩‍💼" },
        { number: "$2M+", label: "Capital Facilitated", icon: "💰" },
      ],
    },
  ];

  const currentProgram = programs[selectedProgram];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-800 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6"
              />
            </svg>
            Our Programs
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Communities Through
            <br />
            <span className="text-emerald-300">Strategic Programs</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            FECA&apos;s three flagship programs address the interconnected
            challenges facing Kenyan communities through civic engagement,
            peacebuilding, and economic empowerment.
          </p>
          <div className="text-sm text-blue-200">
            <span className="font-semibold">Program Areas:</span> 3 |
            <span className="font-semibold ml-2">Communities Served:</span> 50+
            Across Kenya
          </div>
        </div>
      </section>

      {/* Program Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(index)}
                className={`text-left p-8 transition-all duration-300 transform hover:scale-105 ${
                  selectedProgram === index
                    ? `bg-${program.primaryColor}-600 text-white shadow-2xl`
                    : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`text-4xl mr-4 ${
                      selectedProgram === index ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    {program.icon}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${
                        selectedProgram === index
                          ? "text-white"
                          : `text-${program.primaryColor}-600`
                      }`}
                    >
                      {program.acronym}
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        selectedProgram === index
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {program.title.split(" ").slice(0, 3).join(" ")}
                    </h3>
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    selectedProgram === index
                      ? "text-blue-100"
                      : "text-gray-600"
                  }`}
                >
                  {program.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program View */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div
                className={`inline-block px-4 py-2 bg-${currentProgram.primaryColor}-100 text-${currentProgram.primaryColor}-800 text-sm font-semibold mb-4`}
              >
                {currentProgram.acronym} Program
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                {currentProgram.title}
              </h2>
              <p
                className={`text-xl text-${currentProgram.primaryColor}-600 font-semibold mb-6`}
              >
                {currentProgram.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {currentProgram.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="transform hover:scale-105">
                  Join This Program
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
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={currentProgram.image}
                alt={currentProgram.title}
                width={2340}
                height={384}
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-${currentProgram.primaryColor}-900/40 to-transparent`}
              ></div>
            </div>
          </div>

          {/* Program Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {currentProgram.stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-${currentProgram.primaryColor}-50 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div
                  className={`text-3xl font-bold text-${currentProgram.primaryColor}-600 mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Program Details Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Objectives */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div
                  className={`w-8 h-8 bg-${currentProgram.primaryColor}-100 flex items-center justify-center mr-3`}
                >
                  <svg
                    className={`w-5 h-5 text-${currentProgram.primaryColor}-600`}
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
                </div>
                Program Objectives
              </h3>
              <ul className="space-y-4">
                {currentProgram.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`w-2 h-2 bg-${currentProgram.primaryColor}-500 rounded-full mt-3 mr-4 flex-shrink-0`}
                    ></div>
                    <span className="text-gray-600 leading-relaxed">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Activities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div
                  className={`w-8 h-8 bg-${currentProgram.primaryColor}-100 flex items-center justify-center mr-3`}
                >
                  <svg
                    className={`w-5 h-5 text-${currentProgram.primaryColor}-600`}
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
                Key Activities
              </h3>
              <ul className="space-y-4">
                {currentProgram.keyActivities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`w-2 h-2 bg-${currentProgram.primaryColor}-500 rounded-full mt-3 mr-4 flex-shrink-0`}
                    ></div>
                    <span className="text-gray-600 leading-relaxed">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Flagship Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {currentProgram.flagshipProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4
                    className={`text-xl font-bold text-${currentProgram.primaryColor}-600 mb-4`}
                  >
                    {project.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div
                    className={`text-sm font-semibold text-${currentProgram.primaryColor}-800 bg-${currentProgram.primaryColor}-100 px-3 py-1 inline-block`}
                  >
                    {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Program Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrated <span className="text-emerald-600">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs work synergistically to create comprehensive
              community transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-6 text-3xl">
                🔄
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cross-Sector Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Programs collaborate across civic, peace, and economic sectors
                to address root causes of community challenges.
              </p>
            </div>

            <div className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-6 text-3xl">
                📈
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sustainable Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term community development through capacity building, local
                ownership, and systemic change approaches.
              </p>
            </div>

            <div className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 flex items-center justify-center mx-auto mb-6 text-3xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Community-Led Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All programs prioritize community ownership, local leadership
                development, and participatory decision-making processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join one of our programs and become part of the transformation
            happening in communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-50"
            >
              Apply to Join
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
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
