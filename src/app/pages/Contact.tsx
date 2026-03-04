import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sudeepankam003@gmail.com",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 6302031003",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      color: "from-green-500 to-teal-500",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_0h4qeoy",
        "template_ck612uk",
        templateParams,
        "mhO3jRALNSFJ6BnGi"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

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
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Have a project in mind? Let's talk about how we can work together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-black/5 text-center"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                >
                  {info.icon}
                </div>

                <h3 className="font-black text-lg mb-2">{info.title}</h3>
                <p className="text-black/60">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 resize-none bg-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}