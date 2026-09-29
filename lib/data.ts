export const socials = {
  github: "https://github.com/devananya18",
  linkedin: "https://www.linkedin.com/in/ananya-gupta-581b7b2bb",
  email: "ananyagupta18032005@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  emoji: string;
  demoUrl: string;
  detailsUrl: string;
}

export const projects: Project[] = [
  {
    id: "hms",
    title: "Hotel Management System",
    description:
      "A complete system for managing hotel operations — bookings, inventory, housekeeping and billing, built for real front-desk workflows.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    gradient: "from-rose-400 via-peach-300 to-gold-300",
    emoji: "🏨",
    demoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: "crm",
    title: "CRM Follow-up System",
    description:
      "A system to manage leads, track follow-ups and improve customer engagement with role-based access for every team member.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    gradient: "from-lavender-300 via-rose-300 to-lavender-100",
    emoji: "📇",
    demoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: "multivendor-shop",
    title: "Multi-Vendor E-commerce System",
    description:
      "A mini-Amazon with three roles: vendors add products, users shop with cart, wishlist, coupons and order tracking, and admins approve vendors and products.",
    tech: ["Python", "Flask", "SQLite", "Jinja2", "HTML/CSS"],
    gradient: "from-peach-300 via-gold-300 to-rose-400",
    emoji: "🛒",
    demoUrl: "http://127.0.0.1:5000",
    detailsUrl: "https://github.com/devananya18/multivendor-shop",
  },
];

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
  icon: "frontend" | "backend" | "database" | "tools";
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React.js",
      "Next.js",
    ],
    icon: "frontend",
  },
  {
    id: "backend",
    title: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Nest.js"],
    icon: "backend",
  },
  {
    id: "database",
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
    icon: "database",
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "VS Code", "Postman", "Docker"],
    icon: "tools",
  },
];

export interface JourneyItem {
  id: string;
  title: string;
  period: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    id: "mca",
    title: "MCA",
    period: "2026 — 2028",
    description:
      "Currently pursuing — deepening full-stack and systems-design fundamentals.",
  },
  {
    id: "bca",
    title: "BCA",
    period: "2023 — 2026",
    description:
      "Completed — built a foundation in programming, databases and web development.",
  },
  {
    id: "school",
    title: "Schooling (12th & 10th)",
    period: "Up to 2023",
    description:
      "Completed schooling — where my interest in computers and problem solving began.",
  },
];
