import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Budul Tech LLC',
  description: 'Privacy Policy for Budul Tech LLC - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="bg-dark-900 border-b border-dark-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-extrabold text-dark-50">
            Budul<span className="text-primary">Tech</span>
          </Link>
          <Link href="/" className="text-primary hover:underline text-sm font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-dark-50 mb-2">Privacy Policy</h1>
        <p className="text-dark-400 text-sm mb-8 pb-8 border-b border-dark-800">
          Last Updated: January 29, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-dark-300 mb-6">
            Budul Tech LLC (&quot;Budul Tech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website budultech.com (the &quot;Site&quot;) or engage our services.
          </p>

          <p className="text-dark-300 mb-8">
            Please read this Privacy Policy carefully. By accessing or using our Site or services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">1.1 Personal Information You Provide</h3>
          <p className="text-dark-300 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Fill out our contact form</li>
            <li>Request a quote or consultation</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email, phone, or other channels</li>
            <li>Engage our services as a client</li>
          </ul>

          <p className="text-dark-300 mb-4">This information may include:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Project details and requirements</li>
            <li>Billing and payment information (processed securely through third-party payment processors)</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">1.2 Information Automatically Collected</h3>
          <p className="text-dark-300 mb-4">When you visit our Site, we may automatically collect certain information about your device and usage, including:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Date and time of visit</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">1.3 Cookies and Tracking Technologies</h3>
          <p className="text-dark-300 mb-6">
            We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-dark-300 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 text-dark-300 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process and fulfill your service requests</li>
            <li>Send you project updates and communications</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze usage trends and preferences</li>
            <li>Protect against fraudulent or unauthorized activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">3. How We Share Your Information</h2>
          <p className="text-dark-300 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.1 Service Providers</h3>
          <p className="text-dark-300 mb-4">We may share your information with third-party service providers who perform services on our behalf, such as:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Payment processors (e.g., Stripe)</li>
            <li>Email service providers</li>
            <li>Hosting providers</li>
            <li>Analytics providers</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.2 Legal Requirements</h3>
          <p className="text-dark-300 mb-4">
            We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.3 Business Transfers</h3>
          <p className="text-dark-300 mb-6">
            If Budul Tech is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">4. Data Security</h2>
          <p className="text-dark-300 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <div className="bg-dark-900 border border-dark-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-primary mt-0 mb-3">Our Security Measures Include:</h3>
            <ul className="list-disc pl-6 text-dark-300 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure hosting with reputable providers</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">5. Data Retention</h2>
          <p className="text-dark-300 mb-6">
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer need your information, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">6. Your Rights and Choices</h2>
          <p className="text-dark-300 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li><strong className="text-dark-100">Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong className="text-dark-100">Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong className="text-dark-100">Deletion:</strong> Request deletion of your personal information</li>
            <li><strong className="text-dark-100">Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong className="text-dark-100">Data Portability:</strong> Request a copy of your data in a portable format</li>
          </ul>
          <p className="text-dark-300 mb-6">
            To exercise any of these rights, please contact us at <a href="mailto:hello@budultech.com" className="text-primary hover:underline">hello@budultech.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">7. Third-Party Links</h2>
          <p className="text-dark-300 mb-6">
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">8. Children&apos;s Privacy</h2>
          <p className="text-dark-300 mb-6">
            Our Site and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">9. California Privacy Rights</h2>
          <p className="text-dark-300 mb-6">
            If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt out of the sale of your information (note: we do not sell personal information).
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">10. International Users</h2>
          <p className="text-dark-300 mb-6">
            If you are accessing our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where our servers are located. By using our Site, you consent to the transfer of your information to the United States.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-dark-300 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">12. Contact Us</h2>
          <p className="text-dark-300 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>

          <div className="bg-dark-900 border border-dark-800 rounded-xl p-6 my-6">
            <p className="text-dark-100 font-semibold mb-2">Budul Tech LLC</p>
            <p className="text-dark-300">Email: <a href="mailto:hello@budultech.com" className="text-primary hover:underline">hello@budultech.com</a></p>
            <p className="text-dark-300">Phone: <a href="tel:+13852159346" className="text-primary hover:underline">(385) 215-9346</a></p>
            <p className="text-dark-300">Location: Utah, USA</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-800 py-6 mt-12">
        <p className="text-center text-dark-500 text-sm">
          &copy; 2026 Budul Tech LLC. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
