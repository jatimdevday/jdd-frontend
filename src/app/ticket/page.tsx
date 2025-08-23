import TicketsScreen from "@/screens/tickets-screen";
import eventService from "@/services/event.service";
import React from "react";

const Page = async () => {
  const data = await eventService.getEvents();
  return <TicketsScreen data={data} />;
};

export default Page;
