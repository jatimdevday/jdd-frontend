import Layout from "@/components/Layout";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";
import TicketScreen from "@/screens/ticket/Ticket";

const TicketPage = async () => {
  const content = (await getContent()) as Content;

  return (
    <Layout content={content}>
      <TicketScreen content={content} />
    </Layout>
  );
};

export default TicketPage;
