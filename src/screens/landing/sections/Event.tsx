import Image from "next/image";
import React from "react";

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
    <div className="bg-white text-black pt-[96px] pb-[100px]">
      <div className="container mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex mb-3 justify-center">
            <div className="flex">
              <Image
                quality={100}
                src="/black-star-2.png"
                alt=""
                width={20}
                height={0}
              />
              <h3 className="ms-[10px] font-semibold text-[15px] me-[10px]">
                Coming Soon
              </h3>
              <Image
                quality={100}
                src="/black-star-2.png"
                alt=""
                width={20}
                height={0}
              />
            </div>
          </div>
          <h1 className="text-center ms-[10px] mb-10 font-semibold text-[47px] me-[10px]">
            Upcoming Event
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#F4F5FF] rounded-[15px] p-6 font-semibold text-[24px] flex flex-col h-full"
              >
                <h2 className="mb-6 flex-grow">{event.title}</h2>
                <h5 className="font-normal text-[18px] mb-4">
                  {event.speaker}
                </h5>
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
      </div>
    </div>
  );
};

export default Event;
