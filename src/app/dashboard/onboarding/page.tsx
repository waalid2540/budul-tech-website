"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Circle, ArrowRight, Building, Globe, MessageSquare, Palette, Rocket } from "lucide-react"

const steps = [
  { id: 1, title: "Business Info", icon: Building, description: "Tell us about your business" },
  { id: 2, title: "Website", icon: Globe, description: "Connect your website" },
  { id: 3, title: "Chatbot", icon: MessageSquare, description: "Set up your AI chatbot" },
  { id: 4, title: "Branding", icon: Palette, description: "Customize your brand" },
  { id: 5, title: "Launch", icon: Rocket, description: "Go live!" },
]

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    website: "",
    phone: "",
    description: "",
    chatbotName: "AI Assistant",
    chatbotGreeting: "Hi! How can I help you today?",
    chatbotColor: "#3B82F6",
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = async () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save and complete onboarding
      setSaving(true)
      try {
        const res = await fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          router.push("/dashboard")
        }
      } catch (error) {
        console.error("Error saving:", error)
      }
      setSaving(false)
    }
  }

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">BudulTech</span>
            </div>
            <span className="text-gray-500">Welcome, {session?.user?.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.id < currentStep 
                        ? 'bg-green-500 text-white' 
                        : step.id === currentStep 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.id < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 ${step.id === currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 ${step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>{steps[currentStep - 1].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name *</label>
                    <Input 
                      name="businessName" 
                      value={formData.businessName} 
                      onChange={handleInputChange}
                      placeholder="Acme Coffee Shop"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Type *</label>
                    <select 
                      name="businessType" 
                      value={formData.businessType} 
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      <option value="">Select type...</option>
                      <option value="Restaurant">Restaurant / Cafe</option>
                      <option value="Retail">Retail Store</option>
                      <option value="Service">Service Business</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="RealEstate">Real Estate</option>
                      <option value="Legal">Legal / Professional</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Beauty">Beauty / Salon</option>
                      <option value="Fitness">Fitness / Gym</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Description</label>
                    <textarea 
                      name="description" 
                      value={formData.description} 
                      onChange={handleInputChange}
                      placeholder="Tell us about your business, services, hours, etc..."
                      className="w-full border rounded-lg px-3 py-2 h-24"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Website URL</label>
                    <Input 
                      name="website" 
                      value={formData.website} 
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Don&apos;t have a website?</h4>
                    <p className="text-blue-600 text-sm">No problem! We can help you create one. Your account manager will discuss this on your onboarding call.</p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Chatbot Name</label>
                    <Input 
                      name="chatbotName" 
                      value={formData.chatbotName} 
                      onChange={handleInputChange}
                      placeholder="AI Assistant"
                    />
                    <p className="text-gray-500 text-sm mt-1">This is how your chatbot introduces itself</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Greeting Message</label>
                    <textarea 
                      name="chatbotGreeting" 
                      value={formData.chatbotGreeting} 
                      onChange={handleInputChange}
                      placeholder="Hi! How can I help you today?"
                      className="w-full border rounded-lg px-3 py-2 h-20"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Preview</h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{formData.chatbotName || "AI Assistant"}</p>
                          <p className="text-gray-600">{formData.chatbotGreeting || "Hi! How can I help you today?"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand Color</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="color" 
                        name="chatbotColor" 
                        value={formData.chatbotColor} 
                        onChange={handleInputChange}
                        className="w-16 h-10 rounded cursor-pointer"
                      />
                      <Input 
                        value={formData.chatbotColor} 
                        onChange={handleInputChange}
                        name="chatbotColor"
                        className="w-32"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"].map(color => (
                      <button
                        key={color}
                        onClick={() => setFormData({ ...formData, chatbotColor: color })}
                        className={`w-10 h-10 rounded-lg ${formData.chatbotColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">You&apos;re All Set!</h3>
                  <p className="text-gray-600 mb-6">
                    Click the button below to complete setup. Your account manager will reach out within 24 hours to:
                  </p>
                  <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Install your AI chatbot
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Set up your content calendar
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Schedule your strategy call
                    </li>
                  </ul>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                    Back
                  </Button>
                )}
                <div className="ml-auto">
                  <Button onClick={handleNext} disabled={saving}>
                    {currentStep === 5 ? (saving ? "Saving..." : "Complete Setup") : "Continue"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
