import { Videos } from "../components/Index/Videos";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";

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
      <div className="p-12">
        <div className="text-center mb-5">
          <h2 className="text-xl">WATCH</h2>
          <h2 className="text-xl">"Litúrgia"</h2>
          <h2 className="text-xl">From our upcoming release!</h2>
        </div>
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/sc88ygob9RQ"}
          title={"YouTube video player"}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Index;
