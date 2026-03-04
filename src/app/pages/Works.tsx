import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Link } from 'lucide-react';

import bezAI from "../../Accets/FVS.png";
import zedcasa from "../../Accets/ZEDCASA.png";
import foodDelivery from "../../Accets/Food delivery.png";
import shareNest from "../../Accets/Sharenest.png";

export function Works() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web design', 'mobile app', 'branding', 'ui/ux'];


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
      Link: "https://www.zedcasa.com/"
    },
    {
      id: 3,
      image: foodDelivery,
      title: "Food Delivery Website",
      category: "UI Design",
      description: "Modern food delivery website with clean and intuitive UI.",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      image: shareNest,
      title: "ShareNest Platform",
      category: "Landing Page & Research",
      description: "Landing page design and UX research for ShareNest platform.",
      color: "from-pink-500 to-rose-500",
      link: "https://www.behance.net/gallery/220406483/Sharenest",
    },

    // {
    //   id: 5,
    //   // image: "https://images.unsplash.com/photo-1729257753395-7e6406776fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBncmFkaWVudCUyMGFic3RyYWN0fGVufDF8fHx8MTc3MTk1MjU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Fitness Tracking App",
    //   category: "ui/ux",
    //   description: "Intuitive health and fitness tracking interface",
    //   color: "from-yellow-500 to-orange-500"
    // },
    // {
    //   id: 6,
    //   image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxODkwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   title: "Social Media Platform",
    //   category: "mobile app",
    //   description: "Next-gen social networking experience",
    //   color: "from-blue-500 to-cyan-500"
    // }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">My Works</h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              A collection of projects that showcase my passion for design and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-8 px-6 bg-white sticky top-20 z-40 border-b border-black/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-black/5 text-black hover:bg-black/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                


                <div className="relative overflow-hidden rounded-2xl shadow-lg">

                  {/* 1:1 Ratio */}
                  <div className="aspect-square relative">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                          {project.category}
                        </div>

                        <h3 className="text-2xl font-black mb-2">
                          {project.title}
                        </h3>

                        <p className="text-sm opacity-90 mb-4">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-semibold">
                          View Project <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-black/60">
                No projects found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
