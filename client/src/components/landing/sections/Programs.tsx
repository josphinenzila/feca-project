import React from "react";
import Image from "next/image";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Program {
  title: string;
  description: string;
  image: string;
  features: string[];
  color: string;
  stats?: {
    label: string;
    value: string;
  };
  href: string;
}

const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      title: "Civic Engagement & Democratic Innovation",
      description:
        "Re-imagining governance through digital tools, youth-led movements, and inclusive participation.",
      image: "/hero/hero1.jpeg",
      color: "emerald",
      stats: {
        label: "Youth Engaged",
        value: "5,000+",
      },

      features: [
        "Civic Labs Kenya",
        "Digital Democracy Toolkit",
        "Constitutional Literacy",
      ],
      href: "/programs/civic",
    },
    {
      title: "Peace Action, Sustainability & Community Resilience",
      description:
        "Strengthening social harmony and environmental stewardship through local action.",
      image: "/hero/hero2.jpeg",
      color: "blue",
      stats: {
        label: "Communities Served",
        value: "50+",
      },
      features: [
        "Peace Circles & Mediation",
        "Eco-Action Network",
        "Community Resilience Hubs",
      ],
      href: "/programs/peace",
    },
    {
      title: "Inclusive Economies & Future Readiness",
      description:
        "Creating pathways for economic empowerment, digital skills, and sustainable livelihoods.",
      image: "/hero/hero3.jpeg",
      color: "purple",
      stats: {
        label: "Skills Training",
        value: "3,000+",
      },
      features: [
        "Future Work Academy",
        "Inclusive Finance Lab",
        "Youth Enterprise Challenge",
      ],
      href: "/programs/economies",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        hover: "hover:border-emerald-300",
      },
      blue: {
        accent: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
      },
      purple: {
        accent: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three comprehensive programs designed to create lasting change and
            empower communities across Kenya through innovation and
            collaboration.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const colors = getColorClasses(program.color);

            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 ${colors.border} ${colors.hover} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.accent}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={program.href}>
                    <Button
                      variant="outline"
                      className={`w-full relative overflow-hidden border-2 ${colors.border} ${colors.accent} bg-white hover:bg-transparent transition-all duration-500 group/btn`}
                    >
                      <div
                        className={`absolute inset-0 ${colors.bg} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left`}
                      />
                      <span className="relative z-10 flex items-center justify-center space-x-2 group-hover/btn:font-semibold transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
