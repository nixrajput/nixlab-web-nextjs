import type { INavMenuItem } from "@/types";

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
    id: "testimonials",
    title: "Testimonials",
    path: "/#testimonials",
    section: "testimonials",
  },
  {
    id: "team",
    title: "Team",
    path: "/#team",
    section: "team",
  },
  {
    id: "faq",
    title: "FAQ",
    path: "/#faq",
    section: "faq",
  },
  {
    id: "about",
    title: "About Us",
    path: "/#about",
    section: "about",
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/#contact",
    section: "contact",
  },
];

export default navMenus;
