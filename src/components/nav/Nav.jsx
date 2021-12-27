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

        <div className="perfilitem todoublemargin">
          <div className="perfilname">IDIONOT</div>
          <img src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" alt="Face" />
          <div className="perfilmmr">MMR:1500</div>
          <div className="perfilCoins">Coins:0</div>
        </div>

      </ul>
    </div>
  );
}

export default Nav;
