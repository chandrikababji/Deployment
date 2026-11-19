/* =========================================================
   ALL YOUR PORTFOLIO CONTENT LIVES HERE.
   To update your site, edit only this file. The page
   rebuilds itself from it.
   ========================================================= */

window.PORTFOLIO = {
  name: "Saichandrika Kanaparthi",
  firstName: "Saichandrika",
  title: "Full Stack AI Developer",
  currentRole: "Associate Software Engineer",
  currentCompany: "Meghawisdom Enterprises",
  tagline: "Building AI powered products", // line shown under your name at the top
  location: "Hyderabad, India",

  // Words that type out in the hero: "I build ..."
  typing: [
    "AI assistants for FinOps apps",
    "fast APIs with FastAPI",
    "AI chatbots for documents & images",
    "full stack Django & Flask apps",
    "machine learning models",
  ],

  intro:
    "Associate Software Engineer who builds full stack applications with an AI core: Python backends, clean REST APIs, SQL databases and AI powered features that turn data into useful products.",

  about: [
    "I'm a Full Stack AI Developer who enjoys turning ideas into reliable, intelligent software. As an Associate Software Engineer at Meghawisdom Enterprises, I work on a FinOps platform where I build AI Assistant features, design REST APIs and keep business critical modules running smoothly.",
    "My core strength is Python backend development with FastAPI, Django and Flask, backed by MySQL and PostgreSQL. On the AI side I work with LLMs, LangChain, RAG pipelines and Hugging Face models, and on the frontend I build clean, responsive interfaces with React and JavaScript.",
    "I hold a B.Tech in Computer Science and Engineering with a CGPA of 8.66. I enjoy solving real problems end to end, from database design to the final user experience, and I'm always learning the next tool that helps me ship better products.",
  ],

  resume:
    "https://drive.google.com/file/d/1OKkkmplUC2D_Sd26B1ujDscSE3lEFUuP/view?usp=sharing",

  contact: {
    email: "kanaparthisaichandrika@gmail.com",
    linkedin: "https://www.linkedin.com/in/saichandrika-kanaparthi-110a2020b",
    github: "https://github.com/chandrikababji",
  },

  experience: [
    {
      role: "Associate Software Engineer",
      company: "Meghawisdom Enterprises Pvt. Ltd.",
      period: "May 2026 to Present",
      mode: "Onsite · Hyderabad",
      current: true,
      points: [
        "Working as an AI Developer on a FinOps application, contributing to AI powered features and application development.",
        "Developing, debugging and optimising modules using Python, FastAPI, SQL, REST APIs and Git.",
        "Enhancing the AI Assistant and fixing bugs across Budget Planning, Contracts, SOWs and Timesheet Reports.",
        "Implementing data validations, API integrations, troubleshooting and improvements based on business requirements.",
        "Collaborating with cross functional teams in an Agile environment to analyse issues, test solutions and deliver enhancements.",
      ],
      tags: ["Python", "FastAPI", "SQL", "REST APIs", "AI Assistant", "FinOps", "Git"],
    },
    {
      role: "Software Engineer Intern",
      company: "FalconX Electro Technologies",
      period: "Nov 2024 to Dec 2024",
      mode: "Onsite · Hyderabad",
      points: [
        "Built and maintained web applications using Django, with responsive frontend interfaces in HTML, CSS and JavaScript.",
        "Collaborated on API integration, debugging and performance optimisation to ensure smooth functionality.",
      ],
      tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "REST APIs"],
    },
    {
      role: "AI & Cloud Intern",
      company: "IBM SkillsBuild",
      period: "Feb 2024 to Mar 2024",
      mode: "Remote",
      points: [
        "Worked hands on with IBM Watson and IBM Cloud.",
        "Supported a team using IBM software in project planning and execution.",
        "Contributed to a project using IBM data analysis tools to improve market insights.",
      ],
      tags: ["IBM Watson", "IBM Cloud", "Data Analysis"],
    },
    {
      role: "Data Science & ML Intern",
      company: "YBI Foundation",
      period: "Jun 2023 to Jul 2023",
      mode: "Remote",
      points: [
        "Built and fine tuned an ML model that predicts crop yields from collected data as a decision making tool for farmers.",
        "Applied theoretical ML knowledge to real world datasets.",
      ],
      tags: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      role: "Salesforce Developer Intern",
      company: "APSCHE",
      period: "Aug 2022 to Oct 2022",
      mode: "Remote",
      points: [
        "Built real world projects with Apex and Lightning Web Components.",
        "Worked with mentors and peers on Salesforce development assignments.",
      ],
      tags: ["Salesforce", "Apex", "LWC"],
    },
  ],

  skills: [
    {
      group: "AI & LLMs",
      icon: "brain",
      items: ["LangChain", "LLMs", "RAG", "Generative AI", "Prompt Engineering", "Vector Databases", "AI Agents", "Hugging Face", "OpenAI / Claude APIs", "OCR (Tesseract, OpenCV)"],
    },
    {
      group: "Backend",
      icon: "server",
      items: ["Python", "FastAPI", "Django", "Flask", "Node.js (basics)", "REST APIs", "Pydantic", "JSON", "OOP"],
    },
    {
      group: "Data & ML",
      icon: "chart",
      items: ["Machine Learning", "NLP", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      group: "Databases",
      icon: "db",
      items: ["MySQL", "PostgreSQL", "SQL", "SQLite"],
    },
    {
      group: "Frontend",
      icon: "code",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      group: "Tools & Cloud",
      icon: "tool",
      items: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "MySQL Workbench", "Microsoft Azure", "IBM Cloud", "Salesforce"],
    },
  ],

  projects: [
    {
      title: "RAG Chatbot for Document Q&A",
      image: "img/rag-chatbot.jpg",
      description: "Ask questions about any PDF. Text is chunked, embedded and searched with FAISS, then an LLM writes the answer. OCR support reads text from images too.",
      tags: ["LangChain", "OpenAI", "FAISS", "Streamlit"],
      github: "https://github.com/chandrikababji/RAG-Chatbot",
      demo: "",
    },
    {
      title: "AI Interview Question Generator",
      image: "img/interview.jpg",
      description: "Enter a job role and get technical interview questions generated by Google's FLAN-T5 model through a Flask web app.",
      tags: ["Flask", "Hugging Face", "FLAN-T5"],
      github: "https://github.com/chandrikababji/Ai-Interview-Question-Generator",
      demo: "",
    },
    {
      title: "GuideSphere Learning Platform",
      image: "img/guidesphere.jpg",
      description: "A learning platform with secure sign up and login, powered by a FastAPI backend with SQLAlchemy and MySQL.",
      tags: ["FastAPI", "SQLAlchemy", "MySQL", "JavaScript"],
      github: "https://github.com/chandrikababji/GuideWeb",
      demo: "https://guidesphere.vercel.app",
    },
    {
      title: "E-commerce Web App",
      image: "img/ecommerce.jpg",
      description: "Online store with user and admin panels, cart, orders, reviews, invoices and OTP email verification.",
      tags: ["Flask", "MySQL", "Jinja"],
      github: "https://github.com/chandrikababji/ecommerce-flask-app",
      demo: "",
    },
    {
      title: "Notes Management App",
      image: "img/notes.jpg",
      description: "Secure notes app with OTP sign up, file uploads and Excel export, all stored in MySQL.",
      tags: ["Flask", "MySQL", "OTP Email"],
      github: "https://github.com/chandrikababji/NotesManagementApp-Flask",
      demo: "",
    },
    {
      title: "Crop Recommendation System",
      image: "img/crop.jpg",
      description: "Recommends the best crop from soil and weather data. Random Forest gave the best result with 95% accuracy.",
      tags: ["Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/chandrikababji/Crop-Recommendation-System-using-machine-learning",
      demo: "",
    },
    {
      title: "Gesture Cursor Control",
      image: "img/gesture.jpg",
      description: "Control your mouse with hand movements through a webcam. Pinch your fingers to click.",
      tags: ["OpenCV", "MediaPipe", "PyAutoGUI"],
      github: "https://github.com/chandrikababji/Gesture-Cursor-Control",
      demo: "",
    },
    {
      title: "Restaurant Management System",
      image: "img/restaurant.jpg",
      description: "Menu, ordering and automated billing system that calculates totals for every order.",
      tags: ["Python", "MySQL"],
      github: "https://github.com/chandrikababji/Restaurant-Management-System",
      demo: "",
    },
    {
      title: "Heal Hospital Management",
      image: "img/hospital.jpg",
      description: "Hospital portal with patient sign up, doctor profiles, appointment booking and contact pages in a clean responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/chandrikababji/HosipitalManagementSystem-Heal",
      demo: "https://hosipital-management-system-heal.vercel.app",
    },
    {
      title: "ATM Banking App",
      image: "img/atm.jpg",
      description: "Online ATM simulation where users register, log in, deposit, withdraw, check balance and view statements.",
      tags: ["Python", "Flask", "HTML", "CSS"],
      github: "https://github.com/chandrikababji/ATM-Project-Flask",
      demo: "https://atmprojectbychandu.vercel.app",
    },
    {
      title: "Tastly Homemade Food",
      image: "img/tastly.jpg",
      description: "A modern landing page for a homemade food brand with menu, story and order sections, fully responsive.",
      tags: ["HTML", "CSS", "Responsive"],
      github: "https://github.com/chandrikababji/Tastly.in",
      demo: "https://tastly-in.vercel.app",
    },
    {
      title: "Weather App",
      image: "img/weather.jpg",
      description: "Search any city and see live weather details fetched from a weather API.",
      tags: ["JavaScript", "REST API", "CSS"],
      github: "https://github.com/chandrikababji/Weather-App",
      demo: "https://weatherappbychandrika.vercel.app",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Sri Sarathi Institute of Engineering and Technology, Nuzvid",
      period: "May 2020 to May 2024",
      score: "8.66",
      scoreLabel: "CGPA",
    },
    {
      degree: "Intermediate (Board of Intermediate Education, AP)",
      school: "Vijaya Kranthi Junior College, Challapalli",
      period: "Jun 2018 to Apr 2020",
      score: "9.94",
      scoreLabel: "CGPA",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "ZPHS Challapalli",
      period: "Jun 2017 to Apr 2018",
      score: "9.8",
      scoreLabel: "CGPA",
    },
  ],

  certifications: [
    { title: "Salesforce Platform Developer", issuer: "Salesforce" },
    { title: "Generative AI", issuer: "Microsoft" },
    { title: "Python, SQL & Advanced Problem Solving", issuer: "HackerRank" },
  ],

  achievements: [
    { title: "APTA Scholarship Winner (2020 to 2024)", text: "American Progressive Telugu Association scholarship for academic excellence and leadership potential." },
    { title: "State Level Throwball Player, AP (2018 to 2020)", text: "Played in state level competitions, building teamwork, discipline and consistency." },
  ],
};
