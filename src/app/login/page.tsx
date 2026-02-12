"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
      } else {
        router.push("/dashboard")
        router.refresh()
      }
    } catch {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fillDemo = () => {
    setEmail("demo@example.com")
    setPassword("demo123")
  }

  const fillAdmin = () => {
    setEmail("admin@budultech.com")
    setPassword("admin123")
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "#f0f4f8",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        padding: "40px"
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#2563eb",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px"
          }}>
            <span style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>B</span>
          </div>
          <h1 style={{ color: "#111827", fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
            Welcome back
          </h1>
          <p style={{ color: "#6b7280", fontSize: "16px", margin: 0 }}>
            Sign in to your BudulTech account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              padding: "12px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              color: "#dc2626",
              fontSize: "14px",
              marginBottom: "20px"
            }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#374151", 
              fontSize: "14px", 
              fontWeight: "600",
              marginBottom: "8px" 
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                color: "#111827",
                backgroundColor: "white",
                boxSizing: "border-box"
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ 
              display: "block", 
              color: "#374151", 
              fontSize: "14px", 
              fontWeight: "600",
              marginBottom: "8px" 
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                color: "#111827",
                backgroundColor: "white",
                boxSizing: "border-box"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p style={{ 
            textAlign: "center", 
            color: "#6b7280", 
            fontSize: "14px",
            marginTop: "20px" 
          }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "#2563eb", fontWeight: "500" }}>
              Register
            </Link>
          </p>
        </form>

        {/* Demo Buttons */}
        <div style={{ 
          borderTop: "1px solid #e5e7eb", 
          marginTop: "24px", 
          paddingTop: "20px" 
        }}>
          <p style={{ 
            textAlign: "center", 
            color: "#9ca3af", 
            fontSize: "12px",
            marginBottom: "12px" 
          }}>
            Quick Login (Demo)
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              onClick={fillDemo}
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                fontSize: "14px",
                fontWeight: "500",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Demo Client
            </button>
            <button
              type="button"
              onClick={fillAdmin}
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                fontSize: "14px",
                fontWeight: "500",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
