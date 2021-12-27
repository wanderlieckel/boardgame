import React from "react";
import "./Hexagon.css";
import Circle from "./circles/Circle"


function Hexagon(props) {


  return(

  <div className={"hexagon "+props.color}>
  
    {props.color==="hextransparent"?(<></>):(
        <Circle troops={props.troops} content = {props.content}/>
    )}
  
  </div>

  )
}

export default Hexagon;
