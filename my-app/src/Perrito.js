import React, { Component } from 'react';


class Perrito extends Component {
  constructor(props){
   super(props);
   this.handleChnageTitle = this.handleChnageTitle.bind(this)
   this.state ={
    color:'cafe',
   }
  }
  componentWillMount(){
    console.log("Estado de precarga.");
  }

  handleChnageTitle = () => {
    this.props.change('Desde el componente perro hago un cambio')
  }
  render() {
    console.log("Render");
    return (
      <div>
        Hola soy {this.props.name} y mi color es {this.props.color}
        <button onClick={this.handleChnageTitle}>Change, change</button>
      </div>
    );
  }

  componentDidMount(){
    console.log("Ya fue montado");
  }
}

export default Perrito;

