import React from "react";

const FinalStatics = () => {
  return (
    <div className="bg-white p-5" >
        <div>
        <button
          style={{
            backgroundColor: "rgba(25, 34, 82, 0.12)",
            color: "#192252",
            fontWeight: "700",
          }}
          className="btn "
        >
          Model
        </button>
        <button
          style={{ color: "#848FAC", fontWeight: "700" }}
          className="btn mx-4"
        >
          Style
        </button>
      </div>
      <div className="mt-5" >
         <div className="d-flex">
            <div style={{border:"1px solid #000"}} className="d-flex text-center px-4">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            <div className="d-flex">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            <div className="d-flex">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            <div className="d-flex">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            
         </div>
      </div>
    </div>
  );
};

export default FinalStatics;


{/* <td className="d-flex justify-content-between" > <span>Team</span> <span>League</span> <span>Season</span>  <span>Minutes</span> </td>
            <td><span>Ball Progression</span> <span>Short Creation</span> <span>Set-Plays</span> <span>Ball Retention</span></td>
            <td>Defending Impact Defending Frequency</td>
            <td>Off Def Total</td> */}