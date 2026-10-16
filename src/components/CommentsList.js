import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_URL } from "../utils/constants";
import CommentCard from "./CommentCard";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsOnVideo();
  }, []);

  const getCommentsOnVideo = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_URL + videoId);
    const json = await data.json();
    setComments(json?.items);
  };
  if (!comments.length) return null;
  return (
    <div className="my-5 h-[300px] overflow-y-scroll">
      <h3 className="font-bold mx-4">  💬 {comments.length}</h3>
      {comments.map((comment) => (
        <CommentCard commentInfo={comment} key={comment?.id} />
      ))}
    </div>
  );
};

export default CommentsList;
