import EventDetailScreen from "@/screens/event-detail-screen";
import eventService from "@/services/event.service";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await eventService.getEventById(id);
  return <EventDetailScreen data={data} />;
};

export default Page;
