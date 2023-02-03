import { IProjects } from "~~/types/Project.types";

export const projects: IProjects = {
  lapino: {
    id: "5ff76e76-4fc3-4ba4-8652-1866a8e734zz",
    category: "MERN Stack",
    name: "Lapino",
    slug: "lapino",
    img: "/lp-home.png",
    linkToPage: "https://lapino.onrender.com/",
    linkToSrc: "https://github.com/ZinoChan/lapino",
    description: "E-commerce for Kids products",
    tools: [
      "React",
      "Express",
      "Tailwindcss",
      "Redux",
      "Firebase-admin",
      "Typescript",
    ],
  },
  oishi: {
    id: "6a29d826-fbba-4093-8eef-ac3642c79bbf",
    category: "Nextjs",
    name: "Oishi",
    slug: "oishi",
    img: "/oishi.jpg",
    linkToPage: "https://oishi.vercel.app/",
    linkToSrc: "https://github.com/ZinoChan/Oishi",
    description: "fast food order and delivery app",
    tools: [
      "Next js",
      "Redux Toolkit",
      "Redux-persist",
      "Redux Saga",
      "Firebase",
      "Tailwindcss",
    ],
  },
};
