import Layout from "@/components/Layout";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";
import FaqScreen from "@/screens/faq/Faq";

const FaqPage = async () => {
  const content = (await getContent()) as Content;

  return (
    <Layout content={content}>
      <FaqScreen content={content} />
    </Layout>
  );
};

export default FaqPage;
