import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Budul Tech LLC',
  description: 'Terms of Service for Budul Tech LLC - Read our terms and conditions for using our services.',
}

export default function TermsOfService() {
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
        <h1 className="text-4xl font-extrabold text-dark-50 mb-2">Terms of Service</h1>
        <p className="text-dark-400 text-sm mb-8 pb-8 border-b border-dark-800">
          Last Updated: January 29, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-dark-300 mb-6">
            Welcome to Budul Tech LLC. These Terms of Service (&quot;Terms&quot;) govern your use of our website budultech.com (the &quot;Site&quot;) and the services provided by Budul Tech LLC (&quot;Budul Tech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>

          <p className="text-dark-300 mb-8">
            By accessing our Site or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">1. Services Overview</h2>
          <p className="text-dark-300 mb-6">
            Budul Tech provides web development, mobile app development, AI integration, digital marketing, custom software development, and related technology services (&quot;Services&quot;). The specific scope, timeline, and pricing for each project will be outlined in a separate proposal or agreement.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">2. Engaging Our Services</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">2.1 Project Proposals</h3>
          <p className="text-dark-300 mb-4">Before starting any project, we will provide a written proposal outlining:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Scope of work and deliverables</li>
            <li>Project timeline and milestones</li>
            <li>Pricing and payment terms</li>
            <li>Any specific terms or conditions</li>
          </ul>
          <p className="text-dark-300 mb-6">
            The proposal becomes binding upon your written acceptance (including email confirmation) and receipt of the initial deposit.
          </p>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">2.2 Project Changes</h3>
          <p className="text-dark-300 mb-6">
            Any changes to the agreed scope of work may result in adjustments to the timeline and/or pricing. Change requests must be submitted in writing and will be evaluated on a case-by-case basis. We will provide a written estimate for any additional work before proceeding.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">3. Payment Terms</h2>

          <div className="bg-dark-900 border border-dark-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-primary mt-0 mb-3">Standard Payment Structure:</h3>
            <ul className="list-disc pl-6 text-dark-300 space-y-2">
              <li><strong className="text-dark-100">50% Deposit:</strong> Due before project commencement</li>
              <li><strong className="text-dark-100">50% Balance:</strong> Due upon project completion, before final delivery</li>
            </ul>
            <p className="text-dark-300 mt-4">
              Alternative payment structures may be arranged for larger projects and will be specified in the project proposal.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.1 Payment Methods</h3>
          <p className="text-dark-300 mb-4">We accept payment via:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Credit/Debit Card (processed through Stripe)</li>
            <li>Bank Transfer (ACH)</li>
            <li>Zelle</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.2 Late Payments</h3>
          <p className="text-dark-300 mb-4">Invoices are due within 14 days of issuance unless otherwise specified. Late payments may result in:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Project work being paused until payment is received</li>
            <li>A late fee of 1.5% per month on overdue balances</li>
            <li>Withholding of deliverables until payment is received</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">3.3 Refund Policy</h3>
          <p className="text-dark-300 mb-4">Due to the custom nature of our services:</p>
          <ul className="list-disc pl-6 mb-6 text-dark-300 space-y-2">
            <li>Deposits are non-refundable once work has commenced</li>
            <li>If a project is cancelled mid-way, you will be invoiced for all work completed to date</li>
            <li>Refunds for unused portions of retainer agreements will be provided on a pro-rata basis</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">4. Client Responsibilities</h2>
          <p className="text-dark-300 mb-4">To ensure successful project delivery, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Provide all necessary content, images, logos, and materials in a timely manner</li>
            <li>Provide timely feedback and approvals (within 5 business days unless otherwise agreed)</li>
            <li>Designate a primary point of contact for project communications</li>
            <li>Ensure all materials provided do not infringe on third-party rights</li>
            <li>Make payments according to the agreed schedule</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">4.1 Delays Caused by Client</h3>
          <p className="text-dark-300 mb-6">
            If project delays occur due to delayed feedback, content, or approvals from you, the project timeline will be adjusted accordingly. Extended delays (more than 30 days) may require project re-scoping and additional fees.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">5. Intellectual Property</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">5.1 Ownership of Deliverables</h3>
          <p className="text-dark-300 mb-4">Upon receipt of full payment, you will own the final deliverables created specifically for your project, including:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Custom website designs and code</li>
            <li>Custom applications developed for you</li>
            <li>Custom graphics and visual assets created for you</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">5.2 Our Retained Rights</h3>
          <p className="text-dark-300 mb-4">We retain the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Use general techniques, skills, and knowledge gained during the project</li>
            <li>Reuse non-custom code libraries, frameworks, and tools</li>
            <li>Display the work in our portfolio and marketing materials (unless confidentiality is agreed)</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">5.3 Third-Party Assets</h3>
          <p className="text-dark-300 mb-4">
            Some projects may incorporate third-party assets (stock photos, fonts, plugins, etc.) which are subject to their own licensing terms. We will inform you of any third-party licenses that apply to your project.
          </p>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">5.4 Pre-Payment Ownership</h3>
          <p className="text-dark-300 mb-6">
            Until full payment is received, all work product remains the property of Budul Tech LLC.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">6. Warranties and Disclaimers</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">6.1 Our Warranty</h3>
          <p className="text-dark-300 mb-4">We warrant that:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Our services will be performed in a professional and workmanlike manner</li>
            <li>Deliverables will substantially conform to the agreed specifications</li>
            <li>We will provide a 30-day bug-fix period after project launch for issues arising from our work</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">6.2 Disclaimer</h3>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-red-400 mt-0 mb-3">Important Disclaimer</h3>
            <p className="text-dark-300">
              EXCEPT AS EXPRESSLY STATED ABOVE, OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE SPECIFIC BUSINESS RESULTS, SEARCH ENGINE RANKINGS, OR CONVERSION RATES. RESULTS DEPEND ON MANY FACTORS BEYOND OUR CONTROL.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-dark-300 mb-4">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-6 text-dark-300 space-y-2">
            <li>Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific project</li>
            <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
            <li>We shall not be liable for lost profits, lost data, or business interruption</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">8. Indemnification</h2>
          <p className="text-dark-300 mb-4">You agree to indemnify and hold harmless Budul Tech LLC, its owners, employees, and contractors from any claims, damages, losses, or expenses arising from:</p>
          <ul className="list-disc pl-6 mb-6 text-dark-300 space-y-2">
            <li>Your breach of these Terms</li>
            <li>Content or materials you provide that infringe third-party rights</li>
            <li>Your use of the deliverables</li>
            <li>Any claims by third parties related to your business operations</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">9. Confidentiality</h2>
          <p className="text-dark-300 mb-6">
            Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This includes business strategies, technical specifications, and financial information. This obligation survives the termination of our agreement.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">10. Termination</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">10.1 Termination by Client</h3>
          <p className="text-dark-300 mb-4">You may terminate a project at any time by providing written notice. Upon termination:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>You will be invoiced for all work completed to date</li>
            <li>Deposits are non-refundable</li>
            <li>We will provide you with all completed work upon receipt of payment</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">10.2 Termination by Budul Tech</h3>
          <p className="text-dark-300 mb-4">We reserve the right to terminate a project if:</p>
          <ul className="list-disc pl-6 mb-6 text-dark-300 space-y-2">
            <li>Payment is not received within 30 days of the due date</li>
            <li>You fail to provide necessary materials or feedback for more than 60 days</li>
            <li>Continuation of the project would require us to violate laws or ethical standards</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">11. Website Terms of Use</h2>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">11.1 Acceptable Use</h3>
          <p className="text-dark-300 mb-4">When using our Site, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4 text-dark-300 space-y-2">
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the Site</li>
            <li>Submit false or misleading information</li>
            <li>Scrape, copy, or reproduce our content without permission</li>
          </ul>

          <h3 className="text-lg font-semibold text-dark-100 mt-6 mb-3">11.2 Accuracy of Information</h3>
          <p className="text-dark-300 mb-6">
            We strive to provide accurate information on our Site, but we do not guarantee that all information is complete, accurate, or current. Information on our Site is for general informational purposes only.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">12. Dispute Resolution</h2>
          <p className="text-dark-300 mb-4">In the event of a dispute arising from these Terms or our services:</p>
          <ol className="list-decimal pl-6 mb-6 text-dark-300 space-y-2">
            <li><strong className="text-dark-100">Negotiation:</strong> The parties will first attempt to resolve the dispute through good-faith negotiation</li>
            <li><strong className="text-dark-100">Mediation:</strong> If negotiation fails, the parties agree to attempt mediation before pursuing other remedies</li>
            <li><strong className="text-dark-100">Governing Law:</strong> These Terms shall be governed by the laws of the State of Utah</li>
            <li><strong className="text-dark-100">Jurisdiction:</strong> Any legal action shall be brought in the courts of Utah</li>
          </ol>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">13. Force Majeure</h2>
          <p className="text-dark-300 mb-6">
            Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including natural disasters, pandemics, war, terrorism, labor disputes, or government actions.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">14. Modifications to Terms</h2>
          <p className="text-dark-300 mb-6">
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our Site. Your continued use of our Site or services after changes are posted constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">15. Severability</h2>
          <p className="text-dark-300 mb-6">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">16. Entire Agreement</h2>
          <p className="text-dark-300 mb-6">
            These Terms, together with any project proposals or agreements, constitute the entire agreement between you and Budul Tech LLC regarding our services. Any prior agreements or representations are superseded.
          </p>

          <h2 className="text-2xl font-bold text-dark-50 mt-10 mb-4">17. Contact Information</h2>
          <p className="text-dark-300 mb-4">For questions about these Terms or our services, please contact us:</p>

          <div className="bg-dark-900 border border-dark-800 rounded-xl p-6 my-6">
            <p className="text-dark-100 font-semibold mb-2">Budul Tech LLC</p>
            <p className="text-dark-300">Email: <a href="mailto:hello@budultech.com" className="text-primary hover:underline">hello@budultech.com</a></p>
            <p className="text-dark-300">Phone: <a href="tel:+13852159346" className="text-primary hover:underline">(385) 215-9346</a></p>
            <p className="text-dark-300">Location: Utah, USA</p>
          </div>

          <p className="text-dark-300 mt-8">
            By using our Site or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
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
