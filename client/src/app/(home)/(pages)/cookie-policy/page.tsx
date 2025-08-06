"use client";
import React, { useState } from "react";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

const CookiePolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const cookieSections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Forum for Empowerment and Community Awareness (FECA) uses cookies and similar tracking technologies on our website (www.feca4development.org) to enhance your browsing experience, analyze website performance, and provide personalized content.

This Cookie Policy explains:
• What cookies are and how they work
• The types of cookies we use and why
• How to manage your cookie preferences
• Your rights regarding cookie usage
• How cookies relate to your privacy

What are Cookies:
Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They contain information that is transferred to your device&apos;s hard drive and allow the website to recognize your device and store some information about your preferences or past actions.

Types of Cookies:
• Session Cookies: Temporary cookies that expire when you close your browser
• Persistent Cookies: Cookies that remain on your device for a set period or until you delete them
• First-Party Cookies: Set directly by the website you&apos;re visiting
• Third-Party Cookies: Set by a domain other than the one you&apos;re visiting

Legal Basis:
We process cookies based on your consent, which you can withdraw at any time through your browser settings or our cookie preference center. Some cookies are essential for website functionality and are processed based on our legitimate interest in providing you with a functional website.`,
    },
    {
      id: "types-cookies",
      title: "2. Types of Cookies We Use",
      content: `FECA uses several categories of cookies to provide and improve our website services:

Essential Cookies (Always Active):
These cookies are necessary for the website to function properly and cannot be disabled in our systems.

• Authentication cookies: Keep you logged in to secure areas
• Security cookies: Protect against cross-site request forgery and other security threats
• Load balancing cookies: Distribute website traffic across our servers
• Preference cookies: Remember your language and accessibility settings
• Session management cookies: Maintain your session during your visit

Functional Cookies:
These cookies enhance your website experience by remembering your preferences and choices.

• Language preference cookies: Remember your selected language
• Accessibility cookies: Store your accessibility preferences (font size, contrast)
• Form data cookies: Remember information you&apos;ve entered in forms
• Video player cookies: Remember your video player preferences
• Chat widget cookies: Enable our customer support chat functionality

Performance and Analytics Cookies:
These cookies help us understand how visitors use our website so we can improve its performance.

• Google Analytics: Tracks website usage, popular pages, and user behavior patterns
• Page load time monitoring: Helps us identify and fix slow-loading pages
• Error tracking: Identifies technical issues that need to be resolved
• Heat mapping: Shows us how users interact with different page elements
• A/B testing cookies: Help us test different website versions to improve user experience

Marketing and Advertising Cookies (Optional):
These cookies are used to deliver relevant advertisements and marketing content.

• Social media cookies: Enable sharing content on social platforms
• Retargeting cookies: Show relevant FECA content when you visit other websites
• Campaign tracking: Measure the effectiveness of our marketing campaigns
• Personalization cookies: Deliver content tailored to your interests
• Email marketing cookies: Track interaction with our email campaigns`,
    },
    {
      id: "third-party-cookies",
      title: "3. Third-Party Cookies and Services",
      content: `Our website uses services from third-party providers that may set their own cookies. We carefully select these partners and ensure they meet our privacy standards.

Analytics Services:

Google Analytics:
• Purpose: Website traffic analysis and user behavior insights
• Data collected: Page views, session duration, bounce rate, device information
• Retention period: 26 months (configurable)
• Privacy policy: https://policies.google.com/privacy
• Opt-out: https://tools.google.com/dlpage/gaoptout

Google Tag Manager:
• Purpose: Managing and deploying marketing and analytics tags
• Data collected: Tag firing information and basic page data
• Privacy policy: https://policies.google.com/privacy

Social Media Integration:

Facebook Pixel:
• Purpose: Measuring ad effectiveness and creating custom audiences
• Data collected: Page visits, button clicks, form submissions
• Privacy policy: https://www.facebook.com/privacy/policy
• Cookie settings: Available in your Facebook account settings

LinkedIn Insight Tag:
• Purpose: Professional audience insights and conversion tracking
• Data collected: Professional demographics and website interactions
• Privacy policy: https://www.linkedin.com/legal/privacy-policy

Twitter Analytics:
• Purpose: Social media engagement tracking
• Data collected: Tweet interactions and website referrals
• Privacy policy: https://twitter.com/privacy

Communication Tools:

