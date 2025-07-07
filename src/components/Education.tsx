const Education = () => {
  const educationData = [
    {
      title: "B.Tech - CSE (Data Science)",
      company: "Vidya Jyoti Institute of Technology",
      date: "2021 - 2025",
      description: "Specializing in Data Science with focus on user experience and interface design."
    },
    {
      title: "Intermediate - MPC",
      company: "Sri Chaitanya Junior Kalasala",
      date: "2018 - 2020",
      description: "Mathematics, Physics, and Chemistry with excellent academic performance."
    },
    {
      title: "High School",
      company: "Sri Sai Vidyalay",
      date: "2018",
      description: "Foundation in core subjects with early interest in technology and design."
    }
  ]

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 animate-fade-in">
          🎓 Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="relative flex items-start gap-8 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-neon-cyan rounded-full border-4 border-background animate-pulse-glow"></div>
                </div>

                {/* Content card */}
                <div className="flex-1 card-glass">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-neon-cyan">
                      {item.title}
                    </h3>
                    <span className="text-sm text-neon-purple font-medium px-3 py-1 glass rounded-full border border-neon-purple/30">
                      {item.date}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-foreground mb-3">
                    {item.company}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education