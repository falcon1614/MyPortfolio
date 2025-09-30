import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Code2, Server, Database, Cloud } from "lucide-react";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Icon mapping
  const iconComponents = {
    Code2: Code2,
    Server: Server,
    Database: Database,
    Cloud: Cloud
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      }
    }),
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.1,
      }
    })
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`min-h-screen py-20 relative overflow-hidden
        ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}
      `}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-[0.03]
          ${isDarkMode ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" : "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"}
        `} />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent bg-[length:200%_200%]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className={`text-sm font-semibold tracking-wider uppercase mb-3 block
              ${isDarkMode ? "text-purple-400" : "text-purple-600"}
            `}
          >
            Expertise
          </motion.span>
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6
            ${isDarkMode ? "text-white" : "text-gray-900"}
          `}>
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed
            ${isDarkMode ? "text-gray-400" : "text-gray-600"}
          `}>
            Mastering modern technologies to build scalable, performant, and user-friendly applications
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statVariants}
              className={`group p-6 rounded-2xl text-center relative overflow-hidden h-full
                ${isDarkMode
                  ? "bg-gray-800/40 hover:bg-gray-800/60"
                  : "bg-white/60 hover:bg-white/80"
                } backdrop-blur-sm border transition-all duration-500
                ${isDarkMode ? "border-gray-700" : "border-gray-200"}
              `}
            >
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col justify-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className={`text-sm font-semibold
                  ${isDarkMode ? "text-gray-300" : "text-gray-700"}
                `}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Progress - Takes 2 columns */}
          <motion.div
            style={{ y }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {SKILLS_CATEGORY.map((category, categoryIndex) => {
                const IconComponent = iconComponents[category.icon];
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: categoryIndex * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`p-6 rounded-2xl backdrop-blur-sm group h-full flex flex-col
                      ${isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-white/50 hover:bg-white/70"
                      } border transition-all duration-500
                      ${isDarkMode ? "border-gray-700/50" : "border-gray-200/50"}
                    `}
                  >
                    {/* Category Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-xl flex-shrink-0
                          ${isDarkMode
                            ? "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
                            : "bg-gradient-to-br from-blue-100 to-purple-100"
                          } border
                          ${isDarkMode ? "border-blue-500/30" : "border-blue-200"}
                        `}
                      >
                        <IconComponent
                          size={24}
                          className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                        />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold mb-2
                          ${isDarkMode ? "text-white" : "text-gray-900"}
                        `}>
                          {category.title}
                        </h3>
                        <p className={`text-sm leading-relaxed
                          ${isDarkMode ? "text-gray-400" : "text-gray-600"}
                        `}>
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4 flex-1">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + skillIndex * 0.1 }}
                          className="group"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className={`text-sm font-semibold truncate
                              ${isDarkMode ? "text-gray-200" : "text-gray-800"}
                            `}>
                              {skill.name}
                            </span>
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-2
                                ${isDarkMode
                                  ? "bg-purple-500/20 text-purple-300"
                                  : "bg-purple-100 text-purple-700"
                                }
                              `}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className={`h-2 rounded-full overflow-hidden
                            ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}
                          `}>
                            <motion.div
                              custom={skill.level}
                              variants={skillBarVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              className={`h-full rounded-full ${skill.color} shadow-lg`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tech Stack - Takes 1 column with full height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`p-6 rounded-2xl backdrop-blur-sm h-full flex flex-col
              ${isDarkMode
                ? "bg-gray-800/30 border border-gray-700/50"
                : "bg-white/50 border border-gray-200/50"
              }
            `}
          >
            {/* Tech Stack Header */}
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-3
                ${isDarkMode ? "text-white" : "text-gray-900"}
              `}>
                Tech Stack
              </h3>
              <p className={`text-sm
                ${isDarkMode ? "text-gray-400" : "text-gray-600"}
              `}>
                Technologies I work with daily
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-3 gap-3 flex-1">
              {TECH_STACK.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.6 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 cursor-pointer group h-24
                    ${isDarkMode
                      ? "bg-gray-700/30 hover:bg-gray-700/50"
                      : "bg-gray-100 hover:bg-gray-200"
                    } border
                    ${isDarkMode ? "border-gray-600/30" : "border-gray-300"}
                  `}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className={`text-2xl mb-2 rounded-lg p-2
                      ${isDarkMode ? "bg-gray-600/50" : "bg-white"}
                    `}
                  >
                    {getTechIcon(tech)}
                  </motion.div>
                  <span className={`text-xs font-semibold text-center leading-tight
                    ${isDarkMode ? "text-gray-300" : "text-gray-700"}
                  `}>
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 border border-blue-500/20"
            >
              <h4 className={`text-lg font-bold mb-3 flex items-center gap-2
                ${isDarkMode ? "text-white" : "text-gray-900"}
              `}>
                <div className={`p-1 rounded ${isDarkMode ? "bg-blue-500/20" : "bg-blue-100"}`}>
                  <span className="text-sm">⚡</span>
                </div>
                Development Tools
              </h4>
              <div className={`grid gap-2 text-xs
                ${isDarkMode ? "text-gray-300" : "text-gray-600"}
              `}>
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">Build:</span>
                  <span>Webpack • Vite • Jest</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">Design:</span>
                  <span>Figma • Adobe XD</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">Deploy:</span>
                  <span>Vercel • Netlify • Docker</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">Tools:</span>
                  <span>Git • Notion • Slack</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced tech icons with better visuals
const getTechIcon = (tech) => {
  const icons = {
    JavaScript: "🟨",
    HTML5: "🔶",
    CSS3: "💠",
    Sass: "🎀",
    Webpack: "📦",
    Vite: "⚡",
    Jest: "✅",
    Cypress: "🌲",
    Figma: "🎨",
    "Adobe XD": "✏️",
    Notion: "📋",
    Slack: "💬",
  };
  return icons[tech] || "💻";
};

export default SkillsSection;
