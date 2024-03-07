import { INavMenuItem } from "@/types";

const navMenus: INavMenuItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    section: "home",
  },
  {
    id: "services",
    title: "Services",
    path: "/#services",
    section: "services",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/#projects",
    section: "projects",
  },
  {
    id: "about",
    title: "About",
    path: "/#about",
    section: "about",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/#contact",
    section: "contact",
  },
];

export default navMenus;
