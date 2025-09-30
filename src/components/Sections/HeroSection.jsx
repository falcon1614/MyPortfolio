// import { motion as Motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, Mail, Code2, Heart } from "lucide-react";
// import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { useTheme } from "../../context/ThemeContext";

// import PROFILE_PIC from "../../assets/images/profile-img.png";

// const HeroSection = () => {
//     const { isDarkMode } = useTheme();
//     const { scrollY } = useScroll();
//     const heroY = useTransform(scrollY, [0, 500], [0, -100]);

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     const socialLinks = [
//         {
//             icon: <FiGithub size={20} />,
//             href: "https://github.com/yourusername",
//             label: "GitHub"
//         },
//         {
//             icon: <FiLinkedin size={20} />,
//             href: "https://linkedin.com/in/yourusername",
//             label: "LinkedIn"
//         },
//         {
//             icon: <Mail size={20} />,
//             href: "mailto:your.email@example.com",
//             label: "Email"
//         }
//     ];

//     return (
//         <Motion.section
//             id="home"
//             style={{ y: heroY }}
//             className={`min-h-screen flex items-center justify-center relative overflow-hidden
//                 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}
//             `}
//         >
//             {/* Background Pattern */}
//             <div className={`absolute inset-0 opacity-5
//                 ${isDarkMode ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" : "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"}
//             `} />

//             <div className="container mx-auto px-6 max-w-6xl relative z-10">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//                     {/* Text Content */}
//                     <Motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         className="flex-1 text-center lg:text-left"
//                     >
//                         <Motion.h1
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2, duration: 0.8 }}
//                             className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6
//                                 ${isDarkMode ? "text-white" : "text-gray-900"}
//                             `}
//                         >
//                             Hello, I'm{" "}
//                             <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//                                 Developer
//                             </span>
//                         </Motion.h1>

//                         <Motion.p
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4, duration: 0.8 }}
//                             className={`text-xl md:text-2xl mb-8 max-w-2xl
//                                 ${isDarkMode ? "text-gray-300" : "text-gray-600"}
//                             `}
//                         >
//                             Full Stack Developer & UI/UX Enthusiast
//                             <br />
//                             Crafting beautiful and functional digital experiences
//                         </Motion.p>

//                         <Motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.6, duration: 0.8 }}
//                             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//                         >
//                             <Motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => scrollToSection("work")}
//                                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//                             >
//                                 View My Work
//                             </Motion.button>

//                             <Motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => scrollToSection("contact")}
//                                 className={`px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300
//                                     ${isDarkMode
//                                         ? "border-gray-600 text-white hover:border-purple-500 hover:text-purple-400"
//                                         : "border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600"
//                                     }
//                                 `}
//                             >
//                                 Get In Touch
//                             </Motion.button>
//                         </Motion.div>

//                         {/* Social Links */}
//                         <Motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.8, duration: 0.8 }}
//                             className="flex justify-center lg:justify-start gap-6"
//                         >
//                             {socialLinks.map((link, index) => (
//                                 <Motion.a
//                                     key={link.label}
//                                     href={link.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.8 + index * 0.1 }}
//                                     whileHover={{ scale: 1.2, y: -2 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     className={`p-3 rounded-full transition-colors duration-300
//                                         ${isDarkMode
//                                             ? "bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white"
//                                             : "bg-gray-200 text-gray-600 hover:bg-purple-500 hover:text-white"
//                                         }
//                                     `}
//                                     aria-label={link.label}
//                                 >
//                                     {link.icon}
//                                 </Motion.a>
//                             ))}
//                         </Motion.div>
//                     </Motion.div>

//                     {/* Profile Image */}
//                     <Motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         className="flex-1 flex justify-center"
//                     >
//                         <div className="relative">
//                             <Motion.div
//                                 animate={{
//                                     rotate: [0, 5, -5, 0],
//                                 }}
//                                 transition={{
//                                     duration: 6,
//                                     repeat: Infinity,
//                                     ease: "easeInOut"
//                                 }}
//                                 className="relative"
//                             >
//                                 <img
//                                     src={PROFILE_PIC}
//                                     alt="Profile"
//                                     className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white/10"
//                                 />
//                                 {/* Floating elements */}
//                                 <Motion.div
//                                     animate={{
//                                         y: [0, -20, 0],
//                                         rotate: [0, 10, 0]
//                                     }}
//                                     transition={{
//                                         duration: 4,
//                                         repeat: Infinity,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg"
//                                 >
//                                     <Code2 size={24} />
//                                 </Motion.div>
//                                 <Motion.div
//                                     animate={{
//                                         y: [0, 15, 0],
//                                         rotate: [0, -5, 0]
//                                     }}
//                                     transition={{
//                                         duration: 5,
//                                         repeat: Infinity,
//                                         ease: "easeInOut",
//                                         delay: 1
//                                     }}
//                                     className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg"
//                                 >
//                                     <Heart size={20} />
//                                 </Motion.div>
//                             </Motion.div>
//                         </div>
//                     </Motion.div>
//                 </div>

