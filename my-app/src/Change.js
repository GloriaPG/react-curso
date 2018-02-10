import React, { Component } from 'react';


class Change extends Component {
  componentWillMount(){
    console.log("Estado de precarga.");
  }
  render() {
    console.log("Render");
    return (
      <div>
      Change : {this.props.title}
      </div>
    );
  }

  componentDidMount(){
    console.log("Ya fue montado");
  }
}

export default Change;


