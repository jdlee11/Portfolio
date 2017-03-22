import React from "react";

const MainBody= React.createClass({
  render: function(){
    console.log("body rendered");
    return (
      <div className="body">
        <p className="name">"Hello World!"</p>
      </div>
    )
  }
});

export default MainBody;
