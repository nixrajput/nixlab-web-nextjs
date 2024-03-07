import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";

const Footer = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--dialogColor)]">
      <ConstraintedBox classNames="p-4 py-8">
        <p className="text-sm/6 text-center mx-auto">
          © 2021-2024 NixLab Technologies.
        </p>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default Footer;
