"use client"

import Link from "next/link"
import { Check, ArrowRight, Bot, FileText, Mail, MessageCircle, BarChart3, Phone, Calendar, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 lead capture on your website. Never miss a customer again.",
  },
  {
    icon: FileText,
    title: "16 Social Posts/Month",
    description: "AI-generated content for Facebook, Instagram, LinkedIn, Twitter.",
  },
  {
    icon: Mail,
    title: "4 Email Campaigns",
    description: "Professional email marketing to nurture leads and drive sales.",
  },
  {
    icon: MessageCircle,
    title: "SMS Marketing",
    description: "Instant reach to your customers for promotions and updates.",
  },
  {
    icon: BarChart3,
    title: "Lead Dashboard",
    description: "See all your leads in one place. Know who's interested.",
  },
  {
    icon: Calendar,
    title: "Monthly Strategy Call",
    description: "30-minute call with your dedicated account manager.",
  },
]

const included = [
  "AI Chatbot installed on your website",
  "16 social media posts created monthly",
  "4 email campaigns per month",
  "SMS marketing campaigns",
  "Lead capture & management dashboard",
  "Monthly strategy call (30 min)",
  "Performance reports",
  "Dedicated account manager",
  "Priority support",
]

const results = [
  { metric: "3-5x", label: "More Leads" },
  { metric: "50%", label: "Time Saved" },
  { metric: "24/7", label: "Always On" },
  { metric: "$5K+", label: "Agency Savings" },
]

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">BudulTech</span>
            </Link>
            <a href="tel:+13852159346" className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition">
              <Phone className="w-4 h-4" />
              (385) 215-9346
            </a>
          </nav>
        </div>
        
        {/* Hero */}
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Marketing For Local Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get More Customers
            <br />
            <span className="text-blue-200">Without Hiring an Agency</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            AI does the marketing. We manage everything. You get the leads.
            <br />
            <strong>Done-with-you marketing for $2,000/month.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#pricing" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              See What&apos;s Included
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+13852159346"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Marketing Agencies Charge $5,000+/Month
              <br />
              <span className="text-gray-500">And You Still Do Half the Work</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You&apos;re busy running your business. You don&apos;t have time to post on social media, 
              write emails, and chase leads. But hiring an agency costs a fortune.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <p className="text-2xl font-semibold text-blue-800">
                What if AI could do 90% of the marketing work,
                <br />
                and you had a team to manage the rest?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">AI-powered marketing, managed by humans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Solutions For Your Business</h2>
              <p className="text-xl text-gray-600">Every business is different. Let&apos;s build a plan that fits yours.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <div className="text-blue-200 font-medium mb-2">AI Marketing Engine</div>
                  <div className="text-4xl md:text-5xl font-bold">Done-For-You Marketing</div>
                  <p className="text-blue-200 mt-2">Pricing based on your business needs</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <a 
                    href="tel:+13852159346" 
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
              
              <div className="border-t border-blue-400/30 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Ready to grow your business?</p>
              <a 
                href="tel:+13852159346"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
              >
                <Phone className="w-5 h-5" />
                Call (385) 215-9346
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 24 hours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-gray-600">Subscribe and book your onboarding call</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-3">We Set You Up</h3>
              <p className="text-gray-600">Chatbot installed, content planned, campaigns ready</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-3">Watch Leads Come In</h3>
              <p className="text-gray-600">AI works 24/7, you get the leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">How is this different from hiring an agency?</h3>
                <p className="text-gray-600">Agencies charge $5,000-$10,000/month and still need your input constantly. We use AI to do 90% of the work, so you save money and time.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">What if I don&apos;t have a website?</h3>
                <p className="text-gray-600">We can help you get one. Our team builds websites too. Ask us about our website + marketing bundle.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">How fast will I see results?</h3>
                <p className="text-gray-600">Most clients see increased leads within the first 2 weeks. The AI chatbot starts capturing leads immediately.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes, month-to-month. No long-term contracts. We keep you because we deliver results, not because you&apos;re locked in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Customers?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join businesses using AI to grow without the agency price tag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+13852159346"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+13852159346"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (385) 215-9346
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-semibold">BudulTech</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 BudulTech. AI Marketing Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
