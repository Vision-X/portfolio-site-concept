import React, { Component } from 'react';

class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block">
        {console.log(this.props.title)}
        <h2>"TITLE": {this.props.title}</h2>
        <br />
        <h3>"DESCRIPTION": {this.props.description}</h3>
        <br />
        <h3>"TYPE": {this.props.type}</h3>
      </div>
    );
  }
};

export default ContentBlock;
