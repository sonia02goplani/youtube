import React from "react";
import Buttton from "./Buttton";

const list = ["All", "Live", "Music", "Cooking", "Cricket", "Movies"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Buttton key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
