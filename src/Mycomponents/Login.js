import React from "react";

import "./Login.css";
import profile from "../imge/profile.jpg";
import email from "../imge/email.png";
import pass from "../imge/password.png";

export default function login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="image">
            <div className="container-images">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <div>
              <h1>Login</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="passw" />
                <input type="text" placeholder="password" className="name" />
              </div>
              <button className="btn">Login</button>
            </div>
            <p className="sudo">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
