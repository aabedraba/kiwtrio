const Index = () => {
  return (
    <div className="flex flex-col bg-blue-100">
      <div>
        <img src="/main.jpeg" className="lg:h-screen lg:w-screen lg:object-cover md:object-contain" />
      </div>
      <div className="mx-auto w-4/5">
        <ul className="flex justify-evenly">
          <li>Fotos</li>
          <li>Videos</li>
          <li>Tienda</li>
          <li>Jazz</li>
          <li>More jazz</li>
        </ul>
      </div>
      <div>
        <h1 className="text-center text-5xl">Kiw Trio</h1>
      </div>

      <div className="flex overflow-auto snap-x gap-6 remove-scrollbar">
        <div className="md:ml-[50%] snap-center">
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
        <div className="snap-center">
          <iframe
            height="315"
            width="560"
            src="https://www.youtube.com/embed/sc88ygob9RQ"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Index;
