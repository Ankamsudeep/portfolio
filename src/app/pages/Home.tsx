import { motion } from 'motion/react';
import { Circle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import bezAI from "../../Accets/FVS.png";
import zedcasa from "../../Accets/ZEDCASA.png";
import profile from "../../Accets/Profile.jpg";


export function Home() {
  const projects = [
    {
      id: 1,
      image: bezAI,
      title: "BEZ - Financial AI Platform",
      category: "AI Product Design",
      description: "Complete UI/UX design for an AI-powered financial platform.",
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      image: zedcasa,
      title: "Zedcasa Furniture E-Commerce",
      category: "Web & Mobile Design",
      description: "Designed furniture e-commerce website and mobile app experience.",
      color: "from-orange-500 to-pink-500",
    }

  ];

  const skills = [
    {
      category: "Design Tools",
      items: [
        { name: "Figma", level: 95 },

        { name: "Photoshop", level: 85 },
        { name: "Framer", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Lottifiles", level: 90 },

      ],
      color: "from-orange-500 to-pink-500"
    },
    {
      category: "AI Tools",
      items: [
        { name: "Figma Make", level: 90 },
        { name: "Stitch", level: 85 },
        { name: "MoonChild.ai", level: 95 },
      ],
      color: "from-green-500 to-blue-500"
    },
    {
      category: "Development",
      items: [
        { name: "HTML", level: 70 },
        { name: "CSS", level: 70 },
        { name: "React", level: 50 },
        { name: "Python", level: 50 }
      ],
      color: "from-purple-500 to-blue-500"
    },

  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F5E9DC] to-[#F0DCC8] relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm shadow-lg backdrop-blur-sm border border-orange-200"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Circle className="w-2 h-2 fill-orange-500 text-orange-500" />
                </motion.div>
                <span>Available for new opportunities</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl lg:text-8xl italic font-light font-serif"
                >
                  Hey, there
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <h2 className="text-5xl md:text-6xl lg:text-5xl font-black uppercase leading-tight bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    I AM<br />Sudeep
                  </h2>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-4xl md:text-5xl lg:text-4xl font-black uppercase leading-tight">
                  {/* DIGITAL<br /> */}
                  UI/UX<br />
                  DESIGNER
                </p>
                <p className="text-base max-w-md text-black/70 leading-relaxed">
                  UI/UX Designer crafting intuitive digital experiences with design and front-end expertise.                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/works">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                  >
                    View My Work <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-4 rounded-full font-semibold border-2 border-black/10 hover:border-black/20 transition-colors"
                  >
                    Let's Talk
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/5] bg-gradient-to-br from-orange to-pink-400 rounded-3xl overflow-hidden shadow-2xl relative"
                >
                  <img
                    src= {profile}
                    alt="Madison - Digital Product Designer"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </motion.div>

                {/* Floating Stats */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -left-6 top-20 bg-white p-4 rounded-2xl shadow-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">89+</div>
                  <div className="text-xs text-black/60">Projects</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -right-6 bottom-20 bg-white p-4 rounded-2xl shadow-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">18+</div>
                  <div className="text-xs text-black/60">Countries</div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white flex justify-center">
        <div className="w-full max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Featured Work
            </h2>

            <p className="text-black/60">
              Explore some of my recent projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2  gap-16 justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg justify-items-center ">

                  {/* 1:1 Ratio */}
                  <div className="aspect-square relative">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm opacity-80 mb-1">
                        {project.category}
                      </div>

                      <h3 className="text-xl font-bold">
                        {project.title}
                      </h3>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                View All Projects <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Skills & Expertise
            </h2>
            <p className="text-black/60">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-black mb-6">{skillSet.category}</h3>
                <div className="space-y-5">
                  {skillSet.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold">{skill.name}</span>
                        <span className="text-sm text-black/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skillSet.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}