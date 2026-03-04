import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl italic mb-4 font-serif">Madison.</div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Digital Product Designer specializing in creating exceptional web experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="flex gap-3">

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/sudeep-ankam-100866253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:sudeepankam003@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-black mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform">Home</Link></li>
              <li><Link to="/works" className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform">Works</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform">Contact</Link></li>
            </ul>
          </div>

          <div>
            {/* <h3 className="font-black mb-4 text-lg">Services</h3> */}
            {/* <ul className="space-y-2 text-sm text-white/70"> */}
            {/* <li className="hover:text-white transition-colors">UI/UX Design</li>
              <li className="hover:text-white transition-colors">Web Development</li>
              <li className="hover:text-white transition-colors">Mobile Apps</li>
              <li className="hover:text-white transition-colors">Brand Identity</li>
              <li className="hover:text-white transition-colors">Consulting</li> */}
            {/* </ul> */}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p className="flex items-center gap-2">
              {/* &copy; {currentYear} Sudeep. Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> */}
            </p>
            <div className="flex gap-6">
              {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
