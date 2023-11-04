import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="CodeMagz-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signupone">SignUpOne</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/signupemail">SignUpEmail</Link>
        </li>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/desktop187">Desktop187 Screen</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
        <li>
          <Link to="/Channels">Channels</Link>
        </li>
        <li>
          <Link to="/desktop190">Desktop190</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/detailsone">DetailsOne</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
        <li>
          <Link to="/desktop191">Desktop191</Link>
        </li>
        <li>
          <Link to="/desktop179">Desktop179</Link>
        </li>
        <li>
          <Link to="/desktop180">Desktop180</Link>
        </li>
        <li>
          <Link to="/desktop181">Desktop181</Link>
        </li>
        <li>
          <Link to="/desktop182">Desktop182</Link>
        </li>
        <li>
          <Link to="/desktop192">Desktop192</Link>
        </li>
        <li>
          <Link to="/desktopthirtysix">DesktopThirtySix</Link>
        </li>
        <li>
          <Link to="/desktop193">Desktop193</Link>
        </li>
        <li>
          <Link to="/MyChannels">MyChannels</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
