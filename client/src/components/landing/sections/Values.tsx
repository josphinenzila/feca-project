import React from "react";

const Values: React.FC = () => {
  const values = [
    {
      letter: "F",
      title: "Fidelity",
      description:
        "We remain deeply committed to inclusive practices that honor every voice and lived experience.",
      color: "emerald",
    },
    {
      letter: "E",
      title: "Equity",
      description:
        "We champion inclusive opportunities and empower marginalized communities to lead transformative change.",
      color: "blue",
    },
    {
      letter: "C",
      title: "Collaboration",
      description:
        "We foster unity, dialogue, and synergy building for peaceful and resilient societies.",
      color: "purple",
    },
    {
      letter: "A",
      title: "Accountability",
      description:
        "We promote transparent governance and amplify grassroots voices to hold institutions accountable.",
      color: "orange",
    },
    {
      letter: "S",
      title: "Sustainability",
      description:
        "We commit to climate-conscious actions and responsible resource management for future generations.",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            F.E.C.A.S. - The principles that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div
                className={`w-16 h-16 ${getColorClasses(
                  value.color
                )} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl font-bold">{value.letter}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
