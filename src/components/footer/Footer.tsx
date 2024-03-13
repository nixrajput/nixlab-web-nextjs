import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import FooterMenu from "./components/Menu";
import FooterLogoAndSocialLinks from "./components/LogoAndSocialLinks";
import FooterContactInfo from "./components/ContactInfo";
import FooterCopyright from "./components/Copyright";

const Footer = () => {
  return (
    <ResponsiveBox classNames="gradient_bg">
      <ConstraintedBox classNames="p-4 py-8">
        <FooterLogoAndSocialLinks />
        <FooterMenu />
        <FooterContactInfo />
        <FooterCopyright />
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default Footer;
