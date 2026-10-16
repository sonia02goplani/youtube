import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
    return (
    <div className="col-span-2 p-5 shadow-lg w-48">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li></li>
        <li>Music</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li></li>
        <li>Music</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
