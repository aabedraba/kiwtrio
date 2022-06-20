import Videos from "../components/Index/Videos";
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <Layout>
      <div>
        <img
          src="/main.jpeg"
          className="lg:h-screen lg:w-screen lg:object-cover md:object-contain"
        />
      </div>
      <Navbar />
      <h1 className="text-3xl text-center m-5">Kiw Trio</h1>
      <Videos />
    </Layout>
  );
};

export default Index;
