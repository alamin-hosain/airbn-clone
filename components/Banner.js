import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:text-lg">Not Sure Where to go? Perfect.</p>
        <button className=" text-purple-400 bg-white px-12 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
