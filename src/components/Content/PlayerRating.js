import React from "react";
import RatingArea from "./RatingArea";

const PlayerRating = () => {
  return (
    <div style={{ width: "1250px" }} className="p-5 bg-white mt-4 ">
      <div>
        <button
          style={{
            backgroundColor: "rgba(25, 34, 82, 0.12)",
            color: "#192252",
            fontWeight: "700",
          }}
          className="btn "
        >
          Dual Rating
        </button>
        <button
          style={{ color: "#848FAC", fontWeight: "700" }}
          className="btn mx-4"
        >
          Finish/Saving
        </button>
      </div>
      <RatingArea/>
    </div>
  );
};

export default PlayerRating;
