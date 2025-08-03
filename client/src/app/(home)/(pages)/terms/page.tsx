"use client";
import React, { useState } from "react";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

const TermsOfServicePage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const termsSection = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Forum for Empowerment and Community Awareness (FECA) website (www.feca4development.org), participating in our programs, or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with these terms, please do not use our website or services.

These terms apply to all users of our website, including but not limited to program participants, volunteers, partners, donors, and visitors. FECA reserves the right to modify these terms at any time, and such modifications will be effective immediately upon posting on our website.`,
    },
    {
      id: "organization",
      title: "2. About FECA",
      content: `FECA is a registered non-governmental organization (NGO) in Kenya, committed to building resilient, peaceful, and informed communities through civic engagement, peacebuilding, and economic empowerment programs.

Our mission is to be a model in civic empowerment and inclusive leadership, advancing democratic innovation and climate resilience for cohesive and sustainable communities. We operate under Kenyan law and are governed by the NGO Coordination Act and other applicable regulations.

Registration Details:
- Organization Name: Forum for Empowerment and Community Awareness (FECA)
- Registration Number: [Registration Number]
- Physical Address: P.O BOX 28799-00200, Nairobi, Kenya
- Contact: info@feca4development.org`,
    },
    {
      id: "website-use",
      title: "3. Website Use and Conduct",
      content: `You may use our website for lawful purposes only and in accordance with these Terms of Service. You agree not to use the website:

• To violate any applicable local, national, or international law or regulation
• To transmit, or procure the sending of, any advertising or promotional material without our prior written consent
• To impersonate or attempt to impersonate FECA, our employees, another user, or any other person or entity
• To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website
• To upload, post, or transmit any content that is harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable

We reserve the right to terminate or suspend your access to our website immediately, without prior notice or liability, if you breach these terms.`,
    },
    {
      id: "programs",
      title: "4. Program Participation",
      content: `Participation in FECA programs is subject to specific program requirements, application processes, and additional terms and conditions. By applying for or participating in any FECA program, you agree to:

Program Eligibility and Requirements:
• Meet all specified eligibility criteria for the program
• Provide accurate and complete information during the application process
• Participate actively and in good faith in all program activities
• Respect the rights and dignity of other participants, staff, and community members
• Follow program schedules, guidelines, and code of conduct

Participant Responsibilities:
• Attend required training sessions and activities
• Complete assigned tasks and projects within specified timeframes
• Use program resources responsibly and for intended purposes only
• Report any concerns or incidents to program coordinators promptly
• Maintain confidentiality of sensitive information shared during programs

Program Completion and Certification:
• Meet all program requirements to receive certificates or credentials
• Understand that certificates are awarded based on satisfactory completion
• Acknowledge that FECA reserves the right to modify program content and requirements`,
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property Rights",
      content: `All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, data compilations, and software, is the property of FECA or its content suppliers and is protected by international copyright laws.

FECA Content:
• All original content created by FECA is owned by the organization
• This includes training materials, program curricula, research reports, and publications
• You may not reproduce, distribute, or create derivative works without written permission

User-Generated Content:
• By submitting content to our website or programs, you grant FECA a non-exclusive, royalty-free license to use, modify, and distribute such content
• You warrant that you own or have the necessary rights to the content you submit
• FECA reserves the right to remove any user-generated content that violates these terms

Third-Party Content:
• Some content may be owned by third parties and used with permission
• Respect all intellectual property rights of third-party content providers
• Use of third-party content is subject to their respective terms and conditions`,
    },
    {
      id: "privacy-data",
      title: "6. Privacy and Data Protection",
      content: `FECA is committed to protecting your privacy and personal data in accordance with applicable data protection laws, including the Kenya Data Protection Act, 2019.

Data Collection and Use:
• We collect personal information necessary for program administration and website functionality
• Personal data is used only for stated purposes and with your consent
• We implement appropriate security measures to protect your data
• Data retention periods are determined based on legal requirements and operational needs

Data Sharing:
• We do not sell or rent personal information to third parties
• Data may be shared with program partners for legitimate program purposes only
• All data sharing is governed by written agreements ensuring data protection
• You have the right to access, correct, or request deletion of your personal data

For detailed information about our data practices, please refer to our Privacy Policy, which forms an integral part of these Terms of Service.`,
    },
    {
      id: "financial",
      title: "7. Financial Terms and Donations",
      content: `If you make donations or payments to FECA, the following terms apply:

Donations:
• All donations are voluntary and non-refundable unless otherwise specified
• Donations will be used in accordance with FECA's mission and programs
• Donors will receive acknowledgment and tax-deductible receipts where applicable
• FECA reserves the right to decline donations that conflict with our values or mission

Program Fees:
• Some programs may require participant fees or deposits
• Payment terms and refund policies will be clearly communicated for each program
• Scholarships and fee waivers may be available based on need and eligibility

Financial Transparency:
• FECA maintains transparent financial records and practices
• Annual financial reports are available upon request
• All financial transactions are conducted in accordance with applicable laws and regulations`,
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers and Limitations",
      content: `FECA provides its website and services on an "as is" and "as available" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation:

Website and Service Disclaimers:
• We do not warrant that our website will be uninterrupted, timely, secure, or error-free
• Information on our website may contain technical inaccuracies or typographical errors
• We make no guarantees about the effectiveness or outcomes of our programs
• Individual results from program participation may vary

