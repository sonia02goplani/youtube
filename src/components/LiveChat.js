import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomData } from "../utils/helper";
import {createMessage} from "../utils/chatSlice";

const LiveChat = () => {
  const[liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");
      dispatch(addMessages(generateRandomData()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className=" ml-2 p-2 h-[600px] w-full border-black-500 border-2 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.length === 0 && (
          <h1 className="text-center font-bold text-xl">No Messages</h1>
        )}
        {chatMessages.length > 0 &&
          chatMessages.map((c, index) => (
            <ChatMessages name={c.name} message={c.message} key={index} />
          ))}
      </div>
      <form
        className="flex w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createMessage({ name: "Sonia", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className=" w-full border-2 border-black-500 p-2 rounded-lg"
          type="text"
          value={liveMessage}
          placeholder="Type a message"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-500 p-2 rounded-lg m-2">
          Send Message
        </button>
      </form>
    </>
  );
};

export default LiveChat;
