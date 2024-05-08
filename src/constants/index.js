import {
  adventure,
  backend,
  creator,
  css,
  docker,
  express,
  figma,
  git,
  html,
  ipfs,
  javascript,
  meta,
  mobile,
  mongodb,
  nodejs,
  postgres,
  reactjs,
  redux,
  shopify,
  skynet,
  squad,
  starbucks,
  tailwind,
  tesla,
  tgthr,
  threejs,
  typescript,
  walle,
  waveMart,
  web,
} from "../assets";

export const landingDescription =
  "Discover the magic of innovative web applications, crafted by a passionate Node.js developer - dive into my world below!";

export const description =
  "Explore the power of Node.js and TypeScript in my cutting-edge web applications - 3 years of experience delivering scalable, secure, \
  and efficient server-side solutions. Driven by industry trends and a passion for maintainable code, I excel both solo and in a team.";

export const ResumeLink = "https://tan-alfy-8.tiiny.site";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "",
  //   icon: mobile,
  // },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Web3 Integrator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "IPFS",
    icon: ipfs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postgresql",
    icon: postgres,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sofware Developer Intern",
    company_name: "Adventure Corporation",
    icon: squad,
    iconBg: "#383E56",
    date: "Dec 2019 - Jan 2021",
    points: [
      "Collaborated with experienced React developers to create foundational components.",
      "Diagnosed and resolved bugs within existing codebases for improved performance.",
      "Supported the testing process for server API endpoints to ensure reliability.",
      "Engaged in code reviews and team meetings to promote continuous learning and growth.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Adventure Corporation",
    icon: adventure,
    iconBg: "#383E56",
    date: "Feb 2021 - August 2021",
    points: [
      "Engineered and sustained web applications utilizing React.js and complementary technologies.",
      "Cooperated with interdisciplinary teams of designers, product managers, and fellow developers to deliver top-notch products.",
      "Devised routing and API endpoints to enhance web application functionality.",
      "Seamlessly integrated Ethereum authentication and network interoperability, transforming conventional web apps into cutting-edge Dapps (Decentralized Applications).",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Skynet Labs",
    icon: skynet,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Teamed up with colleagues and system architects to design a user-centric API for the Skynet network.",
      "Developed Node.js modules for data accessibility and API endpoints, streamlining Dapp integration.",
      "Conducted rigorous stress tests on network and endpoints to identify and address bottlenecks and security vulnerabilities.",
      "Pioneered a prototype encrypted messaging application leveraging Skynet's decentralized database for enhanced security and privacy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wave Mart",
    description: "A mock e-commerce website with a modern feel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: waveMart,
    source_code_link: "https://github.com/0xCozart/E-Commerce-Firebase",
    live_link: "https://wave-mart.store",
  },
  {
    name: "Wall-e",
    description:
      "OpenAI powered image generating application with a feature to share your creations with the community.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    image: walle,
    source_code_link: "https://github.com/0xCozart/Wall-E",
    live_link: "https://walle.website",
  },
  {
    name: "Tgthr",
    description:
      "A ugly but beatifully featurfull blog application, register and post!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Graphql",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
    ],
    image: tgthr,
    source_code_link: "https://github.com/0xCozart/Tgthr-blogs",
    live_link: "https://tgthr.world",
  },
];

export { services, technologies, experiences, testimonials, projects };
