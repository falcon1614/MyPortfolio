// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router";
// import "./index.css";

// // Component
// import Header from "./Components/Header";

// // Page
// import Home from "./Pages/Home";
// import Coding from "./Pages/Coding";
// import Project from "./Pages/Project";
// import Skills from "./Pages/Skills";
// import Service from "./Pages/Service";
// import Contact from "./Pages/Contact";


// const App = ()=>{
//   return(
//     <main>
//        <BrowserRouter>
//         <div className="flex flex-col h-screen">
//           <Header />
//           <div className="flex flex-1">
//             {/* <Sidebar /> */}
//             <main className="flex-1 overflow-y-scroll p-4 bg-gradient-to-r from-[#0097b2] to-[#7ed957]">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//               </Routes>
//             </main>
//           </div>
//         </div>
//       </BrowserRouter>
//     </main>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

// Components
import Header from "./Components/Header";

// Pages
import Home from "./Pages/Home";
import Coding from "./Pages/Coding";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const App = () => {
  return (
    <main className="font-sans">
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          {/* Header Section */}
          <Header />

          {/* Main Content */}
          <div className="flex flex-1">
            <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-[#0097b2] to-[#7ed957]">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <motion.div
                        key="home"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Home />
                      </motion.div>
                    }
                  />
                  <Route
                    path="/coding"
                    element={
                      <motion.div
                        key="coding"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Coding />
                      </motion.div>
                    }
                  />
                  <Route
                    path="/project"
                    element={
                      <motion.div
                        key="project"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Project />
                      </motion.div>
                    }
                  />
                  <Route
                    path="/skills"
                    element={
                      <motion.div
                        key="skills"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Skills />
                      </motion.div>
                    }
                  />
                  <Route
                    path="/service"
                    element={
                      <motion.div
                        key="service"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Service />
                      </motion.div>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <motion.div
                        key="contact"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                      >
                        <Contact />
                      </motion.div>
                    }
                  />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
