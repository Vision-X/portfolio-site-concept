import React, { Component } from 'react';
import redTag from './red-tag-opaque4.png';

class Home extends Component {
  render() {
    return (
      <section>
        <h2>"WEBSITE"</h2>
        <img src={redTag} className="red-tag"></img>
      </section>
    )
  }
};

export default Home;
