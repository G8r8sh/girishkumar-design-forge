import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Portfolio Contact Form")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `)
    
    window.location.href = `mailto:ambalagirish55555@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glass animate-fade-in">
            <h3 className="text-2xl font-semibold text-neon-cyan mb-6">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to new opportunities and collaborations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass border-neon-cyan/30 focus:border-neon-cyan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass border-neon-cyan/30 focus:border-neon-cyan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glass border-neon-cyan/30 focus:border-neon-cyan"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
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