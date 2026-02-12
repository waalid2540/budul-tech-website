"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Mail, 
  TrendingUp, 
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  Check
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    leads: { total: 0, new: 0 },
    content: 0,
    emails: 0,
    chatMessages: 0,
  })
  const [recentLeads, setRecentLeads] = useState<any[]>([])
  const [client, setClient] = useState<any>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.email) {
      fetchData()
    }
  }, [session])

  const fetchData = async () => {
    try {
      // Fetch leads
      const leadsRes = await fetch("/api/leads")
      if (leadsRes.ok) {
        const data = await leadsRes.json()
        setStats(prev => ({ ...prev, leads: data.stats }))
        setRecentLeads(data.leads?.slice(0, 5) || [])
      }

      // Fetch client info
      const settingsRes = await fetch("/api/settings")
      if (settingsRes.ok) {
        const data = await settingsRes.json()
        setClient(data)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const copyWidgetCode = () => {
    const code = `<script src="https://budultech.com/chatbot-widget.js" data-client-id="${client?.id || 'YOUR_CLIENT_ID'}"></script>`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const quickActions = [
    { title: "Generate Content", href: "/dashboard/content", icon: FileText, color: "bg-purple-100 text-purple-600" },
    { title: "View Leads", href: "/dashboard/leads", icon: Users, color: "bg-green-100 text-green-600" },
    { title: "Chatbot Settings", href: "/dashboard/chatbot", icon: Bot, color: "bg-blue-100 text-blue-600" },
    { title: "Email Campaign", href: "/dashboard/email", icon: Mail, color: "bg-orange-100 text-orange-600" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back{session?.user?.name ? `, ${session.user.name}` : ''}!</h1>
          <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your marketing</p>
        </div>
        <Link href="/dashboard/content" className="inline-flex items-center justify-center h-10 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Create Content
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Leads</p>
                <p className="text-3xl font-bold">{stats.leads.total}</p>
                {stats.leads.new > 0 && (
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    {stats.leads.new} new
                  </p>
                )}
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Chatbot Chats</p>
                <p className="text-3xl font-bold">{stats.chatMessages}</p>
                <p className="text-sm text-gray-400 mt-1">This month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Content Created</p>
                <p className="text-3xl font-bold">{stats.content}</p>
                <p className="text-sm text-gray-400 mt-1">Posts & emails</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Emails Sent</p>
                <p className="text-3xl font-bold">{stats.emails}</p>
                <p className="text-sm text-gray-400 mt-1">This month</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{action.title}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                </Link>
              )
            })}
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Link href="/dashboard/leads" className="inline-flex items-center justify-center h-9 px-3 border border-gray-300 bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            {recentLeads.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No leads yet. Your chatbot will capture them!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-medium text-blue-600">
                          {(lead.name || lead.email || "?")[0].toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{lead.name || "Anonymous"}</p>
                        <p className="text-sm text-gray-500">{lead.email || lead.phone || "No contact"}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        lead.status === "NEW" ? "bg-green-100 text-green-700" :
                        lead.status === "CONTACTED" ? "bg-blue-100 text-blue-700" :
                        lead.status === "QUALIFIED" ? "bg-purple-100 text-purple-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {lead.status}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Chatbot Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Install Your AI Chatbot
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Add this code to your website, just before the closing <code className="bg-gray-100 px-1 rounded">&lt;/body&gt;</code> tag:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm relative">
            <code>
              {`<script src="https://budultech.com/chatbot-widget.js" data-client-id="${client?.id || 'YOUR_CLIENT_ID'}"></script>`}
            </code>
            <button
              onClick={copyWidgetCode}
              className="absolute right-3 top-3 p-2 hover:bg-gray-800 rounded"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Need help? Your account manager can install this for you.
          </p>
        </CardContent>
      </Card>

      {/* Next Strategy Call */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardContent className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Monthly Strategy Call</h3>
                <p className="text-blue-100">Schedule your next call with your account manager</p>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-0">
              Schedule Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
