import Image from "next/image";
import PrimaryStar from "@/assets/svgs/PrimaryStar";
import { getParallelSpeakers } from "@/lib/firebase";
import { ParallelSpeakers } from "@/lib/schema";

const Parallel = async () => {
  const speakers = (await getParallelSpeakers()) as ParallelSpeakers;

  return (
    <div className="bg-darkBg py-12 md:py-24" id="speakers">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex mb-6 items-center gap-3">
          <PrimaryStar />
          <p className="font-semibold md:text-lg text-primary">Parallel</p>
          <PrimaryStar />
        </div>
        <div className="text-2xl font-bold text-primary">
          With The Parallel Speaker
        </div>

        {/* TODO: maybe need to change into justify-around and so on */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="rounded-xl relative overflow-hidden">
              <Image
                quality={100}
                src={speaker.photo}
                alt={`${speaker.name} photo`}
                layout="responsive"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="p-4 bg-primary rounded-xl z-10 -mt-2.5 relative w-full">
                <div className="font-semibold text-base">{speaker.title}</div>
                <div className="mt-2 font-semibold text-3xl">
                  {speaker.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parallel;
