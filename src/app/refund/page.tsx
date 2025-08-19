import Layout from "@/components/Layout";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";
import RefundScreen from "@/screens/refund/Refund";

const RefundPage = async () => {
  const content = (await getContent()) as Content;

  return (
    <Layout content={content}>
      <RefundScreen content={content} />
    </Layout>
  );
};

export default RefundPage;
