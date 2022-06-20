import { data } from "../../data";
const Videos = () => {
  return (
    <div className="flex overflow-auto snap-x remove-scrollbar justify-center snap-center">
      {data.videos.map((video) => {
        return (
          <div className="snap-center">
            <iframe
              className="w-auto obect-contain"
              src={video.src}
              title={video.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
