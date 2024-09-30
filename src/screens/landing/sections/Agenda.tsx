import { getAgendas } from "@/lib/firebase";
import { Agendas, Content } from "@/lib/schema";
import { classNames } from "@/lib/utils";

const Agenda = async ({ content }: { content?: Content }) => {
  const agendas = (await getAgendas()) as Agendas;
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
            {agendas.map((item, index) => (
              <tr
                key={index}
                className={classNames(
                  "border-gray-800 sm:table-row flex flex-col py-3",
                  index % 2 === 0 ? "bg-[#0D1521]" : "bg-[#0e1826]"
                )}
              >
                <td className="px-3 py-2 md:py-3.5">
                  <p className="mb-4">{item.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
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
                  {item.speaker}
                </td>
                <td className="px-3 py-2 md:py-3.5 align-top">{item.lokasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agenda;
