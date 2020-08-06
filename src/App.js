import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ResultPanel from './component/ResultPanel'
import Keypad from './component/Keypad'

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  onButtonClick = button => {

    if (button === 'CLEAR') {
      this.resetResultPanel()
    }

    else if (button === '=') {
      this.calculateResult()
    }

    else if (button === 'BACKSPACE') {
      this.backspace()
    }

    else {

      this.setState(prevState => ({
        result: prevState.result + button
      }))

    }

  }

  resetResultPanel = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  calculateResult = () => {

    let checkValue;

    if (this.state.result.includes('--')) {
      checkValue = this.state.result.replace('--', '+')
    }
    else {
      checkValue = this.state.result
    }
    try {
      this.setState({
        result: (eval(checkValue) || "") + ""
      })
    }
    catch (e) {
      this.setState({
        result: "Error:Press CLEAR "
      })
    }

  }


  render() {
    return (
      <div>
        <div className="calculator-app">
          <h1>Calculator Using React</h1>
          <ResultPanel result={this.state.result} />
          <Keypad onButtonClick={this.onButtonClick} />
        </div>
        <h1>Follow me on <a href="https://in.linkedin.com/in/aniket-tikone-27808a138">Linkedin</a></h1>
      </div >
    );
  }
}

export default App;
