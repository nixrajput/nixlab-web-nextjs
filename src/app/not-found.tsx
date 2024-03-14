import Link from "next/link";

const NodFound = () => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center w-screen max-w-full min-h-screen p-4 m-0 overflow-hidden transition duration-300 ease-in-out`}
    >
      <p className="text-xl/6 font-bold">Page not found!!!</p>
      <Link className="app__filled_btn min-w-[12rem] mt-8" href="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NodFound;
