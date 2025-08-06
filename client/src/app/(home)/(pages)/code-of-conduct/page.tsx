"use client";
import React, { useState } from "react";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

const CodeOfConductPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const conductSections = [
    {
      id: "introduction",
      title: "1. Introduction and Purpose",
      content: `Forum for Empowerment and Community Awareness (FECA) is committed to creating and maintaining a safe, inclusive, and respectful environment for all participants, staff, partners, and community members. This Code of Conduct outlines the behavioral expectations and standards that guide our interactions and activities.

Our Purpose:
• To foster a culture of mutual respect, dignity, and inclusion
• To ensure the safety and well-being of all community members
• To promote constructive dialogue and collaborative learning
• To prevent harassment, discrimination, and harmful behavior
• To create an environment where everyone can thrive and contribute meaningfully

This Code applies to:
• All FECA program participants and beneficiaries
• Staff members, volunteers, and consultants
• Board members and organizational leadership
• Partners, visitors, and guests at FECA events
• Online interactions on FECA platforms and social media

Scope of Application:
• Physical FECA premises and program locations
• Online platforms, websites, and digital communications
• FECA-sponsored events, workshops, and training sessions
• Field visits, community engagements, and outreach activities
• Travel and accommodation during FECA programs
• Social gatherings and informal interactions related to FECA activities

By participating in FECA programs or engaging with our organization, you agree to uphold these standards and contribute to a positive, supportive community environment.`,
    },
    {
      id: "core-values",
      title: "2. Core Values and Principles",
      content: `FECA&apos;s Code of Conduct is grounded in our organizational values, which guide all interactions and decision-making processes:

Fidelity:
• Commitment to inclusive practices that honor every voice and lived experience
• Authentic representation of diverse perspectives and backgrounds
• Loyalty to our mission and the communities we serve
• Honest and transparent communication in all interactions

Equity:
• Fair treatment and equal opportunities for all participants
• Recognition and addressing of systemic barriers and inequalities
• Inclusive programming that accommodates diverse needs and circumstances
• Amplification of marginalized voices and perspectives

Collaboration:
• Building bridges across differences and fostering unity
• Constructive dialogue and respectful debate
• Shared decision-making and collective problem-solving
• Mutual support and peer learning

Accountability:
• Taking responsibility for our actions and their impact on others
• Transparent governance and ethical decision-making
• Responsiveness to feedback and commitment to continuous improvement
• Holding ourselves and others to high ethical standards

Sustainability:
• Environmental consciousness in all activities and decisions
• Long-term thinking that considers future generations
• Responsible resource management and waste reduction
• Integration of climate action into program design and implementation

These values inform our expectations for behavior and guide our approach to addressing challenges and conflicts within our community.`,
    },
    {
      id: "behavioral-expectations",
      title: "3. Behavioral Expectations",
      content: `All members of the FECA community are expected to demonstrate the following behaviors:

Respectful Communication:
• Use inclusive, respectful language in all interactions
• Listen actively and engage constructively with different viewpoints
• Avoid interrupting others and allow everyone to contribute
• Respect cultural differences and diverse communication styles
• Address conflicts directly and professionally

Professional Conduct:
• Arrive punctually and prepared for scheduled activities
• Participate actively and contribute meaningfully to discussions
• Maintain confidentiality when required
• Honor commitments and meet deadlines
• Dress appropriately for the context and cultural setting

Inclusive Behavior:
• Welcome and support new community members
• Use people&apos;s preferred names and pronouns
• Ensure equal participation opportunities for all
• Challenge exclusionary behavior when witnessed
• Celebrate diversity and different perspectives

Digital Citizenship:
• Maintain professionalism in online communications
• Respect privacy and confidentiality in digital spaces
• Share resources and information responsibly
• Give credit to others&apos; ideas and contributions
• Report inappropriate online behavior to staff

Environmental Responsibility:
• Practice sustainable behaviors in daily activities
• Minimize waste and resource consumption
• Use public transportation or carpooling when possible
• Respect natural environments during field activities
• Promote environmental awareness within the community

Safety Consciousness:
• Follow all safety protocols and guidelines
• Report potential hazards or security concerns immediately
• Look out for the well-being of fellow community members
• Maintain awareness of personal and group safety
• Cooperate with emergency procedures and protocols`,
    },
    {
      id: "prohibited-conduct",
      title: "4. Prohibited Conduct",
      content: `The following behaviors are strictly prohibited and will not be tolerated within the FECA community:

Harassment and Discrimination:
• Verbal, physical, or sexual harassment of any kind
• Discrimination based on race, ethnicity, gender, sexual orientation, religion, disability, age, or any other protected characteristic
• Bullying, intimidation, or threatening behavior
• Unwelcome sexual advances or inappropriate sexual behavior
• Creating hostile or unwelcoming environments

Violence and Threats:
• Physical violence or threats of violence
• Verbal abuse or threatening language
• Destruction of property or vandalism
• Weapons possession on FECA premises
• Any behavior that creates fear or endangers safety

Dishonesty and Misconduct:
• Fraud, theft, or misappropriation of resources
• Falsification of documents or information
• Plagiarism or intellectual property violations
• Conflicts of interest that are not disclosed
• Misrepresentation of FECA or its programs

Substance Abuse:
• Use of illegal drugs on FECA premises or during programs
• Alcohol consumption during official activities (unless specifically permitted)
• Attending activities while under the influence of substances
• Distribution of illegal substances
• Behavior that endangers others due to substance use

Technology Misuse:
• Cyberbullying or online harassment
• Sharing inappropriate or offensive content
• Unauthorized recording or photography
• Violating digital privacy or confidentiality
• Using FECA technology for illegal or inappropriate purposes

Inappropriate Relationships:
• Exploitation of power dynamics or positions of authority
• Inappropriate relationships between staff and program participants
• Favoritism or preferential treatment based on personal relationships
• Boundary violations in professional relationships
• Conflicts of interest in interpersonal relationships`,
    },
    {
      id: "reporting-procedures",
      title: "5. Reporting and Complaint Procedures",
      content: `FECA is committed to addressing violations of this Code of Conduct promptly and fairly. We provide multiple avenues for reporting concerns and ensure protection for those who report in good faith.

Reporting Channels:

Immediate Supervisor or Program Coordinator:
• For minor issues or initial concerns
• Direct conversation or email communication
• Informal resolution and guidance

Human Resources or Designated Officer:
• For serious violations or when direct reporting is inappropriate
• Email: conduct@feca4development.org
• Phone: +254 722 432 918 (ext. 105)
• In-person meetings by appointment

Anonymous Reporting:
• Online form available on FECA website
• Written anonymous reports can be submitted to locked suggestion boxes
• Third-party reporting through trusted community leaders
• Anonymous hotline: [Phone number to be established]

External Reporting:
• Local authorities for criminal behavior
• Professional regulatory bodies when applicable
• Partner organizations when incidents occur during joint activities
• Community leaders for culturally sensitive issues

Reporting Process:

1. Initial Report:
• Provide as much detail as possible about the incident
• Include dates, times, locations, and witnesses if available
• Describe the impact of the behavior
• Specify desired outcome or resolution

2. Acknowledgment:
• All reports will be acknowledged within 48 hours
• Reporter will be informed of next steps and timeline
• Confidentiality will be maintained to the extent possible

3. Investigation:
• Trained staff will conduct thorough and impartial investigations
• All parties will have opportunity to present their perspective
• Relevant evidence and documentation will be reviewed
• External expertise may be consulted when appropriate

4. Resolution:
• Appropriate action will be taken based on investigation findings
• All parties will be informed of the outcome
• Follow-up support will be provided as needed
• Appeals process available for disputed decisions

Protection for Reporters:
• No retaliation against individuals who report in good faith
• Confidentiality protected to the maximum extent possible
• Support services available throughout the process
• Clear consequences for retaliatory behavior`,
    },
    {
      id: "consequences-enforcement",
      title: "6. Consequences and Enforcement",
      content: `FECA takes violations of this Code of Conduct seriously and will respond with appropriate consequences proportionate to the severity and impact of the behavior.

Progressive Discipline Approach:

First-Time Minor Violations:
• Verbal warning and coaching conversation
• Written record of incident and expectations
• Additional training or education if appropriate
• Monitoring period to ensure improvement
• Referral to support services if needed

Repeated or Moderate Violations:
• Written warning with specific behavior expectations
• Temporary suspension from certain activities or privileges
• Required participation in corrective training or counseling
• Modified supervision or program participation conditions
• Development of behavioral improvement plan

Serious Violations:
• Immediate temporary suspension pending investigation
• Permanent removal from specific programs or activities
• Termination of employment, volunteer status, or program participation
• Restriction from FECA premises or events
• Legal action when appropriate

Criminal Behavior:
• Immediate suspension and law enforcement notification
• Full cooperation with criminal investigations
• Permanent termination or ban from FECA activities
• Support for victims throughout legal processes
• Review of policies and procedures to prevent recurrence

Factors Considered in Determining Consequences:
• Severity and frequency of the violation
• Impact on individuals and the community
• Intent and circumstances surrounding the behavior
• Individual&apos;s response and willingness to change
• Previous disciplinary history
• Potential for rehabilitation and future contribution

Appeals Process:
• Right to appeal disciplinary decisions within 14 days
• Independent review by designated appeals committee
• Opportunity to present additional evidence or perspective
• Final decision communicated within 30 days
• External mediation available for complex cases

Restoration and Reintegration:
• Support for behavior change and skill development
• Clear pathways for returning to good standing when appropriate
• Ongoing monitoring and support during reintegration
• Community healing processes when needed
• Learning opportunities for the broader community`,
    },
    {
      id: "support-resources",
      title: "7. Support and Resources",
      content: `FECA is committed to providing comprehensive support for all community members, including those who experience violations of this Code and those who need assistance in meeting behavioral expectations.

Victim Support Services:

Immediate Support:
• Crisis counseling and emotional support
• Safety planning and protective measures
• Medical assistance and referrals when needed
• Legal information and advocacy support
• Temporary accommodation if necessary

Ongoing Support:
• Professional counseling and therapy referrals
• Peer support groups and mentorship programs
• Academic or program accommodations as needed
• Follow-up check-ins and monitoring
• Assistance with reporting to external authorities

Behavioral Support Services:

Individual Development:
• Conflict resolution and communication skills training
• Cultural competency and bias awareness workshops
• Stress management and mental health resources
• Leadership development and coaching
• Personal growth and self-reflection opportunities

Community Building:
• Facilitated dialogue and restorative justice processes
• Team building and relationship repair activities
• Cultural awareness and celebration events
• Inclusive leadership training for all participants
• Bystander intervention and ally training

Professional Resources:

Mental Health Services:
• On-site counseling and psychological support
• Referrals to qualified mental health professionals
• Crisis intervention and emergency services
• Support groups for specific issues or populations
• Trauma-informed care and specialized services

Educational Resources:
• Workshops on respectful communication and behavior
• Training on diversity, equity, and inclusion
• Conflict resolution and mediation skills
• Digital citizenship and online safety
• Environmental awareness and sustainable practices

External Partnerships:
• Collaboration with local counseling centers and hospitals
• Partnerships with legal aid organizations
• Connections to community-based support services
• Relationships with law enforcement and emergency services
• Networks with other NGOs and social service providers

Accessibility and Accommodation:
• Language interpretation and translation services
• Physical accessibility accommodations
• Cultural and religious accommodation
• Financial assistance for accessing support services
• Flexible scheduling and alternative participation options`,
    },
    {
      id: "special-considerations",
      title: "8. Special Considerations and Contexts",
      content: `FECA recognizes that our diverse community includes individuals from different backgrounds, cultures, and circumstances. This section addresses specific considerations for various contexts and populations.

Cultural Sensitivity:

Diverse Backgrounds:
• Recognition of different cultural norms and communication styles
• Flexible application of standards while maintaining core principles
• Cultural education and awareness building for all community members
• Consultation with cultural leaders and community elders
• Integration of traditional conflict resolution practices when appropriate

Religious Considerations:
• Respect for diverse religious beliefs and practices
• Accommodation for religious observances and requirements
• Inclusive scheduling that considers religious holidays
• Appropriate dress codes that respect religious modesty requirements
• Dietary accommodations for religious restrictions

Power Dynamics and Vulnerability:

Age Considerations:
• Enhanced protections for minor participants (under 18)
• Age-appropriate expectations and consequences
• Parental involvement in disciplinary processes for minors
• Specialized training for staff working with youth
• Intergenerational respect and learning opportunities

Economic Disparities:
• Recognition of economic pressures that may affect behavior
• Financial support to reduce barriers to participation
• Flexible payment plans and scholarship opportunities
• Awareness of how economic stress impacts community dynamics
• Anti-classism training and awareness building

Gender and Identity:

LGBTQ+ Inclusion:
• Explicit protection against discrimination based on sexual orientation and gender identity
• Use of chosen names and pronouns for all community members
• Gender-inclusive facilities and accommodation
• Specialized support for LGBTQ+ individuals
• Training on LGBTQ+ competency for all staff and participants

Gender-Based Violence Prevention:
• Specific protocols for addressing gender-based violence
• Trauma-informed approaches to investigation and support
• Partnerships with specialized service providers
• Prevention education and awareness programs
• Safe spaces and support groups for survivors

Disability Inclusion:

Accessibility Standards:
• Physical accessibility of all venues and activities
• Communication accommodations for deaf and hard-of-hearing participants
• Materials in alternative formats for visually impaired individuals
• Cognitive accessibility considerations for program design
• Assistive technology and equipment availability

Reasonable Accommodations:
• Individualized accommodation plans for participants with disabilities
• Flexible participation requirements when needed
• Modified behavioral expectations when appropriate due to disability
• Specialized support staff when necessary
• Partnership with disability rights organizations

Environmental and Safety Context:

Field Work Considerations:
• Enhanced safety protocols for community-based activities
• Cultural orientation for work in different communities
• Security briefings and emergency preparedness
• Respect for local customs and traditional authorities
• Environmental protection measures during outdoor activities

Crisis and Emergency Situations:
• Modified expectations during emergencies or crises
• Trauma-informed responses to stress and unusual behavior
• Flexible application of standards during difficult circumstances
• Enhanced support and resources during challenging times
• Community resilience building and preparation`,
    },
    {
      id: "implementation-review",
      title: "9. Implementation and Review",
      content: `This Code of Conduct is a living document that requires ongoing implementation, monitoring, and improvement to remain effective and relevant to our evolving community.

Implementation Strategy:

Orientation and Training:
• Mandatory Code of Conduct training for all new community members
• Annual refresher training for existing participants and staff
• Specialized training for staff with enforcement responsibilities
• Integration of Code principles into all program curricula
• Regular discussion and reflection opportunities

Communication and Awareness:
• Prominent display of Code summary in all FECA facilities
• Translation of Code into local languages as needed
• Regular communication about expectations and updates
• Integration into recruitment and onboarding materials
• Social media and website promotion of Code principles

Monitoring and Evaluation:

Regular Assessment:
• Annual review of Code effectiveness and implementation
• Community feedback surveys on safety and inclusion
• Analysis of incident reports and trends
• Evaluation of disciplinary processes and outcomes
• Assessment of support service utilization and effectiveness

Data Collection and Analysis:
• Anonymous climate surveys to assess community well-being
• Tracking of incident types, frequency, and resolution
• Evaluation of training effectiveness and participant feedback
• Monitoring of demographic patterns in reporting and outcomes
• Assessment of policy compliance and gaps

Continuous Improvement:

Review Process:
• Annual comprehensive review by designated committee
• Input from all stakeholder groups including participants, staff, and partners
• Consultation with external experts and best practice research
• Alignment with evolving legal requirements and standards
• Integration of lessons learned from incidents and responses

Update and Revision:
• Regular updates to reflect changing needs and circumstances
• Incorporation of new research and best practices
• Alignment with organizational strategic planning
• Community input and feedback integration
• Transparent communication of changes and rationale

Accountability Measures:

Leadership Responsibility:
• Board oversight of Code implementation and effectiveness
• Executive accountability for creating supportive culture
• Manager and supervisor responsibility for daily implementation
• Staff performance evaluation includes Code adherence
• Regular reporting to stakeholders and community

Community Ownership:
• Participant involvement in Code development and revision
• Peer accountability and support systems
• Community-led initiatives to promote positive behavior
• Recognition and celebration of exemplary conduct
• Collective responsibility for maintaining safe and inclusive environment

External Accountability:
• Partnership with external organizations for oversight and support
• Participation in sector-wide standards and initiatives
• Transparency in reporting significant incidents to relevant authorities
• Engagement with regulatory bodies and professional associations
• Public accountability through annual reports and community meetings

Resource Allocation:
• Dedicated budget for Code implementation and support services
• Staffing allocation for enforcement and support functions
• Investment in training and professional development
• Technology and infrastructure to support reporting and response
• Evaluation and improvement activities funding`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='30 0 60 30 30 60 0 30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Community Standards
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Code of Conduct
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Our commitment to creating a safe, inclusive, and respectful
            environment for all FECA community members, participants, and
            stakeholders.
          </p>
          <div className="text-sm text-green-200">
            <span className="font-semibold">Last Updated:</span> December 2024 |{" "}
            <span className="font-semibold ml-2">Effective Date:</span> January
            1, 2025
          </div>
        </div>
      </section>

      {/* Core Values Overview */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide all interactions and form the foundation of our
              community standards.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                letter: "F",
                title: "Fidelity",
                description:
                  "Commitment to inclusive practices and authentic representation",
                color: "bg-blue-100 text-blue-700",
              },
              {
                letter: "E",
                title: "Equity",
                description:
                  "Fair treatment and equal opportunities for all participants",
                color: "bg-purple-100 text-purple-700",
              },
              {
                letter: "C",
                title: "Collaboration",
                description:
                  "Building bridges and fostering unity through dialogue",
                color: "bg-orange-100 text-orange-700",
              },
              {
                letter: "A",
                title: "Accountability",
                description:
                  "Taking responsibility and promoting transparent governance",
                color: "bg-red-100 text-red-700",
              },
              {
                letter: "S",
                title: "Sustainability",
                description:
                  "Environmental consciousness and long-term thinking",
                color: "bg-green-100 text-green-700",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mx-auto mb-3 text-xl font-bold`}
                >
                  {value.letter}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Guidelines at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential principles for positive participation in the FECA
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Expected Behaviors
              </h3>
              <div className="space-y-4">
                {[
                  "Treat everyone with respect and dignity",
                  "Use inclusive language and communication",
                  "Listen actively and engage constructively",
                  "Honor commitments and arrive prepared",
                  "Respect confidentiality and privacy",
                  "Practice environmental responsibility",
                  "Support and welcome new community members",
                  "Report concerns and seek help when needed",
                ].map((behavior, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{behavior}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Prohibited Behaviors
              </h3>
              <div className="space-y-4">
                {[
                  "Harassment, discrimination, or bullying",
                  "Violent or threatening behavior",
                  "Dishonesty, fraud, or theft",
                  "Substance abuse during activities",
                  "Inappropriate use of technology",
                  "Violation of confidentiality or privacy",
                  "Environmental harm or waste",
                  "Retaliation against those who report concerns",
                ].map((behavior, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{behavior}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Code of Conduct Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Building Community Together
                  </h3>
                  <p className="text-green-700">
                    This Code of Conduct represents our shared commitment to
                    creating a respectful, inclusive environment where everyone
                    can thrive. By participating in FECA programs, you agree to
                    uphold these standards and contribute to our positive
                    community culture. For questions or concerns, contact us at{" "}
                    <a
                      href="mailto:conduct@feca4development.org"
                      className="underline font-medium"
                    >
                      conduct@feca4development.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {conductSections.map((section) => (
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
                                  <span className="text-green-600 mr-2 mt-1">
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

      {/* Reporting and Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reporting and Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to report concerns and access support services
              within our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🗣️",
                title: "Direct Reporting",
                description:
                  "Speak directly with your supervisor or program coordinator",
                contact: "Program Staff",
              },
              {
                icon: "📧",
                title: "Email Reports",
                description: "Send detailed reports to our conduct team",
                contact: "conduct@feca4development.org",
              },
              {
                icon: "📞",
                title: "Phone Support",
                description: "Call our dedicated conduct hotline",
                contact: "+254 722 432 918 (ext. 105)",
              },
              {
                icon: "🔒",
                title: "Anonymous Reporting",
                description:
                  "Submit anonymous reports through our secure online form",
                contact: "Online Form Available",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{option.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {option.description}
                </p>
                <p className="text-sm font-medium text-green-600">
                  {option.contact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
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
                  Emergency Situations
                </h3>
                <p className="text-yellow-700">
                  For immediate safety concerns or emergencies, contact local
                  authorities first (999 for emergency services in Kenya), then
                  notify FECA staff. We are committed to supporting you through
                  any crisis situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Services Available
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for all community members, whether you need
              help meeting expectations or have experienced violations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Victim Support
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Crisis counseling and emotional support</li>
                <li>• Safety planning and protective measures</li>
                <li>• Medical assistance and referrals</li>
                <li>• Legal information and advocacy</li>
                <li>• Ongoing therapy and support groups</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Educational Resources
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Communication and conflict resolution training</li>
                <li>• Cultural competency workshops</li>
                <li>• Bias awareness and inclusion education</li>
                <li>• Leadership development programs</li>
                <li>• Digital citizenship and online safety</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Community Building
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Restorative justice and healing processes</li>
                <li>• Peer support and mentorship programs</li>
                <li>• Team building and relationship repair</li>
                <li>• Cultural celebration and awareness events</li>
                <li>• Bystander intervention training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Help and Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re here to support you and answer any questions about our
              community standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Conduct Team</h4>
                    <p className="text-gray-600">
                      conduct@feca4development.org
                    </p>
                  </div>
                </div>

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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Support Hotline
                    </h4>
                    <p className="text-gray-600">+254 722 432 918 (ext. 105)</p>
                    <p className="text-sm text-gray-500">
                      Available 24/7 for urgent concerns
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
                      Office Location
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
                External Resources
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Gender-Based Violence Support
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Coalition on Violence Against Women (COVAW)
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: +254 20 386 1320
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Mental Health Support
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Kenya Association for the Mentally Challenged
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: +254 20 557 2829
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Legal Aid</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Kenya Legal and Ethical Issues Network
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: +254 20 387 4999
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Emergency Services
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Police, Fire, Medical Emergency
                  </p>
                  <p className="text-sm text-gray-600">Phone: 999 or 911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Policies & Documents
            </h2>
            <p className="text-lg text-gray-600">
              Additional information about our organizational policies and
              procedures
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
                title: "Privacy Policy",
                description:
                  "How we collect, use, and protect your personal information",
                link: "/privacy-policy",
                icon: "🔒",
              },
              {
                title: "Cookie Policy",
                description: "How we use cookies and tracking technologies",
                link: "/cookie-policy",
                icon: "🍪",
              },
            ].map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="block p-6 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 group shadow-sm"
              >
                <div className="text-3xl mb-3">{doc.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <div className="text-sm text-green-600 font-medium group-hover:text-green-800">
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

export default CodeOfConductPage;
