"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Building, Check } from "lucide-react"
import Link from "next/link"

export default function AddClientPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    contactName: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    chatbotName: "AI Assistant",
    chatbotGreeting: "Hi! How can I help you today?",
    chatbotColor: "#3B82F6",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to create client")
      }

      router.push("/admin")
    } catch (err: any) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-bold text-xl">Add New Client</h1>
              <p className="text-sm text-gray-500">Create a new client account</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-2xl">
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Basic details about the client&apos;s business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business Name *</label>
                <Input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Acme Coffee Shop"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
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
                <label className="block text-sm font-medium mb-2">Website</label>
                <Input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the business, services, hours, etc..."
                  className="w-full border rounded-lg px-3 py-2 h-24"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How to reach the client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Contact Name</label>
                <Input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Contact Email *</label>
                <Input
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Chatbot Settings</CardTitle>
              <CardDescription>Configure the AI chatbot for their website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Chatbot Name</label>
                <Input
                  name="chatbotName"
                  value={formData.chatbotName}
                  onChange={handleChange}
                  placeholder="AI Assistant"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Greeting Message</label>
                <textarea
                  name="chatbotGreeting"
                  value={formData.chatbotGreeting}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 h-20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Brand Color</label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    name="chatbotColor"
                    value={formData.chatbotColor}
                    onChange={handleChange}
                    className="w-16 h-10 rounded cursor-pointer"
                  />
                  <Input
                    value={formData.chatbotColor}
                    onChange={handleChange}
                    name="chatbotColor"
                    className="w-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <Link href="/admin" className="flex-1">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Creating..." : "Create Client"}
              {!loading && <Check className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