//                 {/* Scroll Down Indicator */}
//                 <Motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.2, duration: 0.8 }}
//                     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//                 >
//                     <Motion.button
//                         onClick={() => scrollToSection("skills")}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className={`p-3 rounded-full transition-colors
//                             ${isDarkMode
//                                 ? "bg-gray-800 text-gray-300 hover:bg-purple-600"
//                                 : "bg-gray-200 text-gray-600 hover:bg-purple-500 hover:text-white"
//                             }
//                         `}
//                         aria-label="Scroll to next section"
//                     >
//                         <Motion.div
//                             animate={{ y: [0, 8, 0] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                         >
//                             <ArrowDown size={24} />
//                         </Motion.div>
//                     </Motion.button>
//                 </Motion.div>
//             </div>
//         </Motion.section>
//     );
// };

// export default HeroSection;


import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Code2, Heart, Twitter } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile-img.png";

const HeroSection = () => {
    const { isDarkMode } = useTheme();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, -100]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const socialLinks = [
        {
            icon: <FiGithub size={20} />,
            href: "https://github.com/falcon1614",
            label: "GitHub"
        },
        {
            icon: <FiLinkedin size={20} />,
            href: "https://www.linkedin.com/in/jayantdeveloper/",
            label: "LinkedIn"
        },
        {
            icon: <Twitter size={20} />,
            href: "https://x.com/falcon1614_",
            label: "Twitter"
        },
        {
            icon: <Mail size={20} />,
            href: "mailto:your.email@example.com",
            label: "Email"
        }
    ];

    return (
        <Motion.section
            id="home"
            style={{ y: heroY }}
            className={`min-h-screen flex items-center justify-center relative overflow-hidden
                ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}
            `}
        >
            {/* Background Pattern */}
            <div className={`absolute inset-0 opacity-5
                ${isDarkMode ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" : "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"}
            `} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <Motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6
                                ${isDarkMode ? "text-white" : "text-gray-900"}
                            `}
                        >
                            Hello, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Jayant
                            </span>
                        </Motion.h1>

                        <Motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className={`text-xl md:text-2xl mb-8 max-w-2xl
                                ${isDarkMode ? "text-gray-300" : "text-gray-600"}
                            `}
                        >
                            Full Stack Developer & UI/UX Enthusiast
                            <br />
                            Crafting beautiful and functional digital experiences
                        </Motion.p>

                        <Motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                        >
                            <Motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("work")}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                View My Work
                            </Motion.button>

                            <Motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("contact")}
                                className={`px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300
                                    ${isDarkMode
                                        ? "border-gray-600 text-white hover:border-purple-500 hover:text-purple-400"
                                        : "border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600"
                                    }
                                `}
                            >
                                Get In Touch
                            </Motion.button>
                        </Motion.div>

                        {/* Social Links */}
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex justify-center lg:justify-start gap-4"
                        >
                            {socialLinks.map((link, index) => (
                                <Motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full transition-colors duration-300
                                        ${isDarkMode
                                            ? "bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white"
                                            : "bg-gray-200 text-gray-600 hover:bg-purple-500 hover:text-white"
                                        }
                                    `}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </Motion.a>
                            ))}
                        </Motion.div>
                    </Motion.div>

                    {/* Profile Image */}
                    <Motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative">
                            <Motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative"
                            >
                                <img
                                    src={PROFILE_PIC}
                                    alt="Jayant - Full Stack Developer"
                                    className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white/10"
                                />
                                {/* Floating elements */}
                                <Motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg"
                                >
                                    <Code2 size={24} />
                                </Motion.div>
                                <Motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg"
                                >
                                    <Heart size={20} />
                                </Motion.div>
                            </Motion.div>
                        </div>
                    </Motion.div>
                </div>

                {/* Scroll Down Indicator */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <Motion.button
                        onClick={() => scrollToSection("skills")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full transition-colors
                            ${isDarkMode
                                ? "bg-gray-800 text-gray-300 hover:bg-purple-600"
                                : "bg-gray-200 text-gray-600 hover:bg-purple-500 hover:text-white"
                            }
                        `}
                        aria-label="Scroll to next section"
                    >
                        <Motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ArrowDown size={24} />
                        </Motion.div>
                    </Motion.button>
                </Motion.div>
            </div>
        </Motion.section>
    );
};

export default HeroSection;
