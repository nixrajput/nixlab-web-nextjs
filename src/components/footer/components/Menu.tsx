import Link from "next/link";
import Column from "@/components/core/Column";
import footerMenu from "@/data/footerMenu";

const FooterMenu = () => {
  return (
    <Column classNames="w-full justify-between gap-8 mt-8 md:flex-row">
      {footerMenu.map((menu, index) => {
        return (
          <Column key={`menu-${index}`} classNames="gap-2">
            {menu.map((item, itemIndex) => {
              return (
                <p key={`menu-item-${itemIndex}`} className="text-base/6">
                  <Link
                    href={item.path}
                    className="text-[var(--textColor)] hover:underline"
                  >
                    {item.title}
                  </Link>
                </p>
              );
            })}
          </Column>
        );
      })}
    </Column>
  );
};

export default FooterMenu;
