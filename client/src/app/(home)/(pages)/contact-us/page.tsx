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

const ContactPage: React.FC = () => {
  const [selectedInquiry, setSelectedInquiry] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiry: "general",
    subject: "",
    message: "",
    newsletter: false,
  });

  const inquiryTypes = [
    {
      id: "general",
      title: "General Inquiry",
      description:
        "Questions about FECA&apos;s work, programs, or general information",
      icon: "💬",
      color: "emerald",
      contact: "info@feca4development.org",
    },
    {
      id: "programs",
      title: "Program Participation",
      description:
        "Join our programs, volunteer opportunities, or community engagement",
      icon: "🤝",
      color: "blue",
      contact: "programs@feca4development.org",
    },
    {
      id: "partnership",
      title: "Partnership & Collaboration",
      description:
        "Organizational partnerships, funding opportunities, or collaborations",
      icon: "🤝",
      color: "purple",
      contact: "partnerships@feca4development.org",
    },
    {
      id: "media",
      title: "Media & Press",
      description:
        "Press inquiries, interviews, media coverage, or press releases",
      icon: "📰",
      color: "orange",
      contact: "media@feca4development.org",
    },
    {
      id: "research",
      title: "Research & Data",
      description:
        "Research collaborations, data requests, or academic partnerships",
      icon: "📊",
      color: "indigo",
      contact: "research@feca4development.org",
    },
    {
      id: "support",
      title: "Technical Support",
      description:
        "Website issues, digital platform support, or technical assistance",
      icon: "🔧",
      color: "red",
      contact: "support@feca4development.org",
    },
  ];

  const officeLocations = [
    {
      name: "Head Office",
      address: "P.O BOX 28799-00200, Nairobi, Kenya",
      phone: "+254 722 432 918",
      email: "info@feca4development.org",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "Main administrative office and program coordination center",
      coordinates: { lat: -1.2921, lng: 36.8219 },
    },
    {
      name: "Nakuru Regional Office",
      address: "Kenyatta Avenue, Nakuru Town",
      phone: "+254 712 345 678",
      email: "nakuru@feca4development.org",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "PASCOR program coordination and peace building initiatives",
      coordinates: { lat: -0.3031, lng: 36.08 },
    },
    {
      name: "Kisumu Field Office",
      address: "Oginga Odinga Street, Kisumu",
      phone: "+254 701 234 567",
      email: "kisumu@feca4development.org",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      description:
        "Economic empowerment programs and women&apos;s cooperatives",
      coordinates: { lat: -0.0917, lng: 34.768 },
    },
  ];

  const teamContacts = [
    {
      name: "Dr. Sarah Mwangi",
      role: "Executive Director",
      email: "director@feca4development.org",
      phone: "+254 722 432 918",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      expertise: [
        "Strategic Leadership",
        "Community Development",
        "Peace Building",
      ],
    },
    {
      name: "James Kiprotich",
      role: "CEDIP Program Director",
      email: "cedip@feca4development.org",
      phone: "+254 733 456 789",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      expertise: ["Civic Technology", "Youth Engagement", "Digital Democracy"],
    },
    {
      name: "Grace Wanjiku",
      role: "PASCOR Program Director",
      email: "pascor@feca4development.org",
      phone: "+254 744 567 890",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      expertise: [
        "Peace Building",
        "Climate Resilience",
        "Community Organizing",
      ],
    },
    {
      name: "Michael Odhiambo",
      role: "Economic Programs Lead",
      email: "economic@feca4development.org",
      phone: "+254 755 678 901",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      expertise: ["Microfinance", "Digital Skills", "Entrepreneurship"],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! We&apos;ll get back to you within 24 hours."
    );
  };

  const selectedInquiryData = inquiryTypes.find(
    (type) => type.id === selectedInquiry
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-800 via-blue-900 to-indigo-900 text-white overflow-hidden">
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
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Work Together
            <br />
            <span className="text-emerald-300">for Change</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Whether you&apos;re interested in joining our programs, forming
            partnerships, or supporting our mission, we&apos;re here to connect
            and collaborate for meaningful community transformation.
          </p>
          <div className="text-sm text-blue-200">
            <span className="font-semibold">Office Hours:</span> Mon-Fri,
            8AM-5PM EAT |
            <span className="font-semibold ml-2">Response Time:</span> Within 24
            Hours
          </div>
        </div>
      </section>
      {/* Quick Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We <span className="text-emerald-600">Help You?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the type of inquiry that best matches your needs for
              faster, more targeted assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedInquiry(type.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  selectedInquiry === type.id
                    ? `bg-${type.color}-600 text-white shadow-2xl`
                    : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{type.icon}</div>
                  <h3
                    className={`text-lg font-bold ${
                      selectedInquiry === type.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {type.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    selectedInquiry === type.id
                      ? "text-blue-100"
                      : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{ __html: type.description }}
                />
                <div
                  className={`text-xs font-mono ${
                    selectedInquiry === type.id
                      ? "text-white"
                      : `text-${type.color}-600`
                  }`}
                >
                  {type.contact}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours during business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Subscribe to our newsletter for updates on FECA&apos;s work
                    and impact
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Selected Inquiry Info */}
              {selectedInquiryData && (
                <div
                  className={`p-6 bg-${selectedInquiryData.color}-50 border border-${selectedInquiryData.color}-200 rounded-xl`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">
                      {selectedInquiryData.icon}
                    </span>
                    <h3
                      className={`text-xl font-bold text-${selectedInquiryData.color}-800`}
                    >
                      {selectedInquiryData.title}
                    </h3>
                  </div>
                  <p
                    className={`text-${selectedInquiryData.color}-700 mb-4`}
                    dangerouslySetInnerHTML={{
                      __html: selectedInquiryData.description,
                    }}
                  />
                  <div
                    className={`bg-${selectedInquiryData.color}-100 p-4 rounded-lg`}
                  >
                    <p className="text-sm text-gray-600 mb-2">
                      Direct contact for this inquiry:
                    </p>
                    <p
                      className={`font-mono text-${selectedInquiryData.color}-800 font-semibold`}
                    >
                      {selectedInquiryData.contact}
                    </p>
                  </div>
                </div>
              )}

              {/* Office Locations */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">
                        {office.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {office.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <svg
                            className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0"
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
                          <span className="text-gray-600">
                            {office.address}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-emerald-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <a
                            href={`tel:${office.phone}`}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-emerald-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-emerald-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-emerald-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our program leaders and executive team for
              specialized inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamContacts.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">
                  {member.role}
                </p>

                <div className="space-y-2 mb-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                  >
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call
                  </a>
                </div>

                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Alternative Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Connect With Us <span className="text-emerald-600">Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our work, get updates, and join the conversation on our
              social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Twitter",
                handle: "@FECA_Kenya",
                followers: "12.5K",
                description: "Daily updates, news, and community stories",
                icon: "🐦",
                color: "blue",
                link: "https://twitter.com/feca_kenya",
              },
              {
                platform: "Facebook",
                handle: "FECA Kenya",
                followers: "25K",
                description: "Photos, events, and community engagement",
                icon: "📘",
                color: "blue",
                link: "https://facebook.com/fecakenya",
              },
              {
                platform: "LinkedIn",
                handle: "FECA Organization",
                followers: "8.2K",
                description:
                  "Professional updates and partnership opportunities",
                icon: "💼",
                color: "blue",
                link: "https://linkedin.com/company/feca",
              },
              {
                platform: "YouTube",
                handle: "FECA Kenya",
                followers: "5.8K",
                description: "Program videos, testimonials, and documentaries",
                icon: "📺",
                color: "red",
                link: "https://youtube.com/fecakenya",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-300 text-center group"
              >
                <div className="text-4xl mb-4">{social.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {social.platform}
                </h3>
                <p className="text-emerald-600 font-semibold mb-2">
                  {social.handle}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {social.description}
                </p>
                <div className="text-xs text-gray-500">
                  {social.followers} followers
                </div>
              </a>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">
                  Emergency Contact
                </h4>
                <p className="text-red-700 mb-4">
                  For urgent matters related to community safety, conflicts, or
                  emergencies in our program areas:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-red-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="font-semibold text-red-800">
                      24/7 Emergency Hotline: +254 700 123 456
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-red-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-red-700">
                      emergency@feca4development.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about FECA and our programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How can I join FECA&apos;s programs?",
                answer:
                  "You can apply to join our programs by contacting us through the form above, calling our offices, or visiting our program centers. We conduct regular intake sessions for new participants.",
              },
              {
                question: "Do you accept volunteers?",
                answer:
                  "Yes! We welcome volunteers for various activities including community outreach, digital literacy training, peace building workshops, and administrative support. Contact our programs team for opportunities.",
              },
              {
                question: "How can my organization partner with FECA?",
                answer:
                  "We&apos;re always open to partnerships! Send us a partnership proposal through our contact form or email partnerships@feca4development.org with details about your organization and collaboration interests.",
              },
              {
                question: "Where are your programs currently active?",
                answer:
                  "FECA operates in 25+ communities across 15 counties in Kenya, with offices in Nairobi, Nakuru, and Kisumu. Contact us to see if we have programs in your area.",
              },
              {
                question: "How can I support FECA&apos;s work financially?",
                answer:
                  "We accept donations from individuals, organizations, and institutions. Contact us for information about donation processes, project funding, or setting up recurring support.",
              },
              {
                question: "Can I request FECA to work in my community?",
                answer:
                  "Yes! We consider expansion to new communities based on need assessment, local partnerships, and available resources. Submit a community request through our contact form.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3
                  className="font-bold text-gray-900 mb-3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                ></h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest updates on our programs,
            impact stories, and opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-50 whitespace-nowrap">
              Subscribe
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
