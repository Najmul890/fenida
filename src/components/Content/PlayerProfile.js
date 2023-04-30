import React from "react";

const PlayerProfile = () => {
  return (
    <div style={{width:"500px"}} className="p-5 bg-white">
      <div>
        <button
          style={{
            backgroundColor: "rgba(25, 34, 82, 0.12)",
            color: "#192252",
            fontWeight: "700",
          }}
          className="btn "
        >
          Profile
        </button>
        <button
          style={{ color: "#848FAC", fontWeight: "700" }}
          className="btn "
        >
          Position
        </button>
      </div>
      <div className="mt-5" >
        <table class="table">
          <tbody>
            <tr>
              <td>Team</td>

              <td>Paris Saint Germain</td>
            </tr>
            <tr>
              <td className="py-3" >Position</td>

              <td className="py-3" >CAM/SS</td>
            </tr>
            <tr>
              <td className="py-3" >Minutes</td>

              <td className="py-3" >633</td>
            </tr>
            <tr>
              <td className="py-3" >Rating</td>

              <td className="py-3" >High Performer</td>
            </tr>
            <tr>
              <td className="py-3" >Model Reliability</td>

              <td className="py-3"  style={{color:"#721C24", fontWeight:"500"}} >Medium</td>
            </tr>
            <tr>
              <td className="py-3" >GBE Points </td>

              <td className="py-3" >47/15</td>
            </tr>
            <tr>
              <td className="py-3" >Non-Penalty Goals <span> (Position) </span> </td>

              <td className="py-3" >4</td>
            </tr>
            <tr>
              <td className="py-3" >Non-Penalty Goals <br/><span>   (All Position) </span> </td>

              <td className="py-3" >7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerProfile;
