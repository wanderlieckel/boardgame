import React from "react";
import "./Nav.css";


function Nav() {
  return (
    <div className="nav">
      <ul>
        <div className="navlogo">Settlers and Knights</div>
        <li className="navitem">Play</li>
        <li className="navitem">Learn</li>

        <div className="navitem tomargin">
          <div className="navbutton">SIGN UP</div>
        </div>
        <div className="navitem tomargin">
          <div className="navbutton">
            LOGIN
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
