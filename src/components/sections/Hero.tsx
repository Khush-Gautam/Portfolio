import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import myPhoto from "../../assets/myphoto.png";
const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* left line indicator */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* text section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Khush Gautam</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Frontend Developer <br className="hidden sm:block" />
            Startup Enthusiast •  Team Lead • Builder
          </p>

          <p className="mt-4 max-w-md text-sm text-gray-400">
            Passionate about building real-world web applications, leading teams in hackathons,
            and exploring startup ideas. Strong focus on communication, leadership, and execution.
          </p>
        </div>
      </div>

      {/* profile image */}
<div className="absolute right-10 top-40 hidden lg:block">
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    {/* glow background */}
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#915EFF] to-purple-500 blur-lg opacity-70"></div>

    {/* image card */}
    <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
      <img
        src={myPhoto}
        alt="Khush Gautam"
        className="h-full w-full object-cover object-[center_20%]"
      />
    </div>
  </motion.div>
</div>

      {/* 3D canvas (keep as-is) */}
      <ComputersCanvas />

      {/* scroll indicator */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;