"use client";
import React, { useState } from "react";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

const PrivacyPolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const privacySections = [
    {
      id: "introduction",
      title: "1. Introduction and Scope",
      content: `Forum for Empowerment and Community Awareness (FECA) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, process, and safeguard your personal data when you visit our website, participate in our programs, or engage with our services.

This policy applies to all personal information collected by FECA through:
• Our website (www.feca4development.org)
• Program applications and participation
• Events, workshops, and training sessions
• Email communications and newsletters
• Social media interactions
• Partner and stakeholder engagements

FECA operates as a registered NGO in Kenya and complies with the Kenya Data Protection Act, 2019, and other applicable data protection regulations. We are committed to processing your personal data lawfully, fairly, and transparently.

Data Controller Information:
• Organization: Forum for Empowerment and Community Awareness (FECA)
• Registration Number: [NGO Registration Number]
• Address: P.O BOX 28799-00200, Nairobi, Kenya
• Data Protection Officer: privacy@feca4development.org
• Contact: +254 722 432 918`,
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: `We collect different types of personal information depending on how you interact with FECA. The information we collect includes:

Personal Identification Information:
• Full name, date of birth, and gender
• National identification or passport numbers (for program verification)
• Contact information (phone numbers, email addresses, physical addresses)
• Emergency contact details
• Photographs and video recordings (with consent)

Program-Related Information:
• Educational background and qualifications
• Professional experience and skills
• Program application responses and essays
• Attendance records and participation data
• Assessment results and feedback
• Project outputs and achievements

Technical Information:
• IP addresses and device identifiers
• Browser type and version
• Operating system and device information
• Website usage patterns and preferences
• Cookies and similar tracking technologies

Financial Information:
• Banking details for stipends or reimbursements
• Donation information and payment methods
• Financial assistance applications and supporting documents

Special Categories of Data:
• Health information (only when necessary for program accommodation)
• Disability status (for accessibility planning)
• Ethnic or tribal affiliation (for diversity monitoring with explicit consent)
• Political opinions (only in civic engagement contexts with consent)`,
    },
    {
      id: "collection-methods",
      title: "3. How We Collect Information",
      content: `FECA collects personal information through various methods, always ensuring transparency about our data collection practices:

Direct Collection:
• Online application forms and registration processes
• Program enrollment and onboarding procedures
• Event registration and check-in systems
• Surveys, feedback forms, and evaluations
• Direct communication via email, phone, or in-person interactions
• Newsletter subscriptions and communication preferences

Automatic Collection:
• Website analytics and usage tracking
• Cookies and similar technologies for website functionality
• Social media interactions and engagements
• Email open rates and click-through tracking

Third-Party Collection:
• References and recommendations from employers or educators
• Partner organizations for joint program applications
• Government agencies for verification purposes (with consent)
• Educational institutions for academic record verification

Consent Mechanisms:
• Explicit consent checkboxes for optional data processing
• Separate consent for marketing communications
• Opt-in consent for special categories of personal data
• Clear information about withdrawal of consent options

We ensure that all data collection is proportionate to our legitimate purposes and that individuals are informed about the collection at the time it occurs.`,
    },
    {
      id: "use-purposes",
      title: "4. How We Use Your Information",
      content: `FECA uses your personal information for specific, legitimate purposes that align with our mission and programs. The lawful bases for processing include consent, contract performance, legal obligation, and legitimate interests.

Program Administration:
• Processing applications and enrollment in FECA programs
• Delivering training, workshops, and educational content
• Monitoring progress and providing feedback
• Issuing certificates and credentials
• Managing program logistics and communications

Organizational Operations:
• Communicating about programs, events, and opportunities
• Providing customer support and responding to inquiries
• Maintaining accurate records and databases
• Financial management and donor stewardship
• Legal compliance and regulatory reporting

Research and Evaluation:
• Assessing program effectiveness and impact
• Conducting research on civic engagement and development
• Creating anonymized reports and case studies
• Improving program design and delivery methods
• Contributing to policy development and advocacy

Marketing and Outreach:
• Sending newsletters and program updates (with consent)
• Promoting FECA's work and achievements
• Sharing success stories and testimonials (with specific consent)
• Social media engagement and community building

Legal and Safety Purposes:
• Protecting the safety and security of participants and staff
• Investigating complaints or misconduct allegations
• Complying with legal obligations and court orders
• Protecting FECA's rights and interests
• Emergency situations and duty of care responsibilities`,
    },
    {
      id: "sharing-disclosure",
      title: "5. Information Sharing and Disclosure",
      content: `FECA is committed to protecting your personal information and does not sell, rent, or trade personal data to third parties. We only share information in specific circumstances and with appropriate safeguards:

Program Partners:
• Partner organizations involved in joint program delivery
• Educational institutions for academic credit or verification
• Employers for internship or job placement programs
• Government agencies for program reporting and compliance

Service Providers:
• IT service providers for website and database management
• Communication platforms for email and messaging services
• Payment processors for financial transactions
• Professional service providers (legal, accounting, audit)

Legal Requirements:
• Government agencies when required by law
• Law enforcement for criminal investigations
• Courts and tribunals in legal proceedings
• Regulatory bodies for compliance monitoring

Safety and Emergency Situations:
• Medical professionals in health emergencies
• Emergency contacts in crisis situations
• Security personnel for safety incidents
• Child protection services when required by law

Research and Academic Purposes:
• Anonymized data for academic research (with consent)
• Aggregated statistics for public reporting
• Case studies and best practice sharing (with explicit consent)
• Policy research and advocacy initiatives

Data Sharing Safeguards:
• Written agreements with all third parties receiving data
• Security and confidentiality requirements for service providers
• Limited data sharing to minimum necessary for stated purposes
• Regular audits of data sharing practices and compliance`,
    },
    {
      id: "data-security",
      title: "6. Data Security and Protection",
      content: `FECA implements comprehensive security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction:

Technical Safeguards:
• Encryption of data in transit and at rest using industry-standard protocols
• Secure hosting environments with regular security updates
• Multi-factor authentication for staff accessing personal data
• Regular security assessments and vulnerability testing
• Backup systems with encrypted data storage

Administrative Safeguards:
• Comprehensive staff training on data protection principles
• Role-based access controls limiting data access to authorized personnel
• Regular review and updating of data protection policies
• Incident response procedures for data breaches
• Clear procedures for data retention and secure disposal

Physical Safeguards:
• Secure office environments with controlled access
• Locked filing cabinets for physical documents
• Clean desk policies for workstations
• Secure disposal procedures for physical documents
• Visitor access controls and monitoring

Data Breach Response:
• Immediate containment and assessment procedures
• Notification to the Data Protection Commissioner within 72 hours
• Communication to affected individuals without undue delay
• Remediation measures and system improvements
• Documentation and reporting for regulatory compliance

Staff Training and Awareness:
• Regular data protection training for all staff members
• Specific training for roles involving personal data processing
• Ongoing awareness campaigns about data security best practices
• Clear reporting procedures for potential security incidents
• Regular updates on changing data protection requirements`,
    },
    {
      id: "retention-periods",
      title: "7. Data Retention and Deletion",
      content: `FECA retains personal information only for as long as necessary to fulfill the purposes for which it was collected, meet legal requirements, and serve our legitimate interests:

Program Participation Data:
• Active program records: Duration of program plus 2 years
• Academic records and certifications: 7 years after program completion
• Assessment and evaluation data: 5 years after program completion
• Financial records related to participants: 7 years as required by law

Communication Records:
• Email communications: 3 years unless part of ongoing relationship
• Newsletter subscriptions: Until consent is withdrawn
• Marketing communications: 2 years after last interaction
• Website contact forms: 1 year unless follow-up required

Employment and Volunteer Records:
• Successful applicant records: Duration of engagement plus 7 years
• Unsuccessful applicant records: 1 year after selection process
• Volunteer records: 5 years after last volunteer activity
• Reference and background check data: 3 years after verification

Financial and Donation Records:
• Donor information: 7 years for tax and audit purposes
• Financial transaction records: 7 years as required by law
• Grant and funding records: 10 years or as specified by funders
• Expense reimbursement records: 7 years

Legal and Compliance Records:
• Legal proceedings: Duration of proceedings plus 7 years
• Regulatory reporting: As specified by relevant authorities
• Incident reports: 10 years
• Policy acknowledgments: 7 years

Automated Deletion:
• Regular review of retention schedules and automated deletion processes
• Secure deletion methods ensuring data cannot be recovered
• Documentation of deletion activities for compliance purposes
• Annual audits of data retention practices`,
    },
    {
      id: "rights-controls",
      title: "8. Your Rights and Controls",
      content: `Under the Kenya Data Protection Act, 2019, and international data protection standards, you have several rights regarding your personal information:

Right to Information:
• Receive clear information about how your data is processed
• Access to this privacy policy and any updates
• Information about the lawful basis for processing your data
• Details about data sharing and retention periods

Right of Access:
• Request a copy of all personal data we hold about you
• Information about the sources of your data
• Details about automated decision-making processes
• Explanation of the logic involved in any automated processing

Right to Rectification:
• Correct inaccurate or incomplete personal information
• Update your contact details and preferences
• Amend program participation records
• Ensure accuracy of academic and professional records

Right to Erasure (Right to be Forgotten):
• Request deletion of your personal data in certain circumstances
• Withdraw consent for specific processing activities
• Object to processing based on legitimate interests
• Request removal from marketing communications

Right to Restrict Processing:
• Limit how we use your personal data in specific situations
• Temporarily halt processing while disputes are resolved
• Maintain data accuracy during rectification processes
• Preserve data for legal proceedings

Right to Data Portability:
• Receive your personal data in a structured, machine-readable format
• Transfer your data to another organization where technically feasible
• Direct transfer between organizations where possible

Right to Object:
• Object to processing based on legitimate interests
• Opt-out of direct marketing communications
• Object to automated decision-making and profiling
• Withdraw consent for specific processing activities

Exercising Your Rights:
• Contact our Data Protection Officer at privacy@feca4development.org
• Submit written requests with proper identification
• Expect response within 30 days of verified request
• Appeal decisions through our internal review process
• Complain to the Data Protection Commissioner if unsatisfied`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white text-sm font-semibold mb-6">
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
                d="M12 15v2m-6 0h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Privacy & Data Protection
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Learn how FECA collects, uses, and protects your personal
            information in compliance with Kenya&apos;s Data Protection Act and
            international best practices.
          </p>
          <div className="text-sm text-blue-200">
            <span className="font-semibold">Last Updated:</span> December 2024 |{" "}
            <span className="font-semibold ml-2">Effective Date:</span> January
            1, 2025
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FECA&apos;s commitment to protecting your privacy is built on
              these fundamental principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Transparency",
                description:
                  "Clear information about how we collect and use your data",
              },
              {
                icon: "🔒",
                title: "Security",
                description:
                  "Industry-standard protection for all personal information",
              },
              {
                icon: "⚖️",
                title: "Compliance",
                description:
                  "Full adherence to Kenya Data Protection Act and international standards",
              },
              {
                icon: "✋",
                title: "Control",
                description:
                  "You have rights over your data and how it&apos;s used",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl mb-3">{principle.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common privacy questions. Read the full policy
              below for complete details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    What data do we collect?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contact information, program participation data, and website
                    usage analytics to deliver our services effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    How do we use it?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Program administration, communication, impact assessment,
                    and improving our services. We never sell your data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Who do we share it with?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Only with program partners, service providers, and when
                    required by law - always with appropriate safeguards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    What are your rights?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access, correct, delete, or restrict processing of your
                    data. Withdraw consent and object to certain uses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    How long do we keep data?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Only as long as necessary for program delivery and legal
                    compliance - typically 2-7 years depending on data type.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    How is data secured?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Industry-standard encryption, secure hosting, access
                    controls, and regular security assessments protect your
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Your Privacy Matters
                  </h3>
                  <p className="text-blue-700">
                    This Privacy Policy explains how FECA handles your personal
                    information. We are committed to transparency and protecting
                    your privacy rights under Kenya&apos;s Data Protection Act,
                    2019. For questions about this policy, contact our Data
                    Protection Officer at{" "}
                    <a
                      href="mailto:privacy@feca4development.org"
                      className="underline font-medium"
                    >
                      privacy@feca4development.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg bg-white shadow-sm"
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
                        <div key={index} className="mb-4 last:mb-0">
                          {paragraph.split("\n").map((line, lineIndex) => {
                            if (line.startsWith("•")) {
                              return (
                                <div
                                  key={lineIndex}
                                  className="flex items-start mb-2"
                                >
                                  <span className="text-blue-600 mr-2 mt-1">
                                    •
                                  </span>
                                  <span className="text-gray-700">
                                    {line.substring(1).trim()}
                                  </span>
                                </div>
                              );
                            } else if (line.endsWith(":") && line.length < 50) {
                              return (
                                <h4
                                  key={lineIndex}
                                  className="font-semibold text-gray-900 mt-4 mb-2"
                                >
                                  {line}
                                </h4>
                              );
                            } else if (line.trim()) {
                              return (
                                <p
                                  key={lineIndex}
                                  className="text-gray-700 leading-relaxed mb-2"
                                >
                                  {line}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Rights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exercise Your Privacy Rights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have control over your personal data. Here&apos;s how to
              exercise your rights under Kenya&apos;s Data Protection Act.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "👁️",
                title: "Access Your Data",
                description:
                  "Request a copy of all personal information we hold about you",
                action: "Request Data Copy",
              },
              {
                icon: "✏️",
                title: "Correct Information",
                description: "Update inaccurate or incomplete personal details",
                action: "Update Details",
              },
              {
                icon: "🗑️",
                title: "Delete Data",
                description: "Request deletion of your personal information",
                action: "Delete Data",
              },
              {
                icon: "⏸️",
                title: "Restrict Processing",
                description: "Limit how we use your personal data",
                action: "Restrict Use",
              },
              {
                icon: "📱",
                title: "Data Portability",
                description: "Receive your data in a portable format",
                action: "Export Data",
              },
              {
                icon: "🛑",
                title: "Object to Processing",
                description: "Object to certain uses of your personal data",
                action: "Object to Use",
              },
            ].map((right, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{right.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {right.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {right.description}
                </p>
                <a
                  href="mailto:privacy@feca4development.org"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  {right.action}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Complaints Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re here to help with any privacy questions or concerns you
              may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Our Privacy Team
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Data Protection Officer
                    </h4>
                    <p className="text-gray-600">
                      privacy@feca4development.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">+254 722 432 918 (ext. 102)</p>
                    <p className="text-sm text-gray-500">
                      Mon-Fri, 8AM-5PM EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
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
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      P.O BOX 28799-00200
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                External Complaints
              </h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
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
                    <h4 className="font-medium text-gray-900">
                      Kenya Data Protection Commissioner
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      If you&apos;re not satisfied with our response, you can
                      file a complaint with the national data protection
                      authority.
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    complaints@odpc.go.ke
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +254 20 2628 000
                  </p>
                  <p>
                    <span className="font-medium">Website:</span> www.odpc.go.ke
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Policies & Documents
            </h2>
            <p className="text-lg text-gray-600">
              Additional information about our legal and operational policies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Terms of Service",
                description:
                  "Legal terms for using FECA&apos;s website and services",
                link: "/terms-of-service",
                icon: "📋",
              },
              {
                title: "Cookie Policy",
                description: "How we use cookies and tracking technologies",
                link: "/cookie-policy",
                icon: "🍪",
              },
              {
                title: "Code of Conduct",
                description: "Behavioral expectations for program participants",
                link: "/code-of-conduct",
                icon: "⚖️",
              },
            ].map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="block p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
              >
                <div className="text-3xl mb-3">{doc.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <div className="text-sm text-blue-600 font-medium group-hover:text-blue-800">
                  Learn More →
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

export default PrivacyPolicyPage;
