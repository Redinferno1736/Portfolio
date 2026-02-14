import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function ContactSection({ isDark }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-10 pb-5 w-full flex justify-center min-h-screen">
      <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center max-w-xl text-center md:text-left order-3 md:order-1">

          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-black"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "poppins" }}
          >
            Let's connect!
          </motion.h2>

          <motion.p
            className={`text-base md:text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-800"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "quicksand", fontWeight: "500" }}
          >
            Have an idea, question, or want to collaborate? Fill out the form or use the links below!
          </motion.p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-8 justify-center md:justify-start">
            <motion.a
              href="mailto:email.pranavdp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition ${isDark
                  ? "text-gray-300 hover:text-[#3fd7c8]"
                  : "text-gray-700 hover:text-[#137062]"
                }`}
              whileHover={{ scale: 1.2 }}
            >
              <MdEmail />
            </motion.a>

            <motion.a
              href="https://github.com/Redinferno1736"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition ${isDark
                  ? "text-gray-300 hover:text-[#3fd7c8]"
                  : "text-gray-700 hover:text-[#137062]"
                }`}
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pranav-d-p-a2100a333/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition ${isDark
                  ? "text-gray-300 hover:text-[#3fd7c8]"
                  : "text-gray-700 hover:text-[#137062]"
                }`}
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full flex flex-col items-center md:items-end order-1 md:order-2">

          {/* CONTACT TITLE */}
          <div className="relative w-full md:pr-15 mb-10 text-center md:text-right leading-none">

            {/* CONTACT */}
            <span
              className="block text-[42px] sm:text-[52px] md:text-[64px] font-black uppercase relative z-10"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                color: isDark ? "#fff" : "#000",
              }}
            >
              CONTACT
            </span>

            {/* SECTION (Overlapping) */}
            <span
              className="block text-[42px] sm:text-[52px] md:text-[64px] font-black uppercase relative -mt-5 sm:-mt-6 md:-mt-7 md:pr-3 z-0"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                color: "transparent",
                WebkitTextStroke: "3px #137062",
              }}
            >
              SECTION
            </span>

          </div>


          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className={`w-full max-w-md flex flex-col gap-4 rounded-xl p-6 shadow-2xl ${isDark ? "bg-[#181c1f]" : "bg-[#c6d6e9]"
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <label className={`font-medium ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              className={`rounded px-4 py-2 focus:outline-none ${isDark
                  ? "bg-[#292e32] text-white"
                  : "bg-[#e6eef7] text-black"
                }`}
              disabled={loading}
            />

            <label className={`font-medium ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className={`rounded px-4 py-2 focus:outline-none ${isDark
                  ? "bg-[#292e32] text-white"
                  : "bg-[#e6eef7] text-black"
                }`}
              disabled={loading}
            />

            <label className={`font-medium ${isDark ? "text-[#B0B7B5]" : "text-gray-700"}`}>
              Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className={`rounded px-4 py-2 focus:outline-none resize-none ${isDark
                  ? "bg-[#292e32] text-white"
                  : "bg-[#e6eef7] text-black"
                }`}
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 rounded w-full px-6 py-3 bg-[#137062] text-white font-bold flex justify-center items-center gap-2 text-lg"
            >
              {loading ? "Sending..." : <>Send <FiSend /></>}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-center mt-2">
                ❌ Failed to send. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}