import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2024/04/18/07/22/ai-generated-8703686_1280.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2017/02/01/12/13/grip-2030010_640.png",
  },
  paper: {
    name: "Paper",
    img: "https://cdn.pixabay.com/photo/2013/07/12/15/36/hand-150172_1280.png",
  },
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ""
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice)
    });
    
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  
  judgement = (user, computer)=>{
    if(user.name === computer.name){
      return "tie"
    }else if(user.name === "Rock")return computer.name==="Scissors"?"win":"lose"
    else if(user.name === "Paper")return computer.name==="Rock"?"win":"lose"
    else if(user.name === "Scissors")return computer.name==="Paper"?"win":"lose"
  }

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <div className="main2">
            <button type="button" className="btn btn-warning size" onClick={() => this.play("scissors")}>가위</button>
            <button type="button" className="btn btn-warning size" onClick={() => this.play("rock")}>바위</button>
            <button type="button" className="btn btn-warning size" onClick={() => this.play("paper")}>보</button>
          </div>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
      </div>
    );
  }
}
