import { Palette, Figma, Brush, Grid, Users } from "lucide-react"

const Skills = () => {
  const skills = [
    {
      title: "UI/UX Design",
      description: "From wireframes to prototypes",
      icon: Palette,
      color: "neon-cyan"
    },
    {
      title: "Figma",
      description: "Component-based design",
      icon: Figma,
      color: "neon-purple"
    },
    {
      title: "Canva",
      description: "Quick design & templates",
      icon: Brush,
      color: "neon-pink"
    },
    {
      title: "Photopea",
      description: "Advanced photo editing",
      icon: Palette,
      color: "neon-cyan"
    },
    {
      title: "Wireframing",
      description: "Low to high fidelity",
      icon: Grid,
      color: "neon-purple"
    },
    {
      title: "User Research",
      description: "Interviews & UX studies",
      icon: Users,
      color: "neon-pink"
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 animate-fade-in">
          🛠️ Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div 
                key={index}
                className="card-glass group cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center border-2 border-${skill.color}/30 group-hover:border-${skill.color} transition-all duration-300`}>
                    <Icon className={`w-8 h-8 text-${skill.color}`} />
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-semibold text-${skill.color} mb-2 group-hover:neon-text transition-all duration-300`}>
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-${skill.color}/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills