import React, { Component } from 'react';
import redTag from './red-tag-opaque4.png';
import ContentBlock from './ContentBlock.jsx';

class Home extends Component {
  render() {
    return (
      <section>
        <h2>"WEBSITE"</h2>
        <img src={redTag} className="red-tag"></img>
        <ContentBlock title="ABOUT" description="SUPPP" resource="FACK" />
        <ContentBlock />
        <ContentBlock />
      </section>
    )
  }
};

export default Home;
