import React from 'react';
import Profile from './profile';
import Project from './project';

const MainBody= React.createClass({
  render: function(){
    return (
      <div className="main-body">
        <Profile name="James"/>
        <Project
          projectName="Cookit"
          linkTo="https://jlee-cookit.surge.sh/#/recipes"
        />
        <Project
          projectName="To-do List"
          linkTo="http://www.google.com"
        />
        <Project
          projectName="Messager App"
          linkTo="http://www.google.com"
        />
      </div>
    )
  }
});

export default MainBody;
