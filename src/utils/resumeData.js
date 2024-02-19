import {
  AssignmentOutlined,
  Facebook,
  Language,
  WebOutlined,
} from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Image } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Fernan Cetina",
  title: "Undergraduate",
  birthday: "16th November 2001",
  email: "fecefarique@gmail.com",
  address: "Mérida, Yucatán, México",
  phone: "+529991222819",

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/fernan-cetina-564472234/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link:
        "https://github.com/FernanCetinaE",
      text: "My Github",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Hi! My name is Fernan Cetina, I am an experienced Product owner and full stack developer",

  Experiences: [
    {
      title: "Full stack developer | MID Software",
      date: "Oct 2023 - Present",
      description:
        "Working as a developer to build fast and reliable web applications using React, Django, and Postgresql.",
    },
    {
      title: "Product Owner & Developer | Dealer Geek",
      date: " May 2022  - Oct 2023",
      description:
        "Implemented SCRUM framework, used JIRA for Daily Standups and documentation, increased accountability and traceability for User Stories. As a developer I worked with recent frameworks and technologies to develop several applications for car dealerships",
    },
    {
      title: "Freelance Web Developer",
      date: "May 2020 - May 2022",
      description:
        "Worked with clients to create websites that met their specifications. Used HTML, CSS, and JavaScript to create responsive websites for clients.",
    },
  ],
  Education: [
    {
      title: "Software Engineering | Universidad Autónoma de Yucatán",
      date: "2020 - December 2024",
      description:
        "GPA 3.8 | Activities and societies  : Workshop",
    },
    {
      title: "Academic Research | Notre Dame University",
      date: "Summer 2023",
      description:
        "Work with GCC, Python and Docker to mine information of relay connection times within Tor's network."
    } 
         
  ],
  services: [
    {
      title: "Web development",
      description: "Develop and deploy a webapp according to your needs",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Bussiness Tech Analysis",
      description: "Requirements gathering, analysis and documentation",
      icon: <WebOutlined />,
    }
  ],

  skills: [
    {
      title: "Front End",
      description: [
        "ReactJs",
        "JavaScript/TypeScript",
        "Bootstrap",
        "TailWind",
        "Material UI",
        "HTML/CSS",
      ],
    },
    {
      title: "Back END",
      description: ["Node JS", "Python"],
    },
    {
      title: "DataBases",
      description: ["PostgreSql","MongoDB"],
    },
    {
      title: "Version Control",
      description: ["Git", "Git Hub", "GitLab"],
    },
  ],

  projects: [
    {
      tag: "React",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      title: "Gas monitoring system",
      caption: "App to monitor spending on gas by salespeople",
      description: "This is dummy project description. Please fill it in ",
      links: [
        { link: "https://www.google.com", icon: <Language /> },
        { link: "https://github.com/Nikila99gimhan", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
      title: "Tor Network Analysis",
      caption: "Build algorithms to analyze Tor's network",
      description: "This is dummy project description. Please fill it in ",
      links: [
        { link: "https://www.google.com", icon: <Language /> },
        { link: "https://github.com/Nikila99gimhan", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Angular",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png",
      title: "Wait-time display application",
      caption: "Webapp to display wait times in dealerships",
      description: "This is dummy project description. Please fill it in ",
      links: [
        { link: "https://www.google.com", icon: <Language /> },
        { link: "https://github.com/Nikila99gimhan", icon: <GitHubIcon /> },
      ],
    },
  ],
};
