import React from 'react';
import "./Circle.css"
import Empty from  "./Empty"
import Terrain from  "./Terrain"
import Both from  "./Both"
import Troop from  "./Troop"

function Circle(props) {

  return <div className="hexcircle">

    {props.troops > 0 && props.content === "empty"?(<Troop />):(props.troops > 0 ?(<Both content={props.content} />):(props.content == "empty"?(<Empty />):(<Terrain />)))}


  </div>
}

export default Circle;