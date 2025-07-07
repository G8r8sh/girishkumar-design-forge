import { Button } from "@/components/ui/button"
import mobileProject from "@/assets/mobile-project.jpg"
import travelProject from "@/assets/travel-project.jpg"

const Projects = () => {
const projects = [
    {
      title: "📱 Mobile App Signup",
      description: "Developed a user-friendly signup process with location and custom name detection. Optimized onboarding for seamless interaction.",
      image: mobileProject,
      figmaHref: "https://www.figma.com/proto/WghcmR1kH6ayjOBfsAAnbo/moblie-login-page?page-id=0%3A1&node-id=15-3&viewport=118%2C228%2C0.43&t=egpuOscLbnOWS9M3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A3",
      tags: ["UI Design", "Mobile", "UX Research"]
    },
    {
      title: "🌍 Travel Website UI",
      description: "Clean, modern travel site with category filtering and smooth navigation. Focused on intuitive UX and visual appeal.",
      image: travelProject,
      figmaHref: "https://www.figma.com/proto/BXTa8x58YMNg70A2zpwQos/travel-website?page-id=&node-id=2-2&starting-point-node-id=2%3A2&scaling=scale-down-width&content-scaling=fixed&t=8eekw3dky8W2oalW-1",
      tags: ["Web Design", "Travel", "Interface"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 animate-fade-in">
          💼 Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-glass group overflow-hidden animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-neon-cyan group-hover:neon-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs glass rounded-full border border-neon-purple/30 text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="pt-4 flex gap-3">
                  <Button 
                    variant="neon" 
                    className="flex-1"
                    onClick={() => window.open(project.figmaHref, '_blank')}
                  >
                    🎨 Live Demo
                  </Button>
                  <Button 
                    variant="glass" 
                    className="flex-1"
                    onClick={() => window.open(project.figmaHref, '_blank')}
                  >
                    🔗 Interact
                  </Button>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects