import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" flex flex-col px-5 w-full">
      {/**
        * CommentList
        * CommentCard
        * SuggestionsList
    
    */}
      <div className="flex gap-5 ">
        <div className="w-[70%]">
          <iframe
            width={isMenuOpen ? "1080" : "1200"}
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>{" "}
        </div>

        {/* <div className="w-300">
        <SuggestionsList />
      </div> */}
        <div className="w-[30%]">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsList videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
