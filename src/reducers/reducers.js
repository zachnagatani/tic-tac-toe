import { combineReducers } from 'redux';
import currentPlayer from './currentPlayer';
import ownedSquares from './ownedSquares';
import numOfTurns from './turns';
import winner from './winStatus';

const ticTacToe = combineReducers({
    currentPlayer,
    ownedSquares,
    numOfTurns,
    winner
});

export default ticTacToe;