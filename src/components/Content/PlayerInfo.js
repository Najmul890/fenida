import React from "react";
import playerImg from "../../assets/player.png";

const PlayerInfo = () => {
  return (
    <div class="card border-0 px-5 py-3">
      <div className="px-5 pt-5 text-center">
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
            border: "10px solid #EDF1FD",
          }}
          src={playerImg}
          class="card-img-top"
          alt="..."
        />
        <h3
          style={{
            color: "#192252",
            fontSize: "28px",
            fontWeight: "700",
            marginTop: "30px",
          }}
        >
          Lionel Messi
        </h3>
        <p style={{ color: "#848FAC" }}>Paris Saint Germain</p>
      </div>
      <hr />

      <div class="card-body">
        <div className="player-info">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td className="left">Height</td>
                <td className="middle">:</td>
                <td className="right">170 cm</td>
              </tr>
              <tr>
                <td className="left">Weight</td>
                <td className="middle">:</td>
                <td className="right">72 kg</td>
              </tr>
              <tr>
                <td className="left">Age</td>
                <td className="middle">:</td>
                <td className="right">35</td>
              </tr>
              <tr>
                <td className="left">Foot</td>
                <td className="middle">:</td>
                <td className="right">Left</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="mt-3" >
        <div class="input-group mb-3">
          
          <select class="form-select" id="inputGroupSelect01">
            <option selected>CAM/SS</option>
            <option value="1">test</option>
           
          </select>
          </div>
          <div class="input-group mb-3">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>2022/23</option>
            <option value="1">test</option>
            
          </select>
          </div>
          <div class="input-group mb-3">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>League 1</option>
            <option value="1">test</option>
            
          </select>
          </div>
          <div class="input-group mb-3">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Paris Saint Germain</option>
            <option value="1">test</option>
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
