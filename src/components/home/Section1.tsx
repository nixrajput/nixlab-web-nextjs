import Balancer from "react-wrap-balancer";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import TalkButton from "./components/TalkButton";
import AnimatedElement from "./components/AnimatedElement";

const HomeSection1 = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="gradient_bg min-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 lg:!grid-cols-2">
          <Column classNames="w-full !justify-center items-center lg:items-start">
            <p className="text-5xl/none md:text-6xl/none xl:text-7xl/none font-bold text-[var(--whiteColor)] drop_in text-center lg:text-start">
              <Balancer>
                Transforming Your Ideas into Innovative Solutions
              </Balancer>
            </p>

            <p className="text-base/normal lg:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in text-center lg:text-start">
              <Balancer>
                We specialize in transforming your concepts into cutting-edge
                solutions. Our team of developers will partner with you to craft
                innovative mobile apps, web platforms, and robust backend
                systems, making your digital dreams a reality.
              </Balancer>
            </p>

            <Column classNames="gap-4 mt-8 lg:mt-16 lg:flex-row">
              <TalkButton />
            </Column>
          </Column>

          <AnimatedElement />
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
