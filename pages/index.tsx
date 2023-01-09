import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <div>
      <div>
        <img
          src="/main.jpeg"
          className="lg:h-screen lg:w-screen lg:object-cover md:object-contain"
        />
      </div>
      <Layout>
        <div className="p-10">
          <div className="text-center mb-5 space-y-2">
            <p className="text-xl">WATCH</p>
            <p className="text-xl">"Litrgia"</p>
            <p className="text-xl">From our upcoming release!</p>
          </div>
          <iframe
            className="w-5/6 mx-auto aspect-video"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
