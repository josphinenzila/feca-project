"use client";

import React from "react";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: "Civic Engagement & Democratic Innovation",
      description:
        "Re-imagining governance through digital tools, youth-led movements, and inclusive participation.",
      status: "Active",
      participants: 245,
      communities: 8,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      title: "Peace Action, Sustainability & Community Resilience",
      description:
        "Strengthening social harmony and environmental stewardship through local action.",
      status: "Active",
      participants: 189,
      communities: 12,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      title: "Inclusive Economies & Future Readiness",
      description:
        "Creating pathways for economic empowerment, digital skills, and sustainable livelihoods.",
      status: "Planning",
      participants: 67,
      communities: 3,
      lastUpdated: "3 days ago",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Programs</h1>
          <p className="text-gray-600">Manage and monitor FECA programs</p>
        </div>
        <Button>
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Program
        </Button>
      </div>

      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      program.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {program.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {program.participants} participants
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    {program.communities} communities
                  </div>
                  <div>Last updated {program.lastUpdated}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
