import { BsWhatsapp } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1300px] mx-auto md:mb-4" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center text-center text-white space-y-4">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-2">
              {/* Phone */}
              <a
                href="tel:+8801781142856"
                className="flex items-center gap-2 text-lg hover:text-purple-300 transition-all duration-300"
              >
                <PiPhoneCall size={24} />
                <span>+880 1781 142856</span>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/8801781142856"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg hover:text-green-400 transition-all duration-300"
              >
                <BsWhatsapp size={24} />
                <span>WhatsApp</span>
              </a>
              {/* Email */}
              <a
                href="mailto:jamilhossainrafi@gmail.com"
                className="flex items-center gap-2 text-lg hover:text-blue-300 transition-all duration-300"
              >
                📧 jamilhossainrafi@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-6xl p-5 md:p-12  rounded-md shadow-lg" id="form">
            <p className="text-gray-100 font-bold text-xl mb-4">Let´s connect!</p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              required
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              required
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              id="textarea"
              name="textarea"
              required
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
