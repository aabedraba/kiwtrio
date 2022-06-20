import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-center m-5">Kiw Trio</h1>
      <div className="mx-auto w-4/5">
        <ul className="flex justify-evenly mb-10">
          <li className="text-3xl">Fotos</li>
          <li className="text-3xl">Videos</li>
          <li className="text-3xl">Tienda</li>
          <li className="text-3xl">Jazz</li>
          <li className="text-3xl">More jazz</li>
        </ul>
      </div>

      <div className="flex overflow-auto snap-x remove-scrollbar">
        <div className="justify-center snap-center">
          <iframe
            className="w-auto obect-contain"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="snap-center">
          <iframe
            height="315"
            width="560"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="snap-center">
          <iframe
            height="315"
            width="560"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="snap-center">
          <iframe
            height="315"
            width="560"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
