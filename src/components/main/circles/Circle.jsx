import React from "react";
import "./Circle.css";
import Empty from "./Empty";
import Terrain from "./Terrain";
import Both from "./Both";
import Troop from "./Troop";

function Circle(props) {
  return (
    <div className="hexcircle">
      {props.troops > 0 && props.content === "empty" ? (
        <Troop troops={props.troops} />
      ) : props.troops > 0 ? (
        <Both content={props.content} troops={props.troops} />
      ) : props.content == "empty" ? (
        <Empty />
      ) : (
        <Terrain content={props.content} />
      )}
    </div>
  );
}

export default Circle;
