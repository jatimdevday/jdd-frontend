import Image from "next/image";
import Link from "next/link";
import DarkStar from "@/assets/svgs/DarkStar";
import { Speakers } from "@/lib/schema";
import { getSpeakers } from "@/lib/firebase";

const Speaker = async () => {

  const speakers = (await getSpeakers()) as Speakers;

  return (
    <div className="bg-primary py-16 md:py-24" id="speakers">
      <div className="container mx-auto py-10 items-center justify-between">
        <div className="flex mb-6 md:mb-10 items-center gap-3">
          <DarkStar />
          <p className="font-semibold md:text-lg">Meet Our Speakers</p>
          <DarkStar />
        </div>
        <div className="text-2xl font-bold">With The Feature Speaker</div>

        {/* TODO: maybe need to change into justify-around and so on */}
        <div className="flex flex-row justify-between mt-10">
          {speakers.map((speaker, index) => (
            <div key={index}>
              <Image
                className="rounded-2xl"
                quality={100}
                src={speaker.photo}
                alt={`${speaker.name} photo`}
                width={400}
                height={400}
              />
              <div className="mt-6 font-medium">{speaker.title}</div>
              <div className="mt-4 font-bold">{speaker.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
