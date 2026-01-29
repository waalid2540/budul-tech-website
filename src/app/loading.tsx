export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-dark-700 border-t-primary rounded-full animate-spin" />

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-extrabold gradient-text">B</span>
        </div>
      </div>
    </div>
  )
}
