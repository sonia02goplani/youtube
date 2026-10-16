import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
