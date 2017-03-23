import React from 'react';

const Project = React.createClass({
  render: function(){
    return (
      <div className="project-container">
        <a target="_blank" href={this.props.linkTo}>{this.props.projectName}</a>
      </div>
    )
  }
});

export default Project;
