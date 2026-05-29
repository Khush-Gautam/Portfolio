import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#915EFF"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* SECTION TITLE (KEEP HEADER SYSTEM) */}
      <Header
  useMotion={true}
  h2="About Me"
  p="Who I am & what I do"
/>

      {/* MAIN ABOUT CONTENT (REPLACED CONFIG DEPENDENCY) */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl"
      >
        <p className="text-secondary text-[17px] leading-[30px]">
          I am a <span className="text-white font-semibold">Frontend Developer</span>, 
          <span className="text-white font-semibold"> Problem Solver</span>, and 
          <span className="text-white font-semibold"> Startup Enthusiast</span> passionate about building real-world digital products.
        </p>

        <p className="mt-4 text-gray-300 text-[17px] leading-[30px]">
          I enjoy transforming ideas into clean, interactive, and user-friendly web applications. 
          My focus is on writing scalable frontend code and creating smooth user experiences using modern web technologies.
        </p>

        <p className="mt-4 text-gray-300 text-[17px] leading-[30px]">
          Alongside development, I actively participate in hackathons, leadership roles, and campus programs such as 
          Paytm Campus Ambassador and EDC IIT Delhi initiatives. These experiences have strengthened my communication, teamwork, and execution skills.
        </p>

        <p className="mt-4 text-gray-300 text-[17px] leading-[30px]">
          My long-term vision is to become a startup founder, building products that solve real-world problems using technology and creativity.
        </p>

        {/* SKILL TAGS */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Frontend Developer",
            "Problem Solver",
            "Startup Enthusiast",
            "Team Leader",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-[#1d1836] text-white text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* SERVICE CARDS (UNCHANGED LOGIC) */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");