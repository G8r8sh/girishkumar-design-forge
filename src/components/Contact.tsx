const Contact = () => {

  const contactInfo = [
    {
      label: "Phone",
      value: "+91 78426 04739",
      icon: "📱"
    },
    {
      label: "Email",
      value: "ambalagirish55555@gmail.com",
      icon: "📧"
    },
    {
      label: "Location",
      value: "Secunderabad, Hyderabad",
      icon: "📍"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 animate-fade-in">
          📬 Contact
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-glass">
              <h3 className="text-2xl font-semibold text-neon-purple mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 glass rounded-lg border border-neon-purple/20">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="card-glass">
              <h4 className="text-lg font-semibold text-neon-cyan mb-4">
                Let's Create Something Amazing
              </h4>
              <p className="text-muted-foreground">
                Ready to bring your digital vision to life? I specialize in creating user-centered designs that not only look great but also provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact