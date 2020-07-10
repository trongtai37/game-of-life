import React, { Component } from 'react';
import FunctionalButtons from './FunctionalButtons';
import Board from './Board';
import board from '../data/boardInit';

interface GameBoardState {
  board: boolean[][];
  generation: number;
  isStarted: boolean;
  isStopped: boolean;
  isReseted: boolean;
}

export default class GameBoard extends Component<{}, GameBoardState> {
  private timeIntervalId: any;

  constructor(props: any) {
    super(props);
    this.state = {
      generation: 0,
      board,
      isStarted: false,
      isStopped: false,
      isReseted: false,
    };
  }

  processNextGeneration = () => {
    const generateNextBoardFrom = (board: boolean[][]) => {
      const nextGeneration = new Array(10)
        .fill(false)
        .map((row) => new Array(10).fill(false));

      const incrementX = [-1, -1, -1, 0, 0, 1, 1, 1];
      const incrementY = [-1, 0, 1, -1, 1, -1, 0, 1];

      board.forEach((row, i) => {
        row.forEach((_, j) => {
          let count = 0;
          for (let k = 0; k < 8; k++) {
            let mapX = i + incrementX[k];
            let mapY = j + incrementY[k];
            if (
              mapX >= 0 &&
              mapX < 10 &&
              mapY >= 0 &&
              mapY < 10 &&
              board[mapX][mapY]
            )
              count++;
          }

          if (count === 3) nextGeneration[i][j] = true;
          else if (count === 2) nextGeneration[i][j] = board[i][j];
          else nextGeneration[i][j] = false;
        });
      });

      return nextGeneration;
    };

    this.setState((prevState) => ({
      board: generateNextBoardFrom(prevState.board),
      generation: prevState.generation + 1,
      isStarted: true,
      isStopped: false,
      isReseted: false,
    }));
  };

  handleStart = () => {
    this.timeIntervalId = setInterval(() => {
      this.processNextGeneration();
      console.log('Generating...');
    }, 1000);
  };

  handleStop = () => {
    clearInterval(this.timeIntervalId);
    this.setState({
      isStarted: false,
      isStopped: true,
      isReseted: false,
    });
  };

  handleReset = () => {
    this.handleStop();
    this.setState({
      generation: 0,
      board,
      isStarted: false,
      isStopped: false,
      isReseted: true,
    });
  };

  render() {
    return (
      <>
        <div className="information">
          <h1>Generation: {this.state.generation}</h1>
        </div>
        <FunctionalButtons
          isStarted={this.state.isStarted}
          isStopped={this.state.isStopped}
          isReseted={this.state.isReseted}
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleReset={this.handleReset}
        />
        <Board board={this.state.board} />
      </>
    );
  }
}
