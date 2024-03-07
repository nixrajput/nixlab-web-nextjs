import { Balancer } from "react-wrap-balancer";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import TalkButton from "./components/TalkButton";
import AnimatedElement from "./components/AnimatedElement";

const HomeSection1 = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 md:!grid-cols-2">
          <Column classNames="w-full !justify-center">
            <p className="text-5xl/none md:text-6xl/none xl:text-7xl/none font-bold text-[var(--whiteColor)] drop_in">
              Welcome To NixLab Technologies
            </p>

            <p className="text-base/normal lg:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in">
              <Balancer>
                NixLab Technologies is a software development company based in
                the India. We are a team of passionate developers who are
                passionate about building high quality software. We are always
                looking for talented and creative people to join our team.
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
