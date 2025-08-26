// import React from "react";
// import { motion as Motion } from "motion/react";

// const Home = () => {
//   return (
//     <Motion.section
//       className="flex flex-col items-center justify-center text-center py-20 px-4
//                  bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800
//                  min-h-[calc(100vh-4rem)]"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <Motion.h1
//         className="text-5xl font-bold text-cyan-800 dark:text-yellow-300 mb-4"
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         Welcome to <span className="text-emerald-600 dark:text-yellow-400">MySite</span>
//       </Motion.h1>

//       <Motion.p
//         className="text-lg max-w-xl text-gray-700 dark:text-gray-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//       >
//         This is your responsive, modern React + TailwindCSS website — now with dark mode and subtle animations to impress your visitors.
//       </Motion.p>

//       <Motion.button
//         className="mt-8 px-6 py-2 bg-emerald-600 text-white rounded shadow-md hover:bg-emerald-700 transition dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Get Started
//       </Motion.button>
//     </Motion.section>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="home-content md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello
          </motion.h3>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm Jayant Kumar
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            And I'm a <span className="text-indigo-600 dark:text-yellow-400 font-bold">Web & Blockchain Developer</span>
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I specialize in creating innovative web solutions and decentralized blockchain applications, combining cutting-edge technology with creative problem-solving to deliver exceptional results.
          </motion.p>

          <motion.div
            className="social-media flex justify-center md:justify-start gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/jayant-kumar-6a0280251/"
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1, backgroundColor: "#0A66C2" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-white hover:text-white">in</span>
            </motion.a>

            <motion.a
              href="https://github.com/forenus"
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-white hover:text-white">Git</span>
            </motion.a>
          </motion.div>

          <motion.a
            href="./assets/cv.pdf"
            className="btn inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="home-img md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 bg-indigo-200 dark:bg-indigo-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Replace with your actual image path */}
              <img
                src="./assets/profile-pic1png.png"
                alt="Jayant Kumar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating elements for visual interest */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-70"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-2 -left-4 w-12 h-12 bg-indigo-500 rounded-full opacity-70"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
