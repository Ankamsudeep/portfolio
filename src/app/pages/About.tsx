import { motion } from 'motion/react';
import { Palette, Smartphone, Package, Code, Briefcase, Award } from 'lucide-react';

export function About() {
  const services = [
    {
      id: 1,
      number: "01",
      icon: <Palette className="w-6 h-6" />,
      title: "Website Design",
      description: "I do creative design for web platforms and convert it to clean code using AI platforms."
    },
    {
      id: 2,
      number: "02",
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App",
      description: "I specialize in creating intuitive mobile app designs and development."
    },
    {
      id: 3,
      number: "03",
      icon: <Package className="w-6 h-6" />,
      title: "The Full Package",
      description: "End-to-end design and development services for your digital projects."
    }
  ];

  // const skills = [
  //   {
  //     year: "May 2025 - Present",
  //     category: "Future View Systems",
  //     // items: ["Figma", "After Effects", "Photoshop", "FigJam", "Webflow", "Miro"]
  //     description: "I do creative design for web platforms and convert it to clean code using AI platforms."
  //   },
  //   {
  //     year: "Sep 2024 - May 2025 ",
  //     category: "Zedcasa",
  //     // items: ["Webflow", "HTML & CSS", "JavaScript", "React", "Tailwind"]
  //     description: "I do creative design for web platforms and convert it to clean code using AI platforms."
  //   },
  //   {
  //     year: "Jan 2023 - June 2023",
  //     category: "Internshhip at Technnical Hub",
  //     // items: ["Notion", "Google Tabs", "Microsoft To-Do", "Jira", "Slack"]
  //     description: "I do creative design for web platforms and convert it to clean code using AI platforms."
  //   }
  // ];
const skills = [
  {
    year: "May 2025 - Present",
    category: "Future View Systems",
    description:
      "Working as a Software Developer (UI/UX Designer) on AI-based financial products. I design modern user interfaces, create user flows and prototypes, and convert UI designs into clean web code using AI development tools."
  },
  {
    year: "Sep 2024 - May 2025",
    category: "Zedcasa",
    description:
      "Worked as a UI/UX Designer for a furniture e-commerce platform. Designed user-friendly interfaces for both website and mobile app including product pages, shopping flows, and checkout experience."
  },
  {
    year: "Jan 2023 - June 2023",
    category: "Internship at Technical Hub",
    description:
      "Completed a UI/UX Design internship working on practice projects such as a food delivery web application and a consultancy mobile app while learning UI principles, prototyping, and graphic design."
  }
];




  const achievements = [
    { icon: <Briefcase className="w-8 h-8" />, number: "89+", label: "Completed Projects" },
    { icon: <Award className="w-8 h-8" />, number: "18+", label: "Different Countries" },
    { icon: <Code className="w-8 h-8" />, number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FAF7F2] via-[#F5E9DC] to-[#F0DCC8] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">About Me</h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
A passionate UI/UX designer focused on creating intuitive and engaging digital products that solve real user problems and deliver meaningful experiences.            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black uppercase">Turning Vision Into Reality</h2>
              <p className="text-black/70 leading-relaxed">
With 2+ years of experience in UI/UX design, I’ve worked across financial AI platforms, e-commerce, and food delivery products, transforming complex ideas into user-friendly interfaces and seamless digital journeys. I actively leverage AI-powered design tools to accelerate workflows, enhance creativity, and deliver efficient, high-quality solutions. My understanding of front-end development helps bridge the gap between design and implementation, ensuring practical and scalable outcomes.</p>              <p className="text-black/70 leading-relaxed">
                My approach combines creativity with strategy, ensuring that every project not only looks beautiful but also achieves its business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-orange-500 mb-3 flex justify-center">{achievement.icon}</div>
                  <div className="text-3xl font-black mb-1">{achievement.number}</div>
                  <div className="text-xs text-black/60">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase mb-12 text-center"
          >
            I Can Help You With
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl font-light text-orange-500/20 mb-4">{service.number}</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-500">{service.icon}</div>
                  <h3 className="font-black text-xl">{service.title}</h3>
                </div>
                <p className="text-sm text-black/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase mb-12"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-7
                ">
                  <div className="text-sm text-orange-500 font-semibold md:w-100%">{skill.year}</div>
                  <div className="font-black md:w-48 text-xl">{skill.category}</div>
                  <div className="flex flex-wrap gap-3 flex-1">
                    {/* {skill.items.map((item, i) => (
                      <span key={i} className="bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))} */
                    
                    <div className="text-sm text-gray-500 font-regular md:w-100%">{skill.description}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workstation */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase mb-12"
          >
            My Workstation
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1729257753395-7e6406776fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBncmFkaWVudCUyMGFic3RyYWN0fGVufDF8fHx8MTc3MTk1MjU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1587522630593-3b9e5f3255f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc3MTk1MjU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1770003354677-7c3b06d302e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29tcHV0ZXIlMjBtb25pdG9yfGVufDF8fHx8MTc3MTk1MjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={image}
                  alt={`Workspace ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
