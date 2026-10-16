import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard ,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
    <AdVideoCard info={videos[0]} key={videos[0]?.id} />
      {videos.map((video) => (
       <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={video?.id} /></Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
