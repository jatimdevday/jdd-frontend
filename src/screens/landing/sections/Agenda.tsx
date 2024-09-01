import Star from "@/assets/svgs/Star";

const Agenda = () => {
  return (
    <div className="bg-darkBg text-white pt-[96px] pb-[170px]">
      <div className="flex items-center gap-3 justify-center">
        <Star />
        <p className="text-base font-semibold">Kilas Balik JDD</p>
        <Star />
      </div>

      <p className="mt-20 text-center text-2xl font-bold">Jatim Developer Day 2019</p>
    </div>
  );
};

export default Agenda;