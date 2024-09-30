import Layout from "@/components/Layout";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";
import LandingScreen from "@/screens/landing/LandingScreen";

const Page = async () => {
  const content = (await getContent()) as Content;
  return (
    <Layout content={content}>
      <LandingScreen content={content} />
    </Layout>
  );
};

export default Page;
