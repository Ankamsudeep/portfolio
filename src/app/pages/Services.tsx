import { motion } from 'motion/react';
import { Palette, Smartphone, Code, Layers, Zap, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that delight users and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Design Systems"],
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Design",
      description: "Designing native and cross-platform mobile applications that users love.",
      features: ["iOS Design", "Android Design", "React Native", "App Prototyping", "User Testing"],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Building responsive and performant websites with modern technologies.",
      features: ["React", "Tailwind CSS", "Next.js", "TypeScript", "API Integration"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Brand Identity",
      description: "Crafting unique brand identities that tell your story and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Brand Strategy"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Webflow Development",
      description: "Creating custom Webflow sites that are both beautiful and easy to manage.",
      features: ["Custom Design", "CMS Setup", "Animations", "SEO Optimization", "Training"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Consulting",
      description: "Providing expert guidance on design strategy and digital transformation.",
      features: ["Design Audit", "Strategy Planning", "Team Training", "Process Optimization", "Mentorship"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, target audience, and project requirements"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Developing a comprehensive plan and design direction"
    },
    {
      step: "03",
      title: "Design",
      description: "Creating stunning visuals and user experiences"
    },
    {
      step: "04",
      title: "Development",
      description: "Bringing designs to life with clean, efficient code"
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploying your project and ensuring everything works perfectly"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FAF7F2] via-[#F5E9DC] to-[#F0DCC8] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Services</h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Comprehensive design and development services to bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-black/5"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-black/70 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`} />
                      <span className="text-black/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">My Process</h2>
            <p className="text-black/70">A proven approach to delivering exceptional results</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-light text-orange-500/20 mb-4">{item.step}</div>
                  <h3 className="font-black text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{item.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-500 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's work together to create something amazing
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
