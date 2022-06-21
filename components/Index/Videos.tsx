import { data } from "../../data";
export const Videos = () => {
  return (
    <div className="h-screen flex overflow-auto snap-x remove-scrollbar justify-center snap-center">
      {data.videos.map((video) => {
        return (
          <div className="snap-center">
            <iframe
              className="w-full aspect-video"
              src={video.src}
              title={video.title}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
