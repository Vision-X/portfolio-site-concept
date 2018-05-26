import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-text-block">
        {/*  <small>"HEADER"</small> */}
          <h1>Off-White<sup>TM</sup> for MICHAEL MARLOW</h1>
          <h1>"PORTFOLIO SITE"</h1>
          <h1>Atlanta, Georgia USA</h1>
          <h1>c. 1983</h1>
        </div>
        <nav>
          <select>
            <option defaultValue>Off-White</option>
            <option>Off-Black</option>
          </select>
          <details>
          <summary><svg className="menu-icon"></svg></summary>
            <ul>
              <li><a href="">"ABOUT"</a></li>
              <li><a href="">"PROJECTS"</a></li>
              <li><a href="">"CONTACT"</a></li>
            </ul>
          </details>
        </nav>
      </header>
    )
  }
}

export default Header;
