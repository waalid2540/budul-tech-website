"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, Sparkles, Plus } from "lucide-react"

interface EmailCampaign {
  id: string
  name: string
  subject: string
  body: string
  status: string
  createdAt: string
}

export default function EmailPage() {
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([])
  const [showCreate, setShowCreate] = useState(false)
  const [form, setForm] = useState({
    name: "",
    subject: "",
    body: "",
  })
  const [generating, setGenerating] = useState(false)
  const [topic, setTopic] = useState("")

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    const res = await fetch("/api/email")
    if (res.ok) {
      const data = await res.json()
      setCampaigns(data)
    }
  }

  const generateEmail = async () => {
    if (!topic.trim()) return
    setGenerating(true)
    
    try {
      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          platform: "email",
          contentType: "promotional",
          tone: "professional",
        }),
      })
      
      if (res.ok) {
        const data = await res.json()
        // Parse subject line if present
        const lines = data.content.split("\n")
        let subject = ""
        let body = data.content
        
        if (lines[0].toLowerCase().includes("subject:")) {
          subject = lines[0].replace(/subject:\s*/i, "")
          body = lines.slice(1).join("\n").trim()
        }
        
        setForm({
          ...form,
          subject: subject || `Email about: ${topic}`,
          body,
        })
      }
    } catch (error) {
      console.error("Generation failed:", error)
    } finally {
      setGenerating(false)
    }
  }

  const saveCampaign = async () => {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    
    if (res.ok) {
      fetchCampaigns()
      setForm({ name: "", subject: "", body: "" })
      setShowCreate(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Email Campaigns</h1>
          <p className="text-gray-500 mt-1">Create and manage email campaigns</p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {showCreate && (
        <Card>
          <CardHeader>
            <CardTitle>Create Email Campaign</CardTitle>
            <CardDescription>Generate email content with AI or write your own</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* AI Generator */}
            <div className="p-4 bg-blue-50 rounded-lg space-y-3">
              <p className="text-sm font-medium text-blue-900">Generate with AI</p>
              <div className="flex gap-2">
                <Input
                  placeholder="What's this email about? e.g., Holiday sale, New product launch..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <Button onClick={generateEmail} disabled={generating || !topic.trim()}>
                  {generating ? "Generating..." : <><Sparkles className="w-4 h-4 mr-2" />Generate</>}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Campaign Name</label>
                <Input
                  placeholder="e.g., February Newsletter"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject Line</label>
                <Input
                  placeholder="Email subject..."
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Body</label>
                <textarea
                  value={form.body}
                  onChange={(e) => setForm({ ...form, body: e.target.value })}
                  placeholder="Write your email content here..."
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={saveCampaign} disabled={!form.name || !form.subject || !form.body}>
                  Save Campaign
                </Button>
                <Button variant="outline" onClick={() => setShowCreate(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          {campaigns.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No email campaigns yet</p>
              <p className="text-sm mt-1">Create your first campaign to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{campaign.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === "SENT" 
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Subject: {campaign.subject}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{campaign.body}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Send className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-medium">Email Sending</h3>
              <p className="text-sm text-gray-500 mt-1">
                To send emails, configure your SendGrid API key in Settings. 
                Until then, you can create and save campaigns as drafts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
