import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      content: "Jamil delivered exceptional work on our tour management platform. His attention to detail and technical expertise made the project a huge success.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "HealthTech Inc",
      content: "The medicine vendor platform exceeded our expectations. Jamil's full-stack skills and problem-solving abilities are truly impressive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Owner",
      company: "SportsTech",
      content: "Working with Jamil was a pleasure. He understood our requirements perfectly and delivered a robust sports equipment management system.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6" id="testimonials">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          What Clients <span className="text-purple-500">Say</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Don't just take my word for it. Here's what some of my clients have to say about working with me.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-purple-500/20">
              <BiSolidQuoteAltLeft size={32} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>

            {/* Content */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/20"
              />
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;