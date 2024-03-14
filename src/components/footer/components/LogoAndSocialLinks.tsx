import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";

const FooterLogoAndSocialLinks = () => {
  return (
    <Column classNames="w-full justify-between gap-8 md:flex-row md:items-center">
      <Link
        href="/"
        className="w-fit h-fit flex flex-row items-center justify-center"
      >
        <Image
          src="/icon.png"
          alt="icon"
          width={144}
          height={144}
          sizes="100%"
          priority
          placeholder="blur"
          blurDataURL="/icon-alt.png"
          className="h-10 lg:h-12 w-auto block md:hidden"
        />

        <Image
          src="/logo.png"
          alt="logo"
          width={286}
          height={144}
          sizes="100%"
          priority
          placeholder="blur"
          blurDataURL="/icon-alt.png"
          className="h-10 lg:h-12 w-auto md:block hidden"
        />
      </Link>

      <Row classNames="gap-4">
        {socialLinks.slice(0, 5).map((link, index) => {
          return (
            <Link
              key={`social-link-${index}`}
              href={link.url}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
              aria-label={`${link.name}`}
            >
              <span className="text-base/6 text-[var(--whiteColor)]">
                <FontAwesomeIcon icon={link.icon} />
              </span>
            </Link>
          );
        })}
      </Row>
    </Column>
  );
};

export default FooterLogoAndSocialLinks;
