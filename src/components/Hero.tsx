import { Button } from "@/components/ui/button"
import designerAvatar from "@/assets/designer-avatar.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={designerAvatar} 
              alt="Ambala Girishkumar" 
              className="w-48 h-48 rounded-full mx-auto glass p-2 animate-pulse-glow"
            />
          </div>

          {/* Main title with neon effect */}
          <h1 className="text-7xl md:text-9xl font-bold mb-4 neon-text animate-fade-in" style={{animationDelay: '0.2s'}}>
            AMBALA
          </h1>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 gradient-text animate-fade-in" style={{animationDelay: '0.4s'}}>
            GIRISHKUMAR
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-neon-cyan tracking-wider animate-fade-in" style={{animationDelay: '0.6s'}}>
            UI/UX DESIGNER
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.8s'}}>
            Designing intuitive, engaging, and futuristic digital experiences with passion and precision.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '1s'}}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🔍 View Projects
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              📄 Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero