// ✏️ Edit everything about your portfolio here.
export const profile = {
  name: 'Jayant Kumar',
  role: 'Software Engineer',
  headline: 'I build fast backends and low-latency systems.',
  about: [
    'Computer Science graduate from SLIET, Punjab, based in Ghaziabad. I work across backend services, data pipelines and C++ systems, from REST APIs and microservices to trading engines where microseconds matter.',
    'I like problems with hard constraints: sandboxed code execution, lock-free queues, market-data ingestion. Outside projects, I solve algorithmic problems and reached a Global Rank of 3781 in TCS CodeVita Season 13.',
  ],
  photo: '/jayant.png',
  email: 'jayantkumar1614@gmail.com',
  location: 'Ghaziabad, India',
  resume: '#', // put your resume PDF in /public and use '/resume.pdf'
  stats: [['500+', 'problems solved'], ['3781', 'CodeVita S13 rank'], ['S', 'NIELIT top grade']],
}

export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/falcon1614' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/jayantdeveloper' },
  { name: 'YouTube', icon: 'youtube', url: '#' }, // TODO: add channel URL
  { name: 'Twitter', icon: 'twitter', url: '#' }, // TODO: add profile URL
]

export const skills = [
  { title: 'Frontend', items: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'D3.js'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT', 'Microservices'] },
  { title: 'Databases', items: ['PostgreSQL', 'pgvector', 'MongoDB', 'Redis', 'Kafka'] },
  { title: 'DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Git', 'AWS EC2/S3', 'Vercel'] },
  { title: 'Python', items: ['FastAPI', 'asyncio', 'NumPy', 'Pandas', 'Matplotlib', 'pybind11'] },
  { title: 'Machine Learning', items: ['Scikit-Learn', 'Random Forest', 'GridSearchCV', 'Cross-validation', 'Feature scaling'] },
  { title: 'Deep Learning', items: ['Neural networks', 'PyTorch', 'TensorFlow'] }, // keep only what you know well
  { title: 'LLM & GenAI', items: ['Gemini API', 'RAG', 'Embeddings', 'Semantic search', 'Prompt design'] },
  { title: 'Software Engineering', items: ['C++', 'DSA', 'System design', 'OOP', 'Operating systems', 'Computer networks', 'Lock-free queues', 'CMake'] },
]

export const coding = {
  total: '500+',
  note: 'Across Codeforces, LeetCode, CSES, CodeChef, GeeksforGeeks and Project Euler',
  // solved: fill in your real numbers per platform
  platforms: [
    { name: 'Codeforces', handle: 'falcon1614', url: 'https://codeforces.com/profile/falcon1614', solved: '' },
    { name: 'LeetCode', handle: 'falcon1614', url: 'https://leetcode.com/u/falcon1614', solved: '' },
    { name: 'GeeksforGeeks', handle: 'falcon1614', url: 'https://www.geeksforgeeks.org/user/falcon1614', solved: '' },
    { name: 'CodeChef', handle: 'falcon1614', url: 'https://www.codechef.com/users/falcon1614', solved: '' },
    { name: 'CSES', handle: 'falcon1614', url: 'https://cses.fi/', solved: '' },
    { name: 'Kaggle', handle: 'falcon1614', url: 'https://www.kaggle.com/falcon1614', solved: '' },
  ],
}

// Update the github/live URLs to your real repositories
export const projects = [
  { title: 'AI Career Copilot', tags: ['FastAPI', 'Node.js', 'PostgreSQL', 'pgvector', 'Redis', 'Docker'],
    desc: 'Microservice platform for resume parsing, ATS scoring and Gemini-powered feedback, with a sandboxed multi-language code judge.',
    more: ['Semantic search over resume and job embeddings with pgvector', 'Redis caching cut average response time by 40%', 'Docker Compose cut setup time by 70%'],
    github: 'https://github.com/falcon1614', live: 'https://falcon1614.vercel.app' },
  { title: 'Algorithmic Trading Engine', tags: ['C++', 'pybind11', 'Alpaca API'],
    desc: 'C++ trading engine exposed to Python through pybind11, connected to the Alpaca API.',
    more: ['Performance-critical paths in C++', 'Python bindings for strategy research'],
    github: 'https://github.com/falcon1614', live: '' },
  { title: 'NetForge', tags: ['C++', 'TCP/IP', 'UDP', 'CMake'],
    desc: 'Low-latency networking engine built on Linux POSIX sockets.',
    more: ['TCP client/server and UDP sender/receiver', 'Modular design with a benchmarking component for latency measurement'],
    github: 'https://github.com/falcon1614', live: '' },
  { title: 'Crop Recommendation System', tags: ['Python', 'Scikit-Learn', 'FastAPI'],
    desc: 'ML system recommending crops from soil and climate data. Built as a B.E. major project.',
    more: ['Compared 10 classifiers; Random Forest reached 96% accuracy', 'FastAPI inference endpoint responding in under 200ms'],
    github: 'https://github.com/falcon1614', live: '' },
  { title: 'DSA Visualizer', tags: ['React', 'D3.js', 'Web Workers'],
    desc: 'Interactive tool that animates sorting and graph algorithms step by step.',
    more: ['Web Workers moved computation off the main thread', 'Rendering performance improved by 40%'],
    github: 'https://github.com/falcon1614', live: 'https://falcon1614.vercel.app' },
  { title: 'Fundmetis', tags: ['React', 'Python', 'Finance'],
    desc: 'Financial analysis platform with a Bloomberg / Capital IQ style stock screener.',
    more: ['Screening and analysis of listed companies'],
    github: 'https://github.com/falcon1614', live: '' },
]

export const experience = [
  { role: 'Full Stack Web Development Intern', org: 'NIELIT, Ministry of Electronics & IT, Govt. of India', when: 'Jun 2025 · 4 weeks',
    points: ['Built and tested REST APIs and full-stack features with Express.js and MongoDB.', 'Optimised database queries, reducing API latency by 35% on a high-volume endpoint.', 'Worked in Git-based team workflows and built responsive UI.', 'Awarded Top Grade (S), the programme’s highest rating.'] },
]
export const education = { school: 'Sant Longowal Institute of Engineering and Technology (SLIET)', degree: 'B.E. Computer Science & Engineering', when: '2022 – 2026', detail: 'Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP' }

export const achievements = [
  { title: 'TCS CodeVita Season 13', text: 'Global Rank 3781' },
  { title: '500+ problems solved', text: 'Codeforces, LeetCode, CSES, CodeChef, GfG, Project Euler' },
  { title: 'NIELIT Top Grade (S)', text: 'Highest rating in the industrial training programme, June 2025' },
  { title: 'Quantum Computing', text: 'Certification, IIT Roorkee, May 2025' },
  { title: 'Linux Mastery & Git/GitHub', text: 'Certification, WsCube Tech, 2023' },
]
