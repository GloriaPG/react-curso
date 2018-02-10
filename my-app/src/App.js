import React, { Component } from 'react';
import Perrito from './Perrito'
import Change from './Change'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.state = {
      color: 'Cafe',
      title: 'Hola soy un cambio'
    }

  }
  handleChangeColor = () =>{
     this.setState({color: 'Negro'});
  }
  handleChangeTitle = text =>{
     this.setState({title: text})
  }
  componentWillMount(){
    console.log("Estado de precarga.");
  }
  render() {
    console.log("Render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Perrito name="Gloria" color={this.state.color} change={this.handleChangeTitle}/>
          <button onClick={this.handleChangeColor}>Cambio de color</button>
        </header>
        <Change title={this.state.title}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount(){
    console.log("Ya fue montado");
  }
}

export default App;
