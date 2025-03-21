import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaSass, FaBootstrap, FaVuejs, FaAngular, 
  FaPhp, FaPython, FaJava, FaRust, FaLaravel, FaGitAlt, FaDocker, FaAws, FaFigma, FaCuttlefish 
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, 
  SiFirebase, SiGraphql, SiKubernetes, SiDjango, SiFlask, SiSpringboot, SiCplusplus
} from "react-icons/si";

export const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3 size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
    { name: "Vue.js", icon: <FaVuejs size={40} color="#4FC08D" /> },
    { name: "Angular", icon: <FaAngular size={40} color="#DD0031" /> },
    { name: "SASS", icon: <FaSass size={40} color="#CC6699" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> }
  ],
  
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
    { name: "GraphQL", icon: <SiGraphql size={40} color="#E535AB" /> },
    { name: "Django", icon: <SiDjango size={40} color="#092E20" /> },
    { name: "Flask", icon: <SiFlask size={40} color="#000000" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6DB33F" /> },
    { name: "PHP", icon: <FaPhp size={40} color="#777BB4" /> },
    { name: "Laravel", icon: <FaLaravel size={40} color="#FF2D20" /> },
    { name: "Python", icon: <FaPython size={40} color="#306998" /> },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },
    { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
    { name: "Rust", icon: <FaRust size={40} color="#000000" /> }
  ],

  Databases: [
    { name: "MySQL", icon: <FaDatabase size={40} color="#00758F" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
    { name: "SQLite", icon: <FaDatabase size={40} color="#003B57" /> },
    { name: "Redis", icon: <FaDatabase size={40} color="#DC382D" /> },
    { name: "DynamoDB", icon: <FaAws size={40} color="#FF9900" /> },
    { name: "OracleDB", icon: <FaDatabase size={40} color="#F80000" /> }
  ],

  DevOps: [
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} color="#326CE5" /> },
    { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> }
  ]
};
