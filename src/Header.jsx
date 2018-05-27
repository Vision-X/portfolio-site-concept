import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this._onHover = this._onHover.bind(this);
  }

  _onHover = (event) => {
    let menu = document.getElementById("menu");
    console.log(menu);
    menu.setAttribute("display", "block");
  }

  render() {
    return (
      <header>
        <div className="header-text-block">
        {/*  <small>"HEADER"</small> */}
          <h1>Off-White<sup>TM</sup> for MICHAEL MARLOW</h1>
          <h1>"PORTFOLIO SITE"</h1>
          <h1>Denver, Colorado USA</h1>
          <h1>c. 1983</h1>
        </div>
        <nav>
          <select>
            <option defaultValue>Off-White</option>
            <option>Off-Black</option>
          </select>

          <nav className="drop">
            <svg onMouseOver={this._onHover} className="menu-icon"></svg>
            <ul id="menu">
              <li><a href="">"ABOUT"</a></li>
              <li><a href="">"PROJECTS"</a></li>
              <li><a href="">"CONTACT"</a></li>
            </ul>
          </nav>

        </nav>
      </header>
    )
  }
}

export default Header;
