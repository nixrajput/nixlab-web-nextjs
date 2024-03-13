import type { ISocialLinkItem } from "@/types";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks: ISocialLinkItem[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/nixlab-technologies",
    icon: faLinkedin,
    text: "nixlab-technologies",
  },
  {
    name: "X",
    url: "https://twitter.com/nixlab_in",
    icon: faXTwitter,
    text: "nixlab_in",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/nixlab.in",
    icon: faInstagram,
    text: "nixlab.in",
  },

  {
    name: "GitHub",
    url: "https://github.com/nixlab-technologies",
    icon: faGithub,
    text: "nixlab-technologies",
  },
];

export default socialLinks;
