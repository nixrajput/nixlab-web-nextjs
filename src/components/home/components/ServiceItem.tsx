import type { IServiceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";
import Image from "next/image";

const ServiceItem = ({ data }: { data: IServiceItem }) => {
  return (
    <CardBox classNames="p-4 items-center text-center bg-[var(--dialogColor)] group min-h-80 box_shadow">
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

        <p className="text-base/6 font-normal">
          <Balancer>{data.shortDescription}</Balancer>
        </p>
      </Column>
    </CardBox>
  );
};

export default ServiceItem;
