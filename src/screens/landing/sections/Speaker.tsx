import Image from "next/image";

const Speaker = () => {
  return (
    <div className="bg-primary text-white pt-[96px] pb-[170px]">
      <div className="container mx-auto">
        <Image
          src="/speaker-example.png"
          alt="Speakers"
          width={583}
          height={657}
        />

        <div className="flex items-center justify-center gap-4 mt-4 mr-[200px]">
          <Image
            src="/left-arrow.png"
            alt="Arrow Left"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <Image
            src="/right-arrow.png"
            alt="Arrow Right"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Speaker;