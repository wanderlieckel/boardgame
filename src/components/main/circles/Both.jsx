import React from "react";
import city from "./assets/castle_large.png";
import "./Circle.css";

// import { Container } from './styles';

function Both(props) {
  return (
    <>
      {props.content === "city" && (
        <img className="cityImg" src={city} alt="city" />
      )}
    </>
  );
}

export default Both;
