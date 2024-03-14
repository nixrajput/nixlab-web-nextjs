import Column from "@/components/core/Column";

const SectionTitle = ({
  children,
  title,
}: Readonly<{ children: string; title?: string }>) => {
  return (
    <Column classNames="items-center justify-center mx-auto gap-2">
      {title ? (
        <p className="text-base/none md:text-lg/none font-medium text-center mx-auto border rounded-full py-1 px-2">
          {title}
        </p>
      ) : null}

      <p className="text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-center mx-auto">
        {children}
      </p>
    </Column>
  );
};

export default SectionTitle;
