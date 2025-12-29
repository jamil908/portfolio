import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiGlobe, 
  FiSettings, 
  FiTrendingUp 
} from 'react-icons/fi';
import { Link } from 'react-scroll';

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and MongoDB.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Authentication Systems"]
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      description: "Creating beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First Approach", "Cross-Browser Compatibility", "UI/UX Design", "Performance Optimization"]
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database management, and cloud integration.",
      features: ["RESTful APIs", "Database Management", "Server Configuration", "Cloud Deployment"]
    },
    {
      icon: <FiGlobe />,
      title: "Frontend Development",
      description: "Modern, interactive user interfaces built with React, TypeScript, and cutting-edge CSS frameworks.",
      features: ["React Applications", "TypeScript Integration", "State Management", "Component Libraries"]
    },
    {
      icon: <FiSettings />,
      title: "System Integration",
      description: "Seamless integration of third-party services, payment gateways, and external APIs.",
      features: ["Payment Integration", "Third-party APIs", "Webhook Implementation", "Data Migration"]
    },
    {
      icon: <FiTrendingUp />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and user experience with modern best practices.",
      features: ["Speed Optimization", "SEO Implementation", "Code Splitting", "Caching Strategies"]
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6" id="services">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My <span className="text-purple-500">Services</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I offer comprehensive web development services to help bring your ideas to life 
          with modern technologies and best practices.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
              <span className="text-purple-500 text-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to start your project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help you build the perfect solution for your needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;