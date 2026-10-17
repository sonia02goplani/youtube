import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard ,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchQuery = useSelector((store) => store.search.currentQuery);
  useEffect(() => {
    if (searchQuery !== "") {
      searchVideos();
    } else
    getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_URL);
      const json = await data.json();
      setVideos(json.items);
  

  
  };
  const searchVideos= async() => {
      const searchResults = await fetch(
        YOUTUBE_SEARCH_URL + "&q=" + searchQuery
      );
      const json = await searchResults.json();
      json.items.map((item) => {
        if (item.id.kind === "youtube#video") {
          item.id = item.id.videoId;
        }
      });
      setVideos(json.items);

    
  } 
  if(videos.length===0) return <Shimmer />;
  return (
    <div className="flex flex-wrap">
    <AdVideoCard info={videos[0]} key={videos[0]?.id} />
      {videos.map((video) => (
       <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={video.id} /></Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
