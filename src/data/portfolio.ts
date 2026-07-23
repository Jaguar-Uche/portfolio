export const skills = [
  { name: "React", level: "Experienced", category: "Frontend" },
  { name: "TypeScript", level: "Comfortable", category: "Language" },
  { name: "Node.js", level: "Experienced", category: "Backend" },
  { name: "Python", level: "Comfortable", category: "Language" },
  { name: "MongoDB", level: "Experienced", category: "Database" },
  { name: "PHP", level: "Learning", category: "Language" },
  { name: "CanvasAPI", level: "Experienced", category: "API" },
  { name: "MySQL", level: "Learning", category: "Database" },
  { name: "C++", level: "Comfortable", category: "Language" },
  { name: "Java", level: "Comfortable", category: "Language" },
  { name: "Cybersecurity", level: "Learning", category: "Security" },
  { name: "Socket Programming", level: "Learning", category: "Backend" },
  { name: "Multithreading", level: "Learning", category: "Backend" },
  { name: "HTML/CSS", level: "Experienced", category: "Frontend" },
];

export const projects = [
  {
    title: "Python Vulnerability Scanner",
    description:
      "A web-based network scanning tool built with Python, sockets, and multithreading. Safely audits the first 100 ports of scanme.nmap.org and presents discovered services and potential vulnerabilities through an intuitive dashboard.",
    image: "/vuln_scanner.jpg",
    technologies: ["Python", "Sockets", "Threading", "Flask", "HTML/CSS"],
    liveUrl: "https://pythonvulnerabilityscanner.onrender.com/",
    githubUrl: "https://github.com/Jaguar-Uche/pythonvulnerabilityscanner",
  },
  {
    title: "Messaging App",
    description:
      "A real-time messaging platform built with Socket.IO, allowing users to exchange messages instantly, share images, and communicate seamlessly across different locations through a modern chat interface.",
    image: "/chatapp.jpg",
    technologies: ["Socket.io", "Cloudinary", "Express", "Node.js", "React"],
    liveUrl: "https://chatapp-two-ten.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/chatapp",
  },
  {
    title: "AI Chat Application",
    description:
      "A modern AI chat interface powered by OpenAI's GPT models. Users can send messages and images, receive AI-generated responses, and enjoy a clean, responsive user experience with secure authentication.",
    image: "/robott.jpg",
    technologies: ["React", "TypeScript", "JWT", "OpenAI", "MongoDB"],
    liveUrl: "https://chatbot-two-steel-64.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/chatbot",
  },
  {
    title: "Book Store",
    description:
      "A full-stack bookstore management application that allows users to create, view, edit, and delete book records. Includes detailed book information such as title, author, and description, with support for both table and card-based views.",
    image: "/book_site.jpg",
    technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express"],
    liveUrl: "https://bookstore-frontend-six-beta.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/bookstore",
  },
  {
    title: "Online Store",
    description:
      "A community-driven marketplace application where users can create, view, update, and delete product listings. Features image uploads, pricing information, and a responsive interface for managing items.",
    image: "/online_store.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    liveUrl: "https://mern-crash-course-uxot.onrender.com/",
    githubUrl: "https://github.com/Jaguar-Uche/mern-crash-course",
  },
  {
    title: "Movie List",
    description:
      "A movie discovery application that integrates with The Movie Database API to display trending films, search for specific titles, and save favorite movies for quick access later.",
    image: "/movie_site.jpg",
    technologies: ["React", "Node.js", "Express", "TMDB API", "JavaScript"],
    liveUrl: "https://movie-site-one-vert.vercel.app/",
    // githubUrl: "https://github.com/Jaguar-Uche/movieSite"
  },
];

export const games = [
  {
    title: "Snake Game",
    description:
      "Help the Snake reach its food. Use the arrow keys for direction. Watch the magic when the snake feeds",
    image: "/Snake_image.jpg",
    technologies: ["Html", "JavaScript", "CSS", "CanvasAPI"],
    liveUrl: "https://snake-game-chi-jet.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/snakeGame",
  },
  {
    title: "Memory Game",
    description:
      "Check who has a better memory, you(X) or your friend(Y).No problem if u have no friends, u can play alone...Tap a card to reveal what's underneath.",
    image: "/card_image.jpg",
    technologies: ["Html", "JavaScript", "CSS", "CanvasAPI"],
    liveUrl: "https://memory-game-kohl-three.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/memoryGame",
  },
  {
    title: "Ping Pong",
    description:
      "Play ping pong with your friend or your left hand. Arrow keys for you and W and S for your friend or other hand😭😭😭",
    image: "/ping_pong.jpg",
    technologies: ["Html", "JavaScript", "CSS", "CanvasAPI"],
    liveUrl: "https://ping-pong-vert.vercel.app/",
    githubUrl: "https://github.com/Jaguar-Uche/pingPong",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "GIIT",
    location: "Abia State, Nigeria",
    period: "2026 - Present",
    description: [
      "Build and develop full-stack web applications using modern frontend and backend technologies.",
      "Create responsive, user-focused interfaces and integrate them with backend services and APIs.",
      "Work with databases and server-side technologies to develop functional and scalable applications.",
      "Teach and mentor aspiring developers through practical, project-based full-stack web development.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
  },
];
