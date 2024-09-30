import { Content } from "@/lib/schema";
import { classNames } from "@/lib/utils";

const scheduleClass = [
  {
    title: "Unleashing the Power of Frontend & FullStack Web Dev",
    speaker: "Amirul Ihsan",
    lokasi: "Ruang 1",
    tags: ["Frontend", "Developer", "Fullstack"],
  },
  {
    title: "Mastering React and Next.js for Web Development",
    speaker: "John Doe",
    lokasi: "Ruang 2",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    title: "Building Scalable Web Applications with Node.js",
    speaker: "Jane Smith",
    lokasi: "Ruang 3",
    tags: ["Node.js", "Backend", "Scalability"],
  },
];

const Roadshow = ({ content }: { content?: Content }) => {
  return (
    <div className="py-12 md:py-24 bg-[#141414] text-white" id="agenda">
      <div className="container mx-auto">
        <div className="font-semibold text-2xl sm:text-3xl text-center sm:text-left">
          {content?.date}
        </div>
        <table className="w-full mt-6 sm:mt-8 text-white rounded-md overflow-hidden">
          <thead className="sm:table-header-group hidden">
            <tr className="bg-secondary">
              <th className="px-3 py-2.5 text-left font-semibold">Materi</th>
              <th className="px-3 py-2.5 text-left font-semibold">Speaker</th>
              <th className="px-3 py-2.5 text-left font-semibold">Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {scheduleClass.map((schedule, index) => (
              <tr
                key={index}
                className={classNames(
                  "border-gray-800 sm:table-row flex flex-col py-3",
                  index % 2 === 0 ? "bg-[#0D1521]" : "bg-[#0e1826]"
                )}
              >
                <td className="px-3 py-2 md:py-3.5">
                  <p className="mb-4">{schedule.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {schedule.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-3 py-2 md:py-3.5 font-semibold align-top">
                  {schedule.speaker}
                </td>
                <td className="px-3 py-2 md:py-3.5 align-top">
                  {schedule.lokasi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roadshow;
