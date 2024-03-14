import Image from "next/image";

const AnimatedElement = () => {
  return (
    <div className="relative w-full h-1/2 lg:h-full items-center justify-center lg:justify-end hidden md:flex">
      <Image
        src="/circle.svg"
        alt="circle"
        width={1080}
        height={1080}
        sizes="100%"
        priority
        placeholder="blur"
        blurDataURL="/placeholder.png"
        className="h-full w-auto aspect-square drop_out"
      />

      <div className="absolute w-full max-w-[12rem] lg:max-w-[15rem] h-auto bg-transparent pointer-events-none z-5 top-[15%] right-[35%] upDown">
        <Image
          src="/boy.png"
          alt="boy"
          width={439}
          height={569}
          sizes="100%"
          priority
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="w-full h-full drop_out"
        />
      </div>
    </div>
  );
};

export default AnimatedElement;
