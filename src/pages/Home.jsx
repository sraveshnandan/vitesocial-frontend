import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layouts/Layout";

export const HomePage = () => {
  return (
    <>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </>
  );
}