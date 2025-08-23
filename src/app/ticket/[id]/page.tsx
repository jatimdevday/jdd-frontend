import TicketDetailScreen from "@/screens/ticket-detail-screen";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <TicketDetailScreen ticketId={params?.id} />;
};

export default Page;
