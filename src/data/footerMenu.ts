import type { INavMenuItem } from "@/types";

const footerMenu: INavMenuItem[][] = [
  [
    {
      id: "home",
      title: "Home",
      path: "/",
      section: "home",
    },
    {
      id: "about",
      title: "About Us",
      path: "/#about",
      section: "about",
    },
    {
      id: "team",
      title: "Team",
      path: "/#team",
      section: "team",
    },
  ],

  [
    {
      id: "career",
      title: "Career",
      path: "/career",
      section: "career",
    },
    {
      id: "testimonials",
      title: "Testimonials",
      path: "/#testimonials",
      section: "testimonials",
    },
    {
      id: "faq",
      title: "FAQ",
      path: "/#faq",
      section: "faq",
    },
  ],

  [
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      path: "/privacy-policy",
      section: "privacy-policy",
    },
    {
      id: "terms-of-use",
      title: "Terms of Use",
      path: "/terms-of-use",
      section: "terms-of-use",
    },
    {
      id: "contact",
      title: "Contact Us",
      path: "/#contact",
      section: "contact",
    },
  ],
];

export default footerMenu;
