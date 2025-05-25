import { DiDotnet } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMicrosoftsqlserver,
  SiMysql,
  SiOpengl,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "London Tower Bridge in OpenGL",
    image: "/img/bridge.webp",
    description:
      "An OpenGL project about London iconic Tower Bridge, meticulously recreated with meticulous attention to detail, capturing its majesty and architectural finesse. This visually stunning experience offers viewers a captivating glimpse into the beauty of this historical landmark.",
    technologies: [SiOpengl],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/",
      },
    ],
    liveDemoLinks: [{ label: "Demo", url: "/video/bridge.webm" }],
  },
  {
    id: 2,
    name: "HealthConsult Pro App",
    image: "/img/health.webp",
    description:
      "The Health Consultant Application is a Java-based tool that empowers users to input symptoms and receive personalized health recommendations. It employs evidence-based practices to predict potential diseases based on symptoms. Additionally, users can conveniently schedule appointments with doctors, ensuring timely and accurate medical attention to cater to their unique needs and preferences.",
    technologies: [FaJava],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/",
      },
    ],
    liveDemoLinks: [],
  },
 
  {
    id: 3,
    name: "RoadSaints Motorcycle Shop",
    image: "/img/roadSaints.webp",
    description:
      "Presenting Road Saints, a showcase of our premier project featuring top-tier motorcycle accessories. Leveraging ReactJS and TailwindCSS for the frontend and ASP.NET for the backend, we have crafted a seamless web experience. Explore meticulously curated high-performance helmets, innovative luggage solutions, and more, with a user-friendly interface designed for effortless navigation and intuitive purchasing. Detailed product insights and responsive assistance ensure a superior shopping journey, enhancing motorcycle adventures with unparalleled style and safety. Join us as we elevate the biking experience – your journey to excellence begins here.",
    technologies: [
      FaHtml5,
      FaCss3,
      IoLogoJavascript,
      SiTailwindcss,
      FaReact,
      DiDotnet,
      SiMicrosoftsqlserver,
    ],
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/",
      },
      {
        label: "Backend",
        url: "https://github.com/",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 4,
    name: "Merlin Technology Frontend",
    image: "/img/merlin.webp",
    description:
      "Crafted with precision, the frontend of Merlin Technology’s website showcases a sleek and modern design that enhances user experience. As the architect of this digital interface, I have implemented responsive layouts and interactive elements that seamlessly guide visitors through the company’s extensive portfolio of power generation, elevator, escalator, and solar energy solutions. My work reflects a commitment to aesthetic excellence and functional innovation, providing a robust platform that stands at the forefront of Merlin Technology’s online presence.",
    technologies: [FaHtml5, FaCss3, IoLogoJavascript, FaBootstrap],
    githubLinks: [],
    liveDemoLinks: [
      { label: "Merlin", url: "https:/" },
      { label: "Hayashimu", url: "" },
    ],
  },
  {
    id: 5,
    name: "Swim Club Management",
    image: "/img/swim-club.webp",
    description:
      "A web-based system for managing swimming club activities, including member registration, schedules, and events, built with PHP and MySQL.",
    technologies: [
      FaHtml5,
      FaCss3,
      IoLogoJavascript,
      FaBootstrap,
      FaPhp,
      SiMysql,
    ],
    githubLinks: [
      { label: "Code", url: "https://github.com/" },
    ],
    liveDemoLinks: [],
  },
];

export default projects;