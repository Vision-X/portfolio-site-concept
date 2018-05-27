import React, { Component } from 'react';
import redTag from './red-tag-opaque4.png';
import ContentBlock from './ContentBlock.jsx';

class Home extends Component {
  render() {
    return (
      <section>
        <h2>"WEBSITE"</h2>
        <img src={redTag} className="red-tag"></img>
        <ContentBlock title="ABOUT" description="ABOUT M.M." type="WEBPAGE" />
        <ContentBlock title="PROJECTS" description="PROJECTS for M.M." type="WEBPAGE" />
        <ContentBlock title="CONTACT" description="CONTACT M.M." type="WEBPAGE" />
      </section>
    )
  }
};

export default Home;
