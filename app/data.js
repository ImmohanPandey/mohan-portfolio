export const navItems = [
  { label: "About", href: "#about", key: "01" },
  { label: "Work", href: "#projects", key: "02" },
  { label: "Journey", href: "#experience", key: "03" },
  { label: "Contact", href: "#contact", key: "04" },
];

export const skills = [
  "React.js",
  "Next.js",
  "Flutter",
  "FastAPI",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "REST APIs",
  "CI/CD",
];

export const journey = [
  {
    index: "01",
    phase: "ORIGIN / FOUNDATION",
    company: "Xorlabs Pvt. Ltd.",
    headline: "Where the professional journey began.",
    description:
      "Xorlabs Pvt. Ltd. was my first professional chapter — the place where development moved from personal builds into real delivery, collaboration and production thinking.",
    status: "STARTED HERE",
    accent: "cyan",
  },
  {
    index: "02",
    phase: "CURRENT / BUILDING",
    company: "Kapoor Wealth Enterprises",
    designation: "Senior Software Developer",
    headline: "The current chapter — still shipping.",
    description:
      "I am currently working at Kapoor Wealth Enterprises, continuing to build, iterate and contribute to real product development in a production environment.",
    status: "ACTIVE NOW",
    accent: "lime",
    project: {
      label: "CURRENT PROJECT",
      name: "Vautra",
      description: "Currently contributing to Vautra as part of my role at Kapoor Wealth Enterprises — focused on ongoing development, iteration and production delivery.",
    },
  },
];

export const projects = [
  {
    index: "01",
    eyebrow: "FEATURED / FULL STACK",
    title: "Inventory Management System",
    description:
      "A production-minded inventory platform that turns product, customer and order operations into one connected workflow — backed by a clean API layer and a deployable cloud architecture.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy"],
    capabilities: [
      "Product & stock operations",
      "Customer management",
      "Order workflows",
      "Dashboard analytics",
      "REST API architecture",
      "Dockerized deployment",
    ],
    system: [
      ["client", "React.js"],
      ["api", "FastAPI"],
      ["data", "PostgreSQL"],
      ["ship", "Render + Vercel"],
    ],
    accent: "lime",
    visual: "/project-art/inventory-system.svg",
    visualAlt: "Futuristic warehouse and inventory data illustration",
    code: [
      "POST /api/v1/orders",
      "{",
      '  \"status\": \"created\",',
      '  \"inventory\": \"synced\",',
      '  \"latency\": \"42ms\"',
      "}",
    ],
  },
  {
    index: "02",
    eyebrow: "HEALTHCARE / PLATFORM",
    title: "Healthcare Management Platform",
    description:
      "Secure operational workflows across frontend modules, backend services and cloud integrations, designed around scalable data handling and real-world healthcare operations.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS"],
    capabilities: [
      "Healthcare workflows",
      "Secure data handling",
      "Backend APIs",
      "AWS integrations",
    ],
    system: [
      ["interface", "React.js"],
      ["services", "Node.js"],
      ["storage", "MongoDB"],
      ["cloud", "AWS"],
    ],
    accent: "cyan",
    visual: "/project-art/healthcare-platform.svg",
    visualAlt: "Futuristic healthcare diagnostics and data illustration",
    code: [
      "workflow.run({",
      '  module: \"patient_ops\",',
      '  access: \"secured\",',
      '  scale: \"cloud\"',
      "});",
    ],
  },
  {
    index: "03",
    eyebrow: "OPERATIONS / MOBILE",
    title: "Food Delivery & Operations Platform",
    description:
      "A mobile-first operations stack spanning Flutter experiences, authentication, backend services, database workflows and AWS infrastructure for a production food-sector platform.",
    tech: ["Flutter", "Node.js", "PostgreSQL", "AWS Lambda", "Cognito"],
    capabilities: [
      "Flutter application",
      "Authentication systems",
      "Cloud infrastructure",
      "CI/CD pipelines",
    ],
    system: [
      ["mobile", "Flutter"],
      ["auth", "Cognito"],
      ["compute", "Lambda"],
      ["database", "PostgreSQL"],
    ],
    accent: "violet",
    visual: "/project-art/food-delivery.svg",
    visualAlt: "Futuristic food delivery illustration with burger pizza produce and delivery route",
    code: [
      "deploy --target production",
      "✓ mobile build",
      "✓ auth handshake",
      "✓ cloud functions",
      "✓ pipeline healthy",
    ],
  },
  {
    index: "04",
    eyebrow: "ADMIN / AUTOMATION",
    title: "Celebrity Management System",
    description:
      "Dashboards, profile administration and workflow automation built into a focused management platform with dependable backend integrations and responsive admin experiences.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    capabilities: [
      "Admin dashboards",
      "Profile management",
      "Workflow automation",
      "Responsive UI",
    ],
    system: [
      ["dashboard", "React.js"],
      ["backend", "Node.js"],
      ["database", "PostgreSQL"],
      ["mode", "Responsive"],
    ],
    accent: "pink",
    visual: "/project-art/celebrity-management.svg",
    visualAlt: "Futuristic workflow administration and profile network illustration",
    code: [
      "automation.queue()",
      "  .validate()",
      "  .syncProfiles()",
      "  .publish();",
      "// done. keep shipping.",
    ],
  },
];
