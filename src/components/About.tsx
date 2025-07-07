const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              About Me
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground">
                A creative and passionate <span className="text-neon-cyan font-semibold">UI/UX Designer</span> dedicated to crafting intuitive, engaging, and visually compelling digital experiences.
              </p>
              <p className="text-muted-foreground">
                I thrive on applying user-centered design principles and love growing through new challenges. Always inspired by evolving trends, I strive to deliver solutions that elevate the overall experience.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass rounded-full text-neon-cyan border border-neon-cyan/30 text-sm">
                  User-Centered Design
                </span>
                <span className="px-4 py-2 glass rounded-full text-neon-purple border border-neon-purple/30 text-sm">
                  Creative Problem Solving
                </span>
                <span className="px-4 py-2 glass rounded-full text-neon-pink border border-neon-pink/30 text-sm">
                  Visual Storytelling
                </span>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="card-glass">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span className="text-lg">Passionate Designer</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-lg">User Experience Focused</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-neon-pink rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-lg">Future-Forward Thinking</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-lg border border-neon-cyan/20">
                <blockquote className="text-center italic text-neon-cyan">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About