Limitation of Liability:
• FECA shall not be liable for any indirect, incidental, special, consequential, or punitive damages
• Our total liability shall not exceed the amount paid by you, if any, for accessing our services
• These limitations apply even if we have been advised of the possibility of such damages

Program Outcomes:
• While we strive for positive outcomes, we cannot guarantee specific results from program participation
• Success depends on various factors including participant effort, external circumstances, and market conditions
• FECA's responsibility is limited to providing quality programming and support within available resources`,
    },
    {
      id: "termination",
      title: "9. Termination",
      content: `FECA reserves the right to terminate or suspend your access to our website and services, with or without notice, for any reason, including but not limited to:

Grounds for Termination:
• Violation of these Terms of Service
• Inappropriate conduct during program participation
• Providing false or misleading information
• Failure to meet program requirements or commitments
• Behavior that threatens the safety or well-being of other participants or staff

Effect of Termination:
• Upon termination, your right to use our website and services ceases immediately
• You may lose access to program benefits, certificates, or continuing support
• Certain provisions of these terms will survive termination, including intellectual property rights and limitations of liability

Appeals Process:
• If you believe termination was unjustified, you may appeal through our formal grievance procedure
• Appeals must be submitted in writing within 30 days of termination
• FECA will review appeals fairly and provide written responses`,
    },
    {
      id: "governing-law",
      title: "10. Governing Law and Dispute Resolution",
      content: `These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya, without regard to conflict of law principles.

Jurisdiction:
• Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of Kenyan courts
• The courts of Nairobi shall have jurisdiction over any legal proceedings

Dispute Resolution Process:
1. Direct Discussion: Attempt to resolve disputes through direct communication with FECA management
2. Mediation: If direct discussion fails, parties agree to pursue mediation through a mutually agreed mediator
3. Arbitration: Unresolved disputes may be submitted to arbitration under Kenyan arbitration laws
4. Litigation: Court proceedings as a last resort in Kenyan courts

Language:
• These terms are drafted in English, which shall be the controlling language
• Any translations are provided for convenience only and the English version prevails in case of conflicts`,
    },
    {
      id: "general",
      title: "11. General Provisions",
      content: `Amendments:
FECA reserves the right to modify these Terms of Service at any time. Changes will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the modified terms.

Severability:
If any provision of these terms is deemed invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.

Entire Agreement:
These Terms of Service, together with our Privacy Policy and any program-specific agreements, constitute the entire agreement between you and FECA regarding the use of our website and services.

Force Majeure:
FECA shall not be liable for any delay or failure to perform due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemic, government actions, or natural disasters.

Contact Information:
For questions about these Terms of Service, please contact us at:
• Email: legal@feca4development.org
• Phone: +254 722 432 918
• Address: P.O BOX 28799-00200, Nairobi, Kenya

Effective Date: These Terms of Service are effective as of [Date] and were last updated on [Date].`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Legal Document
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Please read these terms carefully before using FECA's website,
            participating in our programs, or engaging with our services.
          </p>
          <div className="text-sm text-gray-400">
            <span className="font-semibold">Last Updated:</span> December 2024 |
            <span className="font-semibold ml-2">Effective Date:</span> January
            1, 2025
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Terms Summary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's a quick overview of the key points. Please read the full
              terms below for complete details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✅",
                title: "Acceptance",
                description:
                  "By using our website or services, you agree to these terms",
              },
              {
                icon: "🛡️",
                title: "Privacy",
                description:
                  "Your data is protected according to Kenyan data protection laws",
              },
              {
                icon: "📚",
                title: "Programs",
                description:
                  "Program participation has specific requirements and responsibilities",
              },
              {
                icon: "⚖️",
                title: "Legal",
                description:
                  "These terms are governed by Kenyan law with dispute resolution procedures",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0"
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
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-yellow-700">
                    These Terms of Service constitute a legally binding
                    agreement. If you do not agree with any part of these terms,
                    please do not use our website or participate in our
                    programs. For questions about these terms, contact us at{" "}
                    <a
                      href="mailto:legal@feca4development.org"
                      className="underline"
                    >
                      legal@feca4development.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {termsSection.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg flex justify-between items-center transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSection === section.id && (
                  <div className="px-6 py-6 bg-white rounded-b-lg">
                    <div className="prose prose-gray max-w-none">
                      {section.content.split("\n\n").map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you have any questions about these Terms of Service, please
              don't hesitate to contact us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">legal@feca4development.org</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
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
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+254 722 432 918</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                P.O BOX 28799-00200, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Legal Documents
            </h2>
            <p className="text-lg text-gray-600">
              Additional legal information and policies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Privacy Policy",
                description:
                  "How we collect, use, and protect your personal information",
                link: "/privacy-policy",
                icon: "🔒",
              },
              {
                title: "Code of Conduct",
                description:
                  "Expected behavior standards for all program participants",
                link: "/code-of-conduct",
                icon: "📋",
              },
              {
                title: "Cookie Policy",
                description:
                  "Information about how we use cookies on our website",
                link: "/cookie-policy",
                icon: "🍪",
              },
            ].map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="block p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{doc.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Read More →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
