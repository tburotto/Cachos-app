import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './Components/Dice'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      roll: false,
      dices: []
    }
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  roll(){
    let newDices = []
    this.state.dices.map((element)=> {
      let r = this.getRndInteger(1,6)
      newDices.push(r)
    })
    this.setState({dices: newDices})
  }
  render() {
    return (
      <div className="App">
        <div >
          <br />
          <br/>
        <div className="add row">
                {this.state.dices.map((elemento)=> <Dice className="dado" info={elemento} /> )}
            </div>
        </div>

        <div className="fixed-bottom"> <div className="btn btn-info" onClick={()=>this.roll()}> Roll</div>
          <div className="add float-right">
            <button className="btn btn-info btn-circle" onClick={() => this.setState({ dices: [...this.state.dices, 1]})}> + </button>
            <button className="btn btn-info btn-circle" onClick={this.state.dices.length>= 2  ? () => this.setState({dices: this.state.dices.slice(0,-1) }) : null}> - </button>
          </div></div>
      </div>
    );
  }
}

export default App;
