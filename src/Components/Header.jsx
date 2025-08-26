// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="navbar bg-gradient-to-r from-cyan-700 to-emerald-600 text-white shadow-lg">
//       {/* Left (hamburger + brand) */}
//       <div className="navbar-start">
//         {/* Mobile Menu */}
//         <div className="dropdown">
//           <button
//             tabIndex={0}
//             className="btn btn-ghost lg:hidden"
//             aria-label="Open menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 animate-pulse"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white text-gray-800 rounded-lg w-56 animate-fade-in"
//           >
//             {navLinks()}
//           </ul>
//         </div>

//         {/* Brand */}
//         <Link
//           to="/"
//           className="btn btn-ghost normal-case text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300"
//         >
//           <span className="text-yellow-300">My</span>Site
//         </Link>
//       </div>

//       {/* Center (desktop nav) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-2">
//           {navLinks()}
//         </ul>
//       </div>
//     </header>
//   );
// }

// // reusable nav links
// const navLinks = () => (
//   <>
//     <li>
//       <Link
//         to="/coding"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         Coding
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/about"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         About
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/projects"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         Projects
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/services"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         Services
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/contact"
//         className="hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-300 rounded px-2 py-1"
//       >
//         Contact
//       </Link>
//     </li>
//   </>
// );
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100/50'
        : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left - Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className={`group flex items-center space-x-3 text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-xl rotate-12 group-hover:rotate-180 transition-transform duration-700 shadow-lg"></div>
                <div className="absolute inset-1 w-8 h-8 bg-gradient-to-tl from-pink-400 via-purple-500 to-indigo-500 rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-r from-white/20 to-transparent group-hover:from-white/40"></div>
              </div>
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                MySite
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </button>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group hover:scale-105 ${
                  activeLink === item.id
                    ? isScrolled
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                      : 'text-purple-900 bg-yellow-300 shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
                    : 'text-white/90 hover:text-purple-900 hover:bg-yellow-300/90'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </span>

                {/* Active indicator */}
                {activeLink === item.id && (
                  <div className="absolute -bottom-1 left-1/2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            ))}
          </nav>

          {/* Right - CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`hidden sm:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl group ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                  : 'bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 shadow-lg'
              }`}
            >
              <span className="mr-2">Get Started</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 relative ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>

                {/* Notification dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-bounce"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] group ${
                  activeLink === item.id
                    ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-md'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideIn 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="font-semibold text-lg">{item.name}</span>
                {activeLink === item.id && (
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] font-bold shadow-lg"
              >
                <span>🚀</span>
                <span>Get Started Today</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

// Navigation items with modern icons
const navItems = [
  { id: 'home', name: 'Home', icon: '🏡' },
  { id: 'about', name: 'About', icon: '✨' },
  { id: 'projects', name: 'Projects', icon: '🚀' },
  { id: 'coding', name: 'Coding', icon: '⚡' },
  { id: 'services', name: 'Services', icon: '🎯' },
  { id: 'contact', name: 'Contact', icon: '💬' },
];
