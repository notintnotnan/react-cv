import {
  faAddressCard,
  faLanguage,
  faScrewdriverWrench,
  faUser,
  faBriefcase,
  faGraduationCap,
  faBook,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const titles = {
  profile: {
    0: "PERFIL PROFESIONAL",
    1: "PROFILE",
    icon: faUser,
  },
  experience: {
    0: "EXPERIENCIA LABORAL",
    1: "EMPLOYMENT HISTORY",
    icon: faBriefcase,
  },
  education: {
    0: "FORMACIÓN",
    1: "EDUCATION",
    icon: faGraduationCap,
  },
  certifications: {
    0: "CERTIFICACIONES",
    1: "COURSES",
    icon: faBook,
  },
  personalData: {
    0: "DATOS PERSONALES",
    1: "DETAILS",
    icon: faAddressCard,
  },
  links: {
    0: "ENLACES",
    1: "LINKS",
    icon: faLink,
  },
  skills: {
    0: "HABILIDADES",
    1: "SKILLS",
    icon: faScrewdriverWrench,
  },
  languages: {
    0: "IDIOMAS",
    1: "LANGUAGES",
    icon: faLanguage,
  },
};

export default titles;
