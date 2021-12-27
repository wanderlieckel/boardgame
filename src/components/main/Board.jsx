import React from "react";
import "./Board.css";
import Hexagon from "./Hexagon";

function Board() {
  return (
    <div className="board">
      <div className="table">
        <div className="spotcontent">
          <div className="rowodd ">
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen"  troops="2" content="tree"  />
            <Hexagon color="hexgreen"  troops="2" content="farm"  />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="roweven">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" troops="2" content="city" />
            <Hexagon color="hexgreen"  content="empty" />
            <Hexagon color="hexgreen"  troops="2"  content="minerials"/>
            <Hexagon color="hexgreen"   content="rock"/>
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="rowodd">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="roweven">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="rowodd">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="roweven">
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="rowodd">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="roweven">
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="rowodd">
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hexgreen" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
        </div>
      </div>
      <div className="panel"></div>
    </div>
  );
}

export default Board;
