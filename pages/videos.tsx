import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { videos } from "../data/videos";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<number>(0);
  return (
    <Layout>
      <Navbar />
      <div className="mt-10 bg-darkperi py-8 text-white" id="selectedVideo">
        <iframe
          className="w-auto obect-contain mx-auto border-darkbluegray border-4 rounded-sm md:w-4/6 md:h-72 lg:h-96 xl:h-screen xl:w-5/6"
          src={videos.videos[selectedVideo].src}
          title={videos.videos[selectedVideo].title}
        ></iframe>
        <h2 className="text-2xl text-center p-5 font-bold">
          {videos.videos[selectedVideo].title}
        </h2>
        <p className="text-lg text-center px-2 md:w-5/6 md:mx-auto">
          {videos.videos[selectedVideo].description}
        </p>
      </div>
      <h1 className="text-5xl text-center p-5 mt-10">All videos</h1>
      <div className="lg:flex lg:flex-wrap">
        {videos.videos.map((video, index) => {
          const videoId: string = video.src.substring(
            video.src.lastIndexOf("/") + 1
          );
          return (
            <a
              className="flex flex-col p-4 mb-8 hover:cursor-pointer md:flex-row lg:w-1/2"
              onClick={() => setSelectedVideo(index)}
              href="#selectedVideo"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                className="rounded-md md:w-1/3 lg:w-1/3"
              />
              <div className="pt-4 md:pt-0 md:px-4 ">
                <h2 className="text-2xl font-bold">
                  {videos.videos[selectedVideo].title}
                </h2>
                <p className="text-lg py-2">
                  {videos.videos[selectedVideo].description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </Layout>
  );
};
export default Videos;
