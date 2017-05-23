import { combineReducers } from 'redux';
import currentPlayer from './currentPlayer';
import ownedSquares from './ownedSquares';
import numOfTurns from './turns';
import winner from './winStatus';
import gameStartStatus from './gameStartStatus';

const ticTacToe = combineReducers({
    currentPlayer,
    ownedSquares,
    numOfTurns,
    winner,
    gameStartStatus
});

export default ticTacToe;