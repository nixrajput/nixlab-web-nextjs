import type { IServiceItem } from "@/types";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";
import AppFilledButton from "@/components/common/FilledButton";

const ServiceItem = ({
  data,
  index,
}: Readonly<{ data: IServiceItem; index?: number }>) => {
  const primaryBorderClass = "!border-[var(--primaryColor)]";
  const secondaryBorderClass = "!border-[var(--secondaryColor)]";
  const defaultBorderClass = "border-[var(--textColor20)]";

  const borderColor = (value: number): string => {
    switch (value) {
      case 0:
        return primaryBorderClass;

      case 1:
        return secondaryBorderClass;

      default:
        return defaultBorderClass;
    }
  };

  return (
    <CardBox
      classNames={`p-4 items-center text-center bg-[var(--dialogColor)] group rounded-tl-[calc(2*var(--borderRadius))] rounded-tr-none rounded-bl-none rounded-br-[calc(2*var(--borderRadius))] border-[2px] ${borderColor(
        index! % 2
      )}`}
    >
      <Column classNames="items-center justify-between w-full h-full gap-12">
        <Column classNames="items-center justify-start">
          <Image
            src={data.icon}
            alt="icon"
            width={144}
            height={144}
            sizes="100%"
            priority={false}
            placeholder="blur"
            blurDataURL="/icon-alt.png"
            className="w-[4rem] md:w-[4.5rem] lg:w-[5rem] h-auto"
          />

          <p className="text-xl/6 lg:text-2xl/6 font-semibold mt-4">
            {data.title}
          </p>
        </Column>

        <Column classNames="w-full">
          <p className="text-base/6 font-normal">
            <Balancer>{data.shortDescription}</Balancer>
          </p>

          <AppFilledButton
            label="Learn More"
            classNames="mx-auto mt-8 min-w-[10rem]"
          />
        </Column>
      </Column>
    </CardBox>
  );
};

export default ServiceItem;
