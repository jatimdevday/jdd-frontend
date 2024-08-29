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

const Event = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex items-center mb-1 justify-center gap-3">
        <DarkStar />
        <h3 className="font-semibold text-[15px]">Coming Soon</h3>
        <DarkStar />
      </div>
      <h1 className="text-center mb-10 font-semibold text-[47px]">
        Upcoming Event
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#F4F5FF] rounded-[15px] p-6 font-semibold flex flex-col h-full"
          >
            <p className="mb-6 flex-grow text-2xl">{event.title}</p>
            <p className="font-normal mb-4">{event.speaker}</p>
            <div className="flex flex-wrap mt-auto">
              {event.tags.map((tag, tagIndex) => (
                <p
                  key={tagIndex}
                  className="text-[12px] px-3 py-1 me-2 mb-2 rounded-[5px] bg-[#CAF93A] font-medium"
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

export default Event;
