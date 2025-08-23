import { http } from "@/lib/http";
import { Event } from "@/types/event";

const eventService = {
  getEvents: async () => {
    const response = await http.get<Event[]>("/event");
    return response.data;
  },
};

export default eventService;
