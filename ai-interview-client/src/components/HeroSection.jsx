import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-5xl">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold leading-tight text-white"
        >
          Master Your
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}AI Interview
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-8 text-xl leading-9"
        >
          Practice smarter with AI-generated interview questions,
          real-time voice analysis, performance tracking,
          and personalized feedback.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex items-center justify-center gap-5 flex-wrap"
        >

          <button className="primary-btn">
            Start Interview
          </button>

          <button className="border border-cyan-400 px-7 py-3 rounded-xl text-white hover:bg-cyan-400/10 transition">
            Explore Features
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;