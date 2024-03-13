import Link from "next/link";
import Column from "@/components/core/Column";

const FooterContactInfo = () => {
  return (
    <Column classNames="w-full justify-between gap-8 mt-8 md:flex-row md:items-center">
      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Address
        </p>

        <p className="text-base/6 mt-2">Gaya, Bihar, India, 804403</p>
      </Column>

      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Contact Us
        </p>

        <p className="text-base/6 mt-2">
          <Link
            href="mailto:nixlab.in@gmail.com"
            target="_blank"
            className="text-[var(--textColor)] hover:underline"
          >
            nixlab.in@gmail.com
          </Link>
        </p>
      </Column>

      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Working Hours
        </p>

        <Column classNames="md:items-center mt-2">
          <p className="text-base/6 text-center">
            Monday-Friday: 10:00 AM - 7:00PM
          </p>
          <p className="text-base/6 text-center">Saturday & Sunday: Off</p>
        </Column>
      </Column>
    </Column>
  );
};

export default FooterContactInfo;
