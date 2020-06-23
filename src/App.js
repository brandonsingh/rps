import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js";

class Game extends Component {

  constructor () {
    super();
    this.signs = ["rock", "paper", "scissors"]
    this.state = {
      playerOne: "rock",
      playerTwo: "paper",
    };
  };

playGame = () => {
  this.setState({
    playerOne: this.signs[Math.floor(Math.random() * 3)],
    playerTwo: this.signs[Math.floor(Math.random() * 3)],
  });
};

  render() {
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div class="winner">Place winner here</div>
        <button type="button">Play the Game</button>
      </div>
    )
  }
}

export default Game;