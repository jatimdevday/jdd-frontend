import DarkStar from "@/assets/svgs/DarkStar";

const events = [
  {
    title: "Unleashing the Power of Frontend & FullStack Web Dev",
    speaker: "Amirul Ihsan",
    tags: ["Frontend", "Developer", "Fullstack"],
  },
  {
    title: "Mastering React and Next.js for Web Development",
    speaker: "John Doe",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    title: "Building Scalable Web Applications with Node.js",
    speaker: "Jane Smith",
    tags: ["Node.js", "Backend", "Scalability"],
  },
];

const Roadshow = () => {
  return (
    <div className="container mx-auto py-16 md:py-24" id="roadshow">
      <div className="flex items-center mb-3 justify-center gap-3">
        <DarkStar />
        <p className="font-semibold">Roadshow Event</p>
        <DarkStar />
      </div>
      <p className="text-center mb-12 font-semibold text-4xl md:text-5xl">
        Upcoming Event
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#F4F5FF] rounded-2xl p-7 flex flex-col h-full"
          >
            <p className="mb-6 flex-grow text-2xl leading-snug font-semibold">
              {event.title}
            </p>
            <p className="mb-4">{event.speaker}</p>
            <div className="flex flex-wrap gap-[5px]">
              {event.tags.map((tag, tagIndex) => (
                <p
                  key={tagIndex}
                  className="text-xs px-[10px] py-1 rounded-md bg- bg-primary"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadshow;
