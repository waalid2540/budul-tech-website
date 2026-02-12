"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Sparkles, Plus } from "lucide-react"

interface SmsCampaign {
  id: string
  name: string
  message: string
  status: string
  createdAt: string
}

export default function SmsPage() {
  const [campaigns, setCampaigns] = useState<SmsCampaign[]>([])
  const [showCreate, setShowCreate] = useState(false)
  const [form, setForm] = useState({
    name: "",
    message: "",
  })
  const [generating, setGenerating] = useState(false)
  const [topic, setTopic] = useState("")

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    const res = await fetch("/api/sms")
    if (res.ok) {
      const data = await res.json()
      setCampaigns(data)
    }
  }

  const generateSms = async () => {
    if (!topic.trim()) return
    setGenerating(true)
    
    try {
      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: `SMS message (max 160 chars): ${topic}`,
          platform: "twitter", // Use twitter for short content
          contentType: "promotional",
          tone: "casual",
        }),
      })
      
      if (res.ok) {
        const data = await res.json()
        setForm({
          ...form,
          message: data.content.substring(0, 160),
        })
      }
    } catch (error) {
      console.error("Generation failed:", error)
    } finally {
      setGenerating(false)
    }
  }

  const saveCampaign = async () => {
    const res = await fetch("/api/sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    
    if (res.ok) {
      fetchCampaigns()
      setForm({ name: "", message: "" })
      setShowCreate(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">SMS Campaigns</h1>
          <p className="text-gray-500 mt-1">Create and manage SMS campaigns</p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {showCreate && (
        <Card>
          <CardHeader>
            <CardTitle>Create SMS Campaign</CardTitle>
            <CardDescription>Generate SMS content with AI or write your own</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* AI Generator */}
            <div className="p-4 bg-green-50 rounded-lg space-y-3">
              <p className="text-sm font-medium text-green-900">Generate with AI</p>
              <div className="flex gap-2">
                <Input
                  placeholder="What's this SMS about? e.g., Flash sale, Appointment reminder..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <Button onClick={generateSms} disabled={generating || !topic.trim()} className="bg-green-600 hover:bg-green-700">
                  {generating ? "..." : <><Sparkles className="w-4 h-4 mr-2" />Generate</>}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Campaign Name</label>
                <Input
                  placeholder="e.g., February Promo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Message</label>
                  <span className={`text-xs ${form.message.length > 160 ? "text-red-500" : "text-gray-500"}`}>
                    {form.message.length}/160
                  </span>
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your SMS message here..."
                  maxLength={160}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={saveCampaign} disabled={!form.name || !form.message} className="bg-green-600 hover:bg-green-700">
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
              <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No SMS campaigns yet</p>
              <p className="text-sm mt-1">Create your first campaign to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors"
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
                  <p className="text-sm text-gray-600">{campaign.message}</p>
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
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Send className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">SMS Sending</h3>
              <p className="text-sm text-gray-500 mt-1">
                To send SMS messages, configure your Twilio credentials in Settings. 
                Until then, you can create and save campaigns as drafts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
