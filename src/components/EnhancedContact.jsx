import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheck,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "jamilhossainrafi@gmail.com",
      link: "mailto:jamilhossainrafi@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+880 1781 142856",
      link: "tel:+8801781142856",
      color: "text-green-500"
    },
    {
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      value: "Chat with me",
      link: "https://wa.me/8801781142856",
      color: "text-green-400"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jamil-hossain-rafi-05feb/",
      color: "hover:text-blue-500"
    },
    {
      icon: <FiGithub />,
      name: "GitHub",
      url: "https://github.com/jamil908",
      color: "hover:text-gray-900 dark:hover:text-white"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6" id="contact">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's create something amazing together!
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let's start a conversation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new opportunities, creative projects, 
              or potential collaborations. Feel free to reach out through any of 
              the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-card border border-border rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
              >
                <div className={`text-2xl ${info.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Follow me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`p-3 bg-card border border-border rounded-full text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-lg`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-foreground"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? "bg-green-500 text-white"
                  : isSubmitting
                  ? "bg-purple-400 text-white cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              {isSubmitted ? (
                <>
                  <FiCheck size={20} />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContact;