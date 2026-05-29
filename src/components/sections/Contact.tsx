
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">

      {/* LEFT SIDE - CONTACT LINKS */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <p className="text-secondary mt-6 text-[16px] leading-[28px]">
          Feel free to connect with me across platforms. I’m always open to
          internships, collaborations, hackathons, and startup ideas 🚀
        </p>

        <div className="mt-10 flex flex-col gap-6 text-white text-[16px]">

          {/* EMAIL */}
          <a
            href="mailto:khushgautam18@gmail.com"
            className="hover:text-[#915EFF] transition"
          >
            📧 Email: khushgautam18@gmail.com
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Khush-Gautam"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#915EFF] transition"
          >
            💻 GitHub: github.com/Khush-Gautam
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/khush-gautam-a80488303/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#915EFF] transition"
          >
            🔗 LinkedIn Profile
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/khush__gautam/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#915EFF] transition"
          >
            📸 Instagram
          </a>

          {/* LEETCODE */}
          <a
            href="https://leetcode.com/u/Khush_Gautam/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#915EFF] transition"
          >
            🧠 LeetCode Profile
          </a>
        </div>

        {/* EXTRA HIGHLIGHT BOX */}
        <div className="mt-10 rounded-xl border border-white/10 bg-tertiary p-5">
          <p className="text-white font-semibold">
            🚀 Open for internships & hackathons
          </p>
          <p className="text-secondary text-sm mt-2">
            Frontend Development • React • Startup Projects • Leadership Roles
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDE - EARTH (UNCHANGED) */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");