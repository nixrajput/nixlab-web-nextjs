import Column from "../core/Column";

const SectionTitle = ({
  children,
  title,
}: Readonly<{ children: string; title?: string }>) => {
  return (
    <Column classNames="items-center justify-center mx-auto gap-2">
      {title ? (
        <p className="text-center mx-auto text-base/none md:text-lg/none font-medium border rounded-full py-1 px-2">
          {title}
        </p>
      ) : null}

      <p className="text-center mx-auto text-4xl/none md:text-5xl/none xl:text-6xl/none font-bold">
        {children}
      </p>
    </Column>
  );
};

export default SectionTitle;