Live Chat Widgets:
• Purpose: Customer support and visitor assistance
• Data collected: Chat transcripts, visitor information, session data
• Retention: Chat history stored for service improvement

Email Marketing:

Mailchimp:
• Purpose: Newsletter delivery and email campaign management
• Data collected: Email opens, clicks, unsubscribes
• Privacy policy: https://mailchimp.com/legal/privacy
• Unsubscribe: Available in all email communications

Video Content:

YouTube Embedded Videos:
• Purpose: Educational and promotional video content
• Data collected: Video viewing statistics and preferences
• Privacy policy: https://policies.google.com/privacy
• Controls: Available in your Google account settings

Vimeo Embedded Videos:
• Purpose: High-quality video content delivery
• Data collected: Video engagement and viewing patterns
• Privacy policy: https://vimeo.com/privacy`,
    },
    {
      id: "cookie-management",
      title: "4. Managing Your Cookie Preferences",
      content: `You have control over how cookies are used on our website. Here are the various ways you can manage your cookie preferences:

FECA Cookie Preference Center:
• Access our cookie preference center from the website footer
• Choose which categories of cookies to accept or reject
• Update your preferences at any time
• View detailed information about each cookie category
• Download your current cookie settings

Browser Settings:
You can control cookies through your browser settings. Here&apos;s how to manage cookies in popular browsers:

Google Chrome:
1. Click the three-dot menu → Settings → Privacy and security → Cookies and other site data
2. Choose your preferred cookie settings
3. Manage exceptions for specific websites
4. Clear existing cookies if desired

Mozilla Firefox:
1. Click the menu button → Options → Privacy & Security
2. Under Cookies and Site Data, choose your settings
3. Use "Manage Data" to view and delete specific cookies
4. Set custom rules for websites

Safari:
1. Safari menu → Preferences → Privacy
2. Choose cookie acceptance settings
3. Use "Manage Website Data" for specific controls
4. Enable "Prevent cross-site tracking" for enhanced privacy

Microsoft Edge:
1. Settings menu → Cookies and site permissions
2. Choose cookie settings and exceptions
3. Clear browsing data to remove existing cookies
4. Set tracking prevention levels

Mobile Browsers:
• iOS Safari: Settings → Safari → Privacy & Security
• Android Chrome: Settings → Site Settings → Cookies
• Check your mobile browser&apos;s help section for specific instructions

Opt-Out Tools:

Industry Opt-Out Pages:
• Your Online Choices (EU): http://www.youronlinechoices.eu
• Network Advertising Initiative (US): http://www.networkadvertising.org/choices
• Digital Advertising Alliance (US): http://www.aboutads.info/choices

Individual Service Opt-Outs:
• Google Analytics: https://tools.google.com/dlpage/gaoptout
• Facebook: Account Settings → Ads → Ad Settings
• LinkedIn: Account Settings → Privacy → Advertising data

Impact of Disabling Cookies:
• Some website features may not function properly
• You may need to re-enter information more frequently
• Personalized content and recommendations will be limited
• Some forms and interactive features may not work
• Analytics help us improve the website, so disabling them affects our ability to enhance user experience`,
    },
    {
      id: "data-retention",
      title: "5. Data Retention and Storage",
      content: `FECA follows clear data retention practices for information collected through cookies, ensuring we only keep data as long as necessary for legitimate purposes.

Cookie Retention Periods:

Session Cookies:
• Automatically deleted when you close your browser
• No persistent storage on your device
• Reset with each new browsing session

Essential Cookies:
• Expire after 1 year or when purpose is fulfilled
• Authentication cookies: 30 days or until logout
• Security cookies: Duration of session plus 24 hours
• Preference cookies: 1 year or until changed

Functional Cookies:
• Language preferences: 1 year
• Accessibility settings: 1 year
• Form data: Until form submission or 7 days
• Video preferences: 6 months

Analytics Cookies:
• Google Analytics: 26 months (configurable to shorter periods)
• Performance monitoring: 13 months
• Error tracking: 90 days
• Heat mapping data: 12 months

Marketing Cookies:
• Social media cookies: As determined by each platform (typically 1-2 years)
• Campaign tracking: 6 months
• Retargeting cookies: 30-180 days depending on campaign
• Email marketing: 2 years or until unsubscribe

Data Storage Locations:
• Primary servers located in secure data centers
• Some third-party services may store data internationally
• All data transfers comply with applicable data protection laws
• Regular backups maintained for business continuity

Data Security:
• Encryption in transit and at rest
• Regular security audits and updates
• Access controls and monitoring
• Incident response procedures
• Compliance with industry standards

Deletion and Purging:
• Automatic deletion based on retention schedules
• Manual deletion available upon request
• Secure data destruction methods
• Verification of deletion completion
• Documentation of deletion activities`,
    },
    {
      id: "your-rights",
      title: "6. Your Rights and Choices",
      content: `Under Kenya&apos;s Data Protection Act, 2019, and international privacy standards, you have specific rights regarding cookies and the data they collect.

Right to Information:
• Clear explanation of what cookies we use and why
• Information about data sharing with third parties
• Details about retention periods and deletion practices
• Contact information for privacy inquiries
• Regular updates about changes to our cookie practices

Right to Consent:
• Clear choice about accepting non-essential cookies
• Ability to provide granular consent for different cookie types
• Option to withdraw consent at any time
• No negative consequences for refusing non-essential cookies
• Re-consent when we make significant changes

Right to Access:
• Information about what cookie data we have about you
• Details about how your data has been processed
• Copy of data in a readable format
• Information about automated decision-making
• Response within 30 days of verified request

Right to Rectification:
• Correction of inaccurate cookie-related data
• Completion of incomplete information
• Update of preferences and settings
• Notification to third parties where appropriate

Right to Erasure:
• Deletion of cookie data when no longer necessary
• Removal when consent is withdrawn
• Erasure when data has been unlawfully processed
• Right to be forgotten in certain circumstances

Right to Restrict Processing:
• Limitation of how cookie data is used
• Temporary halt of processing during disputes
• Restriction when accuracy is questioned
• Processing limitations based on legal requirements

Right to Data Portability:
• Receive cookie preference data in portable format
• Transfer settings to other services where possible
• Machine-readable format for technical compatibility

Right to Object:
• Object to cookie use based on legitimate interests
• Opt-out of marketing and profiling cookies
• Object to automated decision-making
• Stop processing for direct marketing purposes

Exercising Your Rights:
• Contact us at privacy@feca4development.org
• Use our online cookie preference center
• Submit requests through our website contact form
• Call our privacy hotline at +254 722 432 918 (ext. 102)
• Written requests to P.O BOX 28799-00200, Nairobi, Kenya

Response Times:
• Acknowledgment within 48 hours
• Full response within 30 days for most requests
• Extension to 60 days for complex requests (with explanation)
• Free of charge for reasonable requests
• Small fee may apply for excessive or repetitive requests`,
    },
    {
      id: "international-transfers",
      title: "7. International Data Transfers",
      content: `Some of the cookies and tracking technologies we use involve transferring data internationally. We ensure appropriate safeguards for all such transfers.

Transfers Outside Kenya:

United States:
• Google Analytics and Google Tag Manager
• Facebook Pixel and social media integration
• Cloud hosting and content delivery networks
• Email marketing and communication platforms

European Union:
• Some analytics and performance monitoring services
• Customer support and live chat tools
• Content delivery networks and hosting services

Other Countries:
• Social media platforms with global presence
• Third-party service providers with international operations
• Backup and disaster recovery services

Safeguards for International Transfers:

Legal Mechanisms:
• Standard Contractual Clauses (SCCs) with service providers
• Adequacy decisions where available
• Binding Corporate Rules for multinational companies
• Certification schemes ensuring appropriate protection

Technical Safeguards:
• Encryption during data transmission
• Pseudonymization and anonymization where possible
• Access controls and authentication requirements
• Regular security assessments of international partners

Ongoing Monitoring:
• Regular review of transfer mechanisms
• Assessment of legal and political developments
• Updates to contracts and safeguards as needed
• Notification of material changes to transfer arrangements

Your Rights Regarding International Transfers:
• Right to be informed about transfers
• Right to object to transfers in certain circumstances
• Right to seek remedies for inadequate protection
• Right to complaint to data protection authorities

Data Subject Protections:
• Same level of protection as in Kenya
• Clear recourse mechanisms for complaints
• Regular auditing of international partners
• Transparent reporting of transfer activities`,
    },
    {
      id: "updates-changes",
      title: "8. Policy Updates and Contact Information",
      content: `FECA may update this Cookie Policy periodically to reflect changes in our practices, technology, or legal requirements.

Reasons for Updates:
• Changes in cookie technologies or usage
• New third-party services or integrations
• Updates to legal or regulatory requirements
• Improvements to user privacy controls
• Feedback from users and stakeholders

Notification of Changes:

Major Changes:
• Email notification to registered users
• Prominent website notice for 30 days
• Pop-up notification on first visit after changes
• Social media announcements
• Updated consent requests where required

Minor Changes:
• Updated policy posted on website
• Version history available upon request
• Annual summary of changes in privacy report
• Inclusion in regular communications

Effective Dates:
• Immediate effect for changes benefiting users
• 30-day notice for changes requiring new consent
• Grandfathering of existing consents where appropriate
• Clear transition periods for complex changes

Your Response to Changes:
• Review updated policy when notified
• Update cookie preferences if desired
• Contact us with questions or concerns
• Withdraw consent if you disagree with changes

Contact Information:

Privacy and Cookie Inquiries:
• Email: privacy@feca4development.org
• Phone: +254 722 432 918 (ext. 102)
• Hours: Monday-Friday, 8:00 AM - 5:00 PM EAT

General Contact:
• Main office: info@feca4development.org
• Website: www.feca4development.org
• Address: P.O BOX 28799-00200, Nairobi, Kenya

Cookie Technical Support:
• Help with browser settings and cookie management
• Assistance with preference center usage
• Technical issues with opt-out tools
• Website functionality problems related to cookies

Data Protection Officer:
• Responsible for privacy and cookie policy compliance
• Available for detailed privacy discussions
• Liaison with regulatory authorities
• Oversight of privacy impact assessments

Complaints and Appeals:
• Internal complaints process available
• External complaint options to regulatory authorities
• Alternative dispute resolution mechanisms
• Legal remedies information provided

Response Commitments:
• Acknowledgment within 48 hours
• Substantive response within 5 business days
• Resolution or detailed action plan within 30 days
• Follow-up to ensure satisfaction
• Continuous improvement based on feedback

Regulatory Contact:
Office of the Data Protection Commissioner
• Email: info@odpc.go.ke
• Phone: +254 20 2628 000
• Website: www.odpc.go.ke
• For complaints about our cookie practices if internal resolution is unsatisfactory`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-800 via-orange-900 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3Ccircle cx='30' cy='30' r='25'/%3E%3Ccircle cx='30' cy='30' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Website Cookies & Tracking
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Learn how FECA uses cookies and similar technologies to enhance your
            website experience, analyze performance, and provide personalized
            content.
          </p>
          <div className="text-sm text-orange-200">
            <span className="font-semibold">Last Updated:</span> December 2024 |{" "}
            <span className="font-semibold ml-2">Effective Date:</span> January
            1, 2025
          </div>
        </div>
      </section>

      {/* Cookie Types Overview */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the different categories of cookies and how they
              enhance your experience on our website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚙️",
                title: "Essential",
                description:
                  "Necessary for basic website functionality and security",
                status: "Always Active",
                color: "border-red-200 bg-red-50",
              },
              {
                icon: "🎛️",
                title: "Functional",
                description:
                  "Remember your preferences and enhance your experience",
                status: "Your Choice",
                color: "border-blue-200 bg-blue-50",
              },
              {
                icon: "📊",
                title: "Analytics",
                description:
                  "Help us understand website usage and improve performance",
                status: "Your Choice",
                color: "border-green-200 bg-green-50",
              },
              {
                icon: "📢",
                title: "Marketing",
                description:
                  "Deliver relevant content and measure campaign effectiveness",
                status: "Your Choice",
                color: "border-purple-200 bg-purple-50",
              },
            ].map((cookie, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${cookie.color} hover:shadow-md transition-shadow duration-200`}
              >
                <div className="text-3xl mb-3">{cookie.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{cookie.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {cookie.description}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    cookie.status === "Always Active"
                      ? "bg-red-100 text-red-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {cookie.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Cookie Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cookie Quick Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential information about how we use cookies and your choices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-600"
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
                    What are cookies?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Small text files stored on your device that help websites
                    remember your preferences and improve functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-600"
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
                    Why do we use them?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    To provide a better user experience, remember your settings,
                    analyze website performance, and deliver relevant content.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-600"
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
                    Third-party cookies
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We use trusted partners like Google Analytics and social
                    media platforms to enhance our services and understand user
                    behavior.
                  </p>
                </div>
              </div>
            </div>

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
                    Your control
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You can choose which cookies to accept through our
                    preference center or your browser settings at any time.
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
                    Data protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All cookie data is handled in accordance with Kenya&apos;s
                    Data Protection Act and international privacy standards.
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
                    Easy management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Simple tools and clear instructions to help you manage your
                    cookie preferences and maintain your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cookie Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-600 mt-1 mr-3 flex-shrink-0"
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
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">
                    Your Cookie Choices Matter
                  </h3>
                  <p className="text-orange-700">
                    This Cookie Policy explains how FECA uses cookies and
                    similar technologies to enhance your website experience. You
                    have full control over non-essential cookies and can update
                    your preferences at any time. For questions about our cookie
                    practices, contact us at{" "}
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
            {cookieSections.map((section) => (
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
                                  <span className="text-orange-600 mr-2 mt-1">
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

      {/* Cookie Management Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take control of your cookie settings with these easy-to-use tools
              and options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎛️",
                title: "Cookie Preference Center",
                description:
                  "Customize your cookie settings with granular controls",
                action: "Open Preferences",
                color: "bg-orange-100 hover:bg-orange-200 text-orange-700",
              },
              {
                icon: "🌐",
                title: "Browser Settings",
                description:
                  "Manage cookies directly through your browser controls",
                action: "View Guide",
                color: "bg-blue-100 hover:bg-blue-200 text-blue-700",
              },
              {
                icon: "📱",
                title: "Mobile Controls",
                description:
                  "Cookie management options for mobile browsers and apps",
                action: "Mobile Guide",
                color: "bg-green-100 hover:bg-green-200 text-green-700",
              },
              {
                icon: "🚫",
                title: "Opt-Out Tools",
                description: "Industry-standard tools to opt out of tracking",
                action: "Opt-Out Links",
                color: "bg-purple-100 hover:bg-purple-200 text-purple-700",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <button
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${tool.color}`}
                >
                  {tool.action}
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
                </button>
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
                  Impact of Disabling Cookies
                </h3>
                <p className="text-yellow-700">
                  While you can disable non-essential cookies, please note that
                  some website features may not function properly. Essential
                  cookies are required for basic website functionality and
                  security, and cannot be disabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Third-Party Services We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted partners that help us provide better services and
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Analytics Services
              </h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Google Analytics - Website traffic analysis</li>
                <li>• Google Tag Manager - Tag management</li>
                <li>• Performance monitoring tools</li>
                <li>• Heat mapping and user behavior</li>
              </ul>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Data retention:</strong> 26 months
                </p>
                <p>
                  <strong>Opt-out:</strong> Available through Google
                </p>
              </div>
            </div>

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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Social Media & Communication
              </h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Facebook and Instagram integration</li>
                <li>• LinkedIn professional networking</li>
                <li>• Twitter social engagement</li>
                <li>• Live chat and support tools</li>
              </ul>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Data retention:</strong> Platform-specific
                </p>
                <p>
                  <strong>Controls:</strong> Available in platform settings
                </p>
              </div>
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Marketing & Content
              </h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Email marketing platforms</li>
                <li>• Content delivery networks</li>
                <li>• Video hosting services</li>
                <li>• Campaign tracking tools</li>
              </ul>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Data retention:</strong> 6 months - 2 years
                </p>
                <p>
                  <strong>Unsubscribe:</strong> Available in all communications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cookie Support and Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Need help with cookie settings or have questions about our cookie
              practices?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
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
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Team</h3>
              <p className="text-gray-600 mb-2">privacy@feca4development.org</p>
              <p className="text-sm text-gray-500">
                Cookie and privacy questions
              </p>
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
              <h3 className="font-semibold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600 mb-2">+254 722 432 918 (ext. 102)</p>
              <p className="text-sm text-gray-500">
                Cookie settings assistance
              </p>
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Website Help</h3>
              <p className="text-gray-600 mb-2">Visit our Help Center</p>
              <p className="text-sm text-gray-500">Browser setup guides</p>
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
              Additional information about our privacy and legal policies
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
                title: "Terms of Service",
                description:
                  "Legal terms for using FECA&apos;s website and services",
                link: "/terms-of-service",
                icon: "📋",
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
                className="block p-6 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 group shadow-sm"
              >
                <div className="text-3xl mb-3">{doc.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <div className="text-sm text-orange-600 font-medium group-hover:text-orange-800">
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

export default CookiePolicyPage;
