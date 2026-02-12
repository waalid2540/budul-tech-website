"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MessageSquare,
  MoreVertical,
  CheckCircle,
  Clock,
  Star,
  XCircle
} from "lucide-react"

const statusColors: Record<string, string> = {
  NEW: "bg-green-100 text-green-700",
  CONTACTED: "bg-blue-100 text-blue-700",
  QUALIFIED: "bg-purple-100 text-purple-700",
  CONVERTED: "bg-yellow-100 text-yellow-700",
  LOST: "bg-gray-100 text-gray-700",
}

const statusIcons: Record<string, any> = {
  NEW: Clock,
  CONTACTED: Mail,
  QUALIFIED: Star,
  CONVERTED: CheckCircle,
  LOST: XCircle,
}

export default function LeadsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [leads, setLeads] = useState<any[]>([])
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, qualified: 0, converted: 0 })
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("ALL")
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<any>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.email) {
      fetchLeads()
    }
  }, [session])

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads")
      if (res.ok) {
        const data = await res.json()
        setLeads(data.leads || [])
        setStats(data.stats || {})
      }
    } catch (error) {
      console.error("Error fetching leads:", error)
    }
    setLoading(false)
  }

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, status: newStatus }),
      })
      if (res.ok) {
        fetchLeads()
      }
    } catch (error) {
      console.error("Error updating lead:", error)
    }
  }

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      (lead.name?.toLowerCase().includes(search.toLowerCase())) ||
      (lead.email?.toLowerCase().includes(search.toLowerCase())) ||
      (lead.phone?.includes(search))
    const matchesFilter = filterStatus === "ALL" || lead.status === filterStatus
    return matchesSearch && matchesFilter
  })

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-gray-500 mt-1">Manage and track your captured leads</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Total", value: stats.total, color: "text-gray-900" },
          { label: "New", value: stats.new, color: "text-green-600" },
          { label: "Contacted", value: stats.contacted, color: "text-blue-600" },
          { label: "Qualified", value: stats.qualified, color: "text-purple-600" },
          { label: "Converted", value: stats.converted, color: "text-yellow-600" },
        ].map(stat => (
          <Card key={stat.label}>
            <CardContent className="pt-4 pb-4">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["ALL", "NEW", "CONTACTED", "QUALIFIED", "CONVERTED"].map(status => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus(status)}
            >
              {status === "ALL" ? "All" : status.charAt(0) + status.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>
      </div>

      {/* Leads List */}
      <Card>
        <CardContent className="p-0">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="font-medium text-gray-900 mb-1">No leads found</h3>
              <p className="text-gray-500">
                {search || filterStatus !== "ALL" 
                  ? "Try adjusting your search or filter" 
                  : "Leads captured by your chatbot will appear here"
                }
              </p>
            </div>
          ) : (
            <div className="divide-y">
              {filteredLeads.map(lead => {
                const StatusIcon = statusIcons[lead.status] || Clock
                return (
                  <div 
                    key={lead.id} 
                    className="p-4 hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => setSelectedLead(selectedLead?.id === lead.id ? null : lead)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="font-semibold text-blue-600 text-lg">
                            {(lead.name || lead.email || "?")[0].toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{lead.name || "Anonymous"}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                            {lead.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {lead.email}
                              </span>
                            )}
                            {lead.phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {lead.phone}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {lead.source}
                            </span>
                          </div>
                          {lead.message && (
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{lead.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${statusColors[lead.status]}`}>
                          <StatusIcon className="w-3 h-3" />
                          {lead.status}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    {/* Expanded View */}
                    {selectedLead?.id === lead.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-sm font-medium text-gray-700">Update Status:</span>
                          {["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"].map(status => (
                            <Button
                              key={status}
                              size="sm"
                              variant={lead.status === status ? "default" : "outline"}
                              onClick={(e) => {
                                e.stopPropagation()
                                updateLeadStatus(lead.id, status)
                              }}
                            >
                              {status.charAt(0) + status.slice(1).toLowerCase()}
                            </Button>
                          ))}
                        </div>
                        {lead.notes && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 mb-1">Notes</p>
                            <p className="text-sm text-gray-600">{lead.notes}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
