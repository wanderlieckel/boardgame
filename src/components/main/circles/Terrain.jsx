import React from "react";
import city from "./assets/castle_large.png";
import "./Circle.css";
import tree from "./assets/treeRound_large.png";
import farm from "./assets/farmland.png";
import minerials from "./assets/crystals1.png";
import rock from "./assets/rockGrey_large.png";

function Terrain(props) {
  return (
    <>
      {props.content === "city" && (
        <>
          <img className="cityImg" src={city} alt="city" />
          
        </>
      )}
      {props.content === "tree" && (
        <>
          <div className="florest">
            <img className="treeimgone" src={tree} alt="tree" />
            <img className="treeimtwo" src={tree} alt="tree" />
            <img className="treeimthree" src={tree} alt="tree" />
          </div>
          
        </>
      )}
      {props.content === "farm" && (
        <>
          <img className="cityImg" src={farm} alt="farm" />
          
        </>
      )}
      {props.content === "minerials" && (
        <>
          <img className="cityImg" src={minerials} alt="farm" />
          
        </>
      )}

      {props.content === "rock" && (
        <>
          <img className="cityImg" src={rock} alt="rock" />
          
        </>
      )}
    </>
  );
}

export default Terrain;
