import React from 'react';
import Square from '../Square/Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            square1Owner: null,
            square2Owner: null,
            square3Owner: null,
            square4Owner: null,
            square5Owner: null,
            square6Owner: null,
            square7Owner: null,
            square8Owner: null,
            square9Owner: null
        };

        this.mapOwnedSquares = this.mapOwnedSquares.bind(this);
        this.claimSquare = this.claimSquare.bind(this);
        this.checkWinLoop = this.checkWinLoop.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    /**
     * Sets the property on the state for each corresponding square if it is owned by a player
     */
    mapOwnedSquares() {
        const squareIDs = ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9'];

        squareIDs.forEach(ID => {
            if (this.props.xOwnedSquares.includes(ID)) {
                let newStateSlice = {};
                newStateSlice[ID + 'Owner'] = 'X';
                this.setState(newStateSlice);
            } else if (this.props.oOwnedSquares.includes(ID)) {
                let newStateSlice = {};
                newStateSlice[ID + 'Owner'] = 'O';
                this.setState(newStateSlice);
            }
        });
    }

    /**
     * Fired when a player clicks a square. Dispatches the appropriate actions
     * to the Redux store to switch the game to the next player
     * @param {string} squareID - The ID of the square being claimed
     */
    claimSquare(squareID) {
        this.props.claimSquare(this.props.currentPlayer, squareID);
        this.props.changePlayer();
        this.props.incrementTurnCounter();
        // TODO: figure out better way to handle redux store update async nature
        setTimeout(this.mapOwnedSquares, 1);
        setTimeout(this.checkWin, 1);
    }

    /**
     * Checks to see if a specific player has won the game. This gets called twice by checkWin each turn
     * @returns {string} The winner, if one is found
     * @param  {string} player - Either 'x' or 'o', denoting the player to check
     */
    checkWinLoop(player) {
        const arr = player === 'x' ? this.props.xOwnedSquares : this.props.oOwnedSquares,
              winConditions = [
                  ['square1', 'square2', 'square3'],
                  ['square4', 'square5', 'square6'],
                  ['square7', 'square8', 'square9'],
                  ['square1', 'square4', 'square7'],
                  ['square2', 'square5', 'square8'],
                  ['square3', 'square6', 'square9'],
                  ['square1', 'square5', 'square9'],
                  ['square3', 'square5', 'square7'],
              ];

        for (let i = 0; i < winConditions.length; i++) {
            let winner;

            for (let j = 0; j < winConditions[i].length; j++) {
                if (!arr.includes(winConditions[i][j])) {
                    winner = null;
                    break;
                }
            }

            if (winner === undefined) {
                winner = player;
                return winner;
            }
        }
    }

    /**
     * Checks for a tie or a winner, and dispatches the appropriate action
     * to the Redux store if necessary. this.resetGame is then called,
     * which resets the entire game back to its original state
     */
    checkWin() {
        if (this.props.numOfTurns === 9) {
            this.props.declareWinner('TIE');
            setTimeout(this.resetGame, 3000);
            return;
        }

        if (this.checkWinLoop('x')) {
            this.props.declareWinner('x');
            setTimeout(this.resetGame, 3000);
        } else if (this.checkWinLoop('o')) {
            this.props.declareWinner('o');
            setTimeout(this.resetGame, 3000);
        }

        return;
    }

    /**
     * Resets the game after its over
     */
    resetGame() {
        this.props.resetPlayer();
        this.props.resetTurnCounter();
        this.props.resetOwnedSquares();
        this.props.resetWinStatus();
        this.setState({
            square1Owner: null,
            square2Owner: null,
            square3Owner: null,
            square4Owner: null,
            square5Owner: null,
            square6Owner: null,
            square7Owner: null,
            square8Owner: null,
            square9Owner: null
        });
    }

    render() {
        return (
            <main className="board">
                <Square squareID="square1" owningPlayer={this.state.square1Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square2" owningPlayer={this.state.square2Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square3" owningPlayer={this.state.square3Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square4" owningPlayer={this.state.square4Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square5" owningPlayer={this.state.square5Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square6" owningPlayer={this.state.square6Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square7" owningPlayer={this.state.square7Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square8" owningPlayer={this.state.square8Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square9" owningPlayer={this.state.square9Owner} claimSquare={this.claimSquare}></Square>
            </main>
        );
    }
};