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
  }
];

const Roadshow = () => {
  return (
    <div className="py-16 md:py-24 bg-[#141414] text-white" id="roadshow">
      <div className="container mx-auto">
        <div className="font-semibold text-3xl">2 November 2024</div>

        <table className="w-full mt-8 text-white">
          <thead className="sm:table-header-group hidden">
            <tr className="bg-[#833cfa]">
              <th className="p-2 text-left align-bottom">Materi</th>
              <th className="p-2 text-left align-bottom">Speaker</th>
              <th className="p-2 text-left align-bottom">Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {scheduleClass.map((schedule, index) => (
              <tr key={index} className="bg-[#0e1826] border-gray-800 sm:table-row flex flex-col">
                <td className="sm:p-2 py-2">
                  <p className="mb-2">{schedule.title}</p>
                  <div className="flex flex-wrap gap-1">
                    {schedule.tags.map((tag) => (
                      <span className="bg-[#833cfa] text-white text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </td>
                <td className="sm:p-2 py-2">{schedule.speaker}</td>
                <td className="sm:p-2 py-2">{schedule.lokasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roadshow;
