import React from "react";
import PlayerInfo from "./PlayerInfo";
import PlayerStatics from "./PlayerStatics";
import FinalStatics from "./FinalStatics";

const Content = () => {
  return (
    <div>
      <div className="p-5 bg-light d-flex">
        <div>
          <PlayerInfo />
        </div>
        <div>
          <PlayerStatics />
        </div>
      </div>
      
    </div>
  );
};

export default Content;
