import React from "react";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Civic Engagement & Democratic Innovation",
      description:
        "Re-imagining governance through digital tools, youth-led movements, and inclusive participation.",
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      features: [
        "Civic Labs Kenya",
        "Digital Democracy Toolkit",
        "Constitutional Literacy Campaign",
      ],
    },
    {
      title: "Peace Action, Sustainability & Community Resilience",
      description:
        "Strengthening social harmony and environmental stewardship through local action.",
      icon: (
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      features: [
        "Peace Circles & Mediation Forums",
        "Eco-Action Network",
        "Resilience Hubs",
      ],
    },
    {
      title: "Inclusive Economies & Future Readiness",
      description:
        "Creating pathways for economic empowerment, digital skills, and sustainable livelihoods.",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      features: [
        "Future Work Academy",
        "Inclusive Finance Lab",
        "Youth Enterprise Challenge",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three comprehensive programs designed to create lasting change in
            communities across Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
