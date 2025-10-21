import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function ContactSection({ isDark }) {
  return (
    <section className="pt-36 pb-20 w-full flex justify-center " id="contact">
      <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
        {/* Heading and info left (on desktop) */}
        <div className="flex-1 flex flex-col justify-center md:order-1 order-2 max-w-xl">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              isDark ? "text-white" : "text-black"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's connect!
          </motion.h2>
          <motion.p
            className={`text-base md:text-lg mb-8 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have an idea, question, or want to collaborate? Fill out the form or use the links below!
          </motion.p>
          {/* SOCIAL LINKS */}
          <div className="flex gap-8 mt-2 px-3 items-center md:justify-start justify-center">
            <motion.a
              href="mailto:your@email.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors text-2xl ${
                isDark ? "text-gray-300 hover:text-[#3fd7c8]" : "text-gray-700 hover:text-[#137062]"
              }`}
              whileHover={{ scale: 1.2 }}
            >
              <MdEmail />
            </motion.a>
            <motion.a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors text-2xl ${
                isDark ? "text-gray-300 hover:text-[#3fd7c8]" : "text-gray-700 hover:text-[#137062]"
              }`}
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors text-2xl ${
                isDark ? "text-gray-300 hover:text-[#3fd7c8]" : "text-gray-700 hover:text-[#137062]"
              }`}
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
        {/* Contact Form right (on desktop) */}
        <div className="flex-1 flex flex-col justify-center md:order-2 order-1">
          <div className="relative min-w-[240px] md:min-w-[320px] mb-8 md:mb-0 md:text-right text-center">
            <span
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: "900",
                fontSize: "60px",
                color: isDark ? "#fff" : "#000",
                zIndex: 2,
                textTransform: "uppercase",
                position: "absolute",
                right: 105,
                top: 0,
              }}
            >
              CONTACT
            </span>
            <span
              style={{
                position: "absolute",
                right: 120,
                top: "36px",
                width: "100%",
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: "900",
                fontSize: "60px",
                color: "transparent",
                WebkitTextStroke: "3px #137062",
                textStroke: "3px #137062",
                textTransform: "uppercase",
                zIndex: 3,
              }}
            >
              SECTION
            </span>
          </div>
          <motion.form
            className={`flex flex-col gap-4 rounded-xl p-6 shadow-xl shadow-[#2c3237] border-none mt-20 md:mt-32 ${
              isDark ? "bg-[#181c1f]" : "bg-[#c6d6e9]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <div className="flex flex-col gap-2">
              <label className={`font-medium text-lg ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>Name</label>
              <input
                required
                type="text"
                name="name"
                className={`rounded px-4 py-2 border border-none focus:outline-none focus:border-[#3fd7c8] transition ${
                  isDark ? "bg-[#292e32] text-white placeholder-gray-400" : "bg-[#e6eef7] text-black placeholder-gray-500"
                }`}
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={`font-medium text-lg ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>Email</label>
              <input
                required
                type="email"
                name="email"
                className={`rounded px-4 py-2 border border-none focus:outline-none focus:border-[#3fd7c8] transition ${
                  isDark ? "bg-[#292e32] text-white placeholder-gray-400" : "bg-[#e6eef7] text-black placeholder-gray-500"
                }`}
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={`font-medium text-lg ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className={`rounded px-4 py-2 border border-none focus:outline-none focus:border-[#3fd7c8] transition resize-none ${
                  isDark ? "bg-[#292e32] text-white placeholder-gray-400" : "bg-[#e6eef7] text-black placeholder-gray-500"
                }`}
                placeholder=""
              />
            </div>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#137062",
                color: "#ffffff",
                letterSpacing: 1,
              }}
              type="submit"
              className="mt-6 mx-auto rounded w-full px-8 py-3 bg-[#137062] text-white font-bold justify-center flex items-center gap-2 text-lg transition-all"
            >
              Send <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
