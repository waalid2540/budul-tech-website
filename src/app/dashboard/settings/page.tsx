"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building, Globe, Mail, Key, MessageCircle } from "lucide-react"

interface ClientSettings {
  businessName: string
  businessType: string
  website: string
  phone: string
  address: string
  description: string
  sendgridApiKey: string
  twilioSid: string
  twilioToken: string
  twilioPhone: string
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<ClientSettings>({
    businessName: "",
    businessType: "",
    website: "",
    phone: "",
    address: "",
    description: "",
    sendgridApiKey: "",
    twilioSid: "",
    twilioToken: "",
    twilioPhone: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings")
      if (res.ok) {
        const data = await res.json()
        setSettings(data)
      }
    } catch (error) {
      console.error("Failed to fetch settings:", error)
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = async () => {
    setSaving(true)
    setMessage("")
    
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      })
      
      if (res.ok) {
        setMessage("Settings saved successfully!")
      } else {
        setMessage("Failed to save settings")
      }
    } catch (error) {
      setMessage("Failed to save settings")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your business settings and integrations</p>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
          {message}
        </div>
      )}

      {/* Business Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Basic info about your business</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Name</label>
              <Input
                value={settings.businessName}
                onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                placeholder="Acme Inc."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Type</label>
              <Input
                value={settings.businessType}
                onChange={(e) => setSettings({ ...settings, businessType: e.target.value })}
                placeholder="e.g., Restaurant, Retail, Services"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Website</label>
              <Input
                value={settings.website}
                onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <Input
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <Input
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              placeholder="123 Main St, City, State 12345"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Business Description</label>
            <textarea
              value={settings.description}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              placeholder="Tell us about your business..."
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Email Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <CardTitle>Email Integration (SendGrid)</CardTitle>
              <CardDescription>Connect SendGrid to send email campaigns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">SendGrid API Key</label>
            <Input
              type="password"
              value={settings.sendgridApiKey}
              onChange={(e) => setSettings({ ...settings, sendgridApiKey: e.target.value })}
              placeholder="SG.xxxxxxxx..."
            />
            <p className="text-xs text-gray-500">
              Get your API key from{" "}
              <a href="https://sendgrid.com" target="_blank" className="text-blue-600 hover:underline">
                sendgrid.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* SMS Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <CardTitle>SMS Integration (Twilio)</CardTitle>
              <CardDescription>Connect Twilio to send SMS campaigns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Account SID</label>
              <Input
                type="password"
                value={settings.twilioSid}
                onChange={(e) => setSettings({ ...settings, twilioSid: e.target.value })}
                placeholder="ACxxxxxxxx..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Auth Token</label>
              <Input
                type="password"
                value={settings.twilioToken}
                onChange={(e) => setSettings({ ...settings, twilioToken: e.target.value })}
                placeholder="xxxxxxxx..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Twilio Phone Number</label>
            <Input
              value={settings.twilioPhone}
              onChange={(e) => setSettings({ ...settings, twilioPhone: e.target.value })}
              placeholder="+1234567890"
            />
          </div>
          <p className="text-xs text-gray-500">
            Get your credentials from{" "}
            <a href="https://twilio.com" target="_blank" className="text-blue-600 hover:underline">
              twilio.com
            </a>
          </p>
        </CardContent>
      </Card>

      <Button onClick={saveSettings} disabled={saving} size="lg">
        {saving ? "Saving..." : "Save All Settings"}
      </Button>
    </div>
  )
}
