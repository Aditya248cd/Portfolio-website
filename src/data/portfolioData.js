export const personalData = {
  name: "Aditya Bhagwat",
  title: "Software Developer",
  taglines: [
    "Software Developer",
    "MERN Stack Developer",
    "AI Enthusiast",
    "Backend Developer"
  ],
  bio: "I am an Information Science Engineering student at RV Institute of Technology and Management passionate about Full Stack Development, Artificial Intelligence, and building scalable software solutions. I enjoy solving real-world problems through clean code and modern technologies while continuously learning new tools and frameworks.",
  education: {
    institution: "RV Institute of Technology and Management (RVITM)",
    degree: "Bachelor of Engineering in Information Science & Engineering",
    cgpa: "8.7 / 10",
    period: "2023 – 2027",
    location: "Bengaluru, India"
  },
  contact: {
    email: "bhagwataditya2489@gmail.com",
    phone: "+91 8762200072",
    location: "Bengaluru, India",
    linkedin: "https://linkedin.com/in/aditya-bhagwat",
    github: "https://github.com/Aditya248cd"
  },
  traits: [
    {
      title: "Problem Solver",
      description: "Analytical mindset focused on breaking down complex challenges into efficient algorithmic solutions.",
      icon: "Brain"
    },
    {
      title: "Quick Learner",
      description: "Rapidly adapts to new technology stacks, AI models, frameworks, and developer toolchains.",
      icon: "Zap"
    },
    {
      title: "Team Player",
      description: "Collaborative engineer accustomed to modern git workflows, peer code reviews, and Agile teamwork.",
      icon: "Users"
    },
    {
      title: "Software Developer",
      description: "Crafting end-to-end full stack web applications with security, scalability, and robust user experience.",
      icon: "Code2"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: 90, badge: "Advanced" },
      { name: "Java", level: 82, badge: "Proficient" },
      { name: "JavaScript", level: 88, badge: "Advanced" },
      { name: "C", level: 78, badge: "Intermediate" },
      { name: "SQL", level: 85, badge: "Proficient" }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: 90, badge: "Advanced" },
      { name: "HTML", level: 95, badge: "Expert" },
      { name: "CSS", level: 92, badge: "Advanced" },
      { name: "Tailwind CSS", level: 90, badge: "Advanced" }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 86, badge: "Advanced" },
      { name: "Express.js", level: 88, badge: "Advanced" },
      { name: "Flask", level: 82, badge: "Proficient" },
      { name: "REST APIs", level: 92, badge: "Advanced" }
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 88, badge: "Advanced" },
      { name: "MySQL", level: 84, badge: "Proficient" },
      { name: "PostgreSQL", level: 80, badge: "Proficient" }
    ]
  },
  {
    category: "AI / ML",
    icon: "Sparkles",
    skills: [
      { name: "Google Gemini API", level: 90, badge: "Advanced" },
      { name: "MediaPipe", level: 85, badge: "Proficient" },
      { name: "OpenCV", level: 82, badge: "Proficient" },
      { name: "Scikit-learn", level: 80, badge: "Proficient" },
      { name: "Computer Vision", level: 84, badge: "Proficient" }
    ]
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 90, badge: "Advanced" },
      { name: "GitHub", level: 92, badge: "Advanced" },
      { name: "Docker", level: 76, badge: "Intermediate" },
      { name: "VS Code", level: 95, badge: "Expert" },
      { name: "Linux", level: 82, badge: "Proficient" },
      { name: "Postman", level: 88, badge: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle: "MERN Stack, JWT & Google Gemini API Integration",
    description: "Developed a full-stack AI-powered Resume Analyzer using the MERN stack integrated with Google Gemini API for ATS-based resume analysis, skill extraction, resume scoring, and personalized improvement suggestions.",
    longDescription: "The AI Resume Analyzer provides job seekers with instant, actionable feedback on their resumes by matching candidate profiles against ATS scoring algorithms. Powered by Google Gemini API, it parses complex PDF and DOCX documents to discover key competencies, missing critical keywords, formatting flaws, and role alignment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    github: "https://github.com/Aditya248cd/Resume-Analyzer",
    demo: "https://github.com/Aditya248cd/Resume-Analyzer",
    image: "resume-analyzer",
    features: [
      "Integrated Google Gemini API to generate ATS-inspired scores and personalized resume improvement suggestions.",
      "Implemented PDF/DOCX resume upload, automated skill extraction, and missing skill detection.",
      "Maintained user resume evaluation history and score progression powered by MongoDB.",
      "Designed secure RESTful APIs for user authentication (JWT) and AI response handling."
    ],
    architecture: "React Frontend SPA -> Express REST Gateway -> Gemini AI Parser & Scoring Engine -> MongoDB Persisted Audit Trail"
  },
  {
    id: "sign-language-translator",
    title: "Sign Language Translator",
    subtitle: "Real-time Computer Vision & ML Audio Synthesis",
    description: "Developed a real-time Sign Language Translator using MediaPipe hand landmarks and HistGradientBoostingClassifier with Flask for real-time sign recognition and text-to-speech conversion.",
    longDescription: "Designed to bridge communication gaps for the hearing and speech impaired, this system captures webcam frames, extracts 21 3D hand landmarks via MediaPipe, and classifies gesture patterns using a high-precision ML classifier. Output text is automatically synthesized into spoken audio.",
    tech: ["Python", "Flask", "MediaPipe", "OpenCV", "Scikit-learn"],
    github: "https://github.com/Aditya248cd/Sign-Language-Translator",
    demo: "https://github.com/Aditya248cd/Sign-Language-Translator",
    image: "sign-language",
    features: [
      "Trained model on ~4,500 images covering 15 predefined sign classes with 98–99% classification accuracy.",
      "Implemented sign-to-text translation with text-to-speech audio playback for improved accessibility.",
      "Built a high-performance Flask web backend supporting real-time webcam video stream predictions.",
      "Rendered visual confidence score overlays directly on video frames."
    ],
    architecture: "Webcam Stream -> OpenCV Capture -> MediaPipe 21-Landmark Vectorization -> HistGradientBoostingClassifier -> Web Audio Synthesizer"
  },
  {
    id: "finance-tracker",
    title: "Smart Finance Tracker",
    subtitle: "MERN / Next.js Full Stack Financial Platform",
    description: "Developed a MERN-based Finance Tracker for managing income and expenses with authentication, interactive dashboard, automated receipt scanning via Gemini Vision API, and transaction management.",
    longDescription: "An end-to-end personal financial management suite built for security, high throughput, and effortless expense auditing. Includes background transaction scheduling, custom category budgets, receipt OCR via AI, and robust endpoint protection.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Prisma", "Gemini Vision", "Clerk", "Arcjet"],
    github: "https://github.com/Aditya248cd/Smart-Finance-Tracker",
    demo: "https://github.com/Aditya248cd/Smart-Finance-Tracker",
    image: "finance-tracker",
    features: [
      "Multi-account balance tracking and real-time transaction categorizing.",
      "Event-driven background pipeline (Inngest) automating recurring transactions, weekly cron digests, and budget alert emails via Resend.",
      "Google Gemini Vision API integration for AI automated receipt extraction (merchant, total, date) from image uploads.",
      "Protected endpoints with Clerk authentication and Arcjet token-bucket rate limiting against DDoS attacks."
    ],
    architecture: "Next.js/React Interface -> Clerk Security Context -> Arcjet Middleware -> Inngest Event Queue / Gemini Vision -> Database Storage"
  }
];

export const certificationsData = [
  {
    title: "Cyber Security Workshop",
    type: "International Level Student Workshop",
    year: "2024",
    issuer: "RV Institute of Technology and Management & Industry Partners",
    description: "Hands-on training covering network security fundamentals, vulnerability assessment, ethical hacking concepts, web application penetration testing, and security hardening."
  }
];

export const courseworkData = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "AI & Machine Learning"
];
