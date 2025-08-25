import { http } from "@/lib/http";
import { IBase } from "@/types/base";
import { TEvent, TEvents } from "@/types/event";

const eventService = {
  getEvents: async () => {
    const response = await http.get<IBase<TEvents>>("/event");
    return response.data;
  },

  getEventById: async (id: string) => {
    const response = await http.get<IBase<TEvent>>(`/event/${id}`);
    return response.data;
  },
};

export default eventService;
