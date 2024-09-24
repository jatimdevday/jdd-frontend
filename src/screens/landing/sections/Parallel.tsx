import Image from "next/image";
import PrimaryStar from "@/assets/svgs/PrimaryStar";

const Parallel = async () => {
  // TODO: need to change into real data
  const speakers = [{ "linkedin": "https://www.linkedin.com/in/rubiagatra", "name": "Doni Rubiagtra", "photo": "https://firebasestorage.googleapis.com/v0/b/jdd2024-b625b.appspot.com/o/speaker%2Fdoni_rubiagatra.jpg?alt=media&token=fc1134b9-bba0-4cce-bb61-84b3177cafec", "title": "Partner & VP of Engineering at Zero One Group", "twitter": "https://x.com/rubiagatra", "youtube": "" }, { "linkedin": "https://www.linkedin.com/in/rubiagatra", "name": "Doni Rubiagtra", "photo": "https://firebasestorage.googleapis.com/v0/b/jdd2024-b625b.appspot.com/o/speaker%2Fdoni_rubiagatra.jpg?alt=media&token=fc1134b9-bba0-4cce-bb61-84b3177cafec", "title": "Partner & VP of Engineering at Zero One Group", "twitter": "https://x.com/rubiagatra", "youtube": "" }, { "linkedin": "https://www.linkedin.com/in/rubiagatra", "name": "Doni Rubiagtra", "photo": "https://firebasestorage.googleapis.com/v0/b/jdd2024-b625b.appspot.com/o/speaker%2Fdoni_rubiagatra.jpg?alt=media&token=fc1134b9-bba0-4cce-bb61-84b3177cafec", "title": "Partner & VP of Engineering at Zero One Group", "twitter": "https://x.com/rubiagatra", "youtube": "" }, { "linkedin": "https://www.linkedin.com/in/rubiagatra", "name": "Doni Rubiagtra", "photo": "https://firebasestorage.googleapis.com/v0/b/jdd2024-b625b.appspot.com/o/speaker%2Fdoni_rubiagatra.jpg?alt=media&token=fc1134b9-bba0-4cce-bb61-84b3177cafec", "title": "Partner & VP of Engineering at Zero One Group", "twitter": "https://x.com/rubiagatra", "youtube": "" }]

  return (
    <div className="bg-darkBg py-16 md:py-24" id="speakers">
      <div className="container mx-auto py-10 flex flex-col items-center justify-between">
        <div className="flex mb-6 md:mb-10 items-center gap-3">
          <PrimaryStar />
          <p className="font-semibold md:text-lg text-primary">Parallel</p>
          <PrimaryStar />
        </div>
        <div className="text-2xl font-bold text-primary">With The Parallel Speaker</div>

        {/* TODO: maybe need to change into justify-around and so on */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:mt-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="mt-12 lg:mt-0 bg-primary rounded-xl">
              <Image
                className="rounded-2xl"
                quality={100}
                src={speaker.photo}
                alt={`${speaker.name} photo`}
                width={400}
                height={400}
              />
              <div className="p-4">
                <div className="mt-6 font-semibold text-base">{speaker.title}</div>
                <div className="mt-4 font-semibold text-3xl">{speaker.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parallel;