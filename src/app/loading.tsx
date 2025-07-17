export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-slate-800 border-t-accent-blue rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-accent-green rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Loading...
        </h2>
        <p className="text-muted-foreground">
          Preparing your automation experience
        </p>

        {/* Progress dots */}
        <div className="flex space-x-1 justify-center mt-6">
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
} 