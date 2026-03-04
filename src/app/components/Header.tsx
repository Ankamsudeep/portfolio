import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/works', label: 'Works' },
    { path: '/about', label: 'About' },
    // { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-black/10"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl italic font-serif relative group">
            <span className="relative z-10">Sudeep.</span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity rounded-full"
              layoutId="logo-underline"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className="relative text-sm hover:opacity-70 transition-opacity py-2"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm hover:shadow-lg transition-shadow"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-sm py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-gradient-to-r from-orange-100 to-pink-100 font-semibold' 
                    : 'hover:bg-black/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/contact';
              }}
            >
              Let's Talk
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
