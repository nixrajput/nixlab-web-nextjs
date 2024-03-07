import Image from "next/image";

const AnimatedElement = () => {
  return (
    <div className="relative w-full flex items-center justify-center md:justify-end">
      <div className="relative w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[28rem] xl:w-[30rem] xl:h-[30rem]">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[calc(40%-2rem)] aspect-square bg-[#333c57] rounded-full" />
          <div className="absolute w-[calc(60%-2rem)] aspect-square border-dashed border-2 border-[#4f5d82] rounded-full" />
          <div className="absolute w-[calc(80%-2rem)] aspect-square border-dashed border-2 border-[#4f5d82] rounded-full" />
          <div className="absolute w-[calc(100%-2rem)] aspect-square border-dashed border-2 border-[#4f5d82] rounded-full" />
        </div>

        <div className="absolute top-[10%] left-[15%] w-[3.5rem] h-[3.5rem] bg-white rounded-full flex items-center justify-center">
          <div className="w-[20px] h-[20px] bg-[#333c57] rounded-full" />
        </div>

        <div className="absolute top-[20%] right-[12%] w-[2rem] h-[2rem] bg-white rounded-full flex items-center justify-center">
          <div className="w-[12px] h-[12px] bg-[#333c57] rounded-full" />
        </div>

        <div className="absolute top-[60%] left-[75%] w-[2.5rem] h-[2.5rem] bg-white rounded-full flex items-center justify-center">
          <div className="w-[1rem] h-[1rem] bg-[#333c57] rounded-full" />
        </div>

        <div className="absolute bottom-[10%] left-[20%] w-[3rem] h-[3rem] bg-white rounded-full flex items-center justify-center">
          <div className="w-[18px] h-[18px] bg-[#333c57] rounded-full" />
        </div>

        <div className="absolute top-[5%] left-[40%] w-[10px] h-[10px] bg-[#bd1e59] rounded-full" />
        <div className="absolute top-[15%] right-[20%] w-[10px] h-[10px] bg-[#bd1e59] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[10px] h-[10px] bg-[#bd1e59] rounded-full" />
        <div className="absolute bottom-[30%] right-[5%] w-[10px] h-[10px] bg-[#bd1e59] rounded-full" />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[5px] h-[5px] bg-[#4fd1c5] rounded-full animate-ping" />
          <div className="absolute w-[5px] h-[5px] bg-[#4fd1c5] rounded-full animate-ping animation-delay-1000" />
          <div className="absolute w-[5px] h-[5px] bg-[#4fd1c5] rounded-full animate-ping animation-delay-2000" />
        </div>
      </div>

      <div className="absolute w-full max-w-[15rem] h-auto bg-transparent pointer-events-none z-5 top-[10%] right-[40%] upDown">
        <Image
          src="/boy.png"
          alt="img"
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
