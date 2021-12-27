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
            <Hexagon color="hexgreen" troops="2" content="tree" />
            <Hexagon color="hexgreen" troops="2" content="farm" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
            <Hexagon color="hextransparent" />
          </div>
          <div className="roweven">
            <Hexagon color="hextransparent" />
            <Hexagon color="hexgreen" troops="2" content="city" />
            <Hexagon color="hexgreen" content="empty" />
            <Hexagon color="hexgreen" troops="2" content="minerials" />
            <Hexagon color="hexgreen" content="rock" />
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
      <div className="panel">
        <div className="timer">
          <div className="labeltimer">Timer:</div>
          <div className="playerLabel">Jogador1:</div>
          <div className="playerinfo">5:00</div>
          <div className="playerLabel">Jogador2:</div>
          <div className="playerinfo">5:00</div>
        </div>
        <div className="phaseItem">
          <div className="faselabel">Fase Atual:</div>
          <div className="fasedisc">Posicionamento</div>
        </div>
        <div className="InfoCard">
          <div className="faselabel">Info:</div>
          todo
        </div>
                <div className="chatCard">
          <div className="faselabel">Chat:</div>
          todo
        </div>
      </div>
    </div>
  );
}

export default Board;
