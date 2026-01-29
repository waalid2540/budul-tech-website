import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Budul Tech - AI-Powered Development Agency'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #0ea5e920 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf620 0%, transparent 50%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 800, color: 'white' }}>B</span>
          </div>
          <span style={{ fontSize: 48, fontWeight: 700, color: 'white' }}>
            Budul<span style={{ color: '#0ea5e9' }}>Tech</span>
          </span>
        </div>

        {/* Main Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            AI-Powered Development Agency
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#94a3b8',
              maxWidth: 800,
            }}
          >
            We build your digital future in days, not months
          </p>
        </div>

        {/* Bottom Stats */}
        <div
          style={{
            display: 'flex',
            gap: 60,
            marginTop: 60,
          }}
        >
          {[
            { value: '10x', label: 'Faster' },
            { value: '50%', label: 'Savings' },
            { value: '24h', label: 'Response' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: 18, color: '#64748b' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
