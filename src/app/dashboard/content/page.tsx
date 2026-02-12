"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Copy, Check, Instagram, Facebook, Linkedin, Twitter, Mail } from "lucide-react"

const platforms = [
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "facebook", label: "Facebook", icon: Facebook },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "twitter", label: "Twitter/X", icon: Twitter },
  { id: "email", label: "Email", icon: Mail },
]

const contentTypes = [
  { id: "promotional", label: "Promotional" },
  { id: "educational", label: "Educational" },
  { id: "engagement", label: "Engagement" },
  { id: "announcement", label: "Announcement" },
]

interface GeneratedContent {
  id: string
  platform: string
  content: string
  hashtags?: string
  createdAt: string
}

export default function ContentPage() {
  const [topic, setTopic] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [contentType, setContentType] = useState("promotional")
  const [tone, setTone] = useState("professional")
  const [loading, setLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string>("")
  const [hashtags, setHashtags] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [savedContents, setSavedContents] = useState<GeneratedContent[]>([])

  useEffect(() => {
    fetchSavedContents()
  }, [])

  const fetchSavedContents = async () => {
    const res = await fetch("/api/content")
    if (res.ok) {
      const data = await res.json()
      setSavedContents(data)
    }
  }

  const generateContent = async () => {
    if (!topic.trim()) return
    
    setLoading(true)
    try {
      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, platform, contentType, tone }),
      })
      
      if (res.ok) {
        const data = await res.json()
        setGeneratedContent(data.content)
        setHashtags(data.hashtags || "")
      }
    } catch (error) {
      console.error("Generation failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const saveContent = async () => {
    if (!generatedContent) return

    const res = await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "social",
        platform,
        content: generatedContent,
        hashtags,
        title: topic,
      }),
    })

    if (res.ok) {
      fetchSavedContents()
      setGeneratedContent("")
      setHashtags("")
      setTopic("")
    }
  }

  const copyToClipboard = () => {
    const fullContent = hashtags ? `${generatedContent}\n\n${hashtags}` : generatedContent
    navigator.clipboard.writeText(fullContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Content Generator</h1>
        <p className="text-gray-500 mt-1">Create engaging content with AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Generator Form */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Content</CardTitle>
            <CardDescription>Tell us what you want to post about</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Topic / Idea</label>
              <Input
                placeholder="e.g., New product launch, Holiday sale, Tips for customers..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Platform</label>
              <div className="grid grid-cols-3 gap-2">
                {platforms.map((p) => {
                  const Icon = p.icon
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-colors ${
                        platform === p.id
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{p.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Content Type</label>
              <div className="grid grid-cols-2 gap-2">
                {contentTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setContentType(t.id)}
                    className={`p-3 rounded-lg border text-sm transition-colors ${
                      contentType === t.id
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual & Friendly</option>
                <option value="humorous">Humorous</option>
                <option value="inspirational">Inspirational</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <Button 
              onClick={generateContent} 
              className="w-full"
              disabled={loading || !topic.trim()}
            >
              {loading ? (
                <>Generating...</>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Content
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Content Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>Preview and edit your content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedContent ? (
              <>
                <div className="p-4 bg-gray-50 rounded-lg min-h-[200px]">
                  <p className="whitespace-pre-wrap">{generatedContent}</p>
                  {hashtags && (
                    <p className="mt-4 text-blue-600">{hashtags}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button onClick={saveContent} className="flex-1">
                    Save to Library
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center min-h-[200px] text-gray-400">
                <p>Generated content will appear here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Saved Content Library */}
      {savedContents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Content Library</CardTitle>
            <CardDescription>Your saved content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedContents.slice(0, 6).map((content) => (
                <div
                  key={content.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded capitalize">
                      {content.platform}
                    </span>
                  </div>
                  <p className="text-sm line-clamp-3">{content.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
