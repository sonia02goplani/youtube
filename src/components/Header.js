import React from "react";
import youtubeIcon from "../assets/icons/youtube.png";
import menuIcon from "../assets/icons/menu.png";
import avatarIcon from "../assets/icons/woman.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SearchCard from "./SearchCard";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 items-center justify-start gap-2">
        <img
          src={menuIcon}
          alt="logo"
          className="h-4 cursor-pointer"
          onClick={() => toggleMenuBar()}
        />
        <div className="flex items-center gap-2">
          <img src={youtubeIcon} alt="logo" className="h-8" />
          <h1>YOUTUBE</h1>
        </div>
      </div>
        <SearchCard/>
      <div className="flex col-span-1 justify-end">
        <img src={avatarIcon} alt="logo" className="h-8" />
      </div>
    </div>
  );
};

export default Header;
