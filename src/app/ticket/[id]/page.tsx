import TicketDetailScreen from "@/screens/ticket-detail-screen";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <TicketDetailScreen eventId={id} />;
};

export default Page;
