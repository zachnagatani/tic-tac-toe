import { combineReducers } from 'redux';
import currentPlayer from './changePlayer';
import ownedSquares from './ownedSquares';
import numOfTurns from './turns';
import winner from './winStatus';

const initialState = {
        currentPlayer: 'x',
        numOfTurns: 0,
        ownedSquares: {
            x: [],
            o: []
        },
        winner: null
    },
      ticTacToe = combineReducers({
        currentPlayer,
        ownedSquares,
        numOfTurns,
        winner
    });

export default ticTacToe;