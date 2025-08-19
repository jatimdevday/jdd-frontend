import Layout from "@/components/Layout";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";
import TermsScreen from "@/screens/terms/Terms";

const TermsPage = async () => {
  const content = (await getContent()) as Content;

  return (
    <Layout content={content}>
      <TermsScreen content={content} />
    </Layout>
  );
};

export default TermsPage;
