"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Copy, Check, MessageSquare, ExternalLink } from "lucide-react"

interface ChatbotConfig {
  chatbotEnabled: boolean
  chatbotName: string
  chatbotGreeting: string
  chatbotColor: string
  chatbotContext: string
}

export default function ChatbotPage() {
  const [config, setConfig] = useState<ChatbotConfig>({
    chatbotEnabled: true,
    chatbotName: "AI Assistant",
    chatbotGreeting: "Hi! How can I help you today?",
    chatbotColor: "#3B82F6",
    chatbotContext: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)
  const [clientId, setClientId] = useState("")

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      const res = await fetch("/api/chatbot/config")
      if (res.ok) {
        const data = await res.json()
        setConfig(data.config)
        setClientId(data.clientId)
      }
    } catch (error) {
      console.error("Failed to fetch config:", error)
    } finally {
      setLoading(false)
    }
  }

  const saveConfig = async () => {
    setSaving(true)
    try {
      await fetch("/api/chatbot/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })
    } catch (error) {
      console.error("Failed to save config:", error)
    } finally {
      setSaving(false)
    }
  }

  const embedCode = `<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${typeof window !== 'undefined' ? window.location.origin : ''}/chatbot/widget.js';
    script.setAttribute('data-client-id', '${clientId}');
    document.body.appendChild(script);
  })();
</script>`

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
        <p className="text-gray-500 mt-1">Configure your website chatbot</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Settings</CardTitle>
            <CardDescription>Customize how your chatbot looks and behaves</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable Chatbot</p>
                <p className="text-sm text-gray-500">Show chatbot on your website</p>
              </div>
              <button
                onClick={() => setConfig({ ...config, chatbotEnabled: !config.chatbotEnabled })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  config.chatbotEnabled ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    config.chatbotEnabled ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Chatbot Name</label>
              <Input
                value={config.chatbotName}
                onChange={(e) => setConfig({ ...config, chatbotName: e.target.value })}
                placeholder="e.g., Sarah, AI Assistant"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Greeting Message</label>
              <Input
                value={config.chatbotGreeting}
                onChange={(e) => setConfig({ ...config, chatbotGreeting: e.target.value })}
                placeholder="Hi! How can I help you today?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Brand Color</label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={config.chatbotColor}
                  onChange={(e) => setConfig({ ...config, chatbotColor: e.target.value })}
                  className="w-12 h-10 rounded cursor-pointer"
                />
                <Input
                  value={config.chatbotColor}
                  onChange={(e) => setConfig({ ...config, chatbotColor: e.target.value })}
                  placeholder="#3B82F6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Business Context</label>
              <p className="text-xs text-gray-500">Help the AI understand your business better</p>
              <textarea
                value={config.chatbotContext || ""}
                onChange={(e) => setConfig({ ...config, chatbotContext: e.target.value })}
                placeholder="e.g., We are a local bakery specializing in custom cakes. Our hours are 9am-6pm. We offer delivery within 10 miles..."
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
              />
            </div>

            <Button onClick={saveConfig} disabled={saving} className="w-full">
              {saving ? "Saving..." : "Save Settings"}
            </Button>
          </CardContent>
        </Card>

        {/* Preview & Embed */}
        <div className="space-y-6">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Chat Header */}
                <div 
                  className="p-4 text-white flex items-center gap-3"
                  style={{ backgroundColor: config.chatbotColor }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{config.chatbotName}</p>
                    <p className="text-xs opacity-80">Online</p>
                  </div>
                </div>
                
                {/* Chat Body */}
                <div className="p-4 bg-gray-50 min-h-[200px]">
                  <div className="flex gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: config.chatbotColor }}
                    >
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">{config.chatbotGreeting}</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-2 border border-gray-200 rounded-lg text-sm"
                      disabled
                    />
                    <button
                      className="px-4 py-2 rounded-lg text-white text-sm"
                      style={{ backgroundColor: config.chatbotColor }}
                      disabled
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Embed Code */}
          <Card>
            <CardHeader>
              <CardTitle>Embed Code</CardTitle>
              <CardDescription>Add this code to your website before the closing &lt;/body&gt; tag</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm whitespace-pre-wrap">{embedCode}</pre>
              </div>
              <Button onClick={copyEmbedCode} variant="outline" className="w-full">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Embed Code
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
