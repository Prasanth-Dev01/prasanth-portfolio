export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  demo: boolean;
};

// Illustrative concepts only. Replace these with verified portfolio work before presenting them as your own.
export const projects: Project[] = [
  {
    title: 'Modern E-commerce Store',
    category: 'E-commerce',
    description: 'A considered storefront concept with product discovery and a clean checkout path.',
    stack: ['React','Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/wheels.png',
    liveUrl: '',
    repoUrl: '',
    demo: true,
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Dashboard',
    description: 'A data-rich dashboard concept with at-a-glance metrics and reporting views.',
    stack: ['React', 'Next.js', 'TypeScript', 'Charts'],
    image: '/projects/sen-dashboard.png',
    liveUrl: '',
    repoUrl: '',
    demo: true,
  },
  {
    title: 'Travel & Resort Website',
    category: 'Website',
    description: 'An editorial resort landing page concept centered around destination imagery and booking.',
    stack: ['Next.js', 'Tailwind CSS', 'GSAP'],
    image: '/projects/avani.png',
    liveUrl: 'https://avanivillasandresorts.com',
    repoUrl: '',
    demo: false,
  },
  {
    title: 'File Transfer Platform',
    category: 'Web Application',
    description: 'A lightweight transfer interface concept with upload states and progress feedback.',
    stack: ['Next.js', 'TypeScript', 'Fast APIs','RAG','ChromaDB','Ollama'],
    image: '/projects/rag.jpg',
    liveUrl: '',
    repoUrl: '',
    demo: true,
  },
  {
    title: 'Institute Website',
    category: 'Website',
    description: 'A student-focused education homepage concept with courses and clear pathways.',
    stack: ['Next.js', 'Responsive UI', 'SEO'],
    image: '/projects/bite.png',
    liveUrl: 'https://bite.org.in',
    repoUrl: '',
    demo: false,
  },
  {
    title: 'Booking Management Dashboard',
    category: 'Web Application',
    description: 'A bookings workspace concept with filtering, schedule views, and status cues.',
    stack: ['React', 'TypeScript', 'API integration'],
    image: '/projects/sen-website.png',
    liveUrl: 'https://zinavodemo.com/sentransfers',
    repoUrl: '',
    demo: false,
  },
];